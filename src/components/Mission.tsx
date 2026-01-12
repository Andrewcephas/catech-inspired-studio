import { Target, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Projects Done" },
  { value: 100, suffix: "+", label: "Happy Clients" },
  { value: 15, suffix: "+", label: "Team Members" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const animateCount = () => {
      const duration = 2000; // 2 seconds to count up
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return timer;
    };

    // Start counting animation
    const timer = animateCount();

    // Reset and restart every 3 seconds after completion
    const resetInterval = setInterval(() => {
      setCount(0);
      setTimeout(() => {
        animateCount();
      }, 100);
    }, 5000); // 2s for animation + 3s pause

    return () => {
      clearInterval(timer);
      clearInterval(resetInterval);
    };
  }, [isVisible, target]);

  return (
    <p ref={ref} className="text-3xl md:text-4xl font-bold text-primary mb-1">
      {count}{suffix}
    </p>
  );
};

const Mission = () => {
  return (
    <section id="about" className="py-16 bg-[hsl(0,0%,98%)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Target className="text-primary-foreground" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-primary">Our Mission</h2>
            </div>
            <div className="relative bg-card rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(0,112,32,0.15)] hover:shadow-[0_20px_40px_-12px_rgba(0,112,32,0.2)] transition-all duration-500 border-0 overflow-hidden group-hover:-translate-y-1">
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary/50" />
              <p className="text-card-foreground text-base leading-relaxed pl-4">
                To deliver innovative digital and creative solutions that help businesses grow and stand out in a competitive market.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Eye className="text-accent-foreground" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-accent">Our Vision</h2>
            </div>
            <div className="relative bg-card rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(255,153,0,0.15)] hover:shadow-[0_20px_40px_-12px_rgba(255,153,0,0.2)] transition-all duration-500 border-0 overflow-hidden group-hover:-translate-y-1">
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-accent/50" />
              <p className="text-card-foreground text-base leading-relaxed pl-4">
                To be the leading creative solutions provider in East Africa, recognized for quality and innovation.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats Section with Animated Counters */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="relative text-center p-6 rounded-2xl bg-card shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-12px_rgba(0,112,32,0.15)] transition-all duration-500 border-0 overflow-hidden group hover:-translate-y-1"
            >
              {/* Top decorative arc */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-muted-foreground font-semibold tracking-wide">{stat.label}</p>
              {/* Bottom decorative element */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-primary/5 group-hover:scale-150 transition-transform duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
