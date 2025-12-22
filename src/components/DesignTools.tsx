const tools = [
  { name: "Figma", percentage: 98, color: "bg-primary" },
  { name: "Sketch", percentage: 92, color: "bg-accent" },
  { name: "Photoshop", percentage: 90, color: "bg-primary" },
  { name: "After Effects", percentage: 85, color: "bg-accent" },
  { name: "Illustrator", percentage: 90, color: "bg-primary" },
  { name: "InVision", percentage: 95, color: "bg-accent" },
];

const DesignTools = () => {
  return (
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="relative w-20 h-20 mb-3">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    className="text-border"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="36"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${(tool.percentage / 100) * 226} 226`}
                    className={index % 2 === 0 ? "text-primary" : "text-accent"}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-foreground">{tool.percentage}%</span>
                </div>
              </div>
              <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {tool.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignTools;
