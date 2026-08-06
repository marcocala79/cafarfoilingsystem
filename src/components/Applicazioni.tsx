import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Anchor, Factory, Lightbulb } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { useI18n } from "@/i18n/LanguageProvider";

export const Applicazioni = () => {
  const { t } = useI18n();
  const icons = [Trophy, Anchor, Factory, Lightbulb];
  const applications = t.apps.items.map((item, i) => ({ ...item, icon: icons[i] }));
  const statColors = ["text-accent", "text-primary", "text-primary-glow"];

  return (
    <section id="applications" className="py-20 bg-background/35 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-2">{t.apps.eyebrow}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.apps.heading}
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              {t.apps.intro}
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {applications.map((app, index) => (
            <StaggerItem key={index}>
              <Card className="bg-card/35 shadow-elegant hover:shadow-glow transition-all duration-300 group h-full">
                <CardContent className="p-6 text-center">
                  <div className="bg-accent/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-accent/20 transition-colors flex items-center justify-center">
                    <app.icon className="h-8 w-8 text-accent" />
                  </div>
                  <p className="text-accent text-sm font-medium mb-2">{app.category}</p>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {app.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {app.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 mt-16" staggerDelay={0.1}>
          {t.apps.stats.map((stat, i) => (
            <StaggerItem key={i}>
              <div className="bg-card/35 p-8 rounded-lg shadow-elegant text-center">
                <div className={`text-4xl font-bold mb-2 ${statColors[i]}`}>{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
