import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Anchor, Factory, Lightbulb } from "lucide-react";

export const Applicazioni = () => {
  const applications = [
    {
      icon: Trophy,
      category: "Performance",
      title: "Regate Oceaniche",
      description: "Ideale per competizioni come la Mini-Transat, dove prestazioni e affidabilità sono fondamentali.",
    },
    {
      icon: Anchor,
      category: "Versatilità",
      title: "Yacht da Crociera",
      description: "Retrofit su yacht esistenti per migliorare comfort e velocità senza modifiche strutturali invasive.",
    },
    {
      icon: Factory,
      category: "Scalabilità",
      title: "Produzione in Serie",
      description: "Sistema standardizzato adatto alla produzione industriale per diverse classi di imbarcazioni.",
    },
    {
      icon: Lightbulb,
      category: "Innovazione",
      title: "Prototipi e R&D",
      description: "Piattaforma ideale per la sperimentazione e lo sviluppo di nuove tecnologie nel foiling.",
    },
  ];

  return (
    <section id="applicazioni" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2">Applicazioni</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Dove Utilizzare CAFAR
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La versatilità del sistema CAFAR lo rende adatto a molteplici 
            applicazioni nel mondo della vela e dell'industria nautica.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="bg-accent/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-accent/20 transition-colors flex items-center justify-center">
                  <app.icon className="h-8 w-8 text-accent" />
                </div>
                <p className="text-accent text-sm font-medium mb-2">{app.category}</p>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {app.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {app.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-card p-8 rounded-lg shadow-elegant text-center">
            <div className="text-4xl font-bold text-accent mb-2">+15%</div>
            <div className="text-muted-foreground">Velocità VMG</div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-elegant text-center">
            <div className="text-4xl font-bold text-primary mb-2">6.5m</div>
            <div className="text-muted-foreground">Mini 650</div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-elegant text-center">
            <div className="text-4xl font-bold text-primary-glow mb-2">VPP</div>
            <div className="text-muted-foreground">Simulazioni Validate</div>
          </div>
        </div>
      </div>
    </section>
  );
};
