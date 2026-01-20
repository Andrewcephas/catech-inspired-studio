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
      
      {/* Fixed Navbar - Always on top */}
      <Navbar />
      
      {/* Fixed WhatsApp Button - Always on top */}
      <WhatsAppButton />
      
      <div className="min-h-screen bg-background overflow-x-hidden relative">
        {/* 3D Rotating Background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ perspective: "1000px" }}>
          <motion.div
            animate={{ rotateY: 360 }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-[-50%] w-[200%] h-[200%]"
            style={{
              backgroundImage: `url(${officeBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              transformStyle: "preserve-3d",
            }}
          />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        
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
      </div>
    </>
  );
};

export default Index;
