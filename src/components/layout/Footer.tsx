import { GraduationCap, Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#hero" },
  { name: "About Us", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Why Us", href: "#features" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const programs = [
  "Primary Education",
  "Matric / O-Levels",
  "FSc / A-Levels",
  "MDCAT Prep",
  "ECAT Prep",
  "IT Courses",
  "Graphic Design",
  "Web Development",
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto container-padding py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
                
                <div className="w-12 h-12 rounded-xl  flex items-center justify-center ">
                {/* <img src="public/favicon.jpeg" style={{borderRadius:10}}></img> */}
                {/* <img src="public/footer-1.png" style={{borderRadius:10}}></img> */}

                {/* <GraduationCap className="w-7 h-7 text-secondary-foreground" /> */}
              </div>
              {/* <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shadow-md">
                <img src="public/favicon.jpeg" style={{borderRadius:10}}></img>

                
              </div> */}
              <div>
                <div className="font-heading font-bold text-xl">Ibrahim Accadmey</div>
                {/* <div className="font-heading font-bold text-xl">Muhamamd Ibrahim Accadmey</div> */}

                <div className="text-primary-foreground/60 text-sm">Excellence in Education</div>
              </div>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              Shaping bright futures since 2014. From Grade 1 to professional careers, 
              we're committed to providing quality education that transforms lives.
            </p>
            <div className="space-y-3">
              <a href="tel:+923001234567" className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors">
                <Phone className="w-4 h-4" />
                <span>+92 310 5372677</span>
              </a>
              <a href="mailto:ibrahimaccadmey@gmail.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-secondary transition-colors">
                <Mail className="w-4 h-4" />
                <span>ibrahimaccadmey@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Muhammad Ibrahim Accadmey main market Pindorian kuri road Islamabad</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program}>
                  <button
                    onClick={() => handleNavClick("#programs")}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {program}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Stay Updated</h4>
            <p className="text-primary-foreground/70 mb-4">
              Subscribe to receive updates about new courses, events, and admissions.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="ibrahimaccadmey@gmail.com"
                className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-secondary focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="w-full py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto container-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Muhammad Ibrahim Accadmey. All rights reserved. 
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-secondary text-secondary-foreground rounded-full shadow-lg flex items-center justify-center hover:bg-secondary/90 transition-colors z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};
