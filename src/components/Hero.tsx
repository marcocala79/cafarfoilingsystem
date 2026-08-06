import { Button } from "@/components/ui/button";
import { ChevronDown, Zap, Users } from "lucide-react";
import heroImage from "@/assets/hero-ocean-tech.jpg";
import { useI18n } from "@/i18n/LanguageProvider";

export const Hero = () => {
  const { t } = useI18n();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0" style={{ transform: 'translateZ(-1px) scale(1.5)' }}>
        <img
          src={heroImage}
          alt={t.hero.imgAlt}
          className="w-full h-full object-cover"
          style={{ willChange: 'transform' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/85"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-16">
        {/* Patent Badge */}
        <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
          <span className="text-primary-foreground/90 text-sm">{t.hero.patent}</span>
        </div>

        <div className="animate-float">
          <h1 className="mb-6 tracking-tight">
            <span className="block text-6xl md:text-8xl font-bold text-primary-foreground">
              CAFAR
            </span>
            <span className="block mt-4 text-2xl md:text-3xl text-primary-foreground/90 font-light">
              Canting Foil Arm System
            </span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t.hero.tagline}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection('project')}
            className="min-w-48 bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Zap className="mr-2 h-5 w-5" />
            {t.hero.ctaDiscover}
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="min-w-48 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
          >
            <Users className="mr-2 h-5 w-5" />
            {t.hero.ctaCollaborate}
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/60 animate-bounce cursor-pointer"
           onClick={() => scrollToSection('project')}>
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
};
