import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Zap, Cog, Gauge } from "lucide-react";

export const Advantages = () => {
  const advantages = [
    {
      icon: TrendingUp,
      title: "Greater Righting Moment",
      description: "Achieves wide effective beam without increasing hull width, boosting stability and speed through maximum leverage positioning.",
      gradient: "bg-gradient-primary"
    },
    {
      icon: Cog,
      title: "Retrofit-Friendly",
      description: "No hull penetration required - bolt-on deck mounting makes it a cost-effective performance upgrade for existing boats.",
      gradient: "bg-gradient-ocean"
    },
    {
      icon: Zap,
      title: "Safety Advantage",
      description: "Reduced structural vulnerability compared to hull-integrated foils, with safer collision characteristics and easier maintenance access.",
      gradient: "bg-accent"
    },
    {
      icon: Gauge,
      title: "Performance Gains Across Conditions",
      description: "Improves upwind, reaching, and downwind performance as demonstrated in VPP simulations, with benefits in all sailing modes.",
      gradient: "bg-primary"
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Revolutionary Advantages
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            CAFAR delivers unprecedented performance improvements through innovative engineering
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-glow transition-smooth group">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className={`${advantage.gradient} p-3 rounded-lg group-hover:scale-110 transition-smooth`}>
                    <advantage.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {advantage.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-lg shadow-elegant text-center">
            <div className="text-3xl font-bold text-primary mb-2">3x</div>
            <div className="text-muted-foreground">Improved Stability</div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-elegant text-center">
            <div className="text-3xl font-bold text-accent mb-2">50%</div>
            <div className="text-muted-foreground">Drag Reduction</div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-elegant text-center">
            <div className="text-3xl font-bold text-primary-glow mb-2">100%</div>
            <div className="text-muted-foreground">Dual-Side Coverage</div>
          </div>
        </div>
      </div>
    </section>
  );
};