import { motion } from "framer-motion";

export default function Quote() {
  return (
    <section className="py-[35vh] text-center px-8">
      <motion.h2
        className="text-4xl md:text-5xl font-serif max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        viewport={{ once: true }}
      >
        “If you do not use your voice, someone else will decide for you.”
      </motion.h2>
    </section>
  );
}
