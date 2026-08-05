import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import imgPersona from "../imports/PortfolioProjectsEspressoNook/993e60f848a72094c2407ebd010a478c92995a6e.png";
import imgHome from "../imports/PortfolioProjectsEspressoNook/206ec6be05c0a9b38bc81327d60b157e61b6f520.png";
import imgExplore from "../imports/PortfolioProjectsEspressoNook/d518d1eeff5e1916b35b2f670450e06f6ee35cd7.png";
import imgCategory from "../imports/PortfolioProjectsEspressoNook/96302ae4bab125a1504ba6586263a9acac34d2d0.png";
import imgProduct from "../imports/PortfolioProjectsEspressoNook/b9707968c35f0abe9f085815d77861e32143aca4.png";
import imgCustomise from "../imports/PortfolioProjectsEspressoNook/12d22e4f5ebe297137f56b9f8804008feaf5f3b4.png";
import imgCart from "../imports/PortfolioProjectsEspressoNook/ba7cc4daa3d24323e3c30b344bddd480ff23ea14.png";
import imgCheckout from "../imports/PortfolioProjectsEspressoNook/8185545c35027ea0ee93940ccc575bf58d532336.png";
import imgConfirmation from "../imports/PortfolioProjectsEspressoNook/7717fb724fe9e7595c5aaa579d108f2713ccfdc7.png";

const screens = [
  { src: imgHome, label: "Home" },
  { src: imgExplore, label: "Explore" },
  { src: imgCategory, label: "Category" },
  { src: imgProduct, label: "Product" },
  { src: imgCustomise, label: "Customise" },
  { src: imgCart, label: "Cart" },
  { src: imgCheckout, label: "Checkout" },
  { src: imgConfirmation, label: "Confirmation" },
];

const processSteps = [
  { num: "01", phase: "Discover", desc: "Secondary research + user interviews" },
  { num: "02", phase: "Define", desc: "Personas, segmentation, journey maps" },
  { num: "03", phase: "Ideate", desc: "Sketching, concept exploration, flows" },
  { num: "04", phase: "Design", desc: "Wireframes, hi-fi mockups, design system" },
  { num: "05", phase: "Prototype", desc: "Interactive prototype + usability testing" },
];

const insights = [
  { title: "Time is the #1 constraint", quote: "\"I only have 10 minutes before my meeting. I can't afford to wait in line.\"" },
  { title: "Menu anxiety at the counter", quote: "\"There are too many options and the barista is looking at me. I just panic-order.\"" },
  { title: "Reordering should be instant", quote: "\"I get the same thing every day — why do I have to go through all the steps again?\"" },
  { title: "Pick-up timing matters", quote: "\"I want my coffee ready the second I walk in, not 5 minutes before or after.\"" },
  { title: "Delight builds loyalty", quote: "\"The ones I keep coming back to just feel good to use. I can't explain it better than that.\"" },
];

const journeyStages = ["Visit Café", "Order", "Wait", "Pick-up"];
const journeyTasks = ["Walk in, look at menu board", "Queue, decide, place order, pay", "Stand aside, watch screen", "Grab order, leave"];
const journeyFeelings = ["😊 Excited", "😰 Anxious", "😤 Impatient", "😌 Relieved"];
const journeyPains = ["No menu preview before arrival", "Long queue, decision pressure", "No ETA, can't leave", "Wrong order risk"];
const journeyOpps = ["Browse menu in-app", "Pre-order & pay ahead", "Live order tracking", "Notification when ready"];

const solutionCards = [
  { title: "Browse & Pre-order", desc: "Explore the full menu, filter by preference, and place your order before arriving — no queue, no pressure." },
  { title: "Customise & Pay", desc: "Step-by-step drink customisation with real-time price updates and secure in-app payment." },
  { title: "Track & Pick Up", desc: "Live status with a push notification when the order is ready for collection." },
];

