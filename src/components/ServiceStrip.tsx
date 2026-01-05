const services = [
  { name: "App Design", logo: "📱" },
  { name: "Website Design", logo: "🌐" },
  { name: "Dashboard", logo: "📊" },
  { name: "Wireframe", logo: "📐" },
  { name: "Branding", logo: "🎨" },
  { name: "UI/UX Design", logo: "✨" },
];

const ServiceStrip = () => {
  // Duplicate services for seamless infinite scroll
  const duplicatedServices = [...services, ...services, ...services, ...services];

  return (
    <>
      <style>
        {`
          @keyframes scrollText {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-text {
            animation: scrollText 20s linear infinite;
          }
          .animate-scroll-text:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      <div className="relative z-20 container mx-auto px-4">
        {/* Strip aligned with navbar width */}
        <div 
          className="relative py-2 overflow-hidden"
          style={{ transform: 'rotate(-2deg)' }}
        >
          {/* Main yellow strip */}
          <div 
            className="py-4 shadow-lg overflow-hidden bg-accent"
          >
            {/* Scrolling text container */}
            <div className="flex animate-scroll-text" style={{ width: 'max-content' }}>
              {duplicatedServices.map((service, index) => (
                <div key={index} className="flex items-center gap-4 px-6">
                  <span className="text-2xl">{service.logo}</span>
                  <span className="text-primary font-bold text-sm md:text-base whitespace-nowrap tracking-wide">
                    {service.name}
                  </span>
                  <span className="text-primary text-lg font-bold">✳</span>
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
