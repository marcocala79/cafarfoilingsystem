export const VppResults = () => {
  return (
    <section id="vpp" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2">Prestazioni</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Risultati Simulazione VPP
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Confronto velocità della barca con e senza sistema CAFAR basato su simulazioni VPP validate
          </p>
        </div>
        
        <div className="bg-card rounded-lg shadow-elegant p-4 mb-12">
          <img 
            src="/lovable-uploads/1c80fcfe-0be3-424a-a5f9-3508faab86b1.png" 
            alt="Grafico Confronto VPP - CAFAR vs Configurazioni Standard" 
            className="w-full h-auto rounded"
          />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-lg shadow-elegant text-center">
            <div className="text-4xl font-bold text-accent mb-2">+15%</div>
            <div className="text-muted-foreground">Velocità VMG</div>
            <div className="text-xs text-muted-foreground mt-2">Miglioramento in bolina</div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-elegant text-center">
            <div className="text-4xl font-bold text-primary mb-2">6.5m</div>
            <div className="text-muted-foreground">Mini 650</div>
            <div className="text-xs text-muted-foreground mt-2">Piattaforma di test</div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-elegant text-center">
            <div className="text-4xl font-bold text-primary-glow mb-2">VPP</div>
            <div className="text-muted-foreground">Simulazioni Validate</div>
            <div className="text-xs text-muted-foreground mt-2">Dati verificati</div>
          </div>
        </div>
      </div>
    </section>
  );
};
