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
import { useI18n } from "@/i18n/LanguageProvider";

// Visual metadata (language-independent), aligned by index with t.patent.claims
const claimMeta = [
  { icon: Target, label: "CLAIM 1 — CORE", colorClass: "bg-destructive/10 text-destructive border-destructive/30" },
  { icon: Layers, label: "CLAIM 2 — DUAL ARM", colorClass: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  { icon: Repeat, label: "CLAIM 3 — SYMMETRIC PROFILE", colorClass: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/30" },
  { icon: BarChart3, label: "CLAIM 4 — MULTI-ELEMENT", colorClass: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/30" },
  { icon: SlidersHorizontal, label: "CLAIM 5 — ACTIVE FLAPS", colorClass: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30" },
  { icon: RotateCcw, label: "CLAIM 6 — VERTICAL ROTOR", colorClass: "bg-primary/10 text-primary border-primary/30" },
  { icon: Shield, label: "CLAIM 7 — STRUCTURAL SUPPORTS", colorClass: "bg-accent/10 text-accent border-accent/30" },
  { icon: Wrench, label: "CLAIMS 8–9 — ACTUATION", colorClass: "bg-accent/10 text-accent border-accent/30" },
  { icon: Link2, label: "CLAIMS 10–12 — LINKED KINEMATICS", colorClass: "bg-accent/10 text-accent border-accent/30" },
  { icon: Cable, label: "CLAIM 13 — HALYARD / DOWNHAUL", colorClass: "bg-accent/10 text-accent border-accent/30" },
  { icon: Move, label: "CLAIMS 14–15 — TRANSLATION & ROTATION", colorClass: "bg-primary/10 text-primary border-primary/30" },
  { icon: Settings, label: "CLAIM — INTEGRATED CONTROL", colorClass: "bg-accent/10 text-accent border-accent/30" },
];

const packageMeta = [
  { icon: Gem, colorClass: "text-accent" },
  { icon: Rocket, colorClass: "text-orange-500" },
  { icon: Brain, colorClass: "text-primary" },
  { icon: Settings, colorClass: "text-accent" },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-3.5 w-3.5 ${
          i < count ? "fill-accent text-accent" : "text-muted-foreground/30"
        }`}
      />
    ))}
  </div>
);

export const PatentClaims = () => {
  const { t } = useI18n();
  const claims = t.patent.claims.map((c, i) => ({ ...c, ...claimMeta[i], id: `claim-${i + 1}` }));
  const packages = t.patent.packages.map((p, i) => ({ ...p, ...packageMeta[i] }));

  return (
    <section id="patent" className="py-20 bg-background/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-2">{t.patent.eyebrow}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t.patent.heading}
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              {t.patent.intro}
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              {t.patent.sub}
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
                  <div className={`p-2.5 rounded-lg border ${claim.colorClass}`}>
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
                      {t.patent.techValueLabel}
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
                      {t.patent.applicationsLabel}
                    </h4>
                    <div className="space-y-2">
                      {claim.applications.map((app, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between text-sm"
                        >
                          <span className="text-muted-foreground">{app.sector}</span>
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
              {t.patent.strategicTitle}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.patent.strategicIntro}
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
          {packages.map((pkg, i) => (
            <StaggerItem key={i}>
              <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 group h-full">
                <CardContent className="p-6 text-center">
                  <pkg.icon className={`h-8 w-8 mx-auto mb-3 ${pkg.colorClass}`} />
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
