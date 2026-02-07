export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4">

        {/* Name & Role (SEO SIGNAL) */}
        <p className="text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">
            Raj Yadav
          </span>{" "}
          — Full Stack MERN Developer
        </p>

        {/* Internal Links (CRAWLABILITY) */}
        <nav className="flex justify-center flex-wrap gap-4 text-sm">
          <a href="#home" className="hover:text-purple-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-purple-400 transition">
            About
          </a>
          <a href="#skills" className="hover:text-purple-400 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-purple-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-purple-400 transition">
            Contact
          </a>
        </nav>

        {/* External Links (SEO + TRUST) */}
        <div className="flex justify-center gap-5 text-sm">
          <a
            href="https://github.com/Raj969656"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/raj-yadav-5b343128a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            LinkedIn
          </a>
        </div>

        {/* SEO-ONLY TEXT */}
        <p className="sr-only">
          Raj Yadav is a Full Stack MERN Developer skilled in React.js, Node.js,
          MongoDB, Express.js, REST APIs, and modern web application development.
        </p>
      </div>
    </footer>
  );
}
