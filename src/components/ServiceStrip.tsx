import { ChevronLeft } from "lucide-react";

const ServiceStrip = () => {
  const services = [
    "App Design",
    "Website Design",
    "Dashboard",
    "Wireframing",
  ];

  return (
    <div className="w-full bg-accent py-4 overflow-hidden">
      <div className="flex items-center justify-center gap-8 md:gap-16 px-4">
        <ChevronLeft className="w-6 h-6 text-primary flex-shrink-0" />
        {services.map((service, index) => (
          <div key={service} className="flex items-center gap-8 md:gap-16">
            <span className="text-primary font-bold text-lg md:text-2xl whitespace-nowrap">
              {service}
            </span>
            {index < services.length - 1 && (
              <span className="text-primary text-2xl md:text-3xl font-bold">✱</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceStrip;
