const tools = [
  { name: "Figma", percentage: 98, image: "/images/figma-logo.png" }, // Replace with actual image paths
  { name: "Sketch", percentage: 92, image: "/images/sketch-logo.png" },
  { name: "Photoshop", percentage: 90, image: "/images/photoshop-logo.png" },
  { name: "After Effects", percentage: 85, image: "/images/after-effects-logo.png" },
  { name: "Illustrator", percentage: 90, image: "/images/illustrator-logo.png" },
  { name: "InVision", percentage: 95, image: "/images/invision-logo.png" },
];

const DesignTools = () => {
  return (
    <>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}
      </style>
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-3 px-4 py-1.5 bg-primary/10 rounded border border-primary/20">
              <p className="text-primary font-medium text-xs uppercase tracking-wide">Our Toolkit</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              <span className="text-accent italic">Exploring the Tools</span>
            </h2>
            <p className="text-xl font-bold text-foreground">Behind Our Designs</p>
          </div>

          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {[...tools, ...tools].map((tool, index) => (
                <div key={index} className="flex-shrink-0 w-20 h-20 mx-4 relative">
                  <img src={tool.image} alt={tool.name} className="w-full h-full object-contain" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-foreground">{tool.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DesignTools;
