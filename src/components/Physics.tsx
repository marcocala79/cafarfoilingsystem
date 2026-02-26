import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import cafarDiagram from "@/assets/cafar-diagram.jpg";

const forces = [
  {
    label: "Heeling Force",
    direction: "→",
    formula: "F_heel = Wind pressure × Sail area",
    description: "Wind pushes the sails, creating a lateral force that tends to tip the boat.",
    color: "from-cyan-400 to-cyan-600",
    barColor: "bg-cyan-500",
    intensity: 70,
    textColor: "text-cyan-400",
  },
  {
    label: "Weight",
    direction: "↓",
    formula: "W = m × g",
    description: "Gravity acts downward through the center of mass, including keel and CAFAR arm weight.",
    color: "from-green-400 to-green-600",
    barColor: "bg-green-500",
    intensity: 85,
    textColor: "text-green-400",
  },
  {
    label: "Righting Arm",
    direction: "↔",
    formula: "M_right = W × Righting Arm Length",
    description: "CAFAR extends the foil laterally, dramatically increasing the righting arm and the stabilizing moment.",
    color: "from-fuchsia-400 to-fuchsia-600",
    barColor: "bg-fuchsia-500",
    intensity: 95,
    textColor: "text-fuchsia-400",
  },
  {
    label: "Heeling Arm",
    direction: "↕",
    formula: "M_heel = F_heel × Heeling Arm",
    description: "The vertical distance between the sail's center of effort and the hull's center of lateral resistance.",
    color: "from-amber-400 to-amber-600",
    barColor: "bg-amber-500",
    intensity: 60,
    textColor: "text-amber-400",
  },
];

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-start">
          {/* Force Breakdown Steps */}
          <StaggerContainer className="space-y-6" staggerDelay={0.15}>
            {forces.map((force, index) => (
              <StaggerItem key={index}>
                <div className="bg-card/35 backdrop-blur-sm rounded-lg p-5 shadow-elegant">
                  <div className="flex items-center gap-4 mb-3">
                    <span className={`text-3xl font-black ${force.textColor}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <span className={`text-xl font-bold ${force.textColor}`}>
                        {force.direction}
                      </span>
                      <h3 className="text-base font-bold text-foreground">
                        {force.label}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                    {force.description}
                  </p>
                  <code className={`text-xs font-mono ${force.textColor} bg-background/40 px-3 py-1 rounded-full`}>
                    {force.formula}
                  </code>
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                      <span>Intensity</span>
                      <span className={`font-bold ${force.textColor}`}>{force.intensity}%</span>
                    </div>
                    <div className="h-2.5 bg-background/40 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${force.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${force.intensity}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.15, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Original Diagram */}
          <ScrollReveal delay={0.2}>
            <div className="bg-card/35 backdrop-blur-sm rounded-lg p-4 shadow-elegant sticky top-24">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3 text-center">Force Diagram Reference</p>
              <img
                src={cafarDiagram}
                alt="CAFAR force diagram showing heeling and righting forces"
                className="w-full rounded-md"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Equilibrium summary */}
        <ScrollReveal delay={0.3}>
          <div className="bg-card/35 backdrop-blur-sm rounded-lg shadow-elegant p-8 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-3">Equilibrium Condition</h3>
            <div className="flex items-center justify-center gap-3 flex-wrap mb-4">
              <code className="text-cyan-400 font-mono text-sm bg-background/40 px-3 py-1.5 rounded-full">
                F_heel × Heeling Arm
              </code>
              <span className="text-2xl font-bold text-accent">=</span>
              <code className="text-fuchsia-400 font-mono text-sm bg-background/40 px-3 py-1.5 rounded-full">
                W × Righting Arm
              </code>
            </div>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              CAFAR increases the righting arm without modifying hull width, 
              delivering a superior stabilizing moment at any wind condition.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
