import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from "lucide-react";
import heroImage from "@/assets/cafar-hero.jpg";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="CAFAR System" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-float">
          <h1 className="text-6xl md:text-8xl font-bold text-primary-foreground mb-6 tracking-tight">
            CAFAR
          </h1>
          <h2 className="text-2xl md:text-3xl text-primary-foreground/90 mb-4 font-light">
            Canting Foil Arm System
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Revolutionary marine technology combining maximum lateral extension, 
            dual-side deployment, and modular hydrodynamic surfaces
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection('how-it-works')}
            className="min-w-48"
          >
            Discover Innovation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('advantages')}
            className="min-w-48 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
          >
            See Advantages
          </Button>
        </div>
        
        {/* Inventors */}
        <div className="text-primary-foreground/70 text-lg">
          Designed & Patented by <span className="font-semibold text-primary-foreground">Francesco Belvisi</span> & <span className="font-semibold text-primary-foreground">Marco Calatroni</span>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/60 animate-bounce cursor-pointer"
           onClick={() => scrollToSection('how-it-works')}>
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
};