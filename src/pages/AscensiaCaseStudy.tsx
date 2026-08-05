import { Link } from "react-router";
import { ArrowLeft, Lock, Mail } from "lucide-react";
import { motion } from "motion/react";

import imgHero from "../imports/Slide1691-1/ed35a1bf02bcf0c7ebc11a7b201073b00d925f55.png";
import imgCompany from "../imports/Slide1691-1/57acece43cb9192cd6c63c8726dcff91a28c967e.png";
import imgConcept1 from "../imports/Slide1691-1/5d55f0689ef4f7192bceeac7ca25e9d18386de3c.png";
import imgConcept2 from "../imports/Slide1691-1/4f91a24bc2d68e8d3d2533660fde26065a913e0d.png";
import imgConcept3 from "../imports/Slide1691-1/d795fe48f1d8d4bce66148bba5231fb680b83964.png";

const painPoints = [
  { title: "Overwhelming UI", quote: "\"I just want to see my numbers — I don't need all these buttons.\"" },
  { title: "Navigation Frustration", quote: "\"It takes me 4 taps to get to my logbook. That's too much.\"" },
  { title: "Visual Hierarchy", quote: "\"I can't tell what's important on the screen. Everything's the same weight.\"" },
  { title: "Data Sharing", quote: "\"It's annoying to export the report — I need something easier before my checkups.\"" },
  { title: "Trust and Motivation", quote: "\"I wish it would give me a pat on the back when I have a good week.\"" },
];

function fade(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.5, delay },
  };
}

