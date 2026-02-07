import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["home", "about", "skills", "projects", "experience", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPos >= section.offsetTop) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[rgba(11,11,14,0.55)] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <div
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <h1 className="text-lg font-semibold hover:text-purple-400 transition">
            Raj<span className="text-purple-500"> Yadav</span>
          </h1>
          <span className="w-2 h-2 bg-purple-500 rounded-full mt-5" />
        </div>

        {/* Desktop Links (UNCHANGED UI) */}
        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          {sections.map((s) => (
            <li key={s} className="relative flex flex-col items-center">
              <button
                onClick={() => scrollTo(s)}
                className="capitalize hover:text-white transition"
              >
                {s}
              </button>

              {active === s && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-2 h-[3px] w-6 bg-purple-500 rounded-full shadow-[0_0_14px_rgba(168,85,247,0.9)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-200 focus:outline-none"
        >
          <span className="block w-6 h-[2px] bg-white mb-1"></span>
          <span className="block w-6 h-[2px] bg-white mb-1"></span>
          <span className="block w-6 h-[2px] bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0b0b0e] border-t border-white/5"
          >
            <ul className="flex flex-col py-4">
              {sections.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo(s)}
                    className={`w-full text-left px-6 py-3 capitalize transition ${
                      active === s
                        ? "text-purple-500"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
