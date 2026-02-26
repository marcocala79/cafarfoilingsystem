import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Wrench, Shield, Award } from "lucide-react";
import cafarBoat from "@/assets/cafar-boat.png";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

export const Progetto = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Greater Righting Moment",
      description: "Increases the foil arm without modifying the maximum hull width.",
    },
    {
      icon: Wrench,
      title: "Affordable Production",
      description: "Significantly lower manufacturing costs compared to traditional foiling systems, making high performance accessible.",
    },
    {
      icon: Shield,
      title: "Maximum Safety",
      description: "No holes in the hull and greater safety in case of collision.",
    },
    {
      icon: Award,
      title: "Patented Design",
      description: "Innovative technology protected by international patent.",
    },
  ];

  return (
    <section id="project" className="py-20 bg-background/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-2">The Project</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Innovation in Foiling
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              CAFAR is a revolutionary system that allows a monofoil to increase 
              the foil lever arm through an articulated canting arm, 
              delivering superior performance while maintaining construction simplicity.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <img 
                src={cafarBoat} 
                alt="CAFAR System - 3D View" 
                className="w-full rounded-lg"
              />
            </div>
          </ScrollReveal>
          
          <StaggerContainer className="grid sm:grid-cols-2 gap-6" staggerDelay={0.12}>
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 group h-full">
                  <CardContent className="p-6">
                    <div className="bg-accent/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                      <feature.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
