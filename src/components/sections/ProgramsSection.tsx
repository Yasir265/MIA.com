import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  GraduationCap, 
  Rocket, 
  Laptop, 
  BookOpen, 
  Brain, 
  Palette, 
  Globe, 
  Database, 
  Code, 
  Smartphone,
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "school", label: "School Level", icon: GraduationCap },
  { id: "university", label: "University Prep", icon: Rocket },
  { id: "professional", label: "Professional Skills", icon: Laptop },
];

const programs = {
  school: [
    {
      title: "Primary Education (Grade 1-5)",
      icon: BookOpen,
      description: "Strong foundation in Math, English, Urdu, Science with character building activities.",
      duration: "5 Years Program",
      features: ["Activity-based learning", "Phonics & Reading skills", "Basic Computer literacy"],
    },
    {
      title: "Middle School (Grade 6-8)",
      icon: Brain,
      description: "Advanced academics with focus on critical thinking and problem-solving skills.",
      duration: "3 Years Program",
      features: ["Science experiments", "Math Olympiad prep", "Public speaking"],
    },
    {
      title: "Matric / O-Levels (Grade 9-10)",
      icon: GraduationCap,
      description: "Board exam preparation with comprehensive subject coverage and exam techniques.",
      duration: "2 Years Program",
      features: ["Board exam prep", "Career counseling", "Past paper practice"],
    },
    {
      title: "FSc / A-Levels (Grade 11-12)",
      icon: Rocket,
      description: "Pre-Medical, Pre-Engineering, ICS, and Commerce tracks with university entrance prep.",
      duration: "2 Years Program",
      features: ["Entry test integration", "Lab practicals", "University guidance"],
    },
  ],
  university: [
    {
      title: "MDCAT Preparation",
      icon: Brain,
      description: "Comprehensive medical college admission test prep with mock tests and expert guidance.",
      duration: "6 Months Intensive",
      features: ["1000+ MCQs practice", "Weekly mock tests", "Personal mentoring"],
    },
    {
      title: "ECAT Preparation",
      icon: Rocket,
      description: "Engineering universities entrance test preparation with focus on Math, Physics, English.",
      duration: "6 Months Intensive",
      features: ["Concept clearing", "Speed building", "University counseling"],
    },
    {
      title: "SAT Preparation",
      icon: Globe,
      description: "For students planning to study abroad – comprehensive SAT Math and English prep.",
      duration: "4 Months Program",
      features: ["Vocabulary building", "Math strategies", "Writing skills"],
    },
    {
      title: "NTS / HAT / GAT",
      icon: BookOpen,
      description: "Various university and job entry test preparations with updated syllabus coverage.",
      duration: "3 Months Program",
      features: ["Current affairs", "Analytical reasoning", "Verbal ability"],
    },
  ],
  professional: [
    {
      title: "MS Office Mastery",
      icon: Laptop,
      description: "Complete Microsoft Office suite – Word, Excel, PowerPoint, Access for workplace productivity.",
      duration: "2 Months",
      features: ["Advanced Excel formulas", "Professional presentations", "Database basics"],
    },
    {
      title: "Graphic Design",
      icon: Palette,
      description: "Adobe Photoshop, Illustrator, and Canva for creating stunning visual designs.",
      duration: "3 Months",
      features: ["Logo design", "Social media graphics", "Portfolio building"],
    },
    {
      title: "Web Development",
      icon: Code,
      description: "HTML, CSS, JavaScript, and React.js – build modern responsive websites from scratch.",
      duration: "4 Months",
      features: ["Frontend development", "React projects", "Freelancing guidance"],
    },
    {
      title: "App Development",
      icon: Smartphone,
      description: "Flutter and React Native for building cross-platform mobile applications.",
      duration: "4 Months",
      features: ["UI/UX basics", "Firebase integration", "Play Store publishing"],
    },
    {
      title: "Database & SQL",
      icon: Database,
      description: "MySQL, SQL Server fundamentals for data management and backend development.",
      duration: "2 Months",
      features: ["Query writing", "Database design", "Real projects"],
    },
    {
      title: "Digital Marketing",
      icon: TrendingUp,
      description: "SEO, Social Media Marketing, Google Ads, and content marketing essentials.",
      duration: "2 Months",
      features: ["SEO optimization", "Ad campaigns", "Analytics"],
    },
  ],
};

export const ProgramsSection = () => {
  const [activeCategory, setActiveCategory] = useState("school");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="programs" className="py-16 lg:py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-sm tracking-wider uppercase mb-4">
            Our Programs
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Discover Your <span className="text-secondary">Perfect Path</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From primary education to professional certifications – we have programs designed 
            for every stage of your learning journey.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12 lg:mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-sm ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-foreground hover:bg-accent border border-border"
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Program Cards Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          {programs[activeCategory as keyof typeof programs].map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-lift transition-all duration-300 hover:-translate-y-2 border border-border/50 flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <program.icon className="w-7 h-7 text-secondary" />
              </div>
              
              <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                {program.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                {program.description}
              </p>
              
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-gold mb-5">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                {program.duration}
              </div>
              
              <ul className="space-y-2 mb-6 flex-grow">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => handleNavClick("#contact")}
                className="mt-auto flex items-center gap-2 text-secondary font-semibold text-sm hover:gap-4 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button 
            variant="secondary" 
            size="lg" 
            className="px-8 py-6 text-lg font-semibold"
            onClick={() => handleNavClick("#contact")}
          >
            Get Free Course Counseling
            <ArrowRight className="w-5 h-5 ml-3" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};