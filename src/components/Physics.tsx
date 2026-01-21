import { Card, CardContent } from "@/components/ui/card";
import { ArrowUp, ArrowDown, ArrowRight } from "lucide-react";

export const Physics = () => {
  return (
    <section id="fisica" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2">La Scienza</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Principi Fisici
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprendere la fisica fondamentale dietro il miglioramento della stabilità di CAFAR
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <img 
              src="/lovable-uploads/10b89d2d-f4a5-4361-be93-b39cac2f2cfb.png" 
              alt="Diagramma Principi Fisici CAFAR" 
              className="w-full rounded-lg shadow-elegant"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <ArrowRight className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Gestione Forza di Sbandamento
                    </h3>
                    <p className="text-muted-foreground">
                      Le forze del vento creano un momento sbandante che tende a inclinare la barca. 
                      Il braccio esteso di CAFAR genera un momento opposto per mantenere la stabilità.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <ArrowDown className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Estensione Braccio di Leva
                    </h3>
                    <p className="text-muted-foreground">
                      Posizionando il foil lontano dalla linea centrale dello scafo, CAFAR aumenta 
                      drasticamente la lunghezza del braccio raddrizzante, amplificando l'effetto stabilizzante.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <ArrowUp className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Ottimizzazione Equilibrio Forze
                    </h3>
                    <p className="text-muted-foreground">
                      Il sistema bilancia le forze sbandanti con forze controbilancianti generate dal foil, 
                      creando una stabilità superiore rispetto ai design convenzionali.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-lg shadow-elegant text-center">
            <div className="text-3xl font-bold text-primary mb-2">Forza</div>
            <div className="text-sm text-muted-foreground mb-2">Momento Sbandante</div>
            <div className="text-xs text-muted-foreground">Vento × Braccio Sbandamento</div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-elegant text-center">
            <div className="text-3xl font-bold text-accent mb-2">Equilibrio</div>
            <div className="text-sm text-muted-foreground mb-2">Bilanciamento</div>
            <div className="text-xs text-muted-foreground">Sbandamento = Raddrizzamento</div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-elegant text-center">
            <div className="text-3xl font-bold text-primary-glow mb-2">Momento</div>
            <div className="text-sm text-muted-foreground mb-2">Momento Raddrizzante</div>
            <div className="text-xs text-muted-foreground">Peso × Braccio Raddrizzante</div>
          </div>
        </div>
      </div>
    </section>
  );
};
