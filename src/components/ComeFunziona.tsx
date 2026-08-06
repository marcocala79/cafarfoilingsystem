import cafarElements from "@/assets/cafar-elements.jpg";
import cafarConditions from "@/assets/cafar-conditions.jpg";
import cafarFlymode from "@/assets/cafar-flymode.jpg";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useI18n } from "@/i18n/LanguageProvider";

export const ComeFunziona = () => {
  const { t } = useI18n();
  const images = [cafarElements, cafarConditions, cafarFlymode];
  const steps = t.how.steps.map((s, i) => ({
    ...s,
    number: `0${i + 1}`,
    image: images[i],
  }));

  return (
    <section id="how-it-works" className="py-20 bg-background/35 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-2">{t.how.eyebrow}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.how.heading}
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              {t.how.intro}
            </p>
          </div>
        </ScrollReveal>
        
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <ScrollReveal direction={index % 2 === 0 ? "left" : "right"} delay={0.1}>
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-6xl font-bold text-accent/20">{step.number}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction={index % 2 === 0 ? "right" : "left"} delay={0.2}>
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="relative overflow-hidden rounded-lg shadow-elegant">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
