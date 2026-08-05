import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Target, ClipboardList, Users, Network, Lightbulb } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { caseStudies, skills, processSteps } from "../data/content";
import { ImageWithFallback } from "../app/components/figma/ImageWithFallback";
import heroIllustration from "../imports/image-2.png";

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target className="w-6 h-6" />,
  ClipboardList: <ClipboardList className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Network: <Network className="w-6 h-6" />,
  Lightbulb: <Lightbulb className="w-6 h-6" />
};

function ScaledThumbnail({ children, naturalWidth = 1920, naturalHeight = 1080 }: { children: React.ReactNode; naturalWidth?: number; naturalHeight?: number }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new ResizeObserver(entries => {
      const width = entries[0].contentRect.width;
      setScale(width / naturalWidth);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [naturalWidth]);

  return (
    <div ref={wrapperRef} className="w-full overflow-hidden bg-stone-200 relative" style={{ aspectRatio: `${naturalWidth} / ${naturalHeight}` }}>
      {scale > 0 && (
        <div
          className="absolute top-0 left-0 overflow-hidden"
          style={{ width: naturalWidth, height: naturalHeight, transform: `scale(${scale})`, transformOrigin: "top left" }}
        >
          {children}
        </div>
      )}
    </div>
  );
}



export function Home() {
  return (
    <div className="bg-stone-50 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-stone-200">
        {/* Background texture */}
        <div className="absolute inset-0 bg-[#faf6ef]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_60%_-10%,rgba(194,120,80,0.12),transparent)]" />

        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-0">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-end">

            {/* Left */}
            <div className="pb-16">
              {/* Status pill */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white border border-stone-200 rounded-full px-4 py-2 mb-8 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="text-xs font-medium text-stone-600">Currently at Designit · Open to conversations</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-stone-900 leading-[1.05] mb-6"
              >
                Shantanu Pate —<br />
                <span className="text-stone-400">Product Designer</span><br />
                <span className="text-stone-400">&amp; UX Researcher.</span>
              </motion.h1>

              {/* Sub */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-stone-500 leading-relaxed max-w-lg mb-10"
              >
                I turn messy human problems into clear, evidence-backed design decisions — from field research and stakeholder workshops to interaction design and shipped products.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-3 mb-16"
              >
                <button
                  onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white text-sm font-semibold rounded-full hover:bg-orange-700 transition-colors"
                >
                  View Case Studies <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-6 py-3 bg-white border border-stone-200 text-stone-700 text-sm font-semibold rounded-full hover:border-stone-400 transition-colors shadow-sm"
                >
                  Get in Touch
                </button>
              </motion.div>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-wrap gap-x-10 gap-y-4 border-t border-stone-200 pt-8"
              >
                {[
                  { value: "2+", label: "Years of experience" },
                  { value: "10+", label: "Projects delivered" },
                  { value: "~200", label: "Pain points synthesized" },
                  { value: "3", label: "Industries researched" },
                ].map(s => (
                  <div key={s.label}>
                    <p className="text-2xl font-bold text-stone-900">{s.value}</p>
                    <p className="text-xs text-stone-400 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — illustration card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative self-center pb-16"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-orange-200/30 rounded-[2rem] blur-[50px] -z-10 scale-90" />

              <div className="relative rounded-[2rem] overflow-hidden border border-stone-200 bg-stone-100 shadow-lg" style={{ aspectRatio: "3/4", width: "100%" }}>
                <img
                  src={heroIllustration}
                  alt="Shantanu"
                  className="w-full h-full object-cover object-top"
                />

                {/* Bottom info strip */}
                <div className="absolute bottom-0 inset-x-0 bg-white/80 backdrop-blur-md border-t border-stone-200/60 px-5 py-4 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-stone-400 uppercase tracking-wider mb-0.5">Based in</p>
                    <p className="text-sm font-bold text-stone-900">India 🇮🇳</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-stone-400 uppercase tracking-wider mb-1">Specialises in</p>
                    <div className="flex gap-1 justify-end">
                      {["UX Research", "Product Design"].map(t => (
                        <span key={t} className="text-[10px] font-semibold text-stone-700 bg-stone-100 border border-stone-200 px-2 py-0.5 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="py-24 bg-[#faf6ef] border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-6">

          {/* Section header */}
          <div className="mb-20">
            <span className="font-['JetBrains_Mono',sans-serif] text-xs text-orange-700 tracking-[2px] uppercase block mb-3">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-none">Selected Work</h2>
          </div>

          {/* ── Personal Case Studies ── */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <p className="text-sm font-semibold text-stone-700 uppercase tracking-widest">Personal</p>
              <div className="flex-1 h-px bg-stone-200" />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {caseStudies.slice(0, 2).map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={`/case-study/${study.id}`}
                    className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-stone-200 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-900/6 transition-all duration-400 h-full"
                  >
                    {/* Thumbnail */}
                    <div className="overflow-hidden bg-stone-100 shrink-0">
                      <div className="group-hover:scale-[1.03] transition-transform duration-700 ease-out">
                        <ScaledThumbnail
                          naturalWidth={(study as any).thumbnailWidth}
                          naturalHeight={(study as any).thumbnailHeight}
                        >
                          {study.thumbnail}
                        </ScaledThumbnail>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-semibold text-orange-700 bg-orange-50 border border-orange-100 px-2.5 py-1 rounded-full tracking-wide">
                          {(study as any).tags?.split(" · ")[0] || study.metadata?.sector}
                        </span>
                        <span className="font-['JetBrains_Mono',sans-serif] text-[11px] text-stone-400">{(study as any).year || "2024"}</span>
                      </div>
                      <h3 className="text-lg font-bold text-stone-900 mb-2 leading-snug group-hover:text-orange-700 transition-colors duration-300">
                        {study.title}
                      </h3>
                      <p className="text-stone-500 text-sm leading-relaxed line-clamp-2 mb-5 flex-1">
                        {(study as any).subtitle || study.problem}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                        <span className="text-xs text-stone-400">{(study as any).roleLabel || study.metadata?.role}</span>
                        <div className="flex items-center gap-1.5 text-stone-400 group-hover:text-orange-700 transition-colors duration-300">
                          <span className="text-xs font-medium">View</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Designit Case Studies ── */}
          <div>
            <div className="flex items-center gap-4 mb-3">
              <p className="text-sm font-semibold text-stone-700 uppercase tracking-widest">Designit</p>
              <div className="flex-1 h-px bg-stone-200" />
            </div>
            <p className="text-stone-400 text-sm mb-8 flex items-center gap-2">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              These case studies were completed during my time at Designit, a Wipro company. Final designs and deliverables are under NDA.
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              {caseStudies.slice(2, 4).map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={`/case-study/${study.id}`}
                    className="group flex flex-col rounded-2xl overflow-hidden bg-[#1a1814] border border-stone-700 hover:border-stone-500 hover:shadow-xl hover:shadow-black/20 transition-all duration-400 h-full"
                  >
                    {/* Thumbnail */}
                    <div className="overflow-hidden bg-stone-800 shrink-0">
                      <div className="group-hover:scale-[1.03] transition-transform duration-700 ease-out">
                        <ScaledThumbnail
                          naturalWidth={(study as any).thumbnailWidth}
                          naturalHeight={(study as any).thumbnailHeight}
                        >
                          {study.thumbnail}
                        </ScaledThumbnail>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-semibold text-stone-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full tracking-wide">
                          {(study as any).tags?.split(" · ")[0] || study.metadata?.sector}
                        </span>
                        <div className="flex items-center gap-1.5 text-stone-500 text-[10px]">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                          </svg>
                          NDA · {(study as any).year || "2024"}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-orange-400 transition-colors duration-300">
                        {study.title}
                      </h3>
                      <p className="text-stone-400 text-sm leading-relaxed line-clamp-2 mb-5 flex-1">
                        {(study as any).subtitle || study.problem}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <span className="text-xs text-stone-500">{(study as any).roleLabel || study.metadata?.role}</span>
                        <div className="flex items-center gap-1.5 text-stone-500 group-hover:text-orange-400 transition-colors duration-300">
                          <span className="text-xs font-medium">View</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* View all */}
          <div className="flex justify-center mt-14">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-7 py-3 bg-white border border-stone-200 text-stone-700 text-sm font-semibold rounded-full hover:border-stone-400 hover:text-orange-700 transition-all duration-300 shadow-sm"
            >
              View all work <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-28 border-t border-stone-200 bg-[#faf6ef]">
        <div className="max-w-6xl mx-auto px-6">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <span className="font-['JetBrains_Mono',sans-serif] text-xs text-orange-700 tracking-[2px] uppercase block mb-4">About</span>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-[1.08] max-w-2xl">
              Designing with evidence, not assumptions.
            </h2>
          </motion.div>

          {/* Top row — bio + currently block */}
          <div className="grid md:grid-cols-[1fr_360px] gap-6 mb-6">

            {/* Bio card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="bg-white border border-stone-200 rounded-3xl p-10 flex flex-col justify-between"
            >
              <div className="space-y-4 text-[17px] text-stone-600 leading-relaxed mb-10">
                <p>
                  I'm a Product Designer and UX Researcher currently at <span className="font-semibold text-stone-900">Designit, a Wipro company</span>. I work at the intersection of deep user empathy, rigorous research, and considered design — turning messy human problems into decisions that hold up under scrutiny.
                </p>
                <p>
                  I've worked across healthcare, enterprise software, consumer products, and banking — conducting field research, running stakeholder workshops, and shipping end-to-end design. My work doesn't stop at a deliverable; it stops when the insight is <span className="italic">usable</span>.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["UX Research", "Product Design", "UX Strategy", "Usability Testing", "Design Systems", "Concept Design"].map(tag => (
                  <span key={tag} className="text-[13px] px-3 py-1.5 bg-stone-50 border border-stone-200 text-stone-600 rounded-full">{tag}</span>
                ))}
              </div>
            </motion.div>

            {/* Currently / snapshot card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="bg-stone-900 border border-stone-800 rounded-3xl p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-8">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-medium text-stone-400 tracking-wide">Currently</span>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] text-stone-500 uppercase tracking-widest mb-1">Role</p>
                    <p className="text-white font-semibold text-[15px]">Product Designer & UX Researcher</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-stone-500 uppercase tracking-widest mb-1">Company</p>
                    <p className="text-white font-semibold text-[15px]">Designit · A Wipro Company</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-stone-500 uppercase tracking-widest mb-1">Based in</p>
                    <p className="text-white font-semibold text-[15px]">India 🇮🇳</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-stone-500 uppercase tracking-widest mb-1">Experience</p>
                    <p className="text-white font-semibold text-[15px]">2+ Years</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-[12px] text-stone-400">Open to new conversations and opportunities.</p>
              </div>
            </motion.div>
          </div>

          {/* Bottom row — toolkit cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Qualitative",
                color: "bg-[#ffeee6] border-[#f5c7a9]",
                labelColor: "text-[#d1512d]",
                items: skills.qualitative,
                tagStyle: "bg-white border border-[#f5c7a9] text-stone-700",
              },
              {
                label: "Quantitative",
                color: "bg-white border-stone-200",
                labelColor: "text-stone-500",
                items: skills.quantitative,
                tagStyle: "bg-stone-50 border border-stone-200 text-stone-600",
              },
              {
                label: "Tools",
                color: "bg-white border-stone-200",
                labelColor: "text-stone-500",
                items: skills.tools,
                tagStyle: "bg-orange-50 border border-orange-100 text-orange-700",
              },
            ].map((col, i) => (
              <motion.div
                key={col.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                className={`${col.color} border rounded-3xl p-7`}
              >
                <p className={`font-['JetBrains_Mono',sans-serif] text-[10px] uppercase tracking-[1.5px] ${col.labelColor} mb-5`}>{col.label}</p>
                <div className="flex flex-wrap gap-2">
                  {col.items.map(item => (
                    <span key={item} className={`text-[12px] px-3 py-1.5 rounded-full ${col.tagStyle}`}>{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* How I Work Section */}
      <section id="process" className="py-28 bg-stone-900 text-stone-50 border-t border-stone-800">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-[1fr_auto] items-end gap-6 mb-16"
          >
            <div>
              <span className="font-['JetBrains_Mono',sans-serif] text-xs text-orange-500 tracking-[2px] uppercase block mb-4">Process</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.08] max-w-xl">
                How I work.
              </h2>
            </div>
            <p className="text-stone-400 text-[15px] leading-relaxed max-w-xs md:text-right">
              A structured, iterative approach — designed to surface real insight before a single pixel is placed.
            </p>
          </motion.div>

          {/* Process steps — vertical list */}
          <div className="space-y-3">
            {[
              {
                id: "01",
                title: "Problem Framing",
                desc: "Align with stakeholders on business goals. Define core research questions. Agree on what success looks like before any work begins.",
                tags: ["Stakeholder Alignment", "Brief Writing", "Scope Definition"],
              },
              {
                id: "02",
                title: "Research Planning",
                desc: "Select methodologies that match the question — not the calendar. Recruit the right participants, write discussion guides, prepare observation frameworks.",
                tags: ["Method Selection", "Participant Recruiting", "Discussion Guides"],
              },
              {
                id: "03",
                title: "Data Collection",
                desc: "Run interviews, contextual inquiries, and shadowing sessions. Collect behavioral data alongside attitudinal self-report. Stay curious, not confirmatory.",
                tags: ["User Interviews", "Contextual Inquiry", "Shadowing", "Surveys"],
              },
              {
                id: "04",
                title: "Synthesis",
                desc: "Find patterns through affinity mapping and thematic analysis. Translate raw notes into insight clusters that the whole team can act on.",
                tags: ["Affinity Mapping", "Thematic Analysis", "Journey Mapping"],
              },
              {
                id: "05",
                title: "Design & Validation",
                desc: "Translate insights into concepts, flows, and high-fidelity interfaces. Test early and often. Iterate until the design earns its place through evidence.",
                tags: ["Wireframing", "Hi-Fi Design", "Usability Testing", "Prototyping"],
              },
            ].map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="group bg-white/4 hover:bg-white/7 border border-white/8 hover:border-white/16 rounded-2xl px-7 py-6 grid md:grid-cols-[56px_1fr_auto] gap-6 items-center transition-all duration-300"
              >
                <span className="font-['JetBrains_Mono',sans-serif] text-[13px] text-orange-500 font-bold">{step.id}</span>
                <div>
                  <h3 className="text-[17px] font-bold text-white mb-1.5 group-hover:text-orange-300 transition-colors duration-300">{step.title}</h3>
                  <p className="text-[13px] text-stone-400 leading-relaxed">{step.desc}</p>
                </div>
                <div className="hidden md:flex flex-wrap gap-1.5 justify-end max-w-[280px]">
                  {step.tags.map(tag => (
                    <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-white/6 border border-white/10 text-stone-400">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-stone-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 tracking-tight mb-6">Let's build something meaningful.</h2>
          <p className="text-xl text-stone-500 mb-10">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white text-lg font-medium rounded-full hover:bg-orange-800 transition-colors shadow-lg shadow-orange-700/20"
          >
            Say Hello
          </a>
        </div>
      </section>
    </div>
  );
}
