import { Navbar } from "@/components/Navbar";
import { SideNav } from "@/components/SideNav";
import { Hero } from "@/components/Hero";
import { Progetto } from "@/components/Progetto";
import { ComeFunziona } from "@/components/ComeFunziona";
import { Physics } from "@/components/Physics";
import { VppResults } from "@/components/VppResults";

import { Applicazioni } from "@/components/Applicazioni";
import { PatentClaims } from "@/components/PatentClaims";
import { Inventori } from "@/components/Inventori";
import { Partnership } from "@/components/Partnership";
import { Contatti } from "@/components/Contatti";
import { Footer } from "@/components/Footer";
import oceanBg from "@/assets/hero-ocean-tech.webp";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Fixed ocean background for all sections */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${oceanBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-background/55" />
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <SideNav />
        <Hero />
        <Progetto />
        <ComeFunziona />
        <Physics />
        <VppResults />
        
        <Applicazioni />
        <PatentClaims />
        <Inventori />
        <Partnership />
        <Contatti />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
