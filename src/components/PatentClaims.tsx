import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Target,
  Layers,
  Repeat,
  BarChart3,
  SlidersHorizontal,
  RotateCcw,
  Shield,
  Wrench,
  Link2,
  Cable,
  Move,
  Star,
  Gem,
  Rocket,
  Brain,
  Settings,
} from "lucide-react";

type ClaimGroup = {
  id: string;
  color: string;
  colorClass: string;
  icon: React.ElementType;
  label: string;
  title: string;
  description: string;
  technicalValue: string[];
  applications: { sector: string; stars: number }[];
  insight: string;
};

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-3.5 w-3.5 ${
          i < count
            ? "fill-accent text-accent"
            : "text-muted-foreground/30"
        }`}
      />
    ))}
  </div>
);

const claims: ClaimGroup[] = [
  {
    id: "claim-1",
    color: "🔴",
    colorClass: "bg-destructive/10 text-destructive border-destructive/30",
    icon: Target,
    label: "CLAIM 1 — CORE",
    title: "Auxiliary hydrodynamic surface",
    description:
      "Hydrodynamic surface carried by an oscillating arm, selectively lowerable to starboard or port and laterally distanced from the hull.",
    technicalValue: [
      "Hydrodynamic righting moment generation",
      "Active lateral lever displacement",
      "Architecture independent from traditional foils (not hull-bound)",
    ],
    applications: [
      { sector: "Open prototypes / one-off", stars: 5 },
      { sector: "Performance multihulls", stars: 5 },
      { sector: "Record boats", stars: 5 },
      { sector: "High-end performance cruiser", stars: 4 },
      { sector: "Research & experimentation", stars: 5 },
    ],
    insight: "Heart of the patent — always license.",
  },
  {
    id: "claim-2",
    color: "🟠",
    colorClass: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30",
    icon: Layers,
    label: "CLAIM 2 — DUAL ARM",
    title: "Double arm architecture",
    description:
      "Main arm + auxiliary arm, both articulated with axes parallel to the longitudinal.",
    technicalValue: [
      "Kinematic / load decoupling",
      "Better surface orientation control",
      "Scalability for larger boats",
    ],
    applications: [
      { sector: "Multihulls (load management)", stars: 5 },
      { sector: "IMOCA / open ocean classes", stars: 4 },
      { sector: "Prefabricated kit systems", stars: 4 },
      { sector: "Modular experimental projects", stars: 5 },
    ],
    insight: "Industrialization (kits, subsystems).",
  },
  {
    id: "claim-3",
    color: "🟡",
    colorClass: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/30",
    icon: Repeat,
    label: "CLAIM 3 — SYMMETRIC PROFILE",
    title: "Double symmetric airfoil",
    description: "Two opposite airfoils on the auxiliary arm.",
    technicalValue: [
      "Bidirectional operation without replacement",
      "Reduced complex rotation mechanisms",
      "Performance continuity on both tacks",
    ],
    applications: [
      { sector: "Offshore racing", stars: 4 },
      { sector: "Sport multihulls", stars: 4 },
      { sector: "Simplified one-off", stars: 4 },
    ],
    insight: "Reliability and simplicity.",
  },
  {
    id: "claim-4",
    color: "🟡",
    colorClass: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/30",
    icon: BarChart3,
    label: "CLAIM 4 — MULTI-ELEMENT",
    title: "Double pair of airfoils",
    description: "Two pairs of overlapping and spaced airfoils.",
    technicalValue: [
      "Effective surface increase",
      "Better cavitation control",
      "High-lift profile without excessive span",
    ],
    applications: [
      { sector: "Record boats", stars: 5 },
      { sector: "High-speed prototypes", stars: 4 },
      { sector: "Fluid dynamics research", stars: 5 },
    ],
    insight: "High IP value, R&D-oriented.",
  },
  {
    id: "claim-5",
    color: "🟠",
    colorClass: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30",
    icon: SlidersHorizontal,
    label: "CLAIM 5 — ACTIVE FLAPS",
    title: "Active flaps on every airfoil",
    description: "Each airfoil equipped with an adjustable flap.",
    technicalValue: [
      "Fine control of lift and load",
      "Dynamic adaptation to speed/sea conditions",
      "Bridge between sailing and aeronautics",
    ],
    applications: [
      { sector: "Records & experimentation", stars: 5 },
      { sector: "Advanced mechatronic projects", stars: 4 },
      { sector: "Semi-autonomous boats", stars: 4 },
    ],
    insight: "High-budget / high-expertise target.",
  },
  {
    id: "claim-6",
    color: "🔵",
    colorClass: "bg-primary/10 text-primary border-primary/30",
    icon: RotateCcw,
    label: "CLAIM 6 — VERTICAL ROTOR",
    title: "Blade rotor surface",
    description:
      "Hydrodynamic surface in blade rotor form, also in autorotation.",
    technicalValue: [
      "Hybrid concept: foil + turbine",
      "Potential energy recovery",
      "Highly unconventional architecture",
    ],
    applications: [
      { sector: "Experimental research", stars: 5 },
      { sector: "Visionary / concept projects", stars: 4 },
      { sector: "Non-sport applications", stars: 4 },
    ],
    insight: "Fence IP — blocks third parties.",
  },
  {
    id: "claim-7",
    color: "🟢",
    colorClass: "bg-accent/10 text-accent border-accent/30",
    icon: Shield,
    label: "CLAIM 7 — STRUCTURAL SUPPORTS",
    title: "Lateral structural supports",
    description:
      "Supports to hold the arm in operating position.",
    technicalValue: [
      "Deck load reduction",
      "Structural scalability",
      "Improved offshore reliability",
    ],
    applications: [
      { sector: "Ocean offshore", stars: 5 },
      { sector: "Large / heavy boats", stars: 4 },
      { sector: "Industrialization", stars: 5 },
    ],
    insight: "Serious shipyards.",
  },
  {
    id: "claim-8-9",
    color: "🟢",
    colorClass: "bg-accent/10 text-accent border-accent/30",
    icon: Wrench,
    label: "CLAIMS 8–9 — ACTUATION",
    title: "Motorized / manual actuation",
    description: "Main arm control — covers both high-tech and low-tech.",
    technicalValue: [
      "Complete coverage: high-tech and low-tech",
      "No loopholes for alternative designs",
    ],
    applications: [{ sector: "All markets", stars: 5 }],
    insight: "Defensive, extremely important.",
  },
  {
    id: "claim-10-12",
    color: "🟢",
    colorClass: "bg-accent/10 text-accent border-accent/30",
    icon: Link2,
    label: "CLAIMS 10–12 — LINKED KINEMATICS",
    title: "Constrained auxiliary arm control",
    description:
      "Foil position dependent on the main arm.",
    technicalValue: [
      "Automatic coordination",
      "Human error reduction",
      "Ideal for semi-automatic systems",
    ],
    applications: [
      { sector: "Multihulls", stars: 4 },
      { sector: "Integrated systems", stars: 4 },
      { sector: "Partial autonomy", stars: 4 },
    ],
    insight: "Automation and error-proof design.",
  },
  {
    id: "claim-13",
    color: "🟢",
    colorClass: "bg-accent/10 text-accent border-accent/30",
    icon: Cable,
    label: "CLAIM 13 — HALYARD / DOWNHAUL",
    title: "Practical sailing implementation",
    description:
      "Concrete and seamanlike implementation using traditional rigging.",
    technicalValue: [
      "Immediate buildability",
      "Strong nautical credibility",
      'Reduces "theoretical invention" risk',
    ],
    applications: [
      { sector: "Traditional shipyards", stars: 5 },
      { sector: "Retrofit", stars: 4 },
    ],
    insight: "Theory meets real-world sailing.",
  },
  {
    id: "claim-14-15",
    color: "🔵",
    colorClass: "bg-primary/10 text-primary border-primary/30",
    icon: Move,
    label: "CLAIMS 14–15 — TRANSLATION & ROTATION",
    title: "Longitudinal translation + vertical rotation",
    description:
      "Fore/aft mobility and vertical rotation of the surface.",
    technicalValue: [
      "Longitudinal trim control",
      "Dynamic trim adjustment",
      "Extreme design flexibility",
    ],
    applications: [
      { sector: "Advanced prototypes", stars: 5 },
      { sector: "Records / R&D", stars: 5 },
    ],
    insight: "Next-generation foiling architectures.",
  },
];

const strategicPackages = [
  {
    icon: Gem,
    label: "Industrial Package",
    claims: "Claims 1–2–7",
    description: "Core IP for shipyard licensing and series production.",
    colorClass: "text-accent",
  },
  {
    icon: Rocket,
    label: "Pure Performance",
    claims: "Claims 3–5",
    description: "Maximum speed and competitive advantage on the water.",
    colorClass: "text-orange-500",
  },
  {
    icon: Brain,
    label: "Future / IP Defence",
    claims: "Claims 6, 14, 15",
    description:
      "Frontier technologies and strategic blocking of competitors.",
    colorClass: "text-primary",
  },
  {
    icon: Settings,
    label: "Buildability & Licensing",
    claims: "Claims 8–13",
    description:
      "Practical implementation enabling real-world deployment and licensing.",
    colorClass: "text-accent",
  },
];

export const PatentClaims = () => {
  return (
    <section id="patent" className="py-20 bg-background/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-2">Intellectual Property</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Patent claim map
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              CAFAR is not just "a foil" — it's a platform of mobile hydrodynamic
              architectures, protected claim by claim.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Patent application IT 102021000023279 — "Sailing vessel with
              auxiliary hydrodynamic surface"
            </p>
          </div>
        </ScrollReveal>

        {/* Claims Accordion */}
        <Accordion type="multiple" className="space-y-3 mb-16">
          {claims.map((claim) => (
            <AccordionItem
              key={claim.id}
              value={claim.id}
              className="border rounded-lg bg-card shadow-elegant overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-4 text-left">
                  <div
                    className={`p-2.5 rounded-lg border ${claim.colorClass}`}
                  >
                    <claim.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                      {claim.label}
                    </p>
                    <p className="text-base font-bold text-foreground">
                      {claim.title}
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="text-muted-foreground mb-5">{claim.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Technical Value */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                      Technical value
                    </h4>
                    <ul className="space-y-2">
                      {claim.technicalValue.map((v, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-accent mt-1">▸</span>
                          {v}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applications Table */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                      Applications
                    </h4>
                    <div className="space-y-2">
                      {claim.applications.map((app, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between text-sm"
                        >
                          <span className="text-muted-foreground">
                            {app.sector}
                          </span>
                          <StarRating count={app.stars} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Insight */}
                <div className="mt-5 p-3 rounded-md bg-muted/50 border border-border">
                  <p className="text-sm text-foreground font-medium">
                    👉 {claim.insight}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <ScrollReveal>
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Strategic reading
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Claims group naturally into four strategic licensing packages.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {strategicPackages.map((pkg, i) => (
            <StaggerItem key={i}>
              <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 group h-full">
                <CardContent className="p-6 text-center">
                  <pkg.icon
                    className={`h-8 w-8 mx-auto mb-3 ${pkg.colorClass}`}
                  />
                  <Badge variant="secondary" className="mb-3">
                    {pkg.claims}
                  </Badge>
                  <h4 className="font-bold text-foreground mb-2">{pkg.label}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pkg.description}
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
