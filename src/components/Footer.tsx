import { Link } from "react-router-dom";
import { useI18n } from "@/i18n/LanguageProvider";

export const Footer = () => {
  const { t, lang } = useI18n();
  const privacyPath = lang === "it" ? "/it/privacy" : "/privacy";

  const scrollToSection = (sectionId: string) => {
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
              Patent No. 102021000023279
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
            </ul>
          </div>

        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-2 text-center text-background/50">
          <p>{t.footer.rights}</p>
          <span className="hidden sm:inline">·</span>
          <Link to={privacyPath} className="hover:text-background transition-colors">
            {t.contact.form.consentLink}
          </Link>
        </div>
      </div>
    </footer>
  );
};
