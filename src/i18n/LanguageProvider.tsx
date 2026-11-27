import { createContext, useContext, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { translations, type Dict, type Lang } from "./translations";

interface I18nContextValue {
  lang: Lang;
  t: Dict;
  /** The other language + the path to the same page in it (for the switcher / hreflang). */
  otherLang: Lang;
  otherPath: string;
  /** Home page in the current language ("/" or "/it"). */
  homePath: string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const SITE_URL = "https://cafarfoilingsystem.com";

/** Every page, paired across languages — the single source of truth for the switcher and hreflang. */
const ROUTES: { en: string; it: string }[] = [
  { en: "/", it: "/it" },
  { en: "/privacy", it: "/it/privacy" },
  { en: "/simulator", it: "/it/simulatore" },
];

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  // Normalize a trailing slash so "/it/simulatore/" matches "/it/simulatore".
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const lang: Lang = path === "/it" || path.startsWith("/it/") ? "it" : "en";
  const t = translations[lang];
  const otherLang: Lang = lang === "it" ? "en" : "it";
  const homePath = lang === "it" ? "/it" : "/";

  const pair = ROUTES.find((r) => r[lang] === path) ?? ROUTES[0];
  const otherPath = pair[otherLang];
  const canonical = `${SITE_URL}${pair[lang] === "/" ? "/" : pair[lang]}`;
  const enHref = `${SITE_URL}${pair.en}`;
  const itHref = `${SITE_URL}${pair.it}`;

  return (
    <I18nContext.Provider value={{ lang, t, otherLang, otherPath, homePath }}>
      {/* Per-language SEO head — rendered into the static HTML at build time (SSG).
          Pages may override title/description/canonical with their own <Head>. */}
      <Head>
        <html lang={lang} />
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en" href={enHref} />
        <link rel="alternate" hrefLang="it" href={itHref} />
        <link rel="alternate" hrefLang="x-default" href={enHref} />
        <meta property="og:title" content={t.meta.title} />
        <meta property="og:description" content={t.meta.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:locale" content={lang === "it" ? "it_IT" : "en_US"} />
        <meta property="og:locale:alternate" content={lang === "it" ? "en_US" : "it_IT"} />
        <meta name="twitter:title" content={t.meta.title} />
        <meta name="twitter:description" content={t.meta.description} />
      </Head>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within a LanguageProvider");
  return ctx;
}
