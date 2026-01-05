import { Target, Eye } from "lucide-react";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group"
          >
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
          </motion.div>

          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
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
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "5+", label: "Years Experience" },
            { value: "500+", label: "Projects Done" },
            { value: "100+", label: "Happy Clients" },
            { value: "15+", label: "Team Members" },
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
