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
}

const I18nContext = createContext<I18nContextValue | null>(null);

const SITE_URL = "https://cafarfoilingsystem.com";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const lang: Lang = pathname.startsWith("/it") ? "it" : "en";
  const t = translations[lang];
  const otherLang: Lang = lang === "it" ? "en" : "it";
  const otherPath = otherLang === "it" ? "/it" : "/";
  const canonical = lang === "it" ? `${SITE_URL}/it` : `${SITE_URL}/`;

  return (
    <I18nContext.Provider value={{ lang, t, otherLang, otherPath }}>
      {/* Per-language SEO head — rendered into the static HTML at build time (SSG). */}
      <Head>
        <html lang={lang} />
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}/`} />
        <link rel="alternate" hrefLang="it" href={`${SITE_URL}/it`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />
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
