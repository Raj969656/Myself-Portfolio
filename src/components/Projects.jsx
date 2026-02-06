const projects = [
  {
    title: "Awaze-e-janta",
    desc: "A full-featured online automatic application management, user authentication, and complaint tracking system.",
    image: "/public/pp1.png",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    demo: "https://awaze-e-janta.vercel.app",
    github: "https://github.com/Rajveer9554/Awaze-E-Janta",
  },
  {
    title: "Linksy",
    desc: "A productivity application with URL shortening functionality and real-time updates.",
    image: "/public/pp2.png",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    demo: "https://linksy-frontend-zeta.vercel.app",
    github: "https://github.com/Raj969656/Linksy_frontend",
  },
  {
    title: "Expense Tracker",
    desc: "A mobile app for tracking money, expenses, and management.",
    image: "public/pp3.png",
    tech: ["React", "GraphQL", "MySQL", "Chart.js"],
    demo: "https://sweet-duckanoo-b3b3dc.netlify.app/",
    github: "https://github.com/Raj969656/BudgetBuddy",
  },
  {
    title: "Portfolio Website",
    desc: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: "/public/pp4.png",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    demo: "https://raj969656.github.io/My-Portfolio",
    github: "https://github.com/raj969656/My-Portfolio",
  },
  {
    title: "Chat App",
    desc: "A real-time chat application with group messaging, emojis, and file sharing.",
    image: "/public/pp5.png",
    tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
    demo: "https://chat-app.vercel.app",
    github: "https://github.com/raj969656/chat-app",
  },
  {
    title: "AI Image Generator",
    desc: "Generate images using AI prompts powered by OpenAI and Cloudinary.",
    image: "/public/pp6.png",
    tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
    demo: "https://ai-image-generator.vercel.app",
    github: "https://github.com/raj969656/ai-image-generator",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADING */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-semibold">
            My <span className="text-purple-500">Projects</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            A selection of my recent work
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="glow-card overflow-hidden flex flex-col"
            >
              {/* IMAGE */}
              <img
                src={p.image}
                alt={p.title}
                className="h-[180px] w-full object-cover"
              />

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2">
                  {p.title}
                </h3>

                <p className="text-sm text-gray-400 mb-4 flex-1">
                  {p.desc}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 text-xs mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-black/40 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex gap-3">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 text-sm rounded-lg bg-purple-500 hover:bg-purple-600 transition text-center"
                  >
                    View Demo
                  </a>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 text-sm rounded-lg border border-purple-500 hover:bg-purple-500 transition text-center"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW MORE */}
        <div className="flex justify-center mt-16">
          <a
            href="https://github.com/raj969656"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-purple-500 hover:bg-purple-500 transition"
          >
            View More Projects →
          </a>
        </div>

      </div>
    </section>
  );
}
