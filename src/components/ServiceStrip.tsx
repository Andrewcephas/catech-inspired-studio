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
    <>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
          .tilt-bg {
            transform: skewX(-3deg);
          }
          .tilt-content {
            transform: skewX(-5deg);
          }
        `}
      </style>
      <div style={{ transform: 'scaleY(0.9)' }}>
        <div className="relative py-4 overflow-hidden bg-white rounded-lg shadow-lg">
          {/* Background layer - static */}
          <div className="absolute inset-0 bg-secondary tilt-bg rounded-lg">
            <div className="flex">
              {services.map((service, index) => (
                <div
                  key={`bg-${index}`}
                  className="flex items-center gap-4 md:gap-8 px-4"
                >
                  <span className="text-primary font-bold text-sm md:text-base whitespace-nowrap opacity-50">
                    {service}
                  </span>
                  <span className="text-primary text-lg opacity-50">✱</span>
                </div>
              ))}
            </div>
          </div>
          {/* Content layer - scrolling */}
          <div className="relative bg-accent tilt-content rounded-lg">
            <div className="flex animate-scroll">
              {[...services, ...services].map((service, index) => (
                <div key={index} className="flex items-center gap-4 md:gap-8 px-4">
                  <span className="text-primary font-bold text-sm md:text-base whitespace-nowrap">
                    {service}
                  </span>
                  <span className="text-primary text-lg">✱</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceStrip;
