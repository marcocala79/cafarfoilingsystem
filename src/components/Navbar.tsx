import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useI18n } from "@/i18n/LanguageProvider";

export const Navbar = () => {
  const { t, lang, otherLang, otherPath, homePath } = useI18n();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // The sections live on the home page: from any other route we navigate there with a hash.
  const isHome = pathname === "/" || pathname === "/it" || pathname === "/it/";
  const simulatorPath = lang === "it" ? "/it/simulatore" : "/simulator";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (!isHome) {
      navigate(`${homePath}#${sectionId}`);
      return;
    }
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: t.nav.project, id: "project" },
    { label: t.nav.howItWorks, id: "how-it-works" },
    { label: t.nav.applications, id: "applications" },
    { label: t.nav.patent, id: "patent" },
    { label: t.nav.partner, id: "partnership" },
  ];

  const LangSwitch = ({ className = "" }: { className?: string }) => (
    <Link
      to={otherPath}
      hrefLang={otherLang}
      aria-label={otherLang === "it" ? "Passa all'italiano" : "Switch to English"}
      className={`text-xs font-semibold tracking-wider text-primary-foreground/70 hover:text-primary-foreground transition-colors ${className}`}
    >
      <span className="text-primary-foreground">{lang.toUpperCase()}</span>
      <span className="mx-1 opacity-40">/</span>
      <span>{otherLang.toUpperCase()}</span>
    </Link>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="text-2xl font-bold tracking-[0.25em] text-primary-foreground" style={{ fontFamily: "'Orbitron', sans-serif" }}>CAFAR</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
            <Link
              to={simulatorPath}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium"
            >
              {t.nav.simulator}
            </Link>
          </div>

          {/* CTA Button & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <LangSwitch />
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToSection("contact")}
              className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
            >
              {t.nav.contact}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <LangSwitch />
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary-foreground p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-primary/95 backdrop-blur-md py-4 border-t border-primary-foreground/10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Link
              to={simulatorPath}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-3 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              {t.nav.simulator}
            </Link>
            <div className="px-4 pt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => scrollToSection("contact")}
                className="w-full bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
              >
                {t.nav.contact}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
