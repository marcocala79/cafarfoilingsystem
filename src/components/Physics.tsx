import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { motion } from "framer-motion";

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

        {/* Force Breakdown Steps */}
        <StaggerContainer className="space-y-6 mb-16" staggerDelay={0.15}>
          {forces.map((force, index) => (
            <StaggerItem key={index}>
              <div className="bg-card/35 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-elegant">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Step number + direction */}
                  <div className="flex items-center gap-4 md:w-48 shrink-0">
                    <span className={`text-4xl font-black ${force.textColor}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <span className={`text-2xl font-bold ${force.textColor}`}>
                        {force.direction}
                      </span>
                      <h3 className="text-lg font-bold text-foreground">
                        {force.label}
                      </h3>
                    </div>
                  </div>

                  {/* Description + formula */}
                  <div className="flex-1 space-y-3">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {force.description}
                    </p>
                    <code className={`text-xs font-mono ${force.textColor} bg-background/40 px-3 py-1 rounded-full`}>
                      {force.formula}
                    </code>
                  </div>

                  {/* Intensity bar */}
                  <div className="md:w-48 shrink-0">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                      <span>Intensity</span>
                      <span className={`font-bold ${force.textColor}`}>{force.intensity}%</span>
                    </div>
                    <div className="h-3 bg-background/40 rounded-full overflow-hidden">
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
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

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
