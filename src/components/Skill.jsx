export default function Skills() {
  return (
    <section id="skills" className="py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-semibold">
            My <span className="text-purple-500">Skills</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Frontend */}
          <div className="glow-card p-6">
            <div className="text-purple-500 mb-4">
              <i className="text-3xl">⚛️</i>
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Frontend Development
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Building responsive and interactive user interfaces with
              modern frameworks.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              {["React", "Vue.js", "Angular", "TypeScript"].map(t => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-black/40 text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="glow-card p-6">
            <div className="text-purple-500 mb-4">
              <i className="text-3xl">🗄️</i>
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Backend Development
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Creating robust server-side applications and RESTful APIs.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              {["Node.js", "Express", "Django", "Laravel"].map(t => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-black/40 text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Database */}
          <div className="glow-card p-6">
            <div className="text-purple-500 mb-4">
              <i className="text-3xl">🗃️</i>
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Database Management
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Designing and optimizing databases for performance and scalability.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              {["MongoDB", "PostgreSQL", "MySQL", "Firebase"].map(t => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-black/40 text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="glow-card p-6">
            <div className="text-purple-500 mb-4">
              <i className="text-3xl">📱</i>
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Mobile Development
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Building cross-platform mobile applications with modern tools.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              {["React Native", "Flutter", "Ionic", "Swift"].map(t => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-black/40 text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Cloud */}
          <div className="glow-card p-6">
            <div className="text-purple-500 mb-4">
              <i className="text-3xl">☁️</i>
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Cloud & DevOps
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Deploying and managing applications in cloud environments.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              {["AWS", "Docker", "Kubernetes", "CI/CD"].map(t => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-black/40 text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="glow-card p-6">
            <div className="text-purple-500 mb-4">
              <i className="text-3xl">🛠️</i>
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Tools & Technologies
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Essential tools and technologies I use in my development workflow.
            </p>
            <div className="flex flex-wrap gap-2 text-xs">
              {["Git & GitHub", "Webpack", "Figma", "Jest"].map(t => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full bg-black/40 text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
