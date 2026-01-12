import { Globe, Palette, Megaphone, Code, Smartphone, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Custom, responsive websites that engage your audience and drive conversions. Built with modern technologies.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Compelling visual designs for print and digital media that capture your brand's essence and messaging.",
  },
  {
    icon: Megaphone,
    title: "Brand Identity",
    description: "Complete brand identity solutions including logos, color schemes, and brand guidelines that stand out.",
  },
  {
    icon: Code,
    title: "Custom Software Solutions",
    description: "Tailored software applications designed to streamline your business operations and boost productivity.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver seamless user experiences.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns that increase your online presence and drive measurable results.",
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate through services for eye-catching effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="py-16 bg-[hsl(0,0%,96%)]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-3 px-4 py-1.5 bg-primary/10 rounded border border-primary/20">
            <p className="text-primary font-medium text-xs uppercase tracking-wide">What We Offer</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Comprehensive creative and technical solutions to elevate your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = index === activeIndex;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
              <Card 
                  className={`group relative overflow-hidden transition-all duration-500 border-0 ${
                    isActive 
                      ? 'shadow-[0_20px_50px_-12px_rgba(0,112,32,0.25)] scale-[1.02]' 
                      : 'shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-12px_rgba(0,112,32,0.15)] hover:scale-[1.01]'
                  }`}
                >
                  {/* Top accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 transition-all duration-500 ${
                    isActive ? 'bg-accent' : 'bg-primary/20 group-hover:bg-primary'
                  }`} />
                  
                  <CardContent className="p-8 pt-10">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 shadow-lg ${
                      isActive 
                        ? 'bg-gradient-to-br from-accent to-accent/80 scale-110 rotate-3' 
                        : 'bg-gradient-to-br from-primary to-primary/80 group-hover:scale-110 group-hover:rotate-3'
                    }`}>
                      <Icon className="text-primary-foreground" size={28} />
                    </div>
                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                      isActive ? 'text-accent' : 'text-foreground group-hover:text-primary'
                    }`}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Bottom decorative element */}
                    <div className={`absolute bottom-0 right-0 w-24 h-24 rounded-tl-full transition-all duration-500 ${
                      isActive ? 'bg-accent/10' : 'bg-primary/5 group-hover:bg-primary/10'
                    }`} />
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
