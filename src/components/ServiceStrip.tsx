const services = [
  "App Design",
  "Website Design",
  "Branding",
  "Graphics",
  "Digital Marketing",
  "UI/UX Design",
];

const ServiceStrip = () => {
  return (
    <div className="bg-accent py-4 overflow-hidden">
      <div className="flex items-center justify-center flex-wrap gap-4 md:gap-8 px-4">
        {services.map((service, index) => (
          <div key={index} className="flex items-center gap-4 md:gap-8">
            <span className="text-primary font-bold text-sm md:text-base whitespace-nowrap">
              {service}
            </span>
            {index < services.length - 1 && (
              <span className="text-primary text-lg">✱</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceStrip;
