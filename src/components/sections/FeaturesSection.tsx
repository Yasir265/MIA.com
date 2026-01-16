import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Users, 
  BookOpen, 
  Shield, 
  Wallet, 
  Compass, 
  Lightbulb,
  Monitor,
  Heart
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Learn from teachers with 10+ years of experience and proven track records of student success.",
    color: "from-secondary to-secondary/70",
  },
  {
    icon: BookOpen,
    title: "Modern Curriculum",
    description: "Updated syllabus aligned with current educational standards and industry requirements.",
    color: "from-primary to-primary/70",
  },
  {
    icon: Monitor,
    title: "Practical Labs",
    description: "State-of-the-art computer labs and science labs for hands-on learning experience.",
    color: "from-gold to-gold/70",
  },
  {
    icon: Lightbulb,
    title: "Soft Skills Focus",
    description: "Communication, leadership, and presentation skills training alongside academics.",
    color: "from-secondary to-secondary/70",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Secure campus with CCTV monitoring and strict safety protocols for peace of mind.",
    color: "from-primary to-primary/70",
  },
  {
    icon: Wallet,
    title: "Affordable Quality",
    description: "Premium education at reasonable fees with flexible payment options available.",
    color: "from-gold to-gold/70",
  },
  {
    icon: Compass,
    title: "Career Guidance",
    description: "Dedicated counselors to help students choose the right path for their future.",
    color: "from-secondary to-secondary/70",
  },
  {
    icon: Heart,
    title: "Individual Attention",
    description: "Small class sizes ensure every student receives personalized care and support.",
    color: "from-primary to-primary/70",
  },
];

export const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto container-padding relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-sm tracking-wider uppercase mb-4">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Makes Us <span className="text-secondary">Different</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Future Academy combines academic excellence with holistic development to ensure 
            your child's success in every aspect of life.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-lift transition-all duration-300 hover:-translate-y-2 border border-border/50 overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="relative font-heading text-lg font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                {feature.title}
              </h3>
              
              <p className="relative text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 bg-gradient-to-r from-primary via-primary/95 to-primary rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "5000+", label: "Students Taught" },
              { value: "200+", label: "Courses Completed" },
              { value: "98%", label: "Success Rate" },
              { value: "50+", label: "Expert Teachers" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
