import { motion } from "framer-motion";
import clientCisc from "@/assets/client-cisc.jpg";
import clientDothanyard from "@/assets/client-dothanyard.png";
import clientGiz from "@/assets/client-giz.png";
import clientJohnpiper from "@/assets/client-johnpiper.png";
import clientKelaniya from "@/assets/client-kelaniya.jpg";
import clientNibm from "@/assets/client-nibm.jpg";
import clientUok from "@/assets/client-uok.png";

const clients = [
  { name: "CISC", logo: clientCisc },
  { name: "Dothanyard", logo: clientDothanyard },
  { name: "GIZ", logo: clientGiz },
  { name: "John Piper International", logo: clientJohnpiper },
  { name: "University of Kelaniya", logo: clientKelaniya },
  { name: "NIBM", logo: clientNibm },
  { name: "UOK", logo: clientUok },
];

const EquipmentSection = () => {
  return (
    <section id="equipment" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Trusted Partners</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient-gold">Industry-Leading</h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
            Where premium event technology meets refined service, creating unforgettable experiences with excellence at every level.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 1.0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.10 }}
              className="flex items-center justify-center p-6 border border-border rounded-sm bg-card hover:border-primary/30 transition-all duration-300 aspect-[3/2]"
            >
              <img
                src={client.logo}
                alt={client.name}
                className={`max-w-full object-contain filter brightness-90 hover:brightness-110 transition-all duration-300 ${
                  client.name === "Dothanyard" ||
                  client.name === "John Piper International" ||
                  client.name === "UOK"
                    ? "max-h-20"
                    : "max-h-24"
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
