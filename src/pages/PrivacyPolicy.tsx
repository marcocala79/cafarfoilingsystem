import { Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { ArrowLeft } from "lucide-react";
import { useI18n } from "@/i18n/LanguageProvider";

const SITE_URL = "https://cafarfoilingsystem.com";

type Section = { heading: string; body: string[] };
type Content = {
  metaTitle: string;
  title: string;
  updated: string;
  back: string;
  sections: Section[];
};

const CONTENT: Record<"en" | "it", Content> = {
  en: {
    metaTitle: "Privacy Policy | CAFAR — Canting Foil Arm System",
    title: "Privacy Policy",
    updated: "Last updated: November 2026",
    back: "Back to home",
    sections: [
      {
        heading: "1. Data Controller",
        body: [
          "The data controller for personal data collected through this website (cafarfoilingsystem.com) is the CAFAR team — Francesco Belvisi and Marco Calatroni, co-holders of patent IT 102021000023279.",
          "For any request regarding your personal data you can write to contact@cafarfoilingsystem.com.",
        ],
      },
      {
        heading: "2. What data we collect",
        body: [
          "We only collect the data you voluntarily provide through our forms. Contact form: name, email address, company/organization (optional) and the content of your message.",
          "CAFAR simulator unlock form (on /simulator and /it/simulatore): first name, last name, the type of contact you select (press, skipper, boatyard, designer, organization, enthusiast), email address and your message. All of these fields are required to unlock the full simulator, together with the consent box.",
          "We do not collect special categories of data. Analytics cookies are only set if you accept them in the cookie banner.",
        ],
      },
      {
        heading: "3. Why we process it (purpose and legal basis)",
        body: [
          "Your data is used solely to respond to your enquiry, to give you access to the full CAFAR simulator, and to contact you with commercial or technical information about the CAFAR system — including possible collaboration, partnership or licensing opportunities.",
          "We do not use your data for profiling or automated decision-making, we do not send newsletters you have not asked for, and we never sell or share it with third parties other than the processors listed below.",
          "The legal basis is your consent (Art. 6(1)(a) GDPR), given by ticking the consent box, and/or the taking of pre-contractual steps at your request (Art. 6(1)(b) GDPR).",
        ],
      },
      {
        heading: "4. Who processes the data (processors)",
        body: [
          "To operate the site and the form we rely on the following service providers, acting as data processors: Supabase (database/hosting), Resend (email delivery), Netlify (website hosting), Plausible Analytics (aggregate, cookieless statistics that do not identify you) and Google Analytics 4 (audience statistics, only after you accept analytics cookies).",
          "Some providers may process data outside the EU; where this happens, transfers are covered by appropriate safeguards (e.g. EU Standard Contractual Clauses).",
        ],
      },
      {
        heading: "5. How long we keep it",
        body: [
          "We keep contact submissions only for the time needed to handle your request and any resulting relationship, after which the data is deleted or anonymized.",
          "Simulator unlock requests are stored in our Supabase database for a maximum of 24 months from the last contact, then deleted — sooner if you ask us to.",
        ],
      },
      {
        heading: "6. Your rights",
        body: [
          "You have the right to access, rectify, erase, restrict or object to the processing of your data, and the right to data portability. You may withdraw consent at any time.",
          "To exercise these rights, contact contact@cafarfoilingsystem.com. You also have the right to lodge a complaint with your supervisory authority (in Italy, the Garante per la protezione dei dati personali).",
        ],
      },
      {
        heading: "7. Analytics & cookies",
        body: [
          "This site uses Plausible Analytics, a privacy-friendly tool that measures aggregate traffic without cookies and without collecting personal data. It runs on our legitimate interest in understanding site usage and requires no consent.",
          "We also use Google Analytics 4 (measurement ID G-VE82YRPQFP), which does set cookies. It is loaded with Google Consent Mode v2 and all consent types are set to 'denied' by default: until you accept in the cookie banner, Google receives only anonymous, cookieless pings that cannot identify you. The legal basis is your consent (Art. 6(1)(a) GDPR).",
          "We never grant advertising consent: ad_storage, ad_user_data and ad_personalization stay denied at all times, so no data is used for advertising, remarketing or profiling. Google may process data outside the EU under the appropriate safeguards mentioned in section 4.",
          "You can change or withdraw your choice at any time via the 'Cookie preferences' link in the footer. Your choice is stored locally in your browser and can also be cleared by deleting your site data.",
        ],
      },
      {
        heading: "8. The CAFAR simulator",
        body: [
          "The CAFAR simulator runs entirely in your browser. To manage the three free minutes and remember that you have unlocked it, it stores two technical values in your browser's local storage ('cafar_sim_trial_s' and 'cafar_sim_unlock_v1'). These are not cookies, contain no personal data and are never sent to us; you can clear them by deleting your site data.",
          "When you submit the unlock form, the data listed in section 2 is sent to our Supabase database together with the interface language and the page you came from, so that we can answer you in the right language and know how you reached us.",
        ],
      },
    ],
  },
  it: {
    metaTitle: "Privacy Policy | CAFAR — Canting Foil Arm System",
    title: "Privacy Policy",
    updated: "Ultimo aggiornamento: novembre 2026",
    back: "Torna alla home",
    sections: [
      {
        heading: "1. Titolare del trattamento",
        body: [
          "Il titolare del trattamento dei dati personali raccolti tramite questo sito (cafarfoilingsystem.com) è il team CAFAR — Francesco Belvisi e Marco Calatroni, co-titolari del brevetto IT 102021000023279.",
          "Per qualsiasi richiesta relativa ai tuoi dati personali puoi scrivere a contact@cafarfoilingsystem.com.",
        ],
      },
      {
        heading: "2. Quali dati raccogliamo",
        body: [
          "Raccogliamo esclusivamente i dati che fornisci volontariamente tramite i nostri moduli. Modulo di contatto: nome, indirizzo email, azienda/organizzazione (facoltativo) e il contenuto del messaggio.",
          "Modulo di sblocco del simulatore CAFAR (su /simulator e /it/simulatore): nome, cognome, tipo di contatto che selezioni (stampa, skipper, cantiere, progettista, organizzazione, appassionato), indirizzo email e messaggio. Tutti questi campi sono obbligatori per sbloccare il simulatore completo, insieme alla casella di consenso.",
          "Non raccogliamo categorie particolari di dati. I cookie statistici vengono installati solo se li accetti tramite il banner dei cookie.",
        ],
      },
      {
        heading: "3. Perché li trattiamo (finalità e base giuridica)",
        body: [
          "I tuoi dati sono utilizzati unicamente per rispondere alla tua richiesta, per darti accesso al simulatore CAFAR completo e per ricontattarti con informazioni commerciali o tecniche sul sistema CAFAR — comprese eventuali opportunità di collaborazione, partnership o licensing.",
          "Non usiamo i tuoi dati per profilazione o decisioni automatizzate, non inviamo newsletter che non hai richiesto e non li vendiamo né comunichiamo a terzi diversi dai responsabili indicati qui sotto.",
          "La base giuridica è il tuo consenso (art. 6, par. 1, lett. a GDPR), prestato spuntando l'apposita casella, e/o l'esecuzione di misure precontrattuali su tua richiesta (art. 6, par. 1, lett. b GDPR).",
        ],
      },
      {
        heading: "4. Chi tratta i dati (responsabili)",
        body: [
          "Per il funzionamento del sito e del modulo ci avvaliamo dei seguenti fornitori, che agiscono come responsabili del trattamento: Supabase (database/hosting), Resend (invio email), Netlify (hosting del sito), Plausible Analytics (statistiche aggregate, senza cookie, che non ti identificano) e Google Analytics 4 (statistiche di audience, solo dopo la tua accettazione dei cookie statistici).",
          "Alcuni fornitori possono trattare i dati al di fuori dell'UE; in tal caso i trasferimenti sono coperti da garanzie adeguate (es. Clausole Contrattuali Standard UE).",
        ],
      },
      {
        heading: "5. Per quanto tempo li conserviamo",
        body: [
          "Conserviamo i messaggi ricevuti solo per il tempo necessario a gestire la tua richiesta e l'eventuale rapporto che ne deriva, dopodiché i dati vengono cancellati o anonimizzati.",
          "Le richieste di sblocco del simulatore sono conservate nel nostro database Supabase per un massimo di 24 mesi dall'ultimo contatto, poi cancellate — prima, se ce lo chiedi.",
        ],
      },
      {
        heading: "6. I tuoi diritti",
        body: [
          "Hai il diritto di accedere, rettificare, cancellare, limitare od opporti al trattamento dei tuoi dati, oltre al diritto alla portabilità. Puoi revocare il consenso in qualsiasi momento.",
          "Per esercitare questi diritti scrivi a contact@cafarfoilingsystem.com. Hai inoltre il diritto di proporre reclamo all'autorità di controllo (in Italia, il Garante per la protezione dei dati personali).",
        ],
      },
      {
        heading: "7. Statistiche e cookie",
        body: [
          "Questo sito utilizza Plausible Analytics, uno strumento rispettoso della privacy che misura il traffico in forma aggregata senza cookie e senza raccogliere dati personali. Si basa sul legittimo interesse a comprendere l'utilizzo del sito e non richiede consenso.",
          "Utilizziamo inoltre Google Analytics 4 (ID di misurazione G-VE82YRPQFP), che installa cookie. È caricato con Google Consent Mode v2 e tutti i tipi di consenso sono impostati su 'denied' per impostazione predefinita: finché non accetti tramite il banner, Google riceve solo ping anonimi e senza cookie, che non permettono di identificarti. La base giuridica è il tuo consenso (art. 6, par. 1, lett. a GDPR).",
          "Non concediamo mai il consenso pubblicitario: ad_storage, ad_user_data e ad_personalization restano sempre negati, quindi nessun dato è utilizzato per pubblicità, remarketing o profilazione. Google può trattare dati fuori dall'UE con le garanzie adeguate indicate nella sezione 4.",
          "Puoi modificare o revocare la tua scelta in qualsiasi momento tramite il link 'Cookie preferences' nel footer. La scelta è memorizzata localmente nel tuo browser e può essere azzerata cancellando i dati del sito.",
        ],
      },
      {
        heading: "8. Il simulatore CAFAR",
        body: [
          "Il simulatore CAFAR gira interamente nel tuo browser. Per gestire i tre minuti di prova gratuita e ricordare che lo hai sbloccato, salva due valori tecnici nella memoria locale del browser ('cafar_sim_trial_s' e 'cafar_sim_unlock_v1'). Non sono cookie, non contengono dati personali e non ci vengono mai inviati; puoi azzerarli cancellando i dati del sito.",
          "Quando invii il modulo di sblocco, i dati elencati al punto 2 vengono inviati al nostro database Supabase insieme alla lingua dell'interfaccia e alla pagina da cui provieni, così da poterti rispondere nella lingua giusta e sapere come ci hai raggiunto.",
        ],
      },
    ],
  },
};

export const PrivacyPolicy = () => {
  const { lang } = useI18n();
  const c = CONTENT[lang];
  const homePath = lang === "it" ? "/it" : "/";
  const canonical = lang === "it" ? `${SITE_URL}/it/privacy` : `${SITE_URL}/privacy`;

  return (
    <main className="min-h-screen bg-background">
      <Head>
        <title>{c.metaTitle}</title>
        <link rel="canonical" href={canonical} />
      </Head>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          to={homePath}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="h-4 w-4" />
          {c.back}
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">{c.title}</h1>
        <p className="text-sm text-muted-foreground mb-12">{c.updated}</p>

        <div className="space-y-10">
          {c.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl font-semibold text-foreground mb-3">{section.heading}</h2>
              {section.body.map((p, j) => (
                <p key={j} className="text-muted-foreground leading-relaxed mb-3">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
