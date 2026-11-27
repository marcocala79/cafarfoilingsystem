-- Read access to the leads, for the people on an explicit allowlist.
--
-- Until now both tables were write-only from the web: the public could INSERT
-- and nobody could SELECT, which is why the notification emails are sent by a
-- trigger with the service role rather than by the browser.
--
-- The /admin page needs to read them. Rather than loosening the tables, this
-- adds a single narrow door: a SELECT policy that requires an authenticated
-- session whose email address is listed in public.admin_emails. An anonymous
-- visitor, and any signed-in user who is not on the list, still sees nothing.

-- ---------------------------------------------------------------- allowlist
create table if not exists public.admin_emails (
  email      text primary key,
  note       text,
  created_at timestamptz not null default now()
);

alter table public.admin_emails enable row level security;

-- No policies on purpose: with RLS on and no policy, the table is invisible
-- through the API to every role except the service role. The allowlist is
-- read only by is_admin() below, which is SECURITY DEFINER and so bypasses it.

comment on table public.admin_emails is
  'Email addresses allowed to read the leads at /admin. Add a row to grant access, delete it to revoke.';

insert into public.admin_emails (email, note)
values ('contact@cafarfoilingsystem.com', 'CAFAR shared inbox')
on conflict (email) do nothing;

-- ------------------------------------------------------------------- helper
-- Reads the email out of the caller's JWT and checks it against the list.
-- SECURITY DEFINER so the policy can consult admin_emails without granting
-- anyone read access to the list itself.
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
      from public.admin_emails a
     where lower(a.email) = lower(nullif(auth.jwt() ->> 'email', ''))
  );
$$;

alter function public.is_admin() owner to postgres;

comment on function public.is_admin() is
  'True when the caller is signed in with an address listed in admin_emails.';

-- ------------------------------------------------------- replace any SELECT
-- Drop whatever SELECT policies exist today (contact_submissions ships with a
-- "No public read access" one; simulator_leads was created in the dashboard,
-- so its policy names are not known here) and put the admin policy in their
-- place. INSERT policies are left untouched: the public forms must keep
-- working.
do $$
declare p record;
begin
  for p in
    select tablename, policyname
      from pg_policies
     where schemaname = 'public'
       and tablename in ('contact_submissions', 'simulator_leads')
       and cmd = 'SELECT'
  loop
    execute format('drop policy %I on public.%I', p.policyname, p.tablename);
    raise notice 'dropped SELECT policy % on %', p.policyname, p.tablename;
  end loop;

  -- A FOR ALL policy would also cover SELECT and would quietly widen access.
  -- None is expected; shout if one shows up so it gets looked at.
  for p in
    select tablename, policyname
      from pg_policies
     where schemaname = 'public'
       and tablename in ('contact_submissions', 'simulator_leads')
       and cmd = 'ALL'
  loop
    raise warning 'FOR ALL policy % on % also grants SELECT - review it', p.policyname, p.tablename;
  end loop;
end $$;

create policy "Admins can read contact submissions"
  on public.contact_submissions
  for select
  to authenticated
  using (public.is_admin());

create policy "Admins can read simulator leads"
  on public.simulator_leads
  for select
  to authenticated
  using (public.is_admin());

-- --------------------------------------------------------------- joined view
-- One list for the page to read, newest first, with the two shapes squared up.
-- security_invoker means the view runs with the caller's own permissions, so
-- the policies above still apply - a view is not a way around them.
create or replace view public.leads_overview
with (security_invoker = true) as
select
  'simulator'::text as kind,
  l.id,
  l.created_at,
  nullif(btrim(concat_ws(' ', l.first_name, l.last_name)), '') as name,
  l.email,
  null::text        as company,
  l.contact_type,
  l.lang,
  l.message,
  l.page
from public.simulator_leads l
union all
select
  'contact'::text,
  c.id,
  c.created_at,
  nullif(btrim(c.name), ''),
  c.email,
  c.company,
  null::text,
  null::text,
  c.message,
  null::text
from public.contact_submissions c;

comment on view public.leads_overview is
  'Simulator leads and contact form messages in one list for /admin. Inherits the tables RLS.';

revoke all on public.leads_overview from anon;
grant select on public.leads_overview to authenticated;
