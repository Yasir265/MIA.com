"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Facebook,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "0310 5372677",
    link: "tel:+923105372677",
  },
  {
    icon: Mail,
    title: "Email",
    value: "ibrahimaccadmey@gmail.com",
    link: "mailto:ibrahimaccadmey@gmail.com",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Main Market Pindorian islamabad",
    link: "https://maps.google.com/?q=F-8+Islamabad",
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Mon-Sat: 4:00 PM - 8:00 PM",
    link: null,
  },
];

const programs = [
  "School Level (Grade 1-12)",
  "MDCAT Preparation",
  "ECAT Preparation",
  "Professional IT Courses",
  "Graphic Design",
  "Other",
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    program: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionDate = new Date().toLocaleString("en-PK", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    const commonParams = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      program: formData.program || "Not specified",
      message: formData.message.trim() || "No additional message",
      date: submissionDate,
    };

    try {
      // 1. Owner/Admin ko inquiry bhejna
      await emailjs.send(
        "service_e1e68b7",           // ← yahan apna daalo
        "template_q4qujc5",    // ← New Inquiry template ID
        commonParams,
        "s-szfE3G0h6n5Y8gh"            // ← EmailJS Public Key
      );

      // 2. User ko Thank You auto-reply
      await emailjs.send(
        "service_e1e68b7",
        "template_5e77m9e", // ← Thank you template ID
        {
          ...commonParams,
          to_email: formData.email,  // ← yeh bohot zaroori hai
          to_name: formData.name,
        },
        // "s-szfE3G0h6n5Y8gh"
        "s-szfE3G0h6n5Y8gh"            // ← EmailJS Public Key

      );

      toast.success("Inquiry bhej di gayi!", {
        description: "Thank you email bhi aa gaya hoga. Hum jald rabta karenge!",
      });

      // Form fresh (reset)
      setFormData({
        name: "",
        phone: "",
        email: "",
        program: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("Kuch masla ho gaya. WhatsApp ya call try karein.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-muted/30" ref={ref}>
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-secondary font-semibold text-sm tracking-wider uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Start Your <span className="text-secondary">Journey Today</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Have questions? Ready to enroll? Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border/50"
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
              Inquiry Form
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                    placeholder="03XX-XXXXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Interested Program <span className="text-red-500">*</span>
                </label>
                <select
                  name="program"
                  required
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none appearance-none"
                >
                  <option value="">Select a program</option>
                  {programs.map((program) => (
                    <option key={program} value={program}>
                      {program}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none"
                  placeholder="Any specific questions or requirements..."
                />
              </div>
<Button
  type="submit"
  disabled={isSubmitting}
  className="w-full py-6 text-base font-medium bg-[#14b8a6] hover:bg-[#0f766e] text-white"
>
  {isSubmitting ? (
    <div className="flex items-center gap-2">
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
      Sending...
    </div>
  ) : (
    "Submit Inquiry"
  )}
</Button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-2 mr-9">
              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.link || "#"}
                  className="bg-card rounded-xl p-5 shadow-soft border border-border/50 hover:shadow-lift hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3 group-hover:bg-secondary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">{item.title}</div>
                  <div className="font-medium text-foreground">{item.value}</div>
                </a>
              ))}
            </div>

            {/* WhatsApp Button */}
          <a
  href="https://wa.me/923105372677?text=Hi,%20I'm%20interested%20in%20Future%20Academy%20programs."
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
>
  <FaWhatsapp className="w-6 h-6" />   {/* ← yeh original WhatsApp icon hai */}
  Contact On WhatsApp
</a>

            {/* Map */}
            <div className="relative w-full overflow-hidden rounded-xl border border-border/50 shadow-md" style={{ aspectRatio: "16 / 9" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2214.7489525709184!2d73.11334113733551!3d33.6458545092061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sibrahim%20accadmey%20burma%20town!5e1!3m2!1sen!2s!4v1768545150612!5m2!1sen!2s"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Muhammad Ibrahim Academy - Burma Town Location"
              />
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <span className="text-muted-foreground text-sm">Follow Us:</span>
              {[
                { icon: Facebook, link: "#", label: "Facebook" },
                { icon: Instagram, link: "#", label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};