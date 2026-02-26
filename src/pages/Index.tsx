import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Progetto } from "@/components/Progetto";
import { ComeFunziona } from "@/components/ComeFunziona";
import { Physics } from "@/components/Physics";
import { VppResults } from "@/components/VppResults";

import { Applicazioni } from "@/components/Applicazioni";
import { PatentClaims } from "@/components/PatentClaims";
import { Partnership } from "@/components/Partnership";
import { Contatti } from "@/components/Contatti";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Progetto />
      <ComeFunziona />
      <Physics />
      <VppResults />
      
      <Applicazioni />
      <PatentClaims />
      <Partnership />
      <Contatti />
      <Footer />
    </div>
  );
};

export default Index;
