import { Target, Eye } from "lucide-react";

const Mission = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mission */}
          <div className="group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="text-primary-foreground" size={32} />
              </div>
              <h2 className="text-4xl font-bold text-primary">Our Mission</h2>
            </div>
            <div className="bg-card border-2 border-border rounded-2xl p-8 shadow-medium hover:shadow-strong transition-shadow duration-300">
              <p className="text-card-foreground text-lg leading-relaxed">
                Catech Solutions & Graphics provides creative and technical solutions that 
                transform brands through Web Design, Graphic Design, and Brand Identity. 
                Our aim is to empower businesses by helping them stand out with compelling 
                digital and graphic designs that drive growth and success.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Eye className="text-accent-foreground" size={32} />
              </div>
              <h2 className="text-4xl font-bold text-accent">Our Vision</h2>
            </div>
            <div className="bg-card border-2 border-border rounded-2xl p-8 shadow-medium hover:shadow-strong transition-shadow duration-300">
              <p className="text-card-foreground text-lg leading-relaxed">
                To be the leading creative and technical solutions provider in East Africa, 
                recognized for innovation, quality, and our commitment to transforming 
                businesses through cutting-edge design and technology. We envision a future 
                where every business, regardless of size, has access to world-class digital solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-5xl font-bold bg-hero-gradient bg-clip-text text-transparent mb-2">5+</p>
            <p className="text-muted-foreground font-medium">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold bg-hero-gradient bg-clip-text text-transparent mb-2">500+</p>
            <p className="text-muted-foreground font-medium">Projects Done</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold bg-hero-gradient bg-clip-text text-transparent mb-2">100+</p>
            <p className="text-muted-foreground font-medium">Happy Clients</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold bg-hero-gradient bg-clip-text text-transparent mb-2">15+</p>
            <p className="text-muted-foreground font-medium">Team Members</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
