
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

    const formData = new FormData(form.current);import React, { useRef, useState } from "react";
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

    const wordCount = msg.split(/\s+/).filter(word => word.length > 0).length;
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

    emailjs.sendForm(
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
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Get In <span className="text-purple-500">Touch</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            Have a project in mind or want to collaborate? Let’s talk!
          </p>
        </div>

        {/* SEO-ONLY TEXT (NO UI CHANGE) */}
        <p className="sr-only">
          Contact Raj Yadav, a Full Stack MERN Developer based in Lucknow, India.
          Reach out via email, phone, or social media for freelance work,
          collaboration, or full-time opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* FORM */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6 order-2 md:order-1"
          >
            <div>
              <label className="text-sm text-gray-300 block mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                aria-label="Your name"
                className="w-full bg-[#1a1a1d] rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="Enter name (min 3 chars)"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300 block mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="user_email"
                aria-label="Your email address"
                className="w-full bg-[#1a1a1d] rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="raj@example.com"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300 block mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                rows="5"
                aria-label="Your message"
                className="w-full bg-[#1a1a1d] rounded-lg px-4 py-3 text-sm outline-none resize-none focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="Write at least 3 words..."
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className={`w-full bg-purple-500 hover:bg-purple-600 transition-all rounded-lg py-3 font-medium ${
                isSending ? "opacity-50 cursor-wait" : ""
              }`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* INFO */}
          <div className="space-y-8 md:space-y-10 order-1 md:order-2">
            <InfoItem icon={<MapPin />} title="Location" value="Lucknow, India" />
            <InfoItem icon={<Mail />} title="Email" value="mr.rajyadav272207@gmail.com" />
            <InfoItem icon={<Phone />} title="Phone" value="+91 9696561809" />

            <div>
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex flex-wrap gap-4">
                <SocialIcon icon={<Github />} label="GitHub" link="https://github.com/Raj969656" />
                <SocialIcon icon={<Linkedin />} label="LinkedIn" link="https://www.linkedin.com/in/raj-yadav-5b343128a/" />
                <SocialIcon icon={<Twitter />} label="Twitter" link="https://twitter.com/YOUR_USERNAME" />
                <SocialIcon icon={<Globe />} label="Portfolio" link="https://myself-portfolio-tbc3.vercel.app/" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Helper Components */
function InfoItem({ icon, title, value }) {
  return (
    <div className="flex items-start gap-4">
      <span className="text-purple-500 mt-1">{icon}</span>
      <div>
        <h4 className="font-medium mb-1">{title}</h4>
        <p className="text-gray-400 text-sm break-all">{value}</p>
      </div>
    </div>
  );
}

function SocialIcon({ icon, label, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="relative group"
    >
      <div className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-[#1a1a1d] hover:bg-purple-500 transition-all shadow-lg">
        {icon}
      </div>
      <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-black text-[10px] text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {label}
      </span>
    </a>
  );
}

    const name = formData.get("user_name")?.trim();
    const email = formData.get("user_email")?.trim();
    const msg = formData.get("message")?.trim();

    // --- VALIDATION LOGIC ---
    if (!name || !email || !msg) {
      toast.error("Bhai, saare fields bharna zaroori hai! 😊", { style: toastStyle });
      return;
    }

    if (name.length < 3) {
      toast.error("Naam kam se kam 3 letters ka hona chahiye! ✍️", { style: toastStyle });
      return;
    }

    const wordCount = msg.split(/\s+/).filter(word => word.length > 0).length;
    if (wordCount < 3) {
      toast.error("Message thoda bada likhein (kam se kam 3 words)! 💬", { style: toastStyle });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Email format sahi nahi hai! 📧", { style: toastStyle });
      return;
    }

    // --- EMAILJS SENDING ---
    setIsSending(true);

    // Replace with your actual EmailJS keys
    emailjs.sendForm(
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
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Oops! Kuch gadbad ho gayi. ❌", { style: toastStyle });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Get In <span className="text-purple-500">Touch</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            Have a project in mind or want to collaborate? Let’s talk!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* FORM SIDE */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6 order-2 md:order-1">
            <div>
              <label className="text-sm text-gray-300 block mb-2">Your Name</label>
              <input
                type="text"
                name="user_name"
                className="w-full bg-[#1a1a1d] rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="Enter name (min 3 chars)"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300 block mb-2">Email Address</label>
              <input
                type="email"
                name="user_email"
                className="w-full bg-[#1a1a1d] rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="raj@example.com"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300 block mb-2">Your Message</label>
              <textarea
                name="message"
                rows="5"
                className="w-full bg-[#1a1a1d] rounded-lg px-4 py-3 text-sm outline-none resize-none focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="Write at least 3 words..."
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className={`w-full bg-purple-500 hover:bg-purple-600 transition-all rounded-lg py-3 font-medium cursor-pointer ${
                isSending ? "opacity-50 cursor-wait" : ""
              }`}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* INFO SIDE */}
          <div className="space-y-8 md:space-y-10 order-1 md:order-2">
            <InfoItem icon={<MapPin />} title="Location" value="Lucknow, India" />
            <InfoItem icon={<Mail />} title="Email" value="mr.rajyadav272207@gmail.com" />
            <InfoItem icon={<Phone />} title="Phone" value="+91 9696561809" />

            {/* Social Icons with Links */}
            <div>
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex flex-wrap gap-4">
                {/* IN LINKS KO UPDATE KAREIN */}
                <SocialIcon 
                  icon={<Github />} 
                  label="GitHub" 
                  link="https://github.com/Raj969656" 
                />
                <SocialIcon 
                  icon={<Linkedin />} 
                  label="LinkedIn" 
                  link="https://www.linkedin.com/in/raj-yadav-5b343128a/" 
                />
                <SocialIcon 
                  icon={<Twitter />} 
                  label="Twitter" 
                  link="https://twitter.com/YOUR_USERNAME" 
                />
                <SocialIcon 
                  icon={<Globe />} 
                  label="Portfolio" 
                  link="https://myself-portfolio-tbc3.vercel.app/" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Helper Components */
function InfoItem({ icon, title, value }) {
  return (
    <div className="flex items-start gap-4">
      <span className="text-purple-500 mt-1">{icon}</span>
      <div>
        <h4 className="font-medium mb-1">{title}</h4>
        <p className="text-gray-400 text-sm break-all">{value}</p>
      </div>
    </div>
  );
}

// Updated SocialIcon to accept a 'link' prop and use <a> tag
function SocialIcon({ icon, label, link }) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="relative group cursor-pointer"
    >
      <div className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-[#1a1a1d] hover:bg-purple-500 transition-all shadow-lg">
        {icon}
      </div>
      <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-black text-[10px] text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {label}
      </span>
    </a>
  );
}
