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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
            <p className="text-accent font-semibold text-sm">Innovating the Future</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Great Ideas to Grow Your Own{" "}
            <span className="text-accent">Business</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            Catech Solutions & Graphics provides creative and technical solutions that transform 
            brands through Web Design, Graphic Design, and Brand Identity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-strong text-lg px-8 py-6"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
            >
              View Our Work
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-white">
            <div>
              <p className="text-3xl font-bold">500+</p>
              <p className="text-white/80">Projects Completed</p>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div>
              <p className="text-3xl font-bold">100+</p>
              <p className="text-white/80">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
