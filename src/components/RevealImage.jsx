import { motion } from "framer-motion";

export default function RevealImage({ src }) {
  return (
    <div className="overflow-hidden">
      <motion.img
        src={src}
        className="w-full h-full object-cover"
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </div>
  );
}
