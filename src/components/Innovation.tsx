import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Lightbulb, Wrench } from "lucide-react";

export const Innovation = () => {
  const features = [
    {
      label: "Patented Design",
      color: "bg-primary text-primary-foreground"
    },
    {
      label: "Dual-Side Deployment",
      color: "bg-accent text-accent-foreground"
    },
    {
      label: "Modular System",
      color: "bg-primary-glow text-primary-foreground"
    },
    {
      label: "Lightweight",
      color: "bg-secondary text-secondary-foreground"
    }
  ];

  return (
    <section id="innovation" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why CAFAR is Innovative
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Breaking barriers in marine technology with a revolutionary approach to vessel performance
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-elegant hover:shadow-glow transition-smooth text-center">
            <CardContent className="p-8">
              <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                First of Its Kind
              </h3>
              <p className="text-muted-foreground">
                Unlike fixed foils or conventional canting keels, CAFAR introduces 
                a completely new paradigm in marine stability systems.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-elegant hover:shadow-glow transition-smooth text-center">
            <CardContent className="p-8">
              <div className="bg-gradient-ocean p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Maximum Efficiency
              </h3>
              <p className="text-muted-foreground">
                Combines multiple advantages in one system: lateral extension, 
                dual-side deployment, and modular hydrodynamic surfaces.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-elegant hover:shadow-glow transition-smooth text-center">
            <CardContent className="p-8">
              <div className="bg-accent p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Wrench className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Versatile Design
              </h3>
              <p className="text-muted-foreground">
                Lightweight and adaptable system that can be configured for 
                various vessel types and performance requirements.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-gradient-hero rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-primary-foreground mb-6">
            Revolutionary Marine Technology
          </h3>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-4xl mx-auto leading-relaxed">
            CAFAR dramatically boosts performance with a lightweight, versatile design that 
            sets new standards in marine engineering and vessel efficiency.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {features.map((feature, index) => (
              <Badge key={index} className={`${feature.color} text-lg px-4 py-2`}>
                {feature.label}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};