-- Move the contact form email server-side.
--
-- Until now the browser called send-contact-email after inserting the row: the
-- send could be skipped by tampering with the page, and when it failed only the
-- visitor's console knew. Now every INSERT on public.contact_submissions asks
-- the function to send the email, the same way simulator_leads already does.
--
-- Only the submission id travels in the request: the function reads the row back
-- with the service role key and marks notified_at in the same statement, so the
-- endpoint needs no shared secret and each message is emailed at most once.

create extension if not exists pg_net;

-- 1. Bookkeeping column, also the de-duplication guard.
alter table public.contact_submissions
  add column if not exists notified_at timestamptz;

comment on column public.contact_submissions.notified_at is
  'When the notification email was sent. NULL = not notified yet.';

-- Submissions received before this migration were emailed by the old browser
-- call; mark them so they can never be re-sent.
update public.contact_submissions
   set notified_at = created_at
 where notified_at is null;

-- 2. The public insert policy lets anyone set any column, so make sure a
--    crafted insert cannot pre-fill notified_at and silence its own email.
create or replace function public.contact_submissions_clear_notified_at()
returns trigger
language plpgsql
as $$
begin
  new.notified_at := null;
  return new;
end;
$$;

drop trigger if exists contact_submissions_clear_notified_at on public.contact_submissions;
create trigger contact_submissions_clear_notified_at
  before insert on public.contact_submissions
  for each row execute function public.contact_submissions_clear_notified_at();

-- 3. Fire the edge function after the row is committed and visible.
create or replace function public.notify_contact_submission()
returns trigger
language plpgsql
security definer
set search_path = net, extensions, public
as $$
begin
  perform http_post(
    url := 'https://fidxufctnsfqfxfrbdov.supabase.co/functions/v1/send-contact-email',
    body := jsonb_build_object('submission_id', new.id),
    headers := '{"Content-Type": "application/json"}'::jsonb,
    timeout_milliseconds := 5000
  );
  return new;
exception
  when others then
    -- A notification problem must never cost us the message itself.
    raise warning 'notify_contact_submission failed for %: %', new.id, sqlerrm;
    return new;
end;
$$;

alter function public.notify_contact_submission() owner to postgres;
alter function public.contact_submissions_clear_notified_at() owner to postgres;

drop trigger if exists contact_submissions_notify on public.contact_submissions;
create trigger contact_submissions_notify
  after insert on public.contact_submissions
  for each row execute function public.notify_contact_submission();
