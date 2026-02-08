import React from "react";

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold">
            About <span className="text-purple-500">Me</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Get to know more about my background and passion
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-[5fr_7fr] gap-20 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src="/my-photo.jpg"
              alt="About"
              className="w-[420px] h-[520px] object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              My Journey
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              I am a passionate full-stack developer with experience
              creating digital solutions for businesses around the world.
              My journey started with basic HTML and CSS websites and
              evolved into building complex web applications using
              modern frameworks.
            </p>

            {/* RESUME BUTTON */}
            <div className="mb-12">
              <a
                href="/Myyy_resumee.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition-all duration-300 shadow-lg shadow-purple-600/30"
              >
                View Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
                </svg>
              </a>
            </div>

            {/* INFO CARDS */}
            <div className="grid sm:grid-cols-2 gap-6">

              <div className="glow-card p-6">
                <h4 className="text-purple-400 font-medium mb-2">
                  Innovative
                </h4>
                <p className="text-sm text-gray-400">
                  I love creating unique solutions to complex problems
                  with cutting-edge technologies.
                </p>
              </div>

              <div className="glow-card p-6">
                <h4 className="text-purple-400 font-medium mb-2">
                  Design Oriented
                </h4>
                <p className="text-sm text-gray-400">
                  Beautiful design and user experience are at the heart
                  of everything I create.
                </p>
              </div>

              <div className="glow-card p-6 sm:col-span-2">
                <h4 className="text-purple-400 font-medium mb-2">
                  Clean Code
                </h4>
                <p className="text-sm text-gray-400">
                  I write maintainable, efficient code following best
                  practices and modern patterns.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
