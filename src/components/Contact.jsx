import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Globe } from "lucide-react";

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const toastStyle = {
    background: "#1a1a1d",
    color: "#fff",
    border: "1px solid #a855f7",
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("user_name")?.trim();
    const email = formData.get("user_email")?.trim();
    const msg = formData.get("message")?.trim();

    if (!name || !email || !msg) {
      toast.error("Bhai, saare fields bharna zaroori hai! 😊", { style: toastStyle });
      return;
    }

    if (name.length < 3) {
      toast.error("Naam kam se kam 3 letters ka hona chahiye! ✍️", { style: toastStyle });
      return;
    }

    const wordCount = msg.split(/\s+/).filter(Boolean).length;
    if (wordCount < 3) {
      toast.error("Message thoda bada likhein (kam se kam 3 words)! 💬", { style: toastStyle });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Email format sahi nahi hai! 📧", { style: toastStyle });
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        "service_sqis4uo",
        "template_xmdfpkd",
        form.current,
        "FmlZyEXiQxrV7QMIO"
      )
      .then(() => {
        toast.success("Message bhej diya gaya hai! ✅", {
          duration: 4000,
          style: toastStyle,
        });
        form.current.reset();
      })
      .catch(() => {
        toast.error("Oops! Kuch gadbad ho gayi. ❌", { style: toastStyle });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <Toaster position="top-center" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Get In <span className="text-purple-500">Touch</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            Have a project in mind or want to collaborate? Let’s talk!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <form ref={form} onSubmit={sendEmail} className="space-y-6 order-2 md:order-1">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full bg-[#1a1a1d] px-4 py-3 rounded-lg"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              className="w-full bg-[#1a1a1d] px-4 py-3 rounded-lg"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full bg-[#1a1a1d] px-4 py-3 rounded-lg resize-none"
            />

            <button
              type="submit"
              disabled={isSending}
              className={`w-full bg-purple-500 py-3 rounded-lg font-medium ${
                isSending ? "opacity-50 cursor-wait" : ""
              }`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="space-y-6 order-1 md:order-2">
            <InfoItem icon={<MapPin />} title="Location" value="Lucknow, India" />
            <InfoItem icon={<Mail />} title="Email" value="mr.rajyadav272207@gmail.com" />
            <InfoItem icon={<Phone />} title="Phone" value="+91 9696561809" />

            <div className="flex gap-4">
              <SocialIcon icon={<Github />} link="https://github.com/Raj969656" />
              <SocialIcon icon={<Linkedin />} link="https://www.linkedin.com/in/raj-yadav-5b343128a/" />
              <SocialIcon icon={<Twitter />} link="https://twitter.com/YOUR_USERNAME" />
              <SocialIcon icon={<Globe />} link="https://myself-portfolio-tbc3.vercel.app/" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ icon, title, value }) {
  return (
    <div className="flex gap-3 items-start">
      <span className="text-purple-500">{icon}</span>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-400">{value}</p>
      </div>
    </div>
  );
}

function SocialIcon({ icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1a1d] hover:bg-purple-500 transition"
    >
      {icon}
    </a>
  );
}
