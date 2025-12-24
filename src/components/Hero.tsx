import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPerson from "@/assets/hero-person.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-8 bg-background overflow-hidden">
      <div className="w-full px-4 lg:container lg:mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8">
          {/* Left Column - Text */}
          <div className="space-y-6 lg:flex-1">
            {/* Badge */}
            <div className="inline-block px-4 py-2 bg-background border border-border rounded-sm shadow-sm">
              <p className="text-sm text-foreground font-medium">Creative Solutions</p>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Welcome to{" "}
              <span className="text-accent">Catech</span>
              <br />
              Solutions & Graphics
            </h1>

            {/* Supporting Text */}
            <p className="text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
              We transform your ideas into stunning digital experiences. From web design to branding, we deliver creative solutions that make your business stand out.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#projects">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-primary rounded-full px-6 shadow-md"
                >
                  View My Portfolio
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center ml-2">
                    <Play className="w-3 h-3 text-accent fill-accent" />
                  </div>
                </Button>
              </a>
              <a href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-accent text-primary hover:bg-accent hover:text-primary rounded-full px-8"
                >
                  Get Quote
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex justify-center lg:justify-end lg:flex-1">
            {/* Orange Circle Background */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 md:w-80 md:h-80 bg-accent rounded-full"></div>

            {/* Main Image */}
            <div className="relative z-10">
              <img
                src={heroPerson}
                alt="Catech Solutions - Professional working"
                className="w-72 md:w-80 lg:w-96 h-auto object-cover relative z-10 rounded-2xl"
              />

              {/* Floating Labels */}
              <div className="absolute top-1/4 -right-2 md:right-0 bg-accent text-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-20">
                Web Design
              </div>

              <div className="absolute bottom-1/4 left-0 md:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-20">
                Graphic Design
              </div>

              {/* Badge */}
              <div className="absolute top-8 right-0 md:-right-4 w-20 h-20 z-20">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 rounded-full border-2 border-primary flex items-center justify-center bg-background">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-primary-foreground" />
                    </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
