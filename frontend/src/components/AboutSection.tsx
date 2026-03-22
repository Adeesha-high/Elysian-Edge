import { motion } from "framer-motion";
import { Award, Clock, Heart, Star } from "lucide-react";

const stats = [
  { icon: Calendar, value: "100+", label: "Events Completed" },
  { icon: Heart, value: "75+", label: "Happy Clients" },
  { icon: Clock, value: "10+", label: "Years Experience" },
  { icon: Star, value: "5.0", label: "Client Rating" },
];

import { Calendar } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Who We Are</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient-gold mb-6">About Elysian Edge</h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Elysian Edge Events is a full-service event planning and production company dedicated to delivering exceptional and memorable experiences. We specialize in Corporate Events, Conferences , Panel Discussions ,Company Anniversary Celebrations , Awards Ceremonies , Gatherings, Birthdays, and Private Celebrations, combining creativity with technical excellence.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Our comprehensive range of services includes Professional Sound Systems, LED Screens, Stage Lighting Systems, Event Live Streaming, Photography and Videography, Custom Photo Backdrops, DJ Entertainment, and High-Quality Projectors and Screens. With advanced equipment and a skilled team, we ensure every event is executed with precision and style.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              At Elysian Edge Events, we focus on innovation, reliability, and attention to detail—turning your vision into a seamless and impactful event experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="p-6 border border-border rounded-sm bg-card text-center hover:border-primary/30 transition-colors duration-300"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-heading text-3xl font-bold text-gradient-gold">{stat.value}</p>
                <p className="font-body text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