export function FoodBeverageCaseStudy() {
  return (
    <div className="bg-[#faf6ef] min-h-screen w-full">

      {/* ── HEADER ── */}
      <header className="bg-[#ffeee6] pt-10 pb-20 px-6 w-full">
        <div className="max-w-[1152px] mx-auto flex items-center justify-between mb-24">
          <Link
            to="/work"
            className="flex items-center gap-2 font-['DM_Sans',sans-serif] font-medium text-[14px] text-[#9b8f83] hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Work
          </Link>
          <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] text-[#1a1814]">
            Shantanu Pate.
          </span>
        </div>

        <div className="max-w-[1024px] mx-auto px-10">
          <div className="flex items-center gap-3 mb-0">
            <div className="h-px w-8 bg-black/20" />
            <span className="font-['JetBrains_Mono',sans-serif] text-[12px] text-black/60 tracking-[1.2px] uppercase">
              Case Study
            </span>
          </div>
          <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[60px] text-[#1a1814] leading-[1.25] mt-6">
            Espresso Nook
          </h1>
          <p className="font-['DM_Sans',sans-serif] text-[20px] text-[rgba(26,24,20,0.7)] leading-[1.625] max-w-[768px] mt-4">
            Designing a pre-order mobile experience for a specialty coffee café in Mumbai — from user research to hi-fi delivery
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 mt-10">
            <span className="font-['DM_Sans',sans-serif] text-[14px] text-[rgba(26,24,20,0.7)]">F&amp;B · Mobile App · Product Design</span>
            <span className="font-['DM_Sans',sans-serif] text-[14px] text-[rgba(26,24,20,0.7)]">2023</span>
            <span className="font-['DM_Sans',sans-serif] text-[14px] text-[rgba(26,24,20,0.7)]">UX Designer</span>
          </div>
        </div>
      </header>

      {/* ── SUMMARY BAR ── */}
      <section className="bg-[#eae0d0] w-full py-20 px-6">
        <div className="max-w-[1024px] mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] text-[#1a1814] mb-4">Problem</h3>
            <p className="font-['DM_Sans',sans-serif] text-[14px] text-[#9b8f83] leading-[1.625]">
              Working adults and students don't have time to queue. The existing walk-in-only model was losing customers during peak hours because the wait was simply too long.
            </p>
          </div>
          <div>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] text-[#1a1814] mb-4">Solution</h3>
            <p className="font-['DM_Sans',sans-serif] text-[14px] text-[#9b8f83] leading-[1.625]">
              A mobile pre-ordering app that lets customers browse, customise, pay ahead, and receive a notification the moment their order is ready — eliminating the queue entirely.
            </p>
          </div>
          <div>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] text-[#1a1814] mb-4">Impact</h3>
            <p className="font-['DM_Sans',sans-serif] text-[14px] text-[#9b8f83] leading-[1.625]">
              91% task completion rate in usability testing. Order flow reduced from 4 steps to 2. Reorder shortcut became the highest-rated feature.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN BODY ── */}
      <main className="w-full px-6 py-24">
        <div className="max-w-[944px] mx-auto space-y-0">

          {/* Research Approach */}
          <section className="pb-20 border-b border-[rgba(26,24,20,0.1)]">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[24px] text-[#1a1814] mb-8">Research Approach</h2>
            <p className="font-['DM_Sans',sans-serif] text-[16px] text-[#9b8f83] leading-[1.6] max-w-[896px] mb-8">
              The project was structured across five distinct phases. It began with extensive secondary research and user interviews to understand the 'why' behind people's coffee habits. This qualitative data informed our user segmentation and persona creation. We then mapped out the ideal user flows before jumping into wireframing and high-fidelity design.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              {["Secondary Research", "User Segmentation", "Iterative Design", "App Testing"].map(m => (
                <span key={m} className="px-5 py-2.5 bg-white border border-black/5 text-[#1a1814] text-[14px] font-['DM_Sans',sans-serif] font-medium rounded-[10px] shadow-sm">
                  {m}
                </span>
              ))}
            </div>

            {/* Zigzag process */}
            <div className="relative">
              {/* Center spine */}
              <div
                className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5"
                style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0) 0%, rgba(8,7,6,0.14) 7%, rgba(234,224,208,0.86) 43%, rgb(234,224,208) 50%, rgba(234,224,208,0.86) 57%, rgba(0,0,0,0) 100%)" }}
              />
              <div className="space-y-8">
                {[
                  { num: 1, phase: "Discover", title: "Secondary & User Research", desc: "Analyzed market trends and conducted 1:1 interviews to understand ordering habits.", right: true },
                  { num: 2, phase: "Define", title: "Analysis & Personas", desc: "Synthesized data into user segmentation, notably creating the 'Juhi Kapoor' persona.", right: false },
                  { num: 3, phase: "Ideate", title: "Concept & Flows", desc: "Sketched initial concepts and mapped out the core ordering and customization flows.", right: true },
                  { num: 4, phase: "Design", title: "Wireframing & UI", desc: "Created wireframes, progressed to high-fidelity mockups, and established a design system.", right: false },
                  { num: 5, phase: "Prototype", title: "Testing & Iteration", desc: "Built an interactive prototype and conducted usability testing to refine the UI.", right: true },
                ].map((step) => (
                  <div key={step.num} className={`relative flex items-center ${step.right ? "justify-end md:justify-start md:flex-row-reverse" : "justify-start"} gap-0`}>
                    {/* Number bubble */}
                    <div className={`absolute md:left-1/2 ${step.right ? "md:-translate-x-5" : "md:-translate-x-1/2 md:translate-x-5"} z-10 w-10 h-10 rounded-full border-4 border-[#faf6ef] bg-[#ffeee6] text-[#f27430] font-['Inter',sans-serif] font-bold text-[16px] flex items-center justify-center shadow-sm shrink-0`}>
                      {step.num}
                    </div>
                    <div className="w-full md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
                      <div className="font-['JetBrains_Mono',sans-serif] font-bold text-[11px] text-[#f27430] uppercase tracking-[0.55px] mb-2">{step.phase}</div>
                      <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-[#1a1814] mb-2">{step.title}</h4>
                      <p className="font-['DM_Sans',sans-serif] text-[14px] text-[#9b8f83] leading-[1.625]">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* The Brief */}
          <section className="py-20 border-b border-[rgba(26,24,20,0.1)]">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[24px] text-[#1a1814] mb-8">The Brief</h2>
            <div className="bg-[#fee4d7] rounded-[14px] p-10">
              <p className="font-['DM_Sans',sans-serif] text-[16px] text-[#1a1814] leading-[1.6] max-w-[816px]">
                The coffee ordering market is highly saturated, but users frequently complain about clunky customization interfaces and inaccurate pickup times. The challenge was to design an app that caters to 'power users' who have highly specific daily orders, while remaining accessible to new users who just want to browse the menu.
              </p>
            </div>
          </section>

          {/* Problem & Goal */}
          <section className="py-20 border-b border-[rgba(26,24,20,0.1)]">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[24px] text-[#1a1814] mb-8">Problem & Goal</h2>
            <div className="space-y-4">
              {[
                "Identify the core pain points in existing coffee ordering applications.",
                "Develop accurate user personas based on real behavioral data.",
                "Design an intuitive customization interface for complex drink orders.",
                "Validate the design through rigorous usability testing.",
              ].map((obj, i) => (
                <div key={i} className="bg-[#ffeee6] rounded-[14px] p-6 flex items-start gap-4">
                  <span className="font-['JetBrains_Mono',sans-serif] text-[12px] text-[#f27430] shrink-0 mt-1">0{i + 1}</span>
                  <p className="font-['DM_Sans',sans-serif] text-[15px] text-[#1a1814] leading-[1.6]">{obj}</p>
                </div>
              ))}
            </div>
          </section>

          {/* User Research & Segmentation */}
          <section className="py-20 border-b border-[rgba(26,24,20,0.1)]">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[24px] text-[#1a1814] mb-4">User Research & Segmentation</h2>
            <p className="font-['DM_Sans',sans-serif] text-[15px] text-[#9b8f83] leading-[1.6] mb-8">
              Through a mix of in-café observation, intercept interviews, and a screener survey, we identified distinct user segments.
            </p>
            <div className="bg-[#fee4d7] rounded-[24px] overflow-hidden">
              <div className="bg-[#005741] p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 bg-black/20 shrink-0">
                    <img src={imgPersona} alt="Juhi Kapoor" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] text-white">Juhi Kapoor</h3>
                    <p className="font-['DM_Sans',sans-serif] text-[14px] text-white/80">Age 28 · Fast-paced creative</p>
                  </div>
                </div>
                <div className="bg-[#dbff3d] px-4 py-1.5 rounded-full shrink-0">
                  <span className="font-['DM_Sans',sans-serif] font-bold text-[12px] text-[#005741]">Primary Persona</span>
                </div>
              </div>
              <div className="p-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-['JetBrains_Mono',sans-serif] font-medium text-[12px] text-[#f27430] uppercase tracking-[0.6px] mb-2">Needs</h4>
                  <p className="font-['DM_Sans',sans-serif] text-[14px] text-[#1a1814] leading-[1.6]">
                    A quick, seamless way to order her usual coffee on the way to work, without standing in a long line.
                  </p>
                </div>
                <div>
                  <h4 className="font-['JetBrains_Mono',sans-serif] font-medium text-[12px] text-[#f27430] uppercase tracking-[0.6px] mb-2">Frustrations</h4>
                  <p className="font-['DM_Sans',sans-serif] text-[14px] text-[#1a1814] leading-[1.6]">
                    Customizing her complex drink on other apps is too difficult, and pick-up times are often inaccurate.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* User Insights */}
          <section className="py-20 border-b border-[rgba(26,24,20,0.1)]">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[30px] text-[#1a1814] mb-3">User Insights</h2>
            <p className="font-['DM_Sans',sans-serif] text-[15px] text-[#9b8f83] mb-8">
              Five recurring themes emerged across all user segments that shaped the product direction.
            </p>
            <div className="space-y-3">
              {insights.map((insight, i) => (
                <div key={i} className="bg-[#ffeee6] border border-[#f5c7a9] rounded-[14px] px-5 py-4 flex items-start gap-4">
                  <div className="bg-[#fee4d7] rounded-[10px] w-9 h-9 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1.33333C4.31811 1.33333 1.33333 4.31811 1.33333 8C1.33333 11.6819 4.31811 14.6667 8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.31811 11.6819 1.33333 8 1.33333Z" stroke="#D1512D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8 4V8L10.6667 9.33333" stroke="#D1512D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] text-[#005741] leading-[20px]">{insight.title}</p>
                    <p className="font-['DM_Sans',sans-serif] text-[14px] text-[#38836e] italic leading-[22.75px] mt-1">{insight.quote}</p>
                  </div>
                  <span className="font-['JetBrains_Mono',sans-serif] text-[10px] text-[#f5c7a9] shrink-0 mt-1">0{i + 1}</span>
                </div>
              ))}
            </div>
          </section>

          {/* User Journey Map */}
          <section className="py-20 border-b border-[rgba(26,24,20,0.1)]">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[30px] text-[#1a1814] mb-3">User Journey Map</h2>
            <p className="font-['DM_Sans',sans-serif] text-[15px] text-[#9b8f83] leading-[1.625] mb-8">
              Mapping the current café experience revealed clear drop-off moments where anxiety and frustration peaked — all solvable with a pre-ordering flow.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-separate border-spacing-1">
                <thead>
                  <tr>
                    <th className="text-left font-['JetBrains_Mono',sans-serif] text-[10px] text-[#d1512d] uppercase tracking-[1px] py-4 pr-4 w-24">Stage</th>
                    {journeyStages.map(s => (
                      <th key={s} className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[12px] text-[#005741] text-center py-4">{s}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Tasks", cells: journeyTasks, bg: "bg-[#ffeee6]", text: "text-[#38836e]", bold: false },
                    { label: "Feeling", cells: journeyFeelings, bg: "bg-[#fee4d7]", text: "text-[#38836e]", bold: false },
                    { label: "Pain Points", cells: journeyPains, bg: "bg-[#ffeee6]", text: "text-[#38836e]", bold: false },
                    { label: "Opportunity", cells: journeyOpps, bg: "bg-[rgba(219,255,61,0.25)]", text: "text-[#005741]", bold: true },
                  ].map(row => (
                    <tr key={row.label}>
                      <td className="font-['JetBrains_Mono',sans-serif] text-[10px] text-[#dc7c62] uppercase tracking-[1px] py-2 pr-4 align-middle">{row.label}</td>
                      {row.cells.map((cell, ci) => (
                        <td key={ci} className={`${row.bg} rounded-[10px] py-3 px-2 text-center align-middle`}>
                          <span className={`font-['DM_Sans',sans-serif] ${row.bold ? "font-semibold" : "font-normal"} text-[12px] ${row.text} leading-[16.5px]`}>{cell}</span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Design Process */}
          <section className="py-20 border-b border-[rgba(26,24,20,0.1)]">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[30px] text-[#1a1814] mb-3">Design Process</h2>
            <p className="font-['DM_Sans',sans-serif] text-[15px] text-[#9b8f83] leading-[1.625] mb-8">
              I followed a double-diamond process — diverging to understand the problem space broadly, then converging on the right solution through rapid iteration and user feedback.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {processSteps.map(step => (
                <div key={step.num} className="bg-[#ffeee6] border border-[#f5c7a9] rounded-[14px] p-[17px] flex flex-col items-center text-center">
                  <span className="font-['JetBrains_Mono',sans-serif] text-[10px] text-[#d1512d] tracking-[1px] mb-1">{step.num}</span>
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] text-[#005741] mb-1">{step.phase}</span>
                  <span className="font-['DM_Sans',sans-serif] text-[12px] text-[#38836e] leading-[16.5px]">{step.desc}</span>
                </div>
              ))}
            </div>
          </section>

          {/* App Screens */}
          <section className="py-20 border-b border-[rgba(26,24,20,0.1)]">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[30px] text-[#1a1814] mb-3">Design System & Screens</h2>
            <p className="font-['DM_Sans',sans-serif] text-[15px] text-[#9b8f83] leading-[1.625] mb-10">
              Eight key screens covering the complete pre-ordering flow — from browsing to confirmation.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {screens.map(screen => (
                <div key={screen.label} className="flex flex-col gap-2">
                  <div className="bg-stone-100 rounded-[20px] overflow-hidden aspect-[9/19]">
                    <img src={screen.src} alt={screen.label} className="w-full h-full object-cover object-top" />
                  </div>
                  <p className="font-['JetBrains_Mono',sans-serif] text-[10px] text-[#d1512d] uppercase tracking-[1px] text-center">{screen.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Solution */}
          <section className="py-20 border-b border-[rgba(26,24,20,0.1)]">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[30px] text-[#1a1814] mb-3">The Solution</h2>
            <p className="font-['DM_Sans',sans-serif] text-[15px] text-[#9b8f83] leading-[1.625] mb-8">
              The resulting design is an app that makes daily ordering effortless. A three-step flow replaces the chaos of the counter.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {solutionCards.map((card, i) => (
                <div key={i} className="bg-[#ffeee6] border border-[#f5c7a9] rounded-[14px] p-[21px]">
                  <div className="bg-[#fee4d7] rounded-[10px] w-8 h-8 flex items-center justify-center mb-3">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path d="M7.5 1.25C4.05 1.25 1.25 4.05 1.25 7.5C1.25 10.95 4.05 13.75 7.5 13.75C10.95 13.75 13.75 10.95 13.75 7.5C13.75 4.05 10.95 1.25 7.5 1.25Z" stroke="#D1512D" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] text-[#005741] mb-1">{card.title}</p>
                  <p className="font-['DM_Sans',sans-serif] text-[12px] text-[#38836e] leading-[19.5px]">{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Outcomes & Reflection */}
          <section className="py-20">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[30px] text-[#1a1814] mb-8">Outcomes & Reflection</h2>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { stat: "4 → 2", label: "Taps to complete order" },
                { stat: "91%", label: "Task completion in usability testing" },
                { stat: "3 iter", label: "Design rounds before handoff" },
              ].map(item => (
                <div key={item.stat} className="bg-[#005741] border border-[#38836e] rounded-[14px] p-6 text-center">
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[30px] text-white">{item.stat}</p>
                  <p className="font-['DM_Sans',sans-serif] text-[12px] text-[#f5c7a9] mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Reflection cards */}
            <div className="space-y-3">
              <div className="bg-[#ffeee6] border border-[#f5c7a9] rounded-[14px] p-5 flex items-start gap-4">
                <div className="bg-[#fee4d7] rounded-[10px] w-8 h-8 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1.16667C3.78 1.16667 1.16667 3.78 1.16667 7C1.16667 10.22 3.78 12.8333 7 12.8333C10.22 12.8333 12.8333 10.22 12.8333 7C12.8333 3.78 10.22 1.16667 7 1.16667Z" stroke="#D1512D" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 4.66667V7" stroke="#D1512D" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 9.33333H7.00583" stroke="#D1512D" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] text-[#005741]">What I'd do differently</p>
                  <p className="font-['DM_Sans',sans-serif] text-[14px] text-[#38836e] leading-[22.75px] mt-1">
                    I'd spend more time on the onboarding flow. First-time users needed more hand-holding than the MVP assumed.
                  </p>
                </div>
              </div>
              <div className="bg-[#ffeee6] border border-[#f5c7a9] rounded-[14px] p-5 flex items-start gap-4">
                <div className="bg-[#fee4d7] rounded-[10px] w-8 h-8 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1.16667 7H12.8333" stroke="#D1512D" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 1.16667L12.8333 7L7 12.8333" stroke="#D1512D" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] text-[#005741]">Key learning</p>
                  <p className="font-['DM_Sans',sans-serif] text-[14px] text-[#38836e] leading-[22.75px] mt-1">
                    The reorder shortcut — the feature I almost cut for scope — turned out to be the highest-rated feature in testing. Convenience beats novelty every time.
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#eae0d0] py-24 px-6 text-center">
        <p className="font-['DM_Sans',sans-serif] font-bold text-[16px] text-[#1a1814] mb-6">
          Interested in learning more?
        </p>
        <Link
          to="/work"
          className="inline-flex items-center justify-center bg-[#bd4f2f] text-white font-['DM_Sans',sans-serif] font-medium text-[14px] px-8 py-4 rounded-full hover:bg-[#a64326] transition-colors shadow-sm"
        >
          View Next Project
        </Link>
      </footer>
    </div>
  );
}
