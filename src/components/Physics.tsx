import { ScrollReveal } from "@/components/ScrollReveal";
import cafarDiagram from "@/assets/cafar-diagram-original.png";

export const Physics = () => {
  return (
    <section id="physics" className="py-20 bg-background/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-2">The Science</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Physics Principles
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Understanding the fundamental physics behind CAFAR's stability enhancement
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-card/35 backdrop-blur-sm rounded-lg p-4 shadow-elegant max-w-4xl mx-auto">
            <img
              src={cafarDiagram}
              alt="CAFAR force diagram showing heeling and righting forces"
              className="w-full rounded-md"
              loading="lazy"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
