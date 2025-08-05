import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Physics } from "@/components/Physics";
import { Advantages } from "@/components/Advantages";
import { Innovation } from "@/components/Innovation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Physics />
      <Advantages />
      <Innovation />
      <Footer />
    </div>
  );
};

export default Index;
