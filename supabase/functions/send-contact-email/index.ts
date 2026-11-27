// Sends an email to the CAFAR inbox for every new row in public.contact_submissions.
//
// Invoked server-side only, by the AFTER INSERT trigger on contact_submissions
// (see the notify_contact_submission migration), never by the visitor's browser:
// the send cannot be skipped by tampering with the page, and a failure is no
// longer something only the visitor's console would know about.
//
// The trigger posts only the submission id. This function then reads the row
// with the service role key — injected into the runtime by Supabase, not stored
// in this repo — and claims it by setting notified_at in the same statement. So:
//   * the email content always comes from the database, never from the caller;
//   * each submission is emailed at most once, even if called again.
// That is what makes the endpoint safe to expose without a JWT.

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

const TO = "contact@cafarfoilingsystem.com";
const FROM = "CAFAR Contact Form <noreply@cafarfoilingsystem.com>";

interface Submission {
  id: string;
  name: string | null;
  email: string | null;
  company: string | null;
  message: string | null;
  created_at: string | null;
}

/** Escape before interpolating into HTML: these fields are visitor input. */
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

function buildEmail(s: Submission) {
  const name = (s.name ?? "").trim() || "(senza nome)";
  const subject = `New contact from ${name}`;

  const html = `<!doctype html>
<html><body style="margin:0;padding:24px;background:#f4f7f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif">
  <div style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #dde7ea;border-radius:10px;padding:24px">
    <p style="margin:0 0 4px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#2c687f">CAFAR — Modulo di contatto</p>
    <h1 style="margin:0 0 20px;font-size:20px;color:#0d2430">Nuovo messaggio dal sito</h1>
    <table style="width:100%;border-collapse:collapse;font-size:14px;line-height:1.5">
      ${row("Nome", esc(s.name) || "—")}
      ${row("Email", `<a href="mailto:${esc(s.email)}" style="color:#1d5f78">${esc(s.email)}</a>`)}
      ${s.company ? row("Azienda", esc(s.company)) : ""}
      ${row("Data", esc(formatDate(s.created_at)))}
    </table>
    <div style="margin-top:20px;padding-top:16px;border-top:1px solid #e6eef1">
      <p style="margin:0 0 6px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#5b7280">Messaggio</p>
      <p style="margin:0;font-size:14px;line-height:1.6;color:#0d2430;white-space:pre-wrap">${esc(s.message) || "—"}</p>
    </div>
    <p style="margin:20px 0 0;font-size:12px;color:#8aa1ab">
      Rispondi a questa email per scrivere direttamente al mittente · id ${esc(s.id)}
    </p>
  </div>
</body></html>`;

  const text = [
    `Nuovo messaggio dal modulo di contatto CAFAR`,
    ``,
    `Nome:     ${s.name ?? "—"}`,
    `Email:    ${s.email ?? "—"}`,
    s.company ? `Azienda:  ${s.company}` : "",
    `Data:     ${formatDate(s.created_at)}`,
    ``,
    `Messaggio:`,
    s.message ?? "—",
    ``,
    `id ${s.id}`,
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
    const id: unknown = payload?.submission_id ?? payload?.record?.id ?? payload?.id;

    if (typeof id !== "string" || !/^[0-9a-f-]{36}$/i.test(id)) {
      return new Response(JSON.stringify({ error: "submission_id missing or malformed" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Claim the submission: returns the row only the first time it is notified.
    const claim = await fetch(
      `${SUPABASE_URL}/rest/v1/contact_submissions?id=eq.${id}&notified_at=is.null`,
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
      throw new Error(`Could not read submission: HTTP ${claim.status} ${await claim.text()}`);
    }

    const rows: Submission[] = await claim.json();
    if (rows.length === 0) {
      console.log(`submission ${id}: nothing to notify (unknown or already sent)`);
      return new Response(JSON.stringify({ skipped: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    const submission = rows[0];
    const { subject, html, text } = buildEmail(submission);

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
        ...(submission.email ? { reply_to: submission.email } : {}),
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      // Release the claim so a retry can still send it.
      await fetch(`${SUPABASE_URL}/rest/v1/contact_submissions?id=eq.${submission.id}`, {
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

    console.log(`submission ${submission.id}: email sent (resend id ${data?.id})`);
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("send-contact-email failed:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : String(error) }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
});
