import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Progetto } from "@/components/Progetto";
import { ComeFunziona } from "@/components/ComeFunziona";
import { Physics } from "@/components/Physics";
import { VppResults } from "@/components/VppResults";
import { Inventori } from "@/components/Inventori";
import { Applicazioni } from "@/components/Applicazioni";
import { PatentClaims } from "@/components/PatentClaims";
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
      <Inventori />
      <Applicazioni />
      <PatentClaims />
      <Contatti />
      <Footer />
    </div>
  );
};

export default Index;
