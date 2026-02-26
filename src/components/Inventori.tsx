import { Card, CardContent } from "@/components/ui/card";

export const Inventori = () => {
  const inventors = [
    {
      name: "Francesco Belvisi",
      role: "Inventor and Patent Co-holder",
      description: "Naval designer with a passion for sailing and 360° innovation. Creator of the CAFAR concept and promoter of technological development.",
    },
    {
      name: "Marco Calatroni",
      role: "Patent Co-holder and strategic backer",
      description: "Expert in project management and industrial and commercial relations. Key partner in the development and refinement of the CAFAR system.",
    },
  ];

  return (
    <section id="inventors" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2">The Inventors</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Minds Behind CAFAR
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A project born from a passion for sailing and the desire to 
            bring innovation to the world of foiling.
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
