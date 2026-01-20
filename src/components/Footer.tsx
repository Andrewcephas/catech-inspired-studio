import { Facebook, Instagram, Youtube } from "lucide-react";
import catechLogo from "@/assets/catech-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[#017020] to-[#ff9900] text-primary-foreground py-12 relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* Logo & About - Left column */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 p-1">
                <img src={catechLogo} alt="Catech Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-bold text-white">CATECH</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-xs">
              Transforming brands through innovative web design, graphic design, and digital solutions.
            </p>
          </div>

          {/* Quick Links & Services - Side by side */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6">
            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-base mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#home" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-base mb-4">Our Services</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-primary-foreground/80">Web Design</li>
                <li className="text-primary-foreground/80">Graphic Design</li>
                <li className="text-primary-foreground/80">Brand Identity</li>
                <li className="text-primary-foreground/80">Digital Marketing</li>
              </ul>
            </div>
          </div>

          {/* Contact Info - Right column */}
          <div className="lg:col-span-4">
            <h3 className="font-bold text-base mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">0793 614 592</li>
              <li className="text-primary-foreground/80 break-all">
                catechsolutionsgraphics@gmail.com
              </li>
              <li className="text-primary-foreground/80">Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/80 text-sm text-center md:text-left">
            © {currentYear} Catech Solutions & Graphics. All rights reserved.
          </p>
          
          <div className="flex gap-3 flex-wrap justify-center">
            <a
              href="https://web.facebook.com/profile.php?id=61569811203372"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://www.instagram.com/catech.solutions/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.youtube.com/@catechmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={16} />
            </a>
            <a
              href="https://www.tiktok.com/@catechmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
              aria-label="TikTok"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
