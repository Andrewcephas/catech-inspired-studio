import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroPerson from "@/assets/hero-person.png";
import officeBg from "@/assets/office-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-8 overflow-hidden relative">
      {/* Office Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${officeBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
        }}
      />
      <div className="absolute inset-0 bg-background/80 z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8">
          {/* Left Column - Text */}
          <div className="space-y-6 lg:flex-1">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-background border border-border rounded-sm shadow-sm"
            >
              <p className="text-sm text-foreground font-medium">Creative Solutions</p>
            </motion.div>

            {/* Main Heading - Welcome to on first line, rest on second */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground"
            >
              <span className="block">Welcome to</span>
              <span className="text-accent">Catech</span>
              <br />
              <span>Solutions & Graphics</span>
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
              <a href="#projects">
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

          {/* Right Column - Image */}
          <div className="relative flex justify-center lg:justify-end lg:flex-1">
            {/* Decorative Shape Behind */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[340px] lg:h-[340px]"
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

              {/* Corner accent dots */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent" />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent" />
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary" />
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary" />

              {/* Floating Labels - Outside the stroke */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -top-4 -right-20 md:-right-24 bg-accent text-primary px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20"
              >
                Web Design
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute bottom-8 -left-24 md:-left-28 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20"
              >
                Graphic Design
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-8 right-4 bg-background border-2 border-primary text-primary px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20"
              >
                Branding
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute top-1/3 -right-20 md:-right-24 bg-accent/90 text-primary px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20"
              >
                UI/UX
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="absolute top-1/4 -left-20 md:-left-24 bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20"
              >
                Logo Design
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="absolute -bottom-4 -left-12 bg-accent text-primary px-3 py-1.5 rounded-full text-xs font-bold shadow-lg z-20"
              >
                Marketing
              </motion.div>

              {/* Rotating Badge */}
              <motion.div 
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -top-2 -right-2 w-20 h-20 z-20"
              >
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 rounded-full border-2 border-primary flex items-center justify-center bg-background">
                    <motion.div 
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      className="w-10 h-10 rounded-full bg-primary flex items-center justify-center cursor-pointer"
                    >
                      <ArrowRight className="w-4 h-4 text-primary-foreground" />
                    </motion.div>
                  </div>
                  {/* Rotating Text */}
                  <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                    <defs>
                      <path id="circle" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                    </defs>
                    <text className="text-[10px] fill-primary font-semibold uppercase tracking-widest">
                      <textPath href="#circle">
                        • Catech • Solutions • Graphics 
                      </textPath>
                    </text>
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
