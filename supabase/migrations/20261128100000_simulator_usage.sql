-- Per-IP free-demo time tracking for the online simulator.
--
-- The simulator gives every visitor 180 seconds of free flight before the lead
-- form appears. That countdown used to live only in the browser's localStorage,
-- so incognito, "clear site data" or a second browser reset it and the limit
-- never really held. This table moves the authority to the server: the sim-gate
-- edge function records elapsed active seconds keyed by client IP, so the budget
-- survives a storage reset from the same network/device.
--
-- Written ONLY by the sim-gate edge function with the service role key. RLS is
-- on with no policy, so (like admin_emails) the table is invisible through the
-- API to anon and authenticated; only the service role reaches it.

create table if not exists public.simulator_usage (
  ip           text primary key,
  seconds_used integer not null default 0,
  unlocked     boolean not null default false,
  updated_at   timestamptz not null default now(),
  created_at   timestamptz not null default now()
);

alter table public.simulator_usage enable row level security;

comment on table public.simulator_usage is
  'Per-IP free-demo time budget for the simulator. Written only by the sim-gate edge function (service role); RLS on + no policy = invisible to the public API.';
