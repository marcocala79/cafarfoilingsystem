// Private page listing everyone who has written through the site: the contact
// form and the simulator gate, in one list, newest first.
//
// There is no secret in this file. Access is decided by the database: the
// SELECT policies on contact_submissions and simulator_leads require a signed
// in user whose address is listed in admin_emails (see the
// 20261128090000_admin_read_access migration). Anyone can open this page and
// ask for a login link, but an address that is not on the list receives no
// email, and a session that is not on the list reads an empty table.

import { useCallback, useEffect, useMemo, useState } from "react";
import { Head } from "vite-react-ssg";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Download,
  LogOut,
  Mail,
  RefreshCw,
  Search,
  Copy,
  Check,
  Loader2,
} from "lucide-react";

type Lead = {
  kind: string | null;
  id: string | null;
  created_at: string | null;
  name: string | null;
  email: string | null;
  company: string | null;
  contact_type: string | null;
  lang: string | null;
  message: string | null;
  page: string | null;
};

type Filter = "all" | "simulator" | "contact";

/** Readable labels for the simulator's contact_type slugs. */
const TYPE_LABELS: Record<string, string> = {
  stampa: "Stampa / media",
  skipper: "Skipper / velista",
  cantiere: "Cantiere / costruttore",
  progettista: "Progettista",
  organizzazione: "Organizzazione / team",
  appassionato: "Appassionato di vela",
};

const dateFmt = new Intl.DateTimeFormat("it-IT", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Europe/Rome",
});

function formatDate(iso: string | null): string {
  if (!iso) return "—";
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? iso : dateFmt.format(d);
}

