import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Zap, Users } from "lucide-react";
import heroImage from "@/assets/hero-ocean-tech.webp";
import simPreview from "@/assets/sim-preview.jpg";
import { useI18n } from "@/i18n/LanguageProvider";

export const Hero = () => {
  const { t, lang } = useI18n();

  // The simulator is mounted only on click. Loading it straight away would both
  // start its 3-minute free trial for visitors who never asked for it and put a
  // heavy 3D iframe in the first paint of the home page.
  const [started, setStarted] = useState(false);
  const navigate = useNavigate();
  const simSrc = lang === "it" ? "/sim/index.html?lang=it" : "/sim/index.html?lang=en";
  const simPath = lang === "it" ? "/it/simulatore" : "/simulator";

  // On a phone the hero panel is too short for the simulator's own layout — it
  // would open on its settings column instead of the boat. There the tap opens
  // the dedicated page, which gives it the whole screen.
  const openSimulator = () => {
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      navigate(simPath);
      return;
    }
    setStarted(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt={t.hero.imgAlt}
          width={1600}
          height={900}
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/85" />
      </div>

      <div className="relative z-10 flex flex-col flex-1 w-full max-w-6xl mx-auto px-6 pt-20 pb-6">
        {/* Compact heading */}
        <div className="shrink-0 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-3 py-1 mb-3">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-primary-foreground/90 text-xs sm:text-sm">{t.hero.patent}</span>
          </div>

          <h1 className="mb-2 tracking-tight">
            <span className="block text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground">
              CAFAR
            </span>
            <span className="block mt-1 text-lg sm:text-xl md:text-2xl text-primary-foreground/90 font-light">
              Canting Foil Arm System
            </span>
          </h1>
          <p className="text-sm sm:text-base text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            {t.hero.tagline}
          </p>
        </div>

        {/* The simulator, first thing on the page */}
        <div className="mt-5 flex-1 min-h-[260px] flex">
          {started ? (
            <div className="w-full bg-card rounded-xl shadow-elegant p-1.5 sm:p-2">
              <iframe
                src={simSrc}
                title={t.sim.iframeTitle}
                allow="fullscreen"
                className="w-full h-full rounded-lg"
                style={{ border: 0, minHeight: "240px" }}
              />
            </div>
          ) : (
            <button
              type="button"
              onClick={openSimulator}
              className="group relative w-full overflow-hidden rounded-xl border border-primary-foreground/25 transition-smooth hover:border-primary-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              {/* A real frame of the simulator, blurred: it shows what is behind
                  the button without loading the simulator itself. */}
              <img
                src={simPreview}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-[6px] scale-110 transition-transform duration-500 group-hover:scale-[1.15]"
              />
              <div className="absolute inset-0 bg-primary/55 transition-colors group-hover:bg-primary/45" />

              <div className="relative px-6 py-8 flex flex-col items-center justify-center gap-4 min-h-[inherit]">
                <span className="flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground shadow-glow transition-transform group-hover:scale-105">
                  <Play className="h-7 w-7 translate-x-0.5" fill="currentColor" />
                </span>
                <span className="text-lg sm:text-xl font-semibold text-primary-foreground drop-shadow">
                  {t.hero.simStart}
                </span>
                <span className="text-sm text-primary-foreground/80 max-w-md drop-shadow">
                  {t.hero.simHint}
                </span>
              </div>
            </button>
          )}
        </div>

        {/* Secondary actions */}
        <div className="shrink-0 mt-5 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button
            variant="hero"
            onClick={() => scrollToSection("project")}
            className="w-full sm:w-auto sm:min-w-44 bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Zap className="mr-2 h-4 w-4" />
            {t.hero.ctaDiscover}
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto sm:min-w-44 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
          >
            <Users className="mr-2 h-4 w-4" />
            {t.hero.ctaCollaborate}
          </Button>
        </div>
      </div>
    </section>
  );
};
