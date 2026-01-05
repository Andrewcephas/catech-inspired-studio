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
    <section id="tools" className="py-16 bg-secondary/30">
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
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-medium transition-all duration-300"
              >
                {/* Circular Progress with Logo */}
                <div className="relative w-24 h-24">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-muted/30"
                    />
                    {/* Progress circle */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      className="text-accent"
                      style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: strokeDashoffset,
                        transition: 'stroke-dashoffset 1s ease-in-out',
                      }}
                    />
                  </svg>
                  {/* Logo in center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-full ${tool.color} flex items-center justify-center p-2`}>
                      <img 
                        src={tool.logo} 
                        alt={tool.name} 
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Percentage */}
                <span className="text-lg font-bold text-foreground">{tool.percentage}%</span>
                
                {/* Tool name */}
                <span className="text-sm font-medium text-muted-foreground">{tool.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DesignTools;
