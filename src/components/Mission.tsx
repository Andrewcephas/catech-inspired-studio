import { Target, Eye } from "lucide-react";

const Mission = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Mission */}
          <div className="group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Target className="text-primary-foreground" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-primary">Our Mission</h2>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 shadow-soft hover:shadow-medium transition-shadow duration-300">
              <p className="text-card-foreground text-base leading-relaxed">
                To deliver innovative digital and creative solutions that help businesses grow and stand out in a competitive market.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Eye className="text-accent-foreground" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-accent">Our Vision</h2>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 shadow-soft hover:shadow-medium transition-shadow duration-300">
              <p className="text-card-foreground text-base leading-relaxed">
                To be the leading creative solutions provider in East Africa, recognized for quality and innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-1">5+</p>
            <p className="text-sm text-muted-foreground font-medium">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-1">500+</p>
            <p className="text-sm text-muted-foreground font-medium">Projects Done</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-1">100+</p>
            <p className="text-sm text-muted-foreground font-medium">Happy Clients</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-1">15+</p>
            <p className="text-sm text-muted-foreground font-medium">Team Members</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
