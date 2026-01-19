import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Jalal Khan",
    role: "Parent of Grade 12 Student",
    image: "public/parents/p1.jpg",
    rating: 5,
    text: "Mera beti Ayesha pehle parhai mein interest nahi leti thi, but Ibrahim Academy ke teachers ne uski zindagi badal di. Ab woh topper hai apni class ka!",
  },
  {
    name: "Akram Niazi",
    role: "Software Engineer Student - BSSE student at COMSAT university",
    image: "public/parents/p44.jpg",
    rating: 5,
    text: "Comsat ka entery test preparation yahan se ki thi. Sir Rizwan  ki guidance se mujhe 90+ score mila. Best decision of my life was joining here.",
  },
  {
    name: "Sana Malik",
    role: "Web Developer - Freelancer",
    image: "public/parents/p3.jpg",
    rating: 5,
    text: "Professional courses se meri life change ho gayi. Web development seekh kar ab main monthly 80k+ kama rahi hoon. Thank you Future Academy!",
  },
  {
    name: "Mr. Khalid Mahmood",
    role: "Parent of 3 Students",
    image: "public/parents/p5.jpg",
    rating: 5,
    text: "Meri teen bachay yahan parhtay hain. Safe environment, caring teachers, aur quality education. Yeh jagah har parent ke liye best choice hai.",
  },
  // {
  //   name: "Ayesha Khan",
  //   role: "A-Level Student",
  //   image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
  //   rating: 5,
  //   text: "O-Levels aur A-Levels dono yahan se kiye. Teachers ne har subject ko itna asaan bana diya. 4 A's mili mujhe Cambridge mein!",
  // },
  {
    name: "Bilal Ahmed",
    role: "Graphic Designer - Agency Owner",
    image: "public/parents/p6.jpg",
    rating: 5,
    text: "Graphic design course se start kiya, aaj apni agency hai. Practical training aur freelancing guidance ne meri career bana di.",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return result;
  };

  return (
    <section id="testimonials" className="section-padding bg-muted/30" ref={ref}>
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-sm tracking-wider uppercase mb-4">
            Testimonials
          </span>
          {/* <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Suniye <span className="text-secondary">Hamare Students</span> Ki Kahani
          </h2> */}

                    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Inspiring  <span className="text-secondary">Student </span> Stories
          </h2>
          
          <p className="text-muted-foreground text-lg leading-relaxed">
            Real stories from real people – parents, students, and alumni share their experiences.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between z-10 pointer-events-none">
            <button
              onClick={prevSlide}
              className="pointer-events-auto -translate-x-4 lg:-translate-x-12 w-12 h-12 rounded-full bg-card shadow-lg flex items-center justify-center text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="pointer-events-auto translate-x-4 lg:translate-x-12 w-12 h-12 rounded-full bg-card shadow-lg flex items-center justify-center text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {visibleTestimonials().map((testimonial, index) => (
              <motion.div
                key={testimonial.name + currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/50 relative"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 w-10 h-10 text-secondary/20" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                
                {/* Text */}
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-secondary/20"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-card shadow-lg flex items-center justify-center text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-card shadow-lg flex items-center justify-center text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-secondary"
                    : "bg-border hover:bg-secondary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
