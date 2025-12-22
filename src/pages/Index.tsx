import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceStrip from "@/components/ServiceStrip";
import Services from "@/components/Services";
import Mission from "@/components/Mission";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ServiceStrip />
        <Services />
        <Mission />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
