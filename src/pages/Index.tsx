import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
import WhatsAppButton from "@/components/WhatsAppButton";
import SplashScreen from "@/components/SplashScreen";
import officeBg from "@/assets/office-bg.jpg";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  // Smooth scroll for navigation links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <div className="min-h-screen bg-background overflow-x-hidden relative">
        {/* Global Fixed Background */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${officeBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-background/60" />
        </div>
        
        <Navbar />
        <main className="overflow-x-hidden relative z-10">
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
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
