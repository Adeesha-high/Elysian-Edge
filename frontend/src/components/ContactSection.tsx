import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/mdawvozd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          _subject: "New Contact Form Submission",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.errors?.[0]?.message || "Something went wrong.");
      }

      toast.success("Thank you! Your message has been sent.");
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err: unknown) {
      toast.error(
        err instanceof Error ? err.message : "Failed to send message."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient-gold">
            Contact Us
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <h3 className="font-heading text-2xl font-semibold text-foreground">
              Let's Create Something Amazing
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Ready to bring your event vision to life? Reach out to us and
              let's start planning your next unforgettable experience.
            </p>

            <div className="space-y-5">
              {[
                { icon: MapPin, text: "WW48+WC Battaramulla,Sri Lanka" },
                { icon: Phone, text: "+9474 265 6390" },
                { icon: Mail, text: "elysianedgeevents@gmail.com" },
                { icon: Clock, text: "Mon - Sun: 8:00 AM - 10:00 PM" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-body text-muted-foreground text-sm">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full bg-background border border-border rounded-sm px-5 py-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full bg-background border border-border rounded-sm px-5 py-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-background border border-border rounded-sm px-5 py-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
            />

            <textarea
              name="message"
              placeholder="Tell us about your event..."
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full bg-background border border-border rounded-sm px-5 py-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-gold text-primary-foreground font-body font-semibold py-4 text-sm tracking-widest uppercase hover:shadow-gold transition-all duration-300 rounded-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;