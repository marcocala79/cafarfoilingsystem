import { Handshake, Rocket, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { useI18n } from "@/i18n/LanguageProvider";

export const Partnership = () => {
  const { t } = useI18n();
  const icons = [Rocket, Users, Globe];
  const reasons = t.partner.reasons.map((r, i) => ({ ...r, icon: icons[i] }));

  return (
    <section id="partnership" className="py-20 bg-background/40 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-accent rounded-full" />

      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-accent font-medium mb-2 tracking-wide uppercase text-sm">{t.partner.eyebrow}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t.partner.heading}
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              {t.partner.intro}
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-14" staggerDelay={0.12}>
          {reasons.map((reason, index) => (
            <StaggerItem key={index}>
              <div className="bg-card p-8 rounded-lg shadow-elegant text-center group hover:shadow-glow transition-all duration-300 h-full">
                <div className="bg-accent/10 p-4 rounded-full w-16 h-16 mx-auto mb-5 group-hover:bg-accent/20 transition-colors flex items-center justify-center">
                  <reason.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.25}>
          <blockquote className="max-w-3xl mx-auto text-center mb-14 p-8">
            <p className="text-xl md:text-2xl italic text-foreground leading-relaxed mb-4">
              &ldquo;{t.partner.quote}&rdquo;
            </p>
            <footer className="text-base font-bold text-accent tracking-wide">{t.partner.quoteAuthor}</footer>
          </blockquote>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <a href="#contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-10 py-6 rounded-full shadow-elegant">
                <Handshake className="mr-2 h-5 w-5" />
                {t.partner.cta}
              </Button>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
