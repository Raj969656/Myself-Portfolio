import { motion } from "framer-motion";

export default function ProfileImage() {
  return (
    <div className="relative w-[360px] h-[360px] flex items-center justify-center">
      
      {/* ROTATING RING (NO Y ANIMATION HERE) */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, #a855f7, #ec4899, #a855f7)",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* INNER GAP */}
      <div className="absolute inset-[6px] rounded-full bg-black" />

      {/* ✅ IMAGE BOUNCE (THIS IS THE KEY FIX) */}
      <motion.img
        src="/profile.jpg"
        alt="profile"
        className="relative z-10 w-[330px] h-[330px] rounded-full object-cover"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -10, 0],   // ← BOUNCE HAPPENS HERE
        }}
        transition={{
          opacity: { duration: 0.8 },
          scale: { duration: 0.8 },
          y: {
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
    </div>
  );
}
