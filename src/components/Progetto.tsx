import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Wrench, Shield, Award } from "lucide-react";
import cafarBoat from "@/assets/cafar-boat.png";

export const Progetto = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Maggiore Momento Raddrizzante",
      description: "Aumenta il braccio del foil senza modificare la larghezza massima dello scafo.",
    },
    {
      icon: Wrench,
      title: "Facile Retrofit",
      description: "Sistema rimovibile, installabile su barche esistenti senza modifiche strutturali permanenti.",
    },
    {
      icon: Shield,
      title: "Massima Sicurezza",
      description: "Nessun foro nello scafo e maggiore sicurezza in caso di collisione.",
    },
    {
      icon: Award,
      title: "Design Brevettato",
      description: "Tecnologia innovativa protetta da brevetto internazionale.",
    },
  ];

  return (
    <section id="progetto" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2">Il Progetto</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Innovazione nel Foiling
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            CAFAR è un sistema rivoluzionario che permette a un monofoil di aumentare 
            il braccio di leva del foil grazie a un braccio articolato basculante, 
            garantendo prestazioni superiori mantenendo la semplicità costruttiva.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src={cafarBoat} 
              alt="CAFAR System - Vista 3D" 
              className="w-full rounded-lg"
            />
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 group">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
