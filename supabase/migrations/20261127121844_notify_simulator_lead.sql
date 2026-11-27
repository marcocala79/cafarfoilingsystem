-- Email notification for new simulator leads.
--
-- Every INSERT on public.simulator_leads asks the notify-simulator-lead edge
-- function to send an email to contact@cafarfoilingsystem.com. The call is made
-- from the database with pg_net, never from the visitor's browser, so it cannot
-- be skipped or forged by tampering with the simulator page.
--
-- Only the lead id travels in the request: the edge function reads the row back
-- with the service role key and marks notified_at in the same statement, so the
-- endpoint needs no shared secret and each lead is emailed at most once.

-- 1. pg_net: lets Postgres perform the (asynchronous) HTTP call.
create extension if not exists pg_net;

-- 2. Bookkeeping column, also the de-duplication guard.
alter table public.simulator_leads
  add column if not exists notified_at timestamptz;

comment on column public.simulator_leads.notified_at is
  'When the lead notification email was sent. NULL = not notified yet.';

-- 3. The public insert policy lets anyone set any column, so make sure a
--    crafted insert cannot pre-fill notified_at and silence its own email.
create or replace function public.simulator_leads_clear_notified_at()
returns trigger
language plpgsql
as $$
begin
  new.notified_at := null;
  return new;
end;
$$;

drop trigger if exists simulator_leads_clear_notified_at on public.simulator_leads;
create trigger simulator_leads_clear_notified_at
  before insert on public.simulator_leads
  for each row execute function public.simulator_leads_clear_notified_at();

-- 4. Fire the edge function after the row is committed and visible.
create or replace function public.notify_simulator_lead()
returns trigger
language plpgsql
security definer
set search_path = net, extensions, public
as $$
begin
  perform http_post(
    url := 'https://fidxufctnsfqfxfrbdov.supabase.co/functions/v1/notify-simulator-lead',
    body := jsonb_build_object('lead_id', new.id),
    headers := '{"Content-Type": "application/json"}'::jsonb,
    timeout_milliseconds := 5000
  );
  return new;
exception
  when others then
    -- A notification problem must never cost us the lead itself.
    raise warning 'notify_simulator_lead failed for %: %', new.id, sqlerrm;
    return new;
end;
$$;

-- Stable owner: the migration runs under a temporary role, and SECURITY DEFINER
-- needs an owner that keeps the rights on the net schema.
alter function public.notify_simulator_lead() owner to postgres;
alter function public.simulator_leads_clear_notified_at() owner to postgres;

drop trigger if exists simulator_leads_notify on public.simulator_leads;
create trigger simulator_leads_notify
  after insert on public.simulator_leads
  for each row execute function public.notify_simulator_lead();
