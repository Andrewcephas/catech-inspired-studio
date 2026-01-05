import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroPerson from "@/assets/hero-person.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-8 bg-background overflow-hidden">
      <div className="w-full px-4 lg:container lg:mx-auto">
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

            {/* Main Heading - Consistent width across breakpoints */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground max-w-[280px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[500px]"
            >
              Welcome to{" "}
              <span className="text-accent">Catech</span>
              <br />
              Solutions & Graphics
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
            {/* Decorative Shape Behind - Hexagon-like pattern */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute right-4 md:right-0 top-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96"
            >
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-primary/30 animate-spin-slow"></div>
              {/* Inner accent circle */}
              <div className="absolute inset-4 rounded-full bg-accent/20 border-4 border-accent"></div>
              {/* Decorative dots */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary"></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent"></div>
            </motion.div>

            {/* Main Image - Masked to Circle */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative z-10"
            >
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-[6px] border-primary shadow-2xl">
                <img
                  src={heroPerson}
                  alt="Catech Solutions - Professional working"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Labels - Positioned outside the circle */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute top-4 -right-16 md:-right-24 bg-accent text-primary px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20"
              >
                Web Design
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute bottom-4 -left-16 md:-left-20 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20"
              >
                Graphic Design
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-4 right-8 md:right-4 bg-background border-2 border-primary text-primary px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20"
              >
                Branding
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute top-1/2 -right-20 md:-right-28 bg-accent/90 text-primary px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20"
              >
                UI/UX
              </motion.div>

              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-8 right-0 md:-right-4 w-20 h-20 z-20"
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
