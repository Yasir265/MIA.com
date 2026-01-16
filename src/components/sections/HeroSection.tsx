import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Users, value: "5000+", label: "Students Enrolled" },
  { icon: Award, value: "15+", label: "Years of Excellence" },
  { icon: BookOpen, value: "50+", label: "Courses Offered" },
  { icon: Star, value: "98%", label: "Success Rate" },
];

export const HeroSection = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto container-padding relative z-10 ">
        <div className="max-w-4xl mx-auto text-center ">
          {/* Badge */}
         

          {/* Main Heading */}
          {/* <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
           Your Best Future Begins 
            <span className="block mt-2">
              With Action 
              <span className="text-secondary"> Today</span> 
            </span>
          </motion.h1> */}
            <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
           Build Tomorrow 
            <span className="block mt-2">
             Start
              <span className="text-secondary"> Today</span> 
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
           From Grade 1 to University – Academics, Soft Skills, and Tech Courses. 
            <span className="block mt-2 text-white/60">
              Experienced Faculty | Modern Campus | Islamabad
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-9 pt-10 md:pt-16">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
    >
      <Button 
        variant="hero" 
        size="xl" 
        onClick={() => handleNavClick("#contact")}
        className="min-w-[240px] md:min-w-[280px]"
      >
        Admission Open – Apply Now
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>

      <Button 
        variant="heroOutline" 
        size="xl" 
        onClick={() => handleNavClick("#programs")}
        className="min-w-[240px] md:min-w-[280px]"
      >
        Explore Courses
      </Button>
    </motion.div>
  </div>

          {/* addmison banner */}
           {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 ml-9"
          >
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse-soft "  />
            <span className="text-white/90 text-sm font-medium  ">Admissions Open for 2026-27</span>
          </motion.div> */}

       
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      > */}
        {/* <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </motion.div> */}
      {/* </motion.div> */}
      
    </section>
  );
};
