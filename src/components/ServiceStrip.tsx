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
          @keyframes scrollBg {
            0% { background-position: 0 0; }
            100% { background-position: -200% 0; }
          }
          .animate-bg-scroll {
            background-size: 200% 100%;
            animation: scrollBg 15s linear infinite;
          }
        `}
      </style>
      <div className="relative -mt-6 z-20">
        {/* Diagonal strip container */}
        <div 
          className="relative py-4 overflow-hidden"
          style={{ transform: 'rotate(-2deg) scale(1.05)' }}
        >
          {/* Main yellow strip with animated gradient background */}
          <div 
            className="py-4 shadow-lg animate-bg-scroll"
            style={{
              background: 'linear-gradient(90deg, hsl(36 100% 50%) 0%, hsl(45 100% 55%) 25%, hsl(36 100% 50%) 50%, hsl(45 100% 55%) 75%, hsl(36 100% 50%) 100%)',
            }}
          >
            <div className="flex justify-around items-center px-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-6 md:gap-10 px-4 md:px-8">
                  <span className="text-primary font-bold text-sm md:text-lg whitespace-nowrap tracking-wide">
                    {service}
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
