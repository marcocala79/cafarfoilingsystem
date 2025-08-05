import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Physics } from "@/components/Physics";
import { VppResults } from "@/components/VppResults";
import { Advantages } from "@/components/Advantages";
import { Innovation } from "@/components/Innovation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Physics />
      <VppResults />
      <Advantages />
      <Innovation />
      <Footer />
    </div>
  );
};

export default Index;
