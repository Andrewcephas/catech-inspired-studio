import { 
  Figma, 
  Palette, 
  Layers, 
  Film, 
  PenTool, 
  Layout 
} from "lucide-react";

const tools = [
  { name: "Figma", percentage: 98, Icon: Figma, color: "bg-purple-500" },
  { name: "Sketch", percentage: 92, Icon: Layers, color: "bg-amber-500" },
  { name: "Photoshop", percentage: 90, Icon: Palette, color: "bg-blue-600" },
  { name: "After Effects", percentage: 85, Icon: Film, color: "bg-violet-600" },
  { name: "Illustrator", percentage: 90, Icon: PenTool, color: "bg-orange-500" },
  { name: "InVision", percentage: 95, Icon: Layout, color: "bg-pink-500" },
];

const DesignTools = () => {
  return (
    <section id="tools" className="py-16 bg-secondary/30">
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.Icon;
            const circumference = 2 * Math.PI * 40;
            const strokeDashoffset = circumference - (tool.percentage / 100) * circumference;
            
            return (
              <div 
                key={index} 
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-medium transition-all duration-300"
              >
                {/* Circular Progress with Icon */}
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
                  {/* Icon in center */}
                  <div className={`absolute inset-0 flex items-center justify-center`}>
                    <div className={`w-12 h-12 rounded-full ${tool.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Percentage */}
                <span className="text-lg font-bold text-foreground">{tool.percentage}%</span>
                
                {/* Tool name */}
                <span className="text-sm font-medium text-muted-foreground">{tool.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DesignTools;
