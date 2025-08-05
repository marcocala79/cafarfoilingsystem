export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">CAFAR</h3>
            <p className="text-primary-foreground/80 mb-4">
              Canting Foil Arm - Revolutionary marine technology for enhanced vessel performance and stability.
            </p>
            <p className="text-primary-foreground/70 text-sm">
              Patented technology by Francesco Belvisi and Marco Calatroni
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Innovation Highlights</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>• Maximum lateral extension</li>
              <li>• Dual-side deployment capability</li>
              <li>• Modular hydrodynamic surfaces</li>
              <li>• Lightweight versatile design</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70">
          <p>&copy; 2024 CAFAR Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};