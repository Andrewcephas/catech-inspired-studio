import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import catechLogo from "@/assets/catech-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-[100] py-4"
    >
      <div className="container mx-auto px-4">
        {/* Pill-shaped header container */}
        <motion.div 
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className={`bg-primary rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${
            scrolled ? "shadow-lg" : ""
          }`}
        >
          {/* Logo */}
          <motion.a 
            href="#home" 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="bg-white rounded-full p-1">
              <img src={catechLogo} alt="Catech Logo" className="h-10 w-auto" />
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ scale: 1.1 }}
                className={`text-sm font-medium transition-colors duration-300 relative ${
                  activeLink === link.name
                    ? "text-accent"
                    : "text-white hover:text-accent"
                }`}
              >
                {link.name}
                {activeLink === link.name && (
                  <motion.span 
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Contact Button - styled like View My Portfolio */}
          <a href="#contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="hidden md:flex bg-accent hover:bg-accent/90 text-primary rounded-full px-6 font-medium shadow-md"
              >
                Contact Us
              </Button>
            </motion.div>
          </a>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </motion.div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 bg-primary rounded-2xl py-4 px-6 shadow-xl"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.05 * index }}
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
                </motion.a>
              ))}
              <a href="#contact">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full mt-4 bg-accent hover:bg-accent/90 text-primary rounded-full shadow-md">
                    Contact Us
                  </Button>
                </motion.div>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
