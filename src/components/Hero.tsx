import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-8 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-block px-4 py-2 bg-white border border-gray-200 rounded-sm shadow-sm">
              <p className="text-sm text-foreground font-medium">Hello There!</p>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              I'm <span className="text-accent underline decoration-accent underline-offset-4">Olivia Smith,</span>
              <br />
              Product Designer
              <br />
              Based in USA.
            </h1>

            {/* Supporting Text */}
            <p className="text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
              I'm an experienced Product Designer with 18+ years in the field, collaborating with various companies and startups.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
                >
                  View My Portfolio
                </Button>
                <div className="w-12 h-12 rounded-full bg-white border-2 border-foreground flex items-center justify-center -ml-2 cursor-pointer hover:bg-gray-50 transition-colors">
                  <Play className="w-4 h-4 text-accent fill-accent" />
                </div>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8"
              >
                Hire Me
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Orange Circle Background */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 bg-accent rounded-full"></div>

            {/* Main Image */}
            <div className="relative z-10">
              <img
                src={heroBanner}
                alt="Olivia Smith - Product Designer"
                className="w-72 md:w-80 lg:w-96 h-auto object-cover relative z-10"
              />

              {/* Floating Labels */}
              <div className="absolute top-1/3 -right-4 md:right-0 bg-accent text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-20">
                UI/UX Designer
              </div>

              <div className="absolute bottom-20 left-0 md:left-10 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-20">
                Product Designer
              </div>

              {/* Hire Me Badge */}
              <div className="absolute top-10 right-0 md:-right-4 w-20 h-20 z-20">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 rounded-full border-2 border-primary flex items-center justify-center bg-white">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                  {/* Rotating Text */}
                  <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                    <defs>
                      <path id="circle" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                    </defs>
                    <text className="text-[10px] fill-primary font-semibold uppercase tracking-widest">
                      <textPath href="#circle">
                        • Hire Me • Hire Me • Hire Me 
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>

              {/* Decorative Arrow */}
              <div className="absolute bottom-32 left-0 z-20 hidden md:block">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-primary">
                  <path d="M5 35L35 5M35 5H10M35 5V30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
