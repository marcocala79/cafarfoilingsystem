import cafarElements from "@/assets/cafar-elements.jpg";
import cafarConditions from "@/assets/cafar-conditions.jpg";
import cafarFlymode from "@/assets/cafar-flymode.jpg";

export const ComeFunziona = () => {
  const steps = [
    {
      number: "01",
      title: "Due Elementi Principali",
      description: "Il sistema CAFAR si basa su due componenti: il braccio basculante (canting arm) e il T-foil simmetrico basculante. Questa combinazione permette di ottenere prestazioni superiori.",
      image: cafarElements,
    },
    {
      number: "02",
      title: "Condizioni Operative",
      description: "Il sistema si adatta automaticamente alle condizioni di vento: navigazione con vento leggero, poppa, bolina. Il braccio si estende lateralmente per massimizzare il momento raddrizzante.",
      image: cafarConditions,
    },
    {
      number: "03",
      title: "Modalità Volo e Navigazione",
      description: "Il passaggio tra FLY mode (in foiling) e SAIL mode (navigazione tradizionale) avviene in modo fluido durante le virate, garantendo stabilità e performance in ogni situazione.",
      image: cafarFlymode,
    },
  ];

  return (
    <section id="come-funziona" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2">Come Funziona</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tecnologia in Azione
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scopri come il sistema CAFAR trasforma la navigazione a vela, 
            combinando ingegneria avanzata e design intelligente.
          </p>
        </div>
        
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl font-bold text-accent/20">{step.number}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="relative overflow-hidden rounded-lg shadow-elegant">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
