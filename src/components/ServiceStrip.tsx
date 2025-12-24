const services = [
  "App Design",
  "Website Design",
  "Dashboard",
  "Wireframe",
  "Branding",
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
            animation: scroll 25s linear infinite;
          }
        `}
      </style>
      <div className="relative -mt-6 z-20">
        {/* Diagonal strip container */}
        <div 
          className="relative py-4 overflow-hidden"
          style={{ transform: 'rotate(-2deg) scale(1.05)' }}
        >
          {/* Main yellow strip */}
          <div className="bg-accent py-4 shadow-lg">
            <div className="flex animate-scroll">
              {[...services, ...services, ...services, ...services].map((service, index) => (
                <div key={index} className="flex items-center gap-6 md:gap-10 px-6 md:px-8">
                  <span className="text-primary font-bold text-base md:text-lg whitespace-nowrap tracking-wide">
                    {service}
                  </span>
                  <span className="text-primary text-xl font-bold">✳</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Green strip behind (offset) */}
          <div 
            className="absolute inset-0 bg-primary -z-10"
            style={{ transform: 'translateY(8px) translateX(20px)' }}
          />
        </div>
      </div>
    </>
  );
};

export default ServiceStrip;
