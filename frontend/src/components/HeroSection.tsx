import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          src="/Elysian Edge AD.mp4"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-primary font-body text-sm tracking-[0.4em] uppercase mb-6">
            Premium Event Management
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            <span className="text-gradient-gold">Elysian Edge Events</span>
          </h1>
          <p className="font-body text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Creating Memories, One Event at a Time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gradient-gold text-primary-foreground font-body font-semibold px-8 py-4 text-sm tracking-widest uppercase hover:shadow-gold transition-all duration-300 rounded-sm"
            >
              Get a Quote
            </a>
            <a
              href="#gallery"
              className="border border-primary/40 text-primary font-body font-semibold px-8 py-4 text-sm tracking-widest uppercase hover:bg-primary/10 transition-all duration-300 rounded-sm"
            >
              View Our Work
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;