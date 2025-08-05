import { Card, CardContent } from "@/components/ui/card";
import { Zap, RotateCcw, Settings } from "lucide-react";
import diagramImage from "@/assets/cafar-diagram.jpg";

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How CAFAR Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            An articulated arm system with symmetric T-foil for maximum stability and performance
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <Card className="shadow-elegant hover:shadow-glow transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <Zap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Articulated Arm System
                    </h3>
                    <p className="text-muted-foreground">
                      Main arm pivots around a longitudinal axis to swing between sides, while an auxiliary arm 
                      provides additional angular adjustment for optimal foil positioning.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant hover:shadow-glow transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-ocean p-3 rounded-lg">
                    <RotateCcw className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Symmetric T-Foil Deployment
                    </h3>
                    <p className="text-muted-foreground">
                      The T-foil deploys on windward or leeward side as needed, positioned far from the hull 
                      to create maximum righting moment and hydrodynamic lift.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant hover:shadow-glow transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent p-3 rounded-lg">
                    <Settings className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Dual Operating Modes
                    </h3>
                    <p className="text-muted-foreground">
                      Sail Mode for conventional sailing with minimal immersion, and Fly Mode where 
                      the foil actively generates lift to partially or fully unload the hull.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:order-first">
            <div className="relative">
              <img 
                src={diagramImage} 
                alt="CAFAR System Diagram" 
                className="w-full rounded-lg shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-ocean rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Retrofit-Ready Installation
          </h3>
          <p className="text-primary-foreground/90 text-lg max-w-4xl mx-auto">
            Bolt-on deck mounting system requires no hull modifications, making it a cost-effective 
            performance upgrade for existing boats with manual or motorized operation options.
          </p>
        </div>
      </div>
    </section>
  );
};