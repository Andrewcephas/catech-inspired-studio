import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroPerson from "@/assets/hero-person.png";
import officeBg from "@/assets/office-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-8 relative overflow-hidden">
      {/* Hero Background with Laptop Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${officeBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/80 to-background/70" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 lg:gap-4">
          {/* Left Column - Text */}
          <div className="space-y-5 lg:flex-1 lg:max-w-[55%]">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-background border border-border rounded-sm shadow-sm"
            >
              <p className="text-sm text-foreground font-medium">Creative Solutions</p>
            </motion.div>

            {/* Main Heading - 2 lines with responsive font */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight text-foreground"
            >
              <span className="block">Welcome to Catech</span>
              <span>Solutions <span className="text-accent">&</span> Graphics</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-base md:text-lg max-w-md leading-relaxed"
            >
              We transform your ideas into stunning digital experiences. From web design to branding, we deliver creative solutions that make your business stand out.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a href="#contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-primary rounded-full px-6 shadow-md"
                  >
                    View My Portfolio
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center ml-2">
                      <Play className="w-3 h-3 text-accent fill-accent" />
                    </div>
                  </Button>
                </motion.div>
              </a>
              <a href="#contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-accent text-primary hover:bg-accent hover:text-primary rounded-full px-8"
                  >
                    Get Quote
                  </Button>
                </motion.div>
              </a>
            </motion.div>
          </div>

          {/* Right Column - Image - Full width matching content */}
          <div className="relative flex justify-center lg:justify-end lg:flex-1 w-full overflow-visible">
            {/* Decorative Shape Behind */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]"
            >
              {/* Outer accent ring with stroke */}
              <div className="absolute inset-0 rounded-full border-[4px] border-accent" />
              
              {/* Inner decorative dashed ring - rotating */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-3 rounded-full border-[2px] border-dashed border-primary/40"
              />
              
              {/* Main image container - clipped inside the shape */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-[5px] border-primary shadow-2xl">
                <img
                  src={heroPerson}
                  alt="Catech Solutions - Professional working"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Rotating Text Badge - Inside circle at top-right */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-6 right-6 sm:top-8 sm:right-8 w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 z-20"
              >
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 rounded-full border-2 border-[#ff9900] flex items-center justify-center bg-white backdrop-blur-sm">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#ff9900]" />
                  </div>
                  {/* Rotating Text */}
                  <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                    <defs>
                      <path id="circle" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                    </defs>
                    <text className="text-[8px] sm:text-[9px] fill-black font-semibold uppercase tracking-widest">
                      <textPath href="#circle">
                        • Catech • Solutions • Graphics 
                      </textPath>
                    </text>
                  </svg>
                </div>
              </motion.div>

              {/* Corner accent dots */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent" />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent" />
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary" />
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary" />

              {/* Floating Labels - Always visible, responsive positioning */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -top-6 -right-4 sm:-right-8 bg-accent text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg z-20 whitespace-nowrap"
              >
                Web Design
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute bottom-20 -left-4 sm:-left-10 bg-primary text-primary-foreground px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg z-20 whitespace-nowrap"
              >
                Graphic Design
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-6 right-8 bg-background border-2 border-primary text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg z-20 whitespace-nowrap"
              >
                Branding
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute top-1/3 -right-4 sm:-right-12 bg-accent/90 text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg z-20 whitespace-nowrap"
              >
                UI/UX
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="absolute top-1/4 -left-4 sm:-left-10 bg-primary/90 text-primary-foreground px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg z-20 whitespace-nowrap"
              >
                Logo Design
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="absolute -bottom-4 left-4 bg-accent text-primary px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-lg z-20 whitespace-nowrap"
              >
                Marketing
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
