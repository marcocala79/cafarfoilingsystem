export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">CAFAR</h3>
            <p className="text-background/70 mb-4">
              Canting Foil Arm - Tecnologia marina rivoluzionaria per prestazioni e stabilità migliorate.
            </p>
            <p className="text-background/50 text-sm">
              Brevetto N. 102021000023279
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigazione</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <button onClick={() => scrollToSection('progetto')} className="hover:text-background transition-colors">
                  Il Progetto
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('come-funziona')} className="hover:text-background transition-colors">
                  Come Funziona
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('inventori')} className="hover:text-background transition-colors">
                  Inventori
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('applicazioni')} className="hover:text-background transition-colors">
                  Applicazioni
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Inventori</h4>
            <ul className="space-y-2 text-background/70">
              <li>Francesco Belvisi</li>
              <li>Marco Calatroni</li>
            </ul>
            <p className="text-background/50 text-sm mt-4">
              Palermo, Italia
            </p>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-background/50">
          <p>&copy; 2024 CAFAR Technology. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};
