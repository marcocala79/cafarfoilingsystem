import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { useI18n } from "@/i18n/LanguageProvider";

export const Inventori = () => {
  const { t } = useI18n();

  return (
    <section id="inventors" className="py-20 bg-background/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-2">{t.inventors.eyebrow}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.inventors.heading}
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              {t.inventors.intro}
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" staggerDelay={0.12}>
          {t.inventors.people.map((inventor, index) => (
            <StaggerItem key={index}>
              <Card className="bg-card/35 shadow-elegant hover:shadow-glow transition-all duration-300 overflow-hidden h-full">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-accent">
                      {inventor.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground text-center mb-2">
                    {inventor.name}
                  </h3>
                  <p className="text-accent text-center text-sm font-medium mb-4">
                    {inventor.role}
                  </p>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {inventor.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
