import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Why Us", href: "#features" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            {/* <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div> */}
                <div className="w-12 h-12 rounded-xl  flex items-center justify-center ">
                {/* <img src="public/favicon.jpeg" style={{borderRadius:10}}></img> */}
                <img src="public/footer-1.png" style={{borderRadius:10}}></img>

                {/* <GraduationCap className="w-7 h-7 text-secondary-foreground" /> */}
              </div>
            
            <div className="flex flex-col">
              <span className={`font-heading font-bold text-lg leading-tight ${isScrolled ? 'text-foreground' : 'text-white'}`}>
                 Ibrahim Accadmey
              </span>
              <span className={`text-xs ${isScrolled ? 'text-muted-foreground' : 'text-white/70'}`}>
                Excellence in Education
              </span>
            </div>
          </motion.a>

            {/* <motion.a
            href="#hero"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className={`font-heading font-bold text-lg leading-tight ${isScrolled ? 'text-foreground' : 'text-white'}`}>
                Muhammad Ibrahim Accadmey
              </span>
              <span className={`text-xs ${isScrolled ? 'text-muted-foreground' : 'text-white/70'}`}>
                Excellence in Education
              </span>
            </div>
          </motion.a> */}

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`font-medium text-sm transition-colors relative group ${
                  isScrolled ? "text-foreground hover:text-secondary" : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+923001234567" className={`flex items-center gap-2 text-sm font-medium ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              <Phone className="w-4 h-4" />
              <span>+92 310 5372677</span>
            </a>
            <Button variant="navPrimary" size="sm" onClick={() => handleNavClick("#contact")}>
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="container mx-auto container-padding py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left py-2 text-foreground hover:text-secondary font-medium transition-colors"
                >
                  {link.name}
                </motion.button>
              ))}
              <div className="pt-4 border-t border-border space-y-3">
                <a href="tel:+923001234567" className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>0300-1234567</span>
                </a>
                <Button variant="secondary" className="w-full" onClick={() => handleNavClick("#contact")}>
                  Apply Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
