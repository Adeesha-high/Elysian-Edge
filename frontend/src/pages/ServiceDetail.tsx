import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, MessageCircle } from "lucide-react";
import {
  Calendar, Music, Monitor, Projector, Video, Palette,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const serviceData: Record<string, {
  icon: React.ElementType;
  title: string;
  tagline: string;
  description: string[];
  subServices: string[];
}> = {
  "event-planning": {
    icon: Calendar,
    title: "Event Planning & Management",
    tagline: "From concept to execution — flawlessly.",
    description: [
      "At Elysian Edge Events, we believe every event tells a story. Our event planning service covers every aspect of your celebration — from initial concept development and venue selection to vendor coordination and day-of management.",
      "Whether it's an intimate gathering or a grand celebration, our experienced planners ensure every detail is meticulously handled so you can enjoy your special day stress-free.",
    ],
    subServices: [
      "Event Planning",
      "Corporate Event Management",
      "Conference & Seminar Setup",
      "Wedding & Special Events Coordination",
      "Stage & Event Production",
      "Event Logistics & Coordination",
    ],
  },
  "sound-lighting": {
    icon: Music,
    title: "Stage, Sound & Lighting Solutions",
    tagline: "Setting the perfect mood with cutting-edge technology.",
    description: [
      "Our state-of-the-art sound and lighting solutions create the perfect ambiance for any event. We use professional-grade equipment to deliver crystal-clear audio and stunning visual effects that elevate your event experience.",
      "From DJ setups and live band sound systems to dramatic uplighting and intelligent moving heads, our technical team ensures every moment sounds and looks spectacular.",
    ],
    subServices: [
      "Professional Audio Systems",
      "Dynamic Stage Lighting",
      "DJ Setup & Performance Systems",
      "Concert Sound Systems",
      "Stage Sound Engineering",
      "Wireless Microphone Systems",
      "Conference Audio Solutions",
    ],
  },
  "led-displays": {
    icon: Monitor,
    title: "LED & Visual Display Technology",
    tagline: "High-impact visuals that command attention.",
    description: [
      "Our premium LED screens and video wall displays deliver stunning visuals at any scale. From indoor corporate events to outdoor festivals, we provide cutting-edge display technology that captivates your audience.",
      "We offer a full range of LED solutions including stage displays, event visual content screens, and digital signage to elevate your event's visual impact.",
    ],
    subServices: [
      "Premium LED Screens",
      "LED Video Wall Displays",
      "Indoor & Outdoor LED Screens",
      "Stage LED Displays",
      "Event Visual Content Displays",
      "Digital Event Screens",
    ],
  },
  "projection-systems": {
    icon: Projector,
    title: "Projection & Presentation Systems",
    tagline: "Crystal-clear projection for every venue.",
    description: [
      "We provide high-resolution projection systems and professional presentation displays for conferences, seminars, product launches, and corporate meetings.",
      "Our projection solutions are tailored to your venue and audience size, ensuring perfect visibility and impact for every presentation.",
    ],
    subServices: [
      "High Resolution Projectors",
      "Projection Screens",
      "Conference Display Systems",
      "Presentation Display Solutions",
      "Business Event Display Setup",
    ],
  },
  "media-production": {
    icon: Video,
    title: "Media Production & Streaming",
    tagline: "Capturing every magical moment forever.",
    description: [
      "Our professional photography and videography team captures the essence of your event with artistic precision. Using top-tier equipment and creative techniques, we document every emotion, detail, and celebration.",
      "From candid moments to cinematic highlight reels and real-time live streaming, we deliver beautiful visual stories that you'll treasure for a lifetime.",
    ],
    subServices: [
      "Premium Photo & Video Services",
      "Event Photography",
      "Event Videography",
      "Live Event Coverage",
      "Real-Time Live Streaming",
      "Multi-Camera Event Streaming",
      "Event Highlight Videos",
    ],
  },
  "event-design": {
    icon: Palette,
    title: "Event Design & Decor",
    tagline: "Transforming spaces into unforgettable experiences.",
    description: [
      "Our decoration and design team specializes in creating bespoke visual environments that leave lasting impressions. We transform ordinary venues into extraordinary settings that reflect your unique vision and style.",
      "From elegant floral arrangements and custom backdrops to thematic installations and ambient lighting design, every element is carefully curated to create a cohesive and stunning atmosphere.",
    ],
    subServices: [
      "Decoration & Design",
      "Elegant Event Backdrops",
      "Stage Decoration",
      "LED Stage Backdrops",
      "Custom Event Themes",
      "Event Branding & Visual Design",
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-3xl text-foreground mb-4">Service Not Found</h1>
          <Link to="/#services" className="text-primary hover:underline">← Back to Services</Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 bg-card">
        <div className="container mx-auto px-6">
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Icon className="w-14 h-14 text-primary mb-6" />
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-gradient-gold mb-4">
              {service.title}
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl">
              {service.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
                What We Do
              </h2>
              <div className="space-y-4">
                {service.description.map((p, i) => (
                  <p key={i} className="font-body text-muted-foreground leading-relaxed">{p}</p>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
                What's Included
              </h2>
              <ul className="space-y-3">
                {service.subServices.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="font-body text-muted-foreground text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Interested in {service.title}?
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-lg mx-auto">
              Get in touch with us to discuss your requirements and let us make your event extraordinary.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body font-medium rounded-sm hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-4 h-4" /> Contact Us
              </a>
              <a
                href="https://wa.me/94742656390"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary font-body font-medium rounded-sm hover:bg-primary/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServiceDetail;
