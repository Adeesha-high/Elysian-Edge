import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpeg";
import gallery14 from "@/assets/gallery-14.jpeg";
import gallery15 from "@/assets/gallery-15.jpeg";
import gallery16 from "@/assets/gallery-16.jpeg";
import gallery17 from "@/assets/gallery-17.jpeg";
import gallery18 from "@/assets/gallery-18.jpeg";
import gallery19 from "@/assets/gallery-19.jpeg";
import gallery20 from "@/assets/gallery-20.jpeg";
import gallery21 from "@/assets/gallery-21.jpeg";
import gallery22 from "@/assets/gallery-22.jpeg";
import gallery23 from "@/assets/gallery-23.jpeg";
import gallery24 from "@/assets/gallery-24.jpeg";
import gallery25 from "@/assets/gallery-25.jpeg";
import gallery26 from "@/assets/gallery-26.jpeg";
import gallery27 from "@/assets/gallery-27.jpeg";
import gallery28 from "@/assets/gallery-28.jpeg";
import gallery29 from "@/assets/gallery-29.jpeg";
import gallery30 from "@/assets/gallery-30.jpeg";


const topRow = [gallery1, gallery2, gallery3, gallery4, gallery5,gallery6, gallery7, gallery8, gallery9,gallery20, gallery21, gallery22, gallery23,gallery24];
const bottomRow = [gallery10,gallery11,gallery12, gallery13, gallery14,gallery15,gallery16,gallery17,gallery18,gallery19,gallery25,gallery26,gallery27,gallery28,gallery29,gallery30];


const MarqueeRow = ({
  images,
  direction = "left",
}: {
  images: string[];
  direction?: "left" | "right";
}) => {
  // Triple the images for seamless loop
  const tripled = [...images, ...images, ...images];
  const animDir = direction === "left" ? "-33.333%" : "0%";
  const animDirEnd = direction === "left" ? "0%" : "-33.333%";

  return (
    <div className="overflow-hidden group">
      <motion.div
        className="flex gap-4"
        animate={{ x: [animDir, animDirEnd] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
        style={{ width: "fit-content" }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {tripled.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[320px] md:w-[400px] aspect-[4/3] rounded-lg overflow-hidden shadow-lg shadow-background/30 cursor-pointer group/card hover:z-10 transition-all duration-500"
          >
            <img
              src={src}
              alt={`Event gallery ${(i % images.length) + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-110"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="gallery" className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Our Portfolio</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient-gold">Gallery</h2>
        </motion.div>
      </div>

      <div className="space-y-4">
        <MarqueeRow images={topRow} direction="left" />
        <MarqueeRow images={bottomRow} direction="right" />
      </div>
    </section>
  );
};

export default GallerySection;
