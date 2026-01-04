import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceStrip from "@/components/ServiceStrip";
import Services from "@/components/Services";
import Mission from "@/components/Mission";
import DesignTools from "@/components/DesignTools";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <ServiceStrip />
        <Services />
        <Mission />
        <DesignTools />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
