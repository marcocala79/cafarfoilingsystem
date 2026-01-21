import { Card, CardContent } from "@/components/ui/card";

export const Inventori = () => {
  const inventors = [
    {
      name: "Francesco Belvisi",
      role: "Inventore e Co-titolare del Brevetto",
      description: "Progettista navale con una passione per la vela e l'innovazione a 360°. Ideatore del concetto CAFAR e promotore dello sviluppo tecnologico.",
    },
    {
      name: "Marco Calatroni",
      role: "Co-inventore e Co-titolare del Brevetto",
      description: "Esperto di project management e relazioni industriali e commerciali. Partner fondamentale nello sviluppo e perfezionamento del sistema CAFAR.",
    },
  ];

  return (
    <section id="inventori" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2">Gli Inventori</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Le Menti Dietro CAFAR
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un progetto nato dalla passione per la vela e dalla volontà di 
            portare l'innovazione nel mondo del foiling.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {inventors.map((inventor, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 overflow-hidden">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-accent">
                    {inventor.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground text-center mb-2">
                  {inventor.name}
                </h3>
                <p className="text-accent text-center text-sm font-medium mb-4">
                  {inventor.role}
                </p>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {inventor.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
