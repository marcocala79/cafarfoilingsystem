import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { useI18n } from "@/i18n/LanguageProvider";

export const VppResults = () => {
  const { t } = useI18n();
  const colors = ["text-accent", "text-primary", "text-primary-glow"];

  return (
    <section id="vpp-results" className="py-20 bg-background/35 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-2">{t.vpp.eyebrow}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.vpp.heading}
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              {t.vpp.intro}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="bg-card rounded-lg shadow-elegant p-4 mb-12">
            <img
              src="/lovable-uploads/1c80fcfe-0be3-424a-a5f9-3508faab86b1.png"
              alt={t.vpp.imgAlt}
              className="w-full h-auto rounded"
              loading="lazy"
            />
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.1}>
          {t.vpp.stats.map((stat, i) => (
            <StaggerItem key={i}>
              <div className="bg-card p-8 rounded-lg shadow-elegant text-center">
                <div className={`text-4xl font-bold mb-2 ${colors[i]}`}>{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
                <div className="text-xs text-muted-foreground mt-2">{stat.sub}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
