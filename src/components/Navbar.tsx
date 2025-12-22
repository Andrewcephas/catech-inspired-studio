import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#gallery" },
    { name: "Blogs", href: "#blogs" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4">
      <div className="container mx-auto px-4">
        {/* Pill-shaped header container */}
        <div className="bg-primary rounded-full px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
              <span className="text-primary font-bold text-sm">O</span>
            </div>
            <span className="text-xl font-semibold text-white">Olivia.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeLink === link.name
                    ? "text-accent"
                    : "text-white hover:text-accent"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <Button
            className="hidden md:flex bg-white text-primary hover:bg-white/90 rounded-full px-6 font-medium"
          >
            Contact Me
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-2 bg-primary rounded-2xl py-4 px-6 animate-in slide-in-from-top">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block py-2 text-sm font-medium transition-colors duration-300 ${
                  activeLink === link.name
                    ? "text-accent"
                    : "text-white hover:text-accent"
                }`}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsOpen(false);
                }}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full mt-4 bg-white text-primary hover:bg-white/90 rounded-full">
              Contact Me
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
