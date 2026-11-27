// Sends an email to the CAFAR inbox for every new row in public.simulator_leads.
//
// Invoked server-side only, by the AFTER INSERT trigger on simulator_leads
// (see the notify_simulator_lead migration), never by the visitor's browser.
//
// The trigger posts only the lead's id. This function then reads the row with
// the service role key — injected into the runtime by Supabase, not stored in
// this repo — and claims it by setting notified_at in the same statement. So:
//   * the email content always comes from the database, never from the caller;
//   * each lead is emailed at most once, even if the endpoint is called again.
// That is what makes the endpoint safe to expose without a JWT.

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

const TO = "contact@cafarfoilingsystem.com";
const FROM = "CAFAR Simulator <noreply@cafarfoilingsystem.com>";

interface Lead {
  id: string;
  first_name: string | null;
  last_name: string | null;
  contact_type: string | null;
  email: string | null;
  message: string | null;
  lang: string | null;
  source: string | null;
  page: string | null;
  created_at: string | null;
}

/** Readable labels for the contact_type slugs used by the simulator gate. */
const CONTACT_TYPE_LABELS: Record<string, string> = {
  stampa: "Stampa / media",
  skipper: "Skipper / velista",
  cantiere: "Cantiere / costruttore",
  progettista: "Progettista / naval architect",
  organizzazione: "Organizzazione / team",
  appassionato: "Appassionato di vela",
};

/** Escape before interpolating into HTML: lead fields are visitor input. */
function esc(value: unknown): string {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatDate(iso: string | null): string {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat("it-IT", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Europe/Rome",
  }).format(d) + " (Europe/Rome)";
}

function row(label: string, value: string): string {
  return `<tr>
      <td style="padding:6px 16px 6px 0;vertical-align:top;color:#5b7280;white-space:nowrap">${label}</td>
      <td style="padding:6px 0;vertical-align:top;color:#0d2430"><strong>${value}</strong></td>
    </tr>`;
}

function buildEmail(lead: Lead) {
  const first = (lead.first_name ?? "").trim();
  const last = (lead.last_name ?? "").trim();
  const type = (lead.contact_type ?? "").trim();
  const typeLabel = CONTACT_TYPE_LABELS[type.toLowerCase()] ?? type ?? "—";
  const fullName = [first, last].filter(Boolean).join(" ") || "(senza nome)";

  const subject = `Nuovo lead simulatore: ${fullName}${type ? ` (${type})` : ""}`;

  const html = `<!doctype html>
<html><body style="margin:0;padding:24px;background:#f4f7f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif">
  <div style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #dde7ea;border-radius:10px;padding:24px">
    <p style="margin:0 0 4px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#2c687f">CAFAR — Simulatore</p>
    <h1 style="margin:0 0 20px;font-size:20px;color:#0d2430">Nuovo lead dal simulatore</h1>
    <table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.5">
      ${row("Nome", esc(first) || "—")}
      ${row("Cognome", esc(last) || "—")}
      ${row("Tipo", esc(typeLabel) || "—")}
      ${row("Email", `<a href="mailto:${esc(lead.email)}" style="color:#1d5f78">${esc(lead.email)}</a>`)}
      ${row("Lingua", esc((lead.lang ?? "").toUpperCase()) || "—")}
      ${row("Data", esc(formatDate(lead.created_at)))}
      ${row("Origine", esc(lead.source) || "—")}
      ${lead.page ? row("Pagina", esc(lead.page)) : ""}
    </table>
    <div style="margin-top:20px;padding-top:16px;border-top:1px solid #e6eef1">
      <p style="margin:0 0 6px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#5b7280">Messaggio</p>
      <p style="margin:0;font-size:14px;line-height:1.6;color:#0d2430;white-space:pre-wrap">${esc(lead.message) || "—"}</p>
    </div>
    <p style="margin:20px 0 0;font-size:12px;color:#8aa1ab">
      Rispondi a questa email per scrivere direttamente al lead · id ${esc(lead.id)}
    </p>
  </div>
</body></html>`;

  const text = [
    `Nuovo lead dal simulatore CAFAR`,
    ``,
    `Nome:     ${first || "—"}`,
    `Cognome:  ${last || "—"}`,
    `Tipo:     ${typeLabel || "—"}`,
    `Email:    ${lead.email ?? "—"}`,
    `Lingua:   ${(lead.lang ?? "").toUpperCase() || "—"}`,
    `Data:     ${formatDate(lead.created_at)}`,
    `Origine:  ${lead.source ?? "—"}`,
    lead.page ? `Pagina:   ${lead.page}` : "",
    ``,
    `Messaggio:`,
    lead.message ?? "—",
    ``,
    `id ${lead.id}`,
  ].filter((l) => l !== "").join("\n");

  return { subject, html, text };
}

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY not configured");
    if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
      throw new Error("Supabase runtime environment not available");
    }

    const payload = await req.json().catch(() => ({}));
    // Accept both our trigger's shape and a standard Supabase webhook payload.
    const leadId: unknown = payload?.lead_id ?? payload?.record?.id ?? payload?.id;

    if (typeof leadId !== "string" || !/^[0-9a-f-]{36}$/i.test(leadId)) {
      return new Response(JSON.stringify({ error: "lead_id missing or malformed" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Claim the lead: returns the row only the first time it is notified.
    const claim = await fetch(
      `${SUPABASE_URL}/rest/v1/simulator_leads?id=eq.${leadId}&notified_at=is.null`,
      {
        method: "PATCH",
        headers: {
          apikey: SERVICE_ROLE_KEY,
          Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=representation",
        },
        body: JSON.stringify({ notified_at: new Date().toISOString() }),
      },
    );

    if (!claim.ok) {
      throw new Error(`Could not read lead: HTTP ${claim.status} ${await claim.text()}`);
    }

    const rows: Lead[] = await claim.json();
    if (rows.length === 0) {
      // Unknown id, or another invocation already sent this one. Not an error:
      // answering 200 stops pg_net from looking like it failed.
      console.log(`lead ${leadId}: nothing to notify (unknown or already sent)`);
      return new Response(JSON.stringify({ skipped: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    const lead = rows[0];
    const { subject, html, text } = buildEmail(lead);

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        subject,
        html,
        text,
        ...(lead.email ? { reply_to: lead.email } : {}),
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      // Release the claim so a retry can still send it.
      await fetch(`${SUPABASE_URL}/rest/v1/simulator_leads?id=eq.${lead.id}`, {
        method: "PATCH",
        headers: {
          apikey: SERVICE_ROLE_KEY,
          Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ notified_at: null }),
      });
      console.error("Resend error:", data);
      throw new Error(data?.message || `Resend failed with HTTP ${res.status}`);
    }

    console.log(`lead ${lead.id}: notification sent (resend id ${data?.id})`);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("notify-simulator-lead failed:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : String(error) }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
});
