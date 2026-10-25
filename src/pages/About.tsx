import React from "react";
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

const EMAIL = "mailto:shantanupate0@gmail.com";

function SectionLabel({ index, children, light }: { index: string; children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`flex items-center gap-4 font-mono text-xs uppercase tracking-widest ${light ? "text-stone-300" : "text-stone-600"}`}>
      <span className={light ? "text-emerald-400" : "text-emerald-800"}>{index}</span>
      <span>{children}</span>
    </div>
  );
}

const brands = [
  { name: "UnitedHealthcare", src: "/assets/a6906.svg", sector: "Healthcare", cls: "h-12 w-44" },
  { name: "HDFC Bank", src: "/assets/fcf08.svg", sector: "Banking", cls: "h-9 w-48 [transform:scaleY(-1)]" },
  { name: "HP", src: "/assets/311fb.svg", sector: "Technology", cls: "h-20 w-20" },
  { name: "General Electric", src: "/assets/d027e.svg", sector: "Industrial", cls: "h-20 w-20" },
  { name: "AT&T", src: "/assets/bed31.svg", sector: "Telecom", cls: "h-24 w-[4.75rem]" },
];

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

export function About() {
  return (
    <div className="min-h-screen bg-stone-100 pt-20 text-stone-950">
      {/* Hero */}
      <section
        className="border-b border-stone-300 px-6 py-24 sm:px-10 lg:px-14"
        style={{
          backgroundImage: "radial-gradient(rgb(168 162 158 / 0.4) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <SectionLabel index="01">About me</SectionLabel>
            <h1 className="mt-8 font-serif text-6xl leading-[0.98] sm:text-7xl lg:text-8xl">
              Shantanu <span className="italic text-emerald-800">Pate</span>
            </h1>
            <p className="mt-6 font-mono text-sm uppercase tracking-widest text-stone-600">
              Product Designer &amp; UX Researcher
            </p>

            <div className="mt-10 max-w-2xl space-y-5 text-lg leading-relaxed text-stone-600">
              <p>
                I'm a product designer and researcher who sits at the intersection of deep user empathy and evidence-based design. I believe the best products aren't built from assumptions — they're built from listening, observing, and translating real human behaviour into decisions that matter.
              </p>
              <p>
                Whether embedded in a fast-moving team at a global design consultancy or working independently with early-stage startups, I bring a structured research practice to every engagement — from field studies and stakeholder workshops to interaction design and validated prototypes.
              </p>
              <p>
                I'm currently working at Designit, a Wipro company, where I work across&nbsp;&nbsp;UX research and product design with enterprise and healthcare clients. I'm always open to meaningful conversations about design, research, and collaboration.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest text-stone-600">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-800" />
                India
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-600" />
                Currently employed · open to conversations
              </span>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={EMAIL}
                className="inline-flex items-center gap-2 bg-stone-950 px-6 py-3 font-mono text-xs uppercase tracking-widest text-white transition-colors hover:bg-emerald-800"
              >
                <Mail className="h-4 w-4" /> Say hello
              </a>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 border border-stone-400 px-6 py-3 font-mono text-xs uppercase tracking-widest text-stone-800 transition-colors hover:border-emerald-800 hover:text-emerald-800"
              >
                View work <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 1.2 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="bg-white p-3 shadow-xl shadow-stone-900/10 sm:p-4">
              <div className="aspect-[4/5] overflow-hidden bg-stone-200">
                <img src={photo} alt="Shantanu Pate" className="h-full w-full object-cover object-top" />
              </div>
              <p className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-stone-600">
                <span>Currently at</span>
                <span className="text-emerald-800">Designit · Wipro</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-stone-950 px-6 py-24 text-stone-100 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <motion.div {...reveal}>
            <SectionLabel index="02" light>Experience</SectionLabel>
            <h2 className="mt-6 font-serif text-5xl leading-none sm:text-6xl">Where I've worked</h2>
          </motion.div>

          <div className="mt-14 border-t border-stone-700">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="grid items-center gap-6 border-b border-stone-700 py-8 md:grid-cols-[3rem_1fr_auto]"
              >
                <span className="hidden font-mono text-xs text-stone-400 md:block">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex items-center gap-5">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden border border-stone-700 ${job.logoBg}`}>
                    {job.logo ? (
                      <img src={job.logo} alt={job.company} className="h-full w-full object-contain" />
                    ) : (
                      <span className="text-xs font-bold text-stone-400">–</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl leading-tight">{job.role}</h3>
                    <p className="mt-1 text-sm text-stone-400">{job.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:justify-end">
                  <span
                    className={`border px-2.5 py-1 font-mono text-[11px] uppercase tracking-widest ${
                      job.current ? "border-emerald-400 text-emerald-400" : "border-stone-600 text-stone-400"
                    }`}
                  >
                    {job.type}
                  </span>
                  <span className="whitespace-nowrap font-mono text-xs text-stone-400">{job.period}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="border-b border-stone-300 bg-stone-100 px-6 py-24 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <motion.div {...reveal}>
            <SectionLabel index="03">Clients</SectionLabel>
            <h2 className="mt-6 font-serif text-5xl leading-none sm:text-6xl">Brands I've worked with</h2>
          </motion.div>

          <ul className="mt-14 grid grid-cols-2 gap-px border border-stone-300 bg-stone-300 md:grid-cols-3 lg:grid-cols-5">
            {brands.map((b, i) => (
              <motion.li
                key={b.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex flex-col justify-between bg-white p-6 transition-colors hover:bg-[#f7f2e7] motion-reduce:transition-none"
              >
                <span className="font-mono text-xs text-stone-500">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex h-40 items-center justify-center">
                  <img
                    src={b.src}
                    alt={b.name}
                    className={`object-contain transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none ${b.cls}`}
                  />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-stone-600">{b.sector}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="border-b border-stone-300 px-6 py-24 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <motion.div {...reveal}>
            <SectionLabel index="04">Education</SectionLabel>
            <h2 className="mt-6 font-serif text-5xl leading-none sm:text-6xl">Academic background</h2>

            <div className="mt-12 flex flex-col items-start gap-8 border border-stone-300 bg-white p-8 shadow-lg shadow-stone-900/5 md:flex-row">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden border border-stone-200 bg-white">
                <img src={logoAvantika} alt="Avantika University" className="h-full w-full object-contain" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-3xl leading-tight">Bachelor of Design — Experience Design</h3>
                    <p className="mt-2 text-sm text-stone-600">MIT Institute of Design (MIT ID), Indore · Avantika University</p>
                  </div>
                  <span className="whitespace-nowrap border border-emerald-800 px-2.5 py-1 font-mono text-[11px] uppercase tracking-widest text-emerald-800">
                    2020 – 2024
                  </span>
                </div>
                <p className="mt-5 max-w-3xl leading-relaxed text-stone-600">
                  Four-year undergraduate programme in Experience Design — covering human-centred design, interaction design, UX research, and design thinking. Graduated with a specialisation in digital product design and user research.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-b border-stone-300 bg-stone-200 px-6 py-24 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <motion.div {...reveal}>
            <SectionLabel index="05">Skills</SectionLabel>
            <h2 className="mt-6 font-serif text-5xl leading-none sm:text-6xl">What I bring to the table</h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {Object.entries(skills).map(([category, items], ci) => (
                <div key={category} className={`bg-stone-100 p-7 shadow-md shadow-stone-900/5 ${ci === 1 ? "md:mt-8" : ci === 2 ? "md:mt-3" : ""}`}>
                  <p className="border-b border-stone-300 pb-3 font-mono text-[11px] uppercase tracking-widest text-emerald-800">
                    {category}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <li key={skill} className="border border-stone-300 bg-white px-2.5 py-1 font-mono text-[11px] text-stone-700">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-950 px-6 py-24 text-white sm:px-10 lg:px-14">
        <motion.div {...reveal} className="mx-auto max-w-7xl">
          <SectionLabel index="06" light>Contact</SectionLabel>
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-end">
            <div>
              <p role="heading" aria-level={2} className="max-w-3xl font-serif text-6xl leading-none sm:text-7xl">
                Let's work <span className="italic text-emerald-400">together.</span>
              </p>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone-400">
                I'm always open to meaningful conversations — whether it's a project, a role, or just a chat about design and research.
              </p>
            </div>
            <div className="border-t border-stone-700 lg:w-full lg:max-w-md lg:justify-self-end">
              <a
                href={EMAIL}
                className="flex items-center justify-between border-b border-stone-700 py-5 text-base text-stone-200 transition-colors hover:text-emerald-400"
              >
                Get in touch <Mail className="h-4 w-4" />
              </a>
              <Link
                to="/work"
                className="flex items-center justify-between border-b border-stone-700 py-5 text-base text-stone-200 transition-colors hover:text-emerald-400"
              >
                View work <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
