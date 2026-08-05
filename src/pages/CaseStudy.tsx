import { useParams, Link } from "react-router";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { caseStudies } from "../data/content";
import { ImageWithFallback } from "../app/components/figma/ImageWithFallback";
import imgImageJuhiKapoorPersona from "../imports/UxResearcherPortfolioWebsite/993e60f848a72094c2407ebd010a478c92995a6e.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel-overrides.css";

const CustomArrow = ({ direction, onClick }: { direction: "left" | "right", onClick?: () => void }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-black/5 text-[#005741] hover:bg-[#005741] hover:text-white transition-colors
      ${direction === "left" ? "-left-6" : "-right-6"}`}
  >
    {direction === "left" ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
  </button>
);

export function CaseStudy() {
  const { id } = useParams();
  const study = caseStudies.find(s => s.id === id) || caseStudies[0];

  return (
    <div className="bg-[#faf6ef] min-h-screen w-full">
      {/* Header / Hero */}
      <header className="bg-[#ffeee6] pt-10 pb-20 px-6 relative w-full">
        <div className="max-w-6xl mx-auto flex items-center justify-between mb-24">
          <Link to="/" className="flex items-center gap-2 text-[#9b8f83] font-['DM_Sans',sans-serif] font-medium text-[14px] hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-4 h-4" /> Back to Work
          </Link>
          <div className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1a1814] text-[15px]">
            Shantanu Pate.
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-black/20" />
            <span className="font-['JetBrains_Mono',sans-serif] text-[12px] text-black/60 tracking-[1.2px] uppercase">
              Case Study
            </span>
          </div>
          <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[48px] md:text-[60px] text-[#1a1814] leading-[1.1] mb-6">
            {study.title}
          </h1>
          <p className="font-['DM_Sans',sans-serif] text-[15px] md:text-[18px] text-[#9b8f83] leading-[1.6] max-w-3xl mb-10">
            {(study as any).subtitle || study.about}
          </p>

          {/* Metadata bar */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {(study as any).tags && (
              <div className="flex items-center gap-2 text-[#1a1814]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 shrink-0">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                  <line x1="7" y1="7" x2="7.01" y2="7" />
                </svg>
                <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#1a1814]">{(study as any).tags}</span>
              </div>
            )}
            {(study as any).year && (
              <div className="flex items-center gap-2 text-[#1a1814]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 shrink-0">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#1a1814]">{(study as any).year}</span>
              </div>
            )}
            {(study as any).roleLabel && (
              <div className="flex items-center gap-2 text-[#1a1814]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 shrink-0">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#1a1814]">{(study as any).roleLabel}</span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Summary Grid */}
      <section className="bg-[#eae0d0] w-full py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {study.problem && (
            <div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-[#1a1814] mb-4">Problem</h3>
              <p className="font-['DM_Sans',sans-serif] text-[14px] text-[#9b8f83] leading-[1.6]">{study.problem}</p>
            </div>
          )}
          {study.solution && (
            <div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-[#1a1814] mb-4">Solution</h3>
              <p className="font-['DM_Sans',sans-serif] text-[14px] text-[#9b8f83] leading-[1.6]">{study.solution}</p>
            </div>
          )}
          {study.outcome && (
            <div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-[#1a1814] mb-4">Impact</h3>
              <p className="font-['DM_Sans',sans-serif] text-[14px] text-[#9b8f83] leading-[1.6]">{study.outcome}</p>
            </div>
          )}
        </div>
      </section>

      {/* Main Body */}
      <main className="w-full py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-32">
          
          {/* Approach & Methodology (Kept exact same functionality, styled to match) */}
          <section>
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[24px] text-[#1a1814] mb-8">
              Research Approach
            </h2>
            
            {study.approach && (
              <p className="font-['DM_Sans',sans-serif] text-[16px] text-[#9b8f83] leading-[1.6] mb-8">
                {study.approach}
              </p>
            )}

            <div className="flex flex-wrap gap-3 mb-12">
              {study.methods.map(m => (
                <span key={m} className="px-5 py-2.5 bg-white border border-black/5 text-[#1a1814] text-[14px] font-['DM_Sans',sans-serif] font-medium rounded-[10px] shadow-sm">
                  {m}
                </span>
              ))}
            </div>
            
            {study.process && (
              <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#eae0d0] before:to-transparent">
                {study.process.map((step, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#faf6ef] bg-[#ffeee6] text-[#f27430] font-bold shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      {i + 1}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
                      <div className="text-[#f27430] font-bold uppercase tracking-wider text-[11px] mb-2 font-['JetBrains_Mono',sans-serif]">{step.phase}</div>
                      <h4 className="text-[16px] font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1a1814] mb-2">{step.title}</h4>
                      <p className="text-[#9b8f83] text-[14px] font-['DM_Sans',sans-serif] leading-relaxed">{step.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* The Brief / Challenge */}
          {study.challenge && (
            <section>
              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[24px] text-[#1a1814] mb-8">
                The Brief
              </h2>
              <div className="bg-[#fee4d7] rounded-[14px] p-8 md:p-10">
                <p className="font-['DM_Sans',sans-serif] text-[16px] text-[#1a1814] leading-[1.6]">
                  {study.challenge}
                </p>
              </div>
            </section>
          )}

          {/* Problem & Goal */}
          {study.objectives && study.objectives.length > 0 && (
            <section>
              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[24px] text-[#1a1814] mb-8">
                Problem & Goal
              </h2>
              <div className="space-y-4">
                {study.objectives.map((obj, i) => (
                  <div key={i} className="bg-[#ffeee6] rounded-[14px] p-6 flex items-start gap-4">
                    <div className="font-['JetBrains_Mono',sans-serif] text-[12px] text-[#f27430] mt-1 shrink-0">0{i + 1}</div>
                    <p className="font-['DM_Sans',sans-serif] text-[15px] text-[#1a1814] leading-[1.6]">{obj}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* User Research & Segmentation (Persona) */}
          {(study as any).persona && (
            <section>
              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[24px] text-[#1a1814] mb-4">
                User Research & Segmentation
              </h2>
              <p className="font-['DM_Sans',sans-serif] text-[15px] text-[#9b8f83] leading-[1.6] mb-8">
                Through a mix of in-café observation, intercept interviews, and a screener survey, we identified distinct user segments.
              </p>
              
              <div className="bg-[#fee4d7] rounded-[24px] overflow-hidden">
                <div className="bg-[#005741] p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 bg-black/20">
                      <ImageWithFallback src={imgImageJuhiKapoorPersona} alt="Persona" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] text-white">{(study as any).persona.name}</h3>
                      <p className="font-['DM_Sans',sans-serif] text-[14px] text-white/80">{(study as any).persona.title}</p>
                    </div>
                  </div>
                  <div className="bg-[#dbff3d] px-4 py-1.5 rounded-full">
                    <span className="font-['DM_Sans',sans-serif] font-bold text-[12px] text-[#005741]">Primary Persona</span>
                  </div>
                </div>
                <div className="p-8 grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-['JetBrains_Mono',sans-serif] text-[12px] text-[#f27430] uppercase tracking-wider mb-2">Needs</h4>
                    <p className="font-['DM_Sans',sans-serif] text-[14px] text-[#1a1814] leading-[1.6]">{(study as any).persona.needs}</p>
                  </div>
                  <div>
                    <h4 className="font-['JetBrains_Mono',sans-serif] text-[12px] text-[#f27430] uppercase tracking-wider mb-2">Frustrations</h4>
                    <p className="font-['DM_Sans',sans-serif] text-[14px] text-[#1a1814] leading-[1.6]">{(study as any).persona.frustrations}</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* User Insights */}
          {study.quotes && study.quotes.length > 0 && (
            <section>
              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[24px] text-[#1a1814] mb-4">
                User Insights
              </h2>
              <p className="font-['DM_Sans',sans-serif] text-[15px] text-[#9b8f83] mb-8">
                These are some of the key insights derived from the user research phase:
              </p>
              <div className="bg-[#ffeee6] rounded-[24px] p-8 md:p-12 space-y-6">
                {study.quotes.map((q, i) => (
                  <div key={i} className="bg-[rgba(251,240,236,0.3)] rounded-[10px] p-6 border border-white/20">
                    <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] text-[#1a1814] mb-2 flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[12px] text-[#f27430]">{i+1}</span>
                      {q.title}
                    </h4>
                    <p className="font-['DM_Sans',sans-serif] text-[14px] text-[#9b8f83] italic mb-3 ml-9">"{q.quote}"</p>
                    <p className="font-['DM_Sans',sans-serif] text-[14px] text-[#005741] ml-9">{q.insight}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>
      </main>

      {/* Confidential gate — blurred content + overlay card */}
      <div className="relative overflow-hidden">
        {/* Blurred ghost content */}
        <div className="pointer-events-none select-none blur-xl opacity-60 px-6 py-24">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Ghost: App Screens */}
            <div className="space-y-10">
              <div className="h-8 w-48 bg-stone-300 rounded-lg" />
              <div className="flex gap-6 justify-center">
                {[0, 1, 2].map(i => (
                  <div key={i} className="flex flex-col gap-4 flex-1 max-w-[220px]">
                    <div className="bg-stone-800 rounded-[36px] aspect-[9/19] w-full" />
                    <div className="bg-[#ffeee6] rounded-[14px] p-4 space-y-2">
                      <div className="h-2 w-16 bg-[#f27430]/40 rounded mx-auto" />
                      <div className="h-3 w-full bg-stone-300 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Ghost: Outcomes */}
            <div className="space-y-4">
              <div className="h-8 w-64 bg-stone-300 rounded-lg" />
              <div className="bg-[#005741] rounded-[24px] p-10 space-y-4">
                <div className="h-3 w-24 bg-white/30 rounded" />
                <div className="h-4 w-full bg-white/20 rounded" />
                <div className="h-4 w-5/6 bg-white/20 rounded" />
                <div className="h-4 w-4/6 bg-white/20 rounded" />
              </div>
              <div className="bg-[#fee4d7] rounded-[24px] p-10 space-y-4">
                <div className="h-3 w-24 bg-[#f27430]/30 rounded" />
                <div className="h-4 w-full bg-stone-300 rounded" />
                <div className="h-4 w-5/6 bg-stone-300 rounded" />
                <div className="h-4 w-3/4 bg-stone-300 rounded" />
              </div>
            </div>
          </div>
        </div>

        {/* Gradient fade from above */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#faf6ef] to-transparent pointer-events-none" />

        {/* Confidential card */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="bg-white rounded-[28px] border border-stone-200 shadow-2xl shadow-stone-900/10 p-10 md:p-14 max-w-lg w-full text-center">
            <div className="w-14 h-14 bg-[#ffeee6] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f27430" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <span className="font-['JetBrains_Mono',sans-serif] text-[11px] text-[#f27430] uppercase tracking-[2px] block mb-3">Confidential Work</span>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[24px] text-[#1a1814] mb-4 leading-tight">
              The rest of this case study is under NDA
            </h3>
            <p className="font-['DM_Sans',sans-serif] text-[15px] text-[#9b8f83] leading-[1.6] mb-8">
              The outcomes, metrics, and final deliverables for this project are protected. Reach out and I'll walk you through the details personally.
            </p>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center justify-center gap-2 bg-[#1a1814] text-white font-['DM_Sans',sans-serif] font-medium text-[14px] px-8 py-4 rounded-full hover:bg-[#f27430] transition-colors duration-300"
            >
              Get in touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#eae0d0] py-24 px-6 text-center">
        <p className="font-['DM_Sans',sans-serif] text-[16px] text-[#1a1814] font-bold mb-6">
          Interested in learning more?
        </p>
        <Link to="/" className="inline-flex items-center justify-center bg-[#bd4f2f] text-white font-['DM_Sans',sans-serif] font-medium text-[14px] px-8 py-4 rounded-full hover:bg-[#a64326] transition-colors shadow-sm">
          View Next Project
        </Link>
      </footer>
    </div>
  );
}