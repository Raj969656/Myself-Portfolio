import { motion } from "framer-motion";

const data = [
  {
    role: "MERN Stack Developer Trainee",
    year: "2025",
    points: [
      "Built full-stack web applications using MongoDB, Express.js, React.js, and Node.js",
      "Implemented authentication, REST APIs, CRUD operations, and backend validations",
      "Used Git & GitHub for version control and deployed applications on Vercel / Render",
    ],
  },
  {
    role: "Academic Projects (MERN Stack)",
    year: "2024 – 2025",
    points: [
      "Developed real-world projects including URL Shortener and Complaint Management System",
      "Designed responsive UI using React and Tailwind CSS",
      "Integrated frontend with backend APIs and handled error states effectively",
    ],
  },
  {
    role: "Frontend Developer (Practice & Freelance-style Work)",
    year: "2024",
    points: [
      "Created responsive and accessible websites using HTML, CSS, JavaScript, and React",
      "Converted UI designs into reusable React components",
      "Focused on performance, clean code structure, and UI/UX best practices",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32">
      <h2 className="text-center text-4xl font-bold mb-20">
        Work <span className="text-purple-500">Experience</span>
      </h2>

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1 }}
          className="absolute left-[18px] top-0 w-[2px] bg-purple-500/70"
        />

        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="relative pl-20 mb-14"
          >
            {/* Dot */}
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="absolute left-[12px] top-6 w-3 h-3 rounded-full bg-purple-500"
            />

            <div className="bg-[#1a1a1d] p-6 rounded-xl">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-lg">{item.role}</h3>
                <span className="text-purple-400 text-sm">{item.year}</span>
              </div>

              <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                {item.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