export function AscensiaCaseStudy() {
  return (
    <div className="bg-white min-h-screen w-full">

      {/* ── HEADER ── */}
      <header className="relative overflow-hidden bg-[#003366] min-h-[480px] flex flex-col">
        <img src={imgHero} alt="" className="absolute inset-0 w-full h-full object-cover object-center opacity-40" />
        <div className="relative z-10 max-w-[1200px] mx-auto w-full px-8 pt-10 pb-0 flex items-center justify-between">
          <Link to="/work" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Work
          </Link>
          <span className="font-bold text-white text-[15px]">Shantanu Pate.</span>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto w-full px-8 pt-16 pb-20 grid md:grid-cols-2 gap-8">
          <div>
            <span className="font-['JetBrains_Mono',monospace] text-white/50 text-[11px] uppercase tracking-[2px] block mb-4">Casestudy</span>
            <h1 className="text-white font-bold text-[42px] md:text-[56px] leading-[1.1] tracking-tight mb-6">
              Revolutionising<br />Healthcare for<br />Diabetes Management
            </h1>
          </div>
          <div className="md:pt-10 flex flex-col gap-6">
            <div>
              <p className="text-white/50 text-[13px] uppercase tracking-wider mb-1">Sector:</p>
              <p className="text-white font-bold text-[20px]">Healthcare</p>
            </div>
            <div>
              <p className="text-white/50 text-[13px] uppercase tracking-wider mb-1">My roles:</p>
              <p className="text-white font-bold text-[20px]">Product Design</p>
            </div>
            <div className="flex flex-wrap gap-3 mt-2">
              {["20 Weeks", "Designit", "2025"].map(tag => (
                <span key={tag} className="text-white/70 border border-white/20 text-[12px] px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ── COMPANY INTRO ── */}
      <section className="bg-[#f8f8f8] py-20">
        <div className="max-w-[1200px] mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fade()}>
            <p className="text-[#a2a2a2] text-[13px] uppercase tracking-[2px] font-medium mb-6">About the Client</p>
            <p className="text-[#1b1b1b] text-[18px] leading-[1.7]">
              A <span className="font-semibold">global MedTech company</span> dedicated to improving the health and lives of people with diabetes — operating across multiple markets with a strong focus on clinical accuracy, patient empowerment, and digital health innovation.
            </p>
          </motion.div>
          <motion.div {...fade(0.1)} className="rounded-2xl overflow-hidden shadow-lg">
            <img src={imgCompany} alt="Client" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* ── USER PERSONA & PAIN POINTS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.div {...fade()} className="mb-10">
            <h2 className="text-[32px] font-bold text-[#1b1b1b]">User Persona & Pain Points</h2>
          </motion.div>
          <motion.div {...fade(0.05)} className="bg-[#f0f1ff] rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-4">
              {painPoints.map((p, i) => (
                <div key={i} className="bg-white rounded-xl p-6">
                  <h3 className="text-[#1b1b1b] font-bold text-[20px] mb-2">{p.title}</h3>
                  <p className="text-[#4f4f4f] text-[16px] leading-relaxed italic">{p.quote}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── THE BRIEF ── */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.div {...fade()}>
            <h2 className="text-[32px] font-bold text-[#1b1b1b] mb-8">The Brief</h2>
            <p className="text-[#4f4f4f] text-[24px] leading-relaxed max-w-[800px]">
              The diabetes management app was redesigned with a renewed focus on accessibility, clarity, and user-centered design principles — simplifying navigation, improving readability, and creating a more inclusive experience for users across a wide range of ages and digital comfort levels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── OBJECTIVES + DISCOVERY ── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-8 grid md:grid-cols-2 gap-16">
          <motion.div {...fade()}>
            <h2 className="text-[32px] font-bold text-[#1b1b1b] mb-4">Objectives</h2>
            <p className="text-[#4f4f4f] text-[18px] leading-relaxed">
              Aligning business goals with product vision by understanding user pain points and prioritizing concepts based on user needs and strategic objectives.
            </p>
          </motion.div>
          <motion.div {...fade(0.1)}>
            <h2 className="text-[32px] font-bold text-[#1faa8d] mb-6">
              Stakeholder Workshops — <span className="text-[#1faa8d]">Remote</span>
            </h2>
            <div className="space-y-4">
              <div className="bg-[#f8f8f8] rounded-2xl p-6">
                <p className="text-[#2203ae] font-bold text-[40px] leading-none mb-1">6</p>
                <p className="text-[#2203ae] font-bold text-[18px] mb-3">Participants</p>
                <p className="text-[#111] text-[16px] leading-relaxed">PM, Regulatory, Clinical adviser, Marketing lead, Usability expert, Legal.</p>
              </div>
              <div className="bg-[#f8f8f8] rounded-2xl p-6">
                <p className="text-[#2203ae] font-bold text-[40px] leading-none mb-1">5</p>
                <p className="text-[#2203ae] font-bold text-[18px] mb-3">Total Workshops</p>
                <p className="text-[#111] text-[16px] leading-relaxed">Stakeholder workshops conducted over the course of discovery and concept define phase.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROBLEM STATEMENT ── */}
      <section className="py-20 bg-[#003366]">
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.div {...fade()}>
            <h2 className="text-[48px] font-bold text-white mb-8">Problem Statement</h2>
            <p className="text-white/80 text-[22px] leading-relaxed max-w-[900px]">
              Patients managing a chronic condition, often facing challenges such as low vision or dexterity issues, found the existing app interface difficult to use. Inadequate colour contrast, small text and icon sizes, and complex data visualisations created significant accessibility barriers — leading to potential misinterpretation of critical health readings and frustration during essential self-management tasks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CONCEPT PRESENTATION ── */}
      <section className="py-20 bg-[#f0f1ff]">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start mb-12">
            <motion.div {...fade()}>
              <h2 className="text-[48px] font-bold text-[#1b1b1b] mb-4">Concept Presentation</h2>
              <p className="text-[#1b1b1b] text-[20px] leading-relaxed max-w-[462px]">
                Focusing on minimal, modern, and accessible principles, iterating based on user feedback across multiple rounds.
              </p>
            </motion.div>
            <motion.div {...fade(0.1)} className="text-right">
              <p className="text-[#003366] font-bold text-[96px] leading-none">20+</p>
              <p className="text-[#1b1b1b] text-[20px]">Iterations</p>
            </motion.div>
          </div>
          <motion.div {...fade(0.1)} className="grid grid-cols-3 gap-6 items-end mb-16">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
              <img src={imgConcept1} alt="Concept screen 1" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/10 -mt-8">
              <img src={imgConcept2} alt="Concept screen 2" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/10 -mt-4">
              <img src={imgConcept3} alt="Concept screen 3" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* ── NDA GATE ── */}
          <motion.div {...fade(0.15)}>
            <div className="relative rounded-3xl overflow-hidden border border-[#c7caff] bg-white">
              {/* Blurred ghost content strips */}
              <div className="select-none pointer-events-none px-10 py-10 space-y-6 blur-[6px] opacity-40" aria-hidden>
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="space-y-3">
                    <div className={`h-5 bg-[#003366]/20 rounded-full ${i % 2 === 0 ? "w-2/3" : "w-1/2"}`} />
                    <div className="h-4 bg-stone-200 rounded-full w-full" />
                    <div className="h-4 bg-stone-200 rounded-full w-5/6" />
                    <div className="h-32 bg-[#f0f1ff] rounded-2xl w-full" />
                  </div>
                ))}
              </div>

              {/* Lock overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm px-8 text-center">
                <div className="bg-[#003366] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#003366]/20">
                  <Lock className="w-7 h-7 text-white" />
                </div>
                <p className="font-['JetBrains_Mono',monospace] text-[11px] text-[#a2a2a2] uppercase tracking-[2px] mb-3">Confidential · NDA</p>
                <h3 className="text-[#1b1b1b] font-bold text-[28px] mb-3 leading-snug">
                  The final output is under NDA
                </h3>
                <p className="text-[#4f4f4f] text-[16px] leading-relaxed max-w-[420px] mb-8">
                  The design system, final screens, delivery documentation, and multilingual outputs are confidential. Reach out directly to learn more about the process and outcomes.
                </p>
                <a
                  href="mailto:shantanupate0@gmail.com"
                  className="inline-flex items-center gap-2.5 bg-[#003366] text-white font-semibold text-[14px] px-7 py-3.5 rounded-full hover:bg-[#002244] transition-colors shadow-md"
                >
                  <Mail className="w-4 h-4" /> Get in touch
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#f8f8f8] border-t border-stone-200 py-20 text-center">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 bg-[#003366] text-white font-medium text-[15px] px-8 py-4 rounded-full hover:bg-[#002244] transition-colors shadow-sm"
        >
          View all work
        </Link>
      </footer>
    </div>
  );
}
