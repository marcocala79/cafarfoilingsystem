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
              Canting Foil Arm - Revolutionary marine technology for enhanced vessel performance and stability.
            </p>
            <p className="text-background/50 text-sm">
              Patent No. 102021000023279
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <button onClick={() => scrollToSection('project')} className="hover:text-background transition-colors">
                  The Project
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('how-it-works')} className="hover:text-background transition-colors">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('inventors')} className="hover:text-background transition-colors">
                  Inventors
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('applications')} className="hover:text-background transition-colors">
                  Applications
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Inventors</h4>
            <ul className="space-y-2 text-background/70">
              <li>Francesco Belvisi</li>
              <li>Marco Calatroni</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center text-background/50">
          <p>&copy; 2024 CAFAR Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
