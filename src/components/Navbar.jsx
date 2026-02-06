import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = ["home", "about", "skills", "projects", "experience", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120; // navbar offset

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPos >= section.offsetTop) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
 <nav
  className="
    fixed top-0 w-full z-50
    backdrop-blur-xl
    bg-[rgba(11,11,14,0.55)]
    border-b border-white/5
  "
>



     <div className="max-w-7xl mx-auto px-8 h-[72px] flex items-center justify-between">


        {/* Logo */}
       <div
  onClick={() => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }}
  className="flex items-center gap-2 cursor-pointer"
>
  <h1 className="text-lg font-semibold hover:text-purple-400 transition">
    Raj<span className="text-purple-500"> Yadav</span>
  </h1>

  <span className="w-2 h-2 bg-purple-500 rounded-full mt-5" />
</div>

        {/* Links */}
        <ul className="flex gap-8 text-sm text-gray-300">
          {sections.map((s) => (
            <li key={s} className="relative flex flex-col items-center">
              <a
                href={`#${s}`}
                className="capitalize hover:text-white transition"
              >
                {s}
              </a>

              {active === s && (
                <motion.span
                  layoutId="nav-underline"
                  className="
                    absolute -bottom-2
                    h-[3px] w-6
                    bg-purple-500 rounded-full
                    shadow-[0_0_14px_rgba(168,85,247,0.9)]
                  "
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