/** One CSV cell, quoted so commas, quotes and newlines survive the trip. */
function csvCell(value: unknown): string {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

function toCsv(rows: Lead[]): string {
  const header = [
    "Origine",
    "Data",
    "Nome",
    "Email",
    "Azienda",
    "Tipo",
    "Lingua",
    "Pagina",
    "Messaggio",
  ];
  const body = rows.map((r) =>
    [
      r.kind === "simulator" ? "Simulatore" : "Modulo contatti",
      formatDate(r.created_at),
      r.name,
      r.email,
      r.company,
      r.contact_type ? TYPE_LABELS[r.contact_type] ?? r.contact_type : "",
      r.lang?.toUpperCase(),
      r.page,
      r.message,
    ]
      .map(csvCell)
      .join(","),
  );
  // The BOM makes Excel open it as UTF-8 instead of mangling the accents.
  return "﻿" + [header.map(csvCell).join(","), ...body].join("\r\n");
}

const Admin = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [checkingSession, setCheckingSession] = useState(true);

  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [linkSent, setLinkSent] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [copied, setCopied] = useState(false);

  // --- session ------------------------------------------------------------
  useEffect(() => {
    let active = true;
    supabase.auth.getSession().then(({ data }) => {
      if (!active) return;
      setSession(data.session);
      setCheckingSession(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
      setCheckingSession(false);
    });
    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  // --- data ---------------------------------------------------------------
  const load = useCallback(async () => {
    setLoading(true);
    setLoadError(null);
    const { data, error } = await supabase
      .from("leads_overview")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(2000);

    if (error) setLoadError(error.message);
    setLeads(data ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (session) void load();
  }, [session, load]);

  // --- auth actions -------------------------------------------------------
  const sendLink = async (e: React.FormEvent) => {
    e.preventDefault();
    const address = email.trim().toLowerCase();
    if (!address) return;
    setSending(true);
    setAuthError(null);

    const { error } = await supabase.auth.signInWithOtp({
      email: address,
      options: {
        // Never create an account from this form: only addresses already
        // invited in Supabase can receive a link. Without this, anyone could
        // make the project send mail to any address they like.
        shouldCreateUser: false,
        emailRedirectTo: `${window.location.origin}/admin`,
      },
    });

    setSending(false);
    if (error) setAuthError(error.message);
    else setLinkSent(true);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setLeads([]);
  };

  // --- derived ------------------------------------------------------------
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return leads.filter((l) => {
      if (filter !== "all" && l.kind !== filter) return false;
      if (!q) return true;
      return [l.name, l.email, l.company, l.message, l.contact_type]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q));
    });
  }, [leads, query, filter]);

  const counts = useMemo(
    () => ({
      all: leads.length,
      simulator: leads.filter((l) => l.kind === "simulator").length,
      contact: leads.filter((l) => l.kind === "contact").length,
    }),
    [leads],
  );

  const download = () => {
    const blob = new Blob([toCsv(visible)], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `cafar-contatti-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const copyEmails = async () => {
    const unique = Array.from(
      new Set(visible.map((l) => l.email?.trim()).filter(Boolean) as string[]),
    );
    await navigator.clipboard.writeText(unique.join(", "));
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const toggle = (id: string | null) => {
    if (!id) return;
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const head = (
    <Head>
      <title>Contatti CAFAR</title>
      <meta name="robots" content="noindex, nofollow" />
      <link rel="canonical" href="https://cafarfoilingsystem.com/admin" />
    </Head>
  );

  // --- not signed in ------------------------------------------------------
  if (checkingSession) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center bg-background">
        {head}
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center bg-background px-6">
        {head}
        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-semibold tracking-tight">Contatti CAFAR</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Pagina riservata. Inserisci la tua email: ricevi un link con cui entrare, senza
            password.
          </p>

          {linkSent ? (
            <div className="mt-6 rounded-lg border border-border bg-card p-4">
              <Mail className="h-5 w-5 text-accent" />
              <p className="mt-2 text-sm">
                Se l'indirizzo è abilitato, il link è in arrivo. Aprilo da questo stesso
                dispositivo: vale una volta sola e scade dopo un'ora.
              </p>
              <button
                type="button"
                onClick={() => setLinkSent(false)}
                className="mt-3 text-sm text-accent underline underline-offset-4"
              >
                Usa un altro indirizzo
              </button>
            </div>
          ) : (
            <form onSubmit={sendLink} className="mt-6 space-y-3">
              <Input
                type="email"
                required
                autoComplete="email"
                placeholder="tu@esempio.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="w-full" disabled={sending}>
                {sending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  "Inviami il link di accesso"
                )}
              </Button>
              {authError && (
                <p className="text-sm text-destructive">
                  {authError.toLowerCase().includes("signups not allowed")
                    ? "Questo indirizzo non è abilitato."
                    : authError}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    );
  }

  // --- signed in ----------------------------------------------------------
  return (
    <div className="min-h-[100dvh] bg-background">
      {head}

      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center gap-3">
          <div className="mr-auto">
            <h1 className="text-lg font-semibold tracking-tight">Contatti CAFAR</h1>
            <p className="text-xs text-muted-foreground">{session.user.email}</p>
          </div>
          <Button variant="outline" size="sm" onClick={() => void load()} disabled={loading}>
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            Aggiorna
          </Button>
          <Button variant="outline" size="sm" onClick={() => void signOut()}>
            <LogOut className="h-4 w-4" />
            Esci
          </Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        {/* filters */}
        <div className="flex flex-wrap items-center gap-2">
          {(
            [
              ["all", `Tutti (${counts.all})`],
              ["simulator", `Simulatore (${counts.simulator})`],
              ["contact", `Modulo contatti (${counts.contact})`],
            ] as [Filter, string][]
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setFilter(value)}
              className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                filter === value
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}

          <div className="relative ml-auto w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              className="pl-9"
              placeholder="Cerca nome, email, testo…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" onClick={download} disabled={!visible.length}>
            <Download className="h-4 w-4" />
            Scarica CSV
          </Button>
          <Button variant="outline" size="sm" onClick={() => void copyEmails()} disabled={!visible.length}>
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copiate" : "Copia le email"}
          </Button>
          <span className="text-sm text-muted-foreground">
            {visible.length} {visible.length === 1 ? "contatto" : "contatti"}
          </span>
        </div>

        {/* states */}
        {loadError && (
          <p className="mt-6 rounded-lg border border-destructive/40 bg-destructive/5 p-4 text-sm text-destructive">
            Non riesco a leggere i contatti: {loadError}
          </p>
        )}

        {!loadError && !loading && leads.length === 0 && (
          <p className="mt-6 rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground">
            Nessun contatto da mostrare. Se sei appena entrato e ti aspettavi dei risultati,
            l'indirizzo con cui hai fatto accesso potrebbe non essere abilitato alla lettura.
          </p>
        )}

        {/* list */}
        <ul className="mt-4 space-y-2">
          {visible.map((l) => {
            const open = l.id ? expanded.has(l.id) : false;
            return (
              <li
                key={l.id ?? `${l.kind}-${l.created_at}`}
                className="rounded-lg border border-border bg-card p-4"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      l.kind === "simulator"
                        ? "bg-accent/15 text-accent"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {l.kind === "simulator" ? "Simulatore" : "Contatti"}
                  </span>
                  <span className="font-medium">{l.name || "(senza nome)"}</span>
                  {l.email && (
                    <a
                      href={`mailto:${l.email}`}
                      className="text-sm text-accent underline underline-offset-4"
                    >
                      {l.email}
                    </a>
                  )}
                  <span className="ml-auto text-xs text-muted-foreground">
                    {formatDate(l.created_at)}
                  </span>
                </div>

                <div className="mt-1 flex flex-wrap gap-x-3 text-xs text-muted-foreground">
                  {l.company && <span>{l.company}</span>}
                  {l.contact_type && (
                    <span>{TYPE_LABELS[l.contact_type] ?? l.contact_type}</span>
                  )}
                  {l.lang && <span>{l.lang.toUpperCase()}</span>}
                </div>

                {l.message && (
                  <p
                    onClick={() => toggle(l.id)}
                    className={`mt-2 cursor-pointer whitespace-pre-wrap text-sm leading-relaxed ${
                      open ? "" : "line-clamp-2"
                    }`}
                  >
                    {l.message}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default Admin;
