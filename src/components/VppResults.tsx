import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Wind, Gauge } from "lucide-react";

export const VppResults = () => {
  return (
    <section id="vpp-results" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            VPP Performance Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Velocity Prediction Program simulation demonstrates CAFAR's superior speed performance across all sailing conditions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="shadow-elegant hover:shadow-glow transition-smooth">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="bg-gradient-primary p-2 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-primary-foreground" />
                </div>
                Upwind Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                CAFAR shows consistent speed advantages in upwind conditions, maintaining superior performance throughout the wind range.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-elegant hover:shadow-glow transition-smooth">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="bg-gradient-ocean p-2 rounded-lg">
                  <Wind className="h-5 w-5 text-primary-foreground" />
                </div>
                Reaching Excellence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Maximum speed gains achieved in reaching conditions (TWA 90°), where CAFAR's lift generation is most effective.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-elegant hover:shadow-glow transition-smooth">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="bg-accent p-2 rounded-lg">
                  <Gauge className="h-5 w-5 text-accent-foreground" />
                </div>
                Downwind Efficiency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Significant improvements in downwind sailing with spinnaker (TWA 135°), demonstrating versatility across all points of sail.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-card rounded-2xl p-8 shadow-elegant">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Mini 6.50 VPP Speed Comparison
            </h3>
            <p className="text-muted-foreground">
              Simulation results comparing boat speed performance with no foil, standard foil, and CAFAR foil configurations
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/1c80fcfe-0be3-424a-a5f9-3508faab86b1.png" 
              alt="VPP Speed Results - CAFAR vs Standard Foil vs No Foil" 
              className="w-full rounded-lg shadow-elegant"
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">+25%</div>
              <div className="text-sm text-muted-foreground">Speed Increase</div>
              <div className="text-xs text-muted-foreground">Reaching Conditions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">+15%</div>
              <div className="text-sm text-muted-foreground">Upwind Gain</div>
              <div className="text-xs text-muted-foreground">vs Standard Foil</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-glow mb-2">+20%</div>
              <div className="text-sm text-muted-foreground">Downwind Boost</div>
              <div className="text-xs text-muted-foreground">with Spinnaker</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-primary rounded-2xl p-8 text-center mt-12">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Proven Performance Advantage
          </h3>
          <p className="text-primary-foreground/90 text-lg max-w-4xl mx-auto">
            VPP analysis confirms CAFAR's superior speed performance across all sailing conditions, 
            with particularly dramatic improvements in reaching and moderate gains in upwind and downwind sailing.
          </p>
        </div>
      </div>
    </section>
  );
};