import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Catech Solutions team working on innovative tech projects"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-1.5 bg-accent/10 backdrop-blur-sm rounded border border-accent/30">
            <p className="text-accent font-medium text-xs uppercase tracking-wide">Innovating the Future</p>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Great Ideas to Grow Your Own{" "}
            <span className="text-accent">Business</span>
          </h1>
          
          <p className="text-base md:text-lg text-white/90 mb-6 leading-relaxed max-w-2xl">
            Catech Solutions & Graphics provides creative and technical solutions that transform 
            brands through Web Design, Graphic Design, and Brand Identity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-medium"
            >
              Get Started
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary"
            >
              View Our Work
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-8 text-white">
            <div>
              <p className="text-2xl font-bold">500+</p>
              <p className="text-sm text-white/80">Projects Completed</p>
            </div>
            <div className="w-px h-10 bg-white/30"></div>
            <div>
              <p className="text-2xl font-bold">100+</p>
              <p className="text-sm text-white/80">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
