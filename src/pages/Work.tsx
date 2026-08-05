import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Clock, Users, Lock } from "lucide-react";
import { caseStudies } from "../data/content";

const personal = caseStudies.slice(0, 2);
const designit = caseStudies.slice(2, 6);

function WorkCard({ study, index, nda }: { study: any; index: number; nda?: boolean }) {
  const role = study.roleLabel || study.metadata?.role;
  const timeline = study.metadata?.timeline;
  const team = study.metadata?.team;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
    >
      <Link
        to={study.comingSoon ? "#" : `/case-study/${study.id}`}
        onClick={study.comingSoon ? (e: React.MouseEvent) => e.preventDefault() : undefined}
        className={`group block bg-white border border-stone-200 rounded-2xl overflow-hidden transition-all duration-500 ${study.comingSoon ? "cursor-default" : "hover:border-stone-300 hover:shadow-2xl hover:shadow-stone-900/8"}`}
      >
        {/* Thumbnail — 16:9 */}
        <div className="relative overflow-hidden bg-stone-100" style={{ aspectRatio: "16/9" }}>
          <img
            src={study.heroImage}
            alt={study.title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          />
          {nda ? (
            <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5">
              <Lock className="w-2.5 h-2.5 text-stone-300" />
              <span className="font-['JetBrains_Mono',monospace] text-[11px] text-stone-300">NDA · {study.year}</span>
            </div>
          ) : (
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-stone-200 rounded-full px-3 py-1.5 font-['JetBrains_Mono',monospace] text-[11px] text-stone-500">
              {study.year}
            </div>
          )}
        </div>

        {/* Body */}
        <div className="p-6">
          {/* Title + subtitle */}
          <h3 className="text-[17px] font-bold text-stone-900 mb-1.5 leading-snug group-hover:text-orange-700 transition-colors duration-300">
            {study.title}
          </h3>
          <p className="text-stone-500 text-[13px] leading-relaxed mb-5 line-clamp-2">
            {study.subtitle || study.problem}
          </p>

          {/* Meta grid */}
          <div className="grid grid-cols-3 gap-3 py-4 border-y border-stone-100 mb-5">
            <div>
              <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-1">Role</p>
              <p className="text-[12px] font-semibold text-stone-700 leading-snug">{role}</p>
            </div>
            {timeline && (
              <div>
                <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-1 flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5" /> Duration
                </p>
                <p className="text-[12px] font-semibold text-stone-700">{timeline}</p>
              </div>
            )}
            {team && (
              <div>
                <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-1 flex items-center gap-1">
                  <Users className="w-2.5 h-2.5" /> Team
                </p>
                <p className="text-[12px] font-semibold text-stone-700 leading-snug">{team}</p>
              </div>
            )}
          </div>

          {/* Methods */}
          <div className="mb-5">
            <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-2">Methods</p>
            <div className="flex flex-wrap gap-1.5">
              {study.methods.map((m: string) => (
                <span
                  key={m}
                  className="text-[11px] px-2.5 py-1 rounded-full border border-stone-200 text-stone-500 bg-stone-50"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Outcome */}
          {study.comingSoon ? (
            <div className="bg-stone-50 border border-stone-200 border-dashed rounded-xl px-4 py-3 mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse shrink-0" />
              <p className="text-[13px] text-stone-400 font-medium">Case study coming soon</p>
            </div>
          ) : (
            <div className="bg-orange-50 border border-orange-100 rounded-xl px-4 py-3 mb-5">
              <p className="text-[10px] text-orange-700 font-semibold uppercase tracking-widest mb-1">Outcome</p>
              <p className="text-[13px] text-stone-700 leading-relaxed">{study.outcome}</p>
            </div>
          )}

          {/* CTA */}
          {!study.comingSoon && (
            <div className="flex items-center gap-1.5 text-stone-400 group-hover:text-orange-700 transition-colors duration-300">
              <span className="text-sm font-semibold">View Case Study</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}

export function Work() {
  return (
    <div className="bg-[#faf6ef] min-h-screen pt-20">

      {/* Page header */}
      <section className="border-b border-stone-200 bg-[#faf6ef]">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="font-['JetBrains_Mono',monospace] text-xs text-orange-700 tracking-[2px] uppercase block mb-4">Portfolio</span>
            <h1 className="text-5xl md:text-6xl font-bold text-stone-900 tracking-tight leading-[1.05] mb-5">
              Selected Work
            </h1>
            <p className="text-lg text-stone-500 max-w-xl leading-relaxed">
              A collection of research-led design projects across healthcare, enterprise, and consumer products.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">

        {/* Personal */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold text-stone-900 uppercase tracking-widest">Personal</p>
              <p className="text-xs text-stone-400 mt-0.5">Independent projects</p>
            </div>
            <div className="flex-1 h-px bg-stone-200" />
            <span className="font-['JetBrains_Mono',monospace] text-xs text-stone-400">{personal.length} projects</span>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {personal.map((study, i) => (
              <WorkCard key={study.id} study={study} index={i} />
            ))}
          </div>
        </div>

        {/* Designit */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div>
              <p className="text-xs font-semibold text-stone-900 uppercase tracking-widest">Designit</p>
              <p className="text-xs text-stone-400 mt-0.5">A Wipro Company</p>
            </div>
            <div className="flex-1 h-px bg-stone-200" />
            <span className="font-['JetBrains_Mono',monospace] text-xs text-stone-400">{designit.length} projects</span>
          </div>
          <div className="flex items-center gap-2 mb-10 text-stone-400 text-xs bg-stone-100 border border-stone-200 rounded-xl px-4 py-3 w-fit">
            <Lock className="w-3.5 h-3.5 shrink-0" />
            Final designs and deliverables are under NDA. Case studies present research process and outcomes only.
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {designit.map((study, i) => (
              <WorkCard key={study.id} study={study} index={i} nda />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
