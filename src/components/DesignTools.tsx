import { motion } from "framer-motion";

const tools = [
  { 
    name: "Figma", 
    percentage: 98, 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    color: "bg-[#1E1E1E]" 
  },
  { 
    name: "Sketch", 
    percentage: 92, 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",
    color: "bg-[#F7B500]" 
  },
  { 
    name: "Photoshop", 
    percentage: 90, 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg",
    color: "bg-[#31A8FF]" 
  },
  { 
    name: "After Effects", 
    percentage: 85, 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg",
    color: "bg-[#9999FF]" 
  },
  { 
    name: "Illustrator", 
    percentage: 90, 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
    color: "bg-[#FF9A00]" 
  },
  { 
    name: "XD", 
    percentage: 95, 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-original.svg",
    color: "bg-[#FF61F6]" 
  },
];

const DesignTools = () => {
  return (
    <section id="tools" className="py-16 bg-[hsl(0,0%,94%)]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-3 px-4 py-1.5 bg-primary/10 rounded border border-primary/20">
            <p className="text-primary font-medium text-xs uppercase tracking-wide">Our Toolkit</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            <span className="text-accent italic">Exploring the Tools</span>
          </h2>
          <p className="text-xl font-bold text-foreground">Behind Our Designs</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {tools.map((tool, index) => {
            const circumference = 2 * Math.PI * 40;
            const strokeDashoffset = circumference - (tool.percentage / 100) * circumference;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex flex-col items-center gap-4 p-6 rounded-2xl bg-background shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_-12px_rgba(0,112,32,0.15)] transition-all duration-500 border-0 overflow-hidden hover:-translate-y-2"
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Circular Progress with Logo */}
                <div className="relative w-28 h-28 z-10">
                  <svg className="w-full h-full -rotate-90 drop-shadow-lg" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="none"
                      className="text-muted/20"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#gradient)"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                      style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: strokeDashoffset,
                        transition: 'stroke-dashoffset 1s ease-in-out',
                      }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--accent))" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Logo in center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-14 h-14 rounded-xl ${tool.color} flex items-center justify-center p-2.5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <img 
                        src={tool.logo} 
                        alt={tool.name} 
                        className="w-9 h-9 object-contain"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Percentage */}
                <span className="text-2xl font-bold text-foreground z-10">{tool.percentage}%</span>
                
                {/* Tool name */}
                <span className="text-sm font-semibold text-muted-foreground tracking-wide z-10">{tool.name}</span>
                
                {/* Bottom decorative line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DesignTools;
