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
            A revolutionary approach to marine stability and performance through innovative foil arm technology
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
                      Pivoting Arm System
                    </h3>
                    <p className="text-muted-foreground">
                      Main pivoting arm mounted on deck carries auxiliary hydrodynamic surfaces 
                      that can be deployed on either side of the boat for maximum leverage.
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
                      Lateral Extension
                    </h3>
                    <p className="text-muted-foreground">
                      The arm swings laterally, positioning foils or rotors far from the hull 
                      to maximize stability and performance benefits.
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
                      Modular Design
                    </h3>
                    <p className="text-muted-foreground">
                      Supports various hydrodynamic surfaces including airfoils with flaps 
                      or vertical rotors for energy recovery and propulsion.
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
            Key Innovation
          </h3>
          <p className="text-primary-foreground/90 text-lg max-w-4xl mx-auto">
            Unlike fixed foils or conventional canting keels, CAFAR combines maximum lateral extension, 
            dual-side deployment, and modular hydrodynamic surfaces in one lightweight, versatile system.
          </p>
        </div>
      </div>
    </section>
  );
};