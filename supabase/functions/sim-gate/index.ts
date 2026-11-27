// Server-authoritative time limit for the online simulator demo.
//
// The simulator (public/sim/index.html) gives every visitor LIMIT seconds of
// free flight, then shows the lead form. Tracking that only in localStorage made
// it trivially resettable (incognito, "clear site data", another browser). This
// function records the elapsed active seconds per client IP, using the service
// role key injected by Supabase — so the budget is kept server-side and a
// storage reset from the same network no longer hands out a fresh demo.
//
// Request  (POST JSON): { active?: number, unlock?: boolean }
//   active  — active seconds the page counted since its last call (capped here)
//   unlock  — set once the visitor has submitted the lead form
// Response (JSON): { used, remaining, unlocked, limit }
//
// verify_jwt is off (see config.toml): the simulator calls it with only the
// public anon key. The table it writes has RLS on with no policy, so nothing
// but this function (service role) can read or forge usage rows.

const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

const LIMIT = 180; // seconds of free demo — keep in sync with GATE_LIMIT in /sim
const TICK_CAP = 30; // most seconds a single call is allowed to add

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

/** Best-effort client IP. Not spoof-proof, but defeats casual storage resets. */
function clientIp(req: Request): string {
  const h = req.headers;
  const ip = (
    h.get("cf-connecting-ip") ||
    h.get("x-real-ip") ||
    (h.get("x-forwarded-for") || "").split(",")[0] ||
    ""
  ).trim();
  return ip || "unknown";
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: CORS });

  // Fail open: a gate error must never take the simulator down. On any failure
  // we return remaining:null and the page falls back to its local counter.
  try {
    if (!SUPABASE_URL || !SERVICE_ROLE_KEY) throw new Error("runtime env missing");

    const body = await req.json().catch(() => ({}));
    const active = Math.max(0, Math.min(TICK_CAP, Math.round(Number(body?.active) || 0)));
    const unlock = body?.unlock === true;
    const ip = clientIp(req);

    const headers = {
      apikey: SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
      "Content-Type": "application/json",
    };
    const base = `${SUPABASE_URL}/rest/v1/simulator_usage`;

    const cur = await fetch(
      `${base}?ip=eq.${encodeURIComponent(ip)}&select=seconds_used,unlocked,updated_at`,
      { headers },
    );
    const rows: Array<{ seconds_used: number; unlocked: boolean; updated_at: string }> =
      cur.ok ? await cur.json() : [];
    const row = rows[0];

    const now = Date.now();
    let used = row?.seconds_used ?? 0;
    let unlocked = row?.unlocked ?? false;

    if (!unlocked) {
      // Never credit more wall-clock time than has actually passed since the
      // last call, so a page cannot inflate `active` to burn the demo faster
      // or (by never calling) avoid it.
      const wall = row
        ? Math.max(0, (now - new Date(row.updated_at).getTime()) / 1000)
        : TICK_CAP;
      used = Math.min(LIMIT, Math.round(used + Math.min(active, wall)));
    }
    if (unlock) unlocked = true;

    await fetch(`${base}?on_conflict=ip`, {
      method: "POST",
      headers: { ...headers, Prefer: "resolution=merge-duplicates,return=minimal" },
      body: JSON.stringify({
        ip,
        seconds_used: used,
        unlocked,
        updated_at: new Date(now).toISOString(),
      }),
    });

    return json({ used, remaining: Math.max(0, LIMIT - used), unlocked, limit: LIMIT });
  } catch (error) {
    return json({ error: String(error), remaining: null, unlocked: false, limit: LIMIT });
  }
});
