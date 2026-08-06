import { ScrollReveal } from "@/components/ScrollReveal";
import cafarDiagram from "@/assets/cafar-physics.png";
import { useI18n } from "@/i18n/LanguageProvider";

export const Physics = () => {
  const { t } = useI18n();
  return (
    <section id="physics" className="py-20 bg-background/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-2">{t.physics.eyebrow}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.physics.heading}
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              {t.physics.intro}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-card/35 backdrop-blur-sm rounded-lg p-4 shadow-elegant max-w-4xl mx-auto">
            <img
              src={cafarDiagram}
              alt={t.physics.imgAlt}
              className="w-full rounded-md"
              loading="lazy"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
