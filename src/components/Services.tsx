import { Globe, Palette, Megaphone, Code, Smartphone, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Custom, responsive websites that engage your audience and drive conversions. Built with modern technologies.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Compelling visual designs for print and digital media that capture your brand's essence and messaging.",
  },
  {
    icon: Megaphone,
    title: "Brand Identity",
    description: "Complete brand identity solutions including logos, color schemes, and brand guidelines that stand out.",
  },
  {
    icon: Code,
    title: "Custom Software Solutions",
    description: "Tailored software applications designed to streamline your business operations and boost productivity.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver seamless user experiences.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns that increase your online presence and drive measurable results.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <p className="text-primary font-semibold text-sm">What We Offer</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive creative and technical solutions to elevate your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-lg bg-hero-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
