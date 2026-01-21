import cafarElements from "@/assets/cafar-elements.jpg";
import cafarConditions from "@/assets/cafar-conditions.jpg";
import cafarFlymode from "@/assets/cafar-flymode.jpg";

export const ComeFunziona = () => {
  const steps = [
    {
      number: "01",
      title: "Two Main Components",
      description: "The CAFAR system is based on two components: the canting arm and the symmetric canting T-foil. This combination delivers superior performance.",
      image: cafarElements,
    },
    {
      number: "02",
      title: "Operating Conditions",
      description: "The system automatically adapts to wind conditions: light wind sailing, downwind, upwind. The arm extends laterally to maximize the righting moment.",
      image: cafarConditions,
    },
    {
      number: "03",
      title: "Fly and Sail Modes",
      description: "The transition between FLY mode (foiling) and SAIL mode (traditional sailing) occurs smoothly during tacks, ensuring stability and performance in every situation.",
      image: cafarFlymode,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technology in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how the CAFAR system transforms sailing, 
            combining advanced engineering and intelligent design.
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
