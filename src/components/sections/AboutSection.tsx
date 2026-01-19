import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Heart, CheckCircle, Users, Award, BookOpen, Star } from "lucide-react";

const values = [
  "Character building alongside academics",
  "Practical, real-world skill development",
  "Safe and nurturing learning environment",
  "Personalized attention for every student",
  "Modern teaching methodologies",
  "Industry-aligned curriculum",
];

const faculty = [
  {
    name: "Mr Muhammad Rizwan",
    role: "Director & Senior Educator",
    experience: "15+ years in education",
    image: "sir-rizwan.png",
  },
  {
    name: "Muhammad Shahzaib",
    role: "Cordinator",
    experience: "2+ years in cordinating and soft skills",
    image: "s.png",
  },
  {
    name: "Mr Muhammad Yasir Khan",
    role: "IT & Professional Skills Lead",
    experience: "5+ years in Tech Industry",
    image: "yasir.jpg",
  },
];
const stats = [
  { icon: Users, value: "5000+", label: "Students Enrolled" },
  { icon: Award, value: "15+", label: "Years of Excellence" },
  { icon: BookOpen, value: "50+", label: "Courses Offered" },
  { icon: Star, value: "98%", label: "Success Rate" },
];
export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
         {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass-card bg-black/10 rounded-2xl p-6 hover:bg-black/15 transition-colors mb-7 ml-4"
              >
                <stat.icon className="w-8 h-8 text-secondary mb-3 mx-auto" />
                <div className="text-3xl font-bold text-black mb-1">{stat.value}</div>
                <div className="text-sm text-black/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-sm tracking-wider uppercase mb-4">
            About Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 mt-3">
            Shaping <span className="text-secondary">Bright Futures</span> Since 2014
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            More Than Education — Leadership Forged Here.
Future Academy: Preparing students for academic triumph and professional mastery.
          </p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Target,
              title: "Our Mission",
              description: "To provide accessible, quality education that empowers every student to achieve their full potential and become confident, capable individuals.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              description: "To be Pakistan's most trusted educational institution, recognized for producing well-rounded graduates who excel in academics and life.",
            },
            {
              icon: Heart,
              title: "Our Values",
              description: "Excellence, integrity, innovation, and compassion guide everything we do. We believe every child deserves the best opportunities.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-lift transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <item.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-4">
              Why Choose Us
            </span>
            {/* <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              Why Muhammad Ibrahim Accadmey is the Best Choice for Your Child
            </h3> */}
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              Why Muhammad Ibrahim Accadmey is the Best Choice for Your Child
            </h3>
            {/* <p className="text-muted-foreground mb-8 leading-relaxed">
              Parents trust us because we don't just focus on grades – we focus on complete development. 
              From academic excellence to character building, we prepare students for life.
            </p> */}
            <p>Trusted by Parents for Lifelong Growth
At Future Academy, our commitment extends far beyond academics. We focus on holistic development — fostering academic excellence, strong character, and essential life skills to equip students for a bright future.</p>
            <div className="grid gap-4 mt-4">
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="ws.png"
                alt="Students collaborating"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold">12+</div>
              <div className="text-sm text-primary-foreground/80">Years of Excellence</div>
            </div>
          </motion.div>
        </div>

        {/* Faculty */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-secondary font-semibold text-sm tracking-wider uppercase mb-4">
            Our Faculty
          </span>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            Learn From the Best
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {faculty.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mb-6 mx-auto w-48 h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-full h-full object-cover rounded-full border-4 border-background shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="font-heading text-xl font-bold text-foreground mb-1">{member.name}</h4>
              <p className="text-secondary font-medium mb-1">{member.role}</p>
              <p className="text-muted-foreground text-sm">{member.experience}</p>
            </motion.div>
          ))}
        </div>

        {/* Faculty
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.5 }}
  className="text-center mb-10 md:mb-12"
>
  <span className="inline-block text-primary font-semibold text-xs md:text-sm tracking-wider uppercase mb-4">
    Our Faculty
  </span>
  <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 md:mb-8">
    Learn From the Best
  </h3>
</motion.div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
  {faculty.map((member, index) => (
    <motion.div
      key={member.name}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
      className="group text-center bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="relative mb-4 md:mb-6 mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
        <img
          src={member.image}
          alt={member.name}
          className="relative w-full h-full object-cover rounded-full border-4 border-background shadow-inner group-hover:scale-105 group-hover:rotate-1 transition-all duration-300"
        />
      </div>
      <h4 className="font-heading text-lg md:text-xl font-bold text-foreground mb-1">{member.name}</h4>
      <p className="text-primary font-medium text-sm md:text-base mb-1">{member.role}</p>
      <p className="text-muted-foreground text-xs md:text-sm">{member.experience}</p>
    </motion.div>
  ))}
</div> */}


      </div>
    </section>
  );
};
