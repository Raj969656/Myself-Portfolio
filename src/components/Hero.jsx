console.log("🔥 Hero LOADED");

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GlowButton from "./ui/GlowButton";

function TypingText({ text, speed = 90 }) {
  const [index, setIndex] = useState(0);
  const [cursor, setCursor] = useState(true);

  
  useEffect(() => {
    if (index < text.length) {
      const t = setTimeout(() => {
        setIndex((i) => i + 1);
      }, speed);
      return () => clearTimeout(t);
    }
  }, [index, text, speed]);

 
  useEffect(() => {
    const blink = setInterval(() => {
      setCursor((c) => !c);
    }, 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <span className="whitespace-nowrap">
      {text.slice(0, index)}
      <span className="text-purple-500">{cursor ? "|" : " "}</span>
    </span>
  );
}

function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-[360px] h-[360px] flex items-center justify-center"
    >
   
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear",
        }}
        className="absolute inset-0 rounded-full
          bg-[conic-gradient(from_0deg,#a855f7,#ec4899,#a855f7)]"
      />

    
      <div className="absolute inset-[6px] rounded-full bg-[#0f0f10]" />

      {/* profile image */}
      <img
  src="/profile.jpg"
  alt="Profile"
  className="relative z-10 w-[330px] h-[330px] rounded-full object-cover animate-float"
/>

    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-28"
    >
      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-24 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4"
          >
            Hi, I’m{" "}
            <span className="text-purple-500 cursor-pointer">
              Raj Yadav
            </span>
          </motion.h1>

          {/* Typing line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative inline-block text-2xl font-medium"
          >
            <TypingText text="Full Stack Developer" />

            {/* underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 2.1, duration: 0.5 }}
              className="absolute left-0 -bottom-1 h-[3px] bg-purple-500 rounded-full"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-400 max-w-[420px] mt-6"
          >
            I create stunning web experiences with modern
            technologies and innovative design.
          </motion.p>

          {/* Buttons */}
       <div className="flex gap-4 mt-8 cursor-pointer">
 <a href="#projects">
  <GlowButton><span className="cursor-pointer">View Work</span></GlowButton>
</a>
<a href="#contact">
  <GlowButton><button className="cursor-pointer">Contact Me</button></GlowButton>
</a>
  
</div>


        </div>

      {/* RIGHT IMAGE */}
<div className="flex justify-center">
  <ProfileImage />
</div>


      </div>
    </section>
  );
}
