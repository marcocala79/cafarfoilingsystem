export const VppResults = () => {
  return (
    <section id="vpp" className="py-20 bg-muted/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2">Performance</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            VPP Simulation Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Boat speed comparison with and without CAFAR system based on validated VPP simulations
          </p>
        </div>
        
        <div className="bg-card rounded-lg shadow-elegant p-4 mb-12">
          <img 
            src="/lovable-uploads/1c80fcfe-0be3-424a-a5f9-3508faab86b1.png" 
            alt="VPP Comparison Chart - CAFAR vs Standard Configurations" 
            className="w-full h-auto rounded"
          />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-lg shadow-elegant text-center">
            <div className="text-4xl font-bold text-accent mb-2">+15%</div>
            <div className="text-muted-foreground">VMG Speed</div>
            <div className="text-xs text-muted-foreground mt-2">Upwind improvement</div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-elegant text-center">
            <div className="text-4xl font-bold text-primary mb-2">6.5m</div>
            <div className="text-muted-foreground">Mini 650</div>
            <div className="text-xs text-muted-foreground mt-2">Test platform</div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-elegant text-center">
            <div className="text-4xl font-bold text-primary-glow mb-2">VPP</div>
            <div className="text-muted-foreground">Validated Simulations</div>
            <div className="text-xs text-muted-foreground mt-2">Verified data</div>
          </div>
        </div>
      </div>
    </section>
  );
};
