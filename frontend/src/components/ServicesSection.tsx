import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Calendar, Music, Monitor, Projector, Video, Palette, ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Event Planning & Management",
    desc: "End-to-end event orchestration — from concept development to flawless execution for any occasion.",
    slug: "event-planning",
  },
  {
    icon: Music,
    title: "Stage, Sound & Lighting Solutions",
    desc: "Professional-grade audio and dynamic lighting systems engineered for unforgettable atmospheres.",
    slug: "sound-lighting",
  },
  {
    icon: Monitor,
    title: "LED & Visual Display Technology",
    desc: "High-impact LED screens and video walls that command attention at any scale.",
    slug: "led-displays",
  },
  {
    icon: Projector,
    title: "Projection & Presentation Systems",
    desc: "Crystal-clear projection and display solutions for conferences, launches, and presentations.",
    slug: "projection-systems",
  },
  {
    icon: Video,
    title: "Media Production & Streaming",
    desc: "Cinematic coverage and real-time streaming to capture and broadcast every moment.",
    slug: "media-production",
  },
  {
    icon: Palette,
    title: "Event Design & Decor",
    desc: "Bespoke styling, thematic décor, and immersive visual design that transform spaces.",
    slug: "event-design",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">What We Offer</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient-gold">Our Services</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {services.map((s, i) => (
            <motion.button
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => navigate(`/services/${s.slug}`)}
              className="group text-left p-8 border border-border rounded-sm hover:border-primary/40 transition-all duration-500 bg-background/50 hover:shadow-gold active:scale-[0.98]"
            >
              <s.icon className="w-10 h-10 text-primary mb-5 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
              <span className="inline-flex items-center gap-1 text-primary text-sm font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Details <ChevronRight className="w-4 h-4" />
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
