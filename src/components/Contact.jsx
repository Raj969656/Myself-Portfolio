import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-semibold">
            Get In <span className="text-purple-500">Touch</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            Have a project in mind or want to collaborate? Let’s talk!
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* LEFT : FORM */}
          <form className="space-y-6">
            <div>
              <label className="text-sm text-gray-300 block mb-2">
                Your Name
              </label>
              <input
                type="text"
                className="w-full bg-[#1a1a1d] rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300 block mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full bg-[#1a1a1d] rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300 block mb-2">
                Your Message
              </label>
              <textarea
                rows="5"
                className="w-full bg-[#1a1a1d] rounded-lg px-4 py-3 text-sm outline-none resize-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 transition rounded-lg py-3 font-medium cursor-pointer"
            >
              Send Message
            </button>
          </form>

          {/* RIGHT : INFO */}
          <div className="space-y-10">

            <InfoItem icon={<MapPin />} title="Location" value="Lucknow, India" />
            <InfoItem icon={<Mail />} title="Email" value="mr.rajyadav272207@gmail.com" />
            <InfoItem icon={<Phone />} title="Phone" value="+91 9696561809" />

            {/* Social */}
            <div>
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <SocialIcon icon={<Github />} label="GitHub" />
                <SocialIcon icon={<Linkedin />} label="LinkedIn" />
                <SocialIcon icon={<Twitter />} label="Twitter" />
                <SocialIcon icon={<Globe />} label="Portfolio" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* Info item */
function InfoItem({ icon, title, value }) {
  return (
    <div className="flex items-start gap-4">
      <span className="text-purple-500">{icon}</span>
      <div>
        <h4 className="font-medium mb-1">{title}</h4>
        <p className="text-gray-400 text-sm">{value}</p>
      </div>
    </div>
  );
}

/* Social icon with tooltip */
function SocialIcon({ icon, label }) {
  return (
    <div className="relative group cursor-pointer">
      <div className="w-11 h-11 flex items-center justify-center rounded-full bg-[#1a1a1d] hover:bg-purple-500 transition">
        {icon}
      </div>

      {/* Tooltip */}
      <span className="
        absolute -top-9 left-1/2 -translate-x-1/2
        bg-black text-xs text-white px-2 py-1 rounded
        opacity-0 group-hover:opacity-100 transition
        pointer-events-none
      ">
        {label}
      </span>
    </div>
  );
}
