import { Link, useLocation, useNavigate } from "react-router-dom";
import { useI18n } from "@/i18n/LanguageProvider";
import { openCookiePreferences } from "@/lib/consent";

export const Footer = () => {
  const { t, lang, homePath } = useI18n();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const privacyPath = lang === "it" ? "/it/privacy" : "/privacy";
  const simulatorPath = lang === "it" ? "/it/simulatore" : "/simulator";
  const isHome = pathname === "/" || pathname === "/it" || pathname === "/it/";

  // The sections live on the home page: from any other route we navigate there with a hash.
  const scrollToSection = (sectionId: string) => {
    if (!isHome) {
      navigate(`${homePath}#${sectionId}`);
      return;
    }
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground/95 backdrop-blur-sm text-background py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">CAFAR</h3>
            <p className="text-background/70 mb-4">
              {t.footer.tagline}
            </p>
            <p className="text-background/50 text-sm">
              {t.hero.patent}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.navHeading}</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <button onClick={() => scrollToSection('project')} className="hover:text-background transition-colors">
                  {t.footer.project}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('how-it-works')} className="hover:text-background transition-colors">
                  {t.footer.how}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('applications')} className="hover:text-background transition-colors">
                  {t.footer.apps}
                </button>
              </li>
              <li>
                <Link to={simulatorPath} className="hover:text-background transition-colors">
                  {t.footer.simulator}
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-2 text-center text-background/50">
          <p>{t.footer.rights}</p>
          <span className="hidden sm:inline">·</span>
          <Link to={privacyPath} className="hover:text-background transition-colors">
            {t.contact.form.consentLink}
          </Link>
          <span className="hidden sm:inline">·</span>
          <button onClick={openCookiePreferences} className="hover:text-background transition-colors">
            Cookie preferences
          </button>
        </div>
      </div>
    </footer>
  );
};
