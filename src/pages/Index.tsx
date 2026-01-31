import Hero from "@/components/Hero";
import Features from "@/components/Features"; // This is the Schedule component
import Manifesto from "@/components/Manifesto";
import CTA from "@/components/CTA"; // This is TicketBooth
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-prism-velvet overflow-x-hidden selection:bg-prism-red selection:text-white">
      <Hero />
      <Manifesto />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
