import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, MapPin, Mail } from "lucide-react";
import photo from "../imports/image-3.png";
import logoAvantika from "../imports/Frame_23.png";
import logoDesignit from "../imports/Frame_22.png";
import logoRite from "../imports/Frame_24.png";
import logoEHealth from "../imports/Frame_26.png";

const experience = [
  {
    role: "UX Researcher / Product Designer",
    company: "Designit — A Wipro Company",
    period: "Apr 2025 – Present",
    type: "Full-time",
    current: true,
    logo: logoDesignit,
    logoBg: "bg-black",
  },
  {
    role: "Freelance Product Designer",
    company: "Independent",
    period: "Jul 2024 – Nov 2024",
    type: "Freelance",
    current: false,
    logo: null,
    logoBg: "bg-stone-100",
  },
  {
    role: "UX Consultant",
    company: "Stealth Startup (eHealth Systems)",
    period: "Jan 2024 – May 2024",
    type: "Contract",
    current: false,
    logo: logoEHealth,
    logoBg: "bg-white",
  },
  {
    role: "UX Design Intern",
    company: "Rite Knowledgelabs",
    period: "Apr 2023 – Jul 2023",
    type: "Internship",
    current: false,
    logo: logoRite,
    logoBg: "bg-white",
  },
];

const skills = {
  "Research & Strategy": ["User Research", "Usability Testing", "Journey Mapping", "Design Thinking", "Behavioral Analysis", "Storytelling", "UX Design", "User Flows", "Information Architecture", "Wireframing", "Prototyping", "Design Reviews", "Cross-functional Collaboration", "Stakeholder Management"],
  "Visual Design": ["UI Design", "Interaction Design", "Visual Design", "Layout Design", "Micro-interactions", "Lottie Animation", "Design Systems", "Component Libraries"],
  "Tools": ["Figma", "Adobe Creative Suite", "After Effects", "Miro", "Balsamiq", "Notion", "Dovetail", "Maze", "Lottie Files", "Zeplin", "Jira", "Confluence"],
};

export function About() {
  return (
    <div className="bg-stone-50 min-h-screen pt-20">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-[1fr_340px] gap-16 items-start">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-['JetBrains_Mono',sans-serif] text-xs text-orange-700 tracking-[2px] uppercase block mb-5">About Me</span>
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-6">
              Shantanu Pate
            </h1>
            <p className="text-lg text-stone-500 font-medium mb-8">Product Designer & UX Researcher</p>

            <div className="space-y-4 text-stone-600 leading-relaxed mb-10">
              <p>
                I'm a product designer and researcher who sits at the intersection of deep user empathy and evidence-based design. I believe the best products aren't built from assumptions — they're built from listening, observing, and translating real human behaviour into decisions that matter.
              </p>
              <p>
                Whether embedded in a fast-moving team at a global design consultancy or working independently with early-stage startups, I bring a structured research practice to every engagement — from field studies and stakeholder workshops to interaction design and validated prototypes.
              </p>
              <p>
                I'm currently working at Designit, a Wipro company, where I lead UX research and product design across enterprise and healthcare clients. I'm always open to meaningful conversations about design, research, and collaboration.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-5 text-sm text-stone-500 mb-10">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-orange-600" />
                India
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Currently employed · open to conversations
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white text-sm font-semibold rounded-full hover:bg-orange-700 transition-colors"
              >
                <Mail className="w-4 h-4" /> Say hello
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-stone-200 text-stone-700 text-sm font-semibold rounded-full hover:border-stone-400 transition-colors"
              >
                View Work <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right — photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border border-stone-200 shadow-sm bg-stone-200 aspect-[4/5]">
              <img
                src={photo}
                alt="Shantanu Pate"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white border border-stone-200 rounded-2xl px-4 py-3 shadow-lg">
              <p className="text-xs text-stone-400 mb-0.5">Currently at</p>
              <p className="text-sm font-bold text-stone-900">Designit · Wipro</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-white border-y border-stone-200 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-['JetBrains_Mono',sans-serif] text-xs text-orange-700 tracking-[2px] uppercase block mb-3">Experience</span>
            <h2 className="text-3xl font-bold text-stone-900 mb-12">Where I've worked</h2>

            <div className="space-y-0">
              {experience.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="grid md:grid-cols-[1fr_auto] items-start gap-6 py-7 border-b border-stone-100 last:border-0 group"
                >
                  <div className="flex items-start gap-5">
                    {/* logo */}
                    <div className={`w-11 h-11 rounded-xl border border-stone-200 flex items-center justify-center shrink-0 mt-0.5 overflow-hidden ${job.logoBg}`}>
                      {job.logo ? (
                        <img src={job.logo} alt={job.company} className="w-full h-full object-contain" />
                      ) : (
                        <span className="text-xs font-bold text-stone-400">–</span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-stone-900 mb-0.5">{job.role}</h3>
                      <p className="text-sm text-stone-500">{job.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 md:text-right">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      job.current
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                        : "bg-stone-100 text-stone-500"
                    }`}>
                      {job.type}
                    </span>
                    <span className="font-['JetBrains_Mono',sans-serif] text-xs text-stone-400 whitespace-nowrap">{job.period}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-['JetBrains_Mono',sans-serif] text-xs text-orange-700 tracking-[2px] uppercase block mb-3">Education</span>
          <h2 className="text-3xl font-bold text-stone-900 mb-10">Academic background</h2>

          <div className="bg-white rounded-3xl border border-stone-200 p-8 flex flex-col md:flex-row items-start gap-8">
            <div className="w-14 h-14 rounded-2xl bg-white border border-stone-200 flex items-center justify-center shrink-0 overflow-hidden">
              <img src={logoAvantika} alt="Avantika University" className="w-full h-full object-contain" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-stone-900">Bachelor of Design — Experience Design</h3>
                  <p className="text-stone-500 text-sm mt-0.5">MIT Institute of Design (MIT ID), Indore · Avantika University</p>
                </div>
                <span className="font-['JetBrains_Mono',sans-serif] text-xs text-stone-400 whitespace-nowrap">2020 – 2024</span>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed">
                Four-year undergraduate programme in Experience Design — covering human-centred design, interaction design, UX research, and design thinking. Graduated with a specialisation in digital product design and user research.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section className="bg-[#faf6ef] border-t border-stone-200 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-['JetBrains_Mono',sans-serif] text-xs text-orange-700 tracking-[2px] uppercase block mb-3">Skills</span>
            <h2 className="text-3xl font-bold text-stone-900 mb-10">What I bring to the table</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="bg-white rounded-2xl p-6 border border-stone-200">
                  <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">{category}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map(skill => (
                      <span key={skill} className="text-xs font-medium text-stone-700 bg-stone-50 border border-stone-200 px-3 py-1.5 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Let's work together</h2>
          <p className="text-stone-500 text-lg mb-8 max-w-xl mx-auto">
            I'm always open to meaningful conversations — whether it's a project, a role, or just a chat about design and research.
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-orange-700 text-white font-semibold rounded-full hover:bg-orange-800 transition-colors shadow-lg shadow-orange-700/20"
          >
            <Mail className="w-4 h-4" /> Get in touch
          </a>
        </motion.div>
      </section>

    </div>
  );
}
