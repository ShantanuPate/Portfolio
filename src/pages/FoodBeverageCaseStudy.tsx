import imgPersona from "../imports/PortfolioProjectsEspressoNook/993e60f848a72094c2407ebd010a478c92995a6e.png";
import imgHome from "../imports/PortfolioProjectsEspressoNook/206ec6be05c0a9b38bc81327d60b157e61b6f520.png";
import imgExplore from "../imports/PortfolioProjectsEspressoNook/d518d1eeff5e1916b35b2f670450e06f6ee35cd7.png";
import imgCategory from "../imports/PortfolioProjectsEspressoNook/96302ae4bab125a1504ba6586263a9acac34d2d0.png";
import imgProduct from "../imports/PortfolioProjectsEspressoNook/b9707968c35f0abe9f085815d77861e32143aca4.png";
import imgCustomise from "../imports/PortfolioProjectsEspressoNook/12d22e4f5ebe297137f56b9f8804008feaf5f3b4.png";
import imgCart from "../imports/PortfolioProjectsEspressoNook/ba7cc4daa3d24323e3c30b344bddd480ff23ea14.png";
import imgCheckout from "../imports/PortfolioProjectsEspressoNook/8185545c35027ea0ee93940ccc575bf58d532336.png";
import imgConfirmation from "../imports/PortfolioProjectsEspressoNook/7717fb724fe9e7595c5aaa579d108f2713ccfdc7.png";
import { caseStudies } from "../data/content";
import {
  BigQuote, Chips, Closing, Gallery, Hero, InsightRows, Page, Prose, Reflection, Reveal, Rows, Section, Stats, SubHead,
} from "../components/case-study/kit";

const study = caseStudies.find((s) => s.id === "food-beverage-app")!;

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

const problem =
  "Working adults and students don't have time to queue. The existing walk-in-only model was losing customers during peak hours because the wait was simply too long.";
const solutionSummary =
  "A mobile pre-ordering app that lets customers browse, customise, pay ahead, and receive a notification the moment their order is ready — eliminating the queue entirely.";
const impact = "91% task completion rate in usability testing. Order flow reduced from 4 steps to 2. Reorder shortcut became the highest-rated feature.";

const researchApproach =
  "The project was structured across five distinct phases. It began with extensive secondary research and user interviews to understand the 'why' behind people's coffee habits. This qualitative data informed our user segmentation and persona creation. We then mapped out the ideal user flows before jumping into wireframing and high-fidelity design.";
const segmentation =
  "Through a mix of in-café observation, intercept interviews, and a screener survey, we identified distinct user segments.";

const insights = [
  { title: "Time is the #1 constraint", quote: "I only have 10 minutes before my meeting. I can't afford to wait in line." },
  { title: "Menu anxiety at the counter", quote: "There are too many options and the barista is looking at me. I just panic-order." },
  { title: "Reordering should be instant", quote: "I get the same thing every day — why do I have to go through all the steps again?" },
  { title: "Pick-up timing matters", quote: "I want my coffee ready the second I walk in, not 5 minutes before or after." },
  { title: "Delight builds loyalty", quote: "The ones I keep coming back to just feel good to use. I can't explain it better than that." },
];

const journeyStages = ["Visit Café", "Order", "Wait", "Pick-up"];
const journey = [
  { label: "Tasks", cells: ["Walk in, look at menu board", "Queue, decide, place order, pay", "Stand aside, watch screen", "Grab order, leave"] },
  { label: "Feeling", cells: ["😊 Excited", "😰 Anxious", "😤 Impatient", "😌 Relieved"] },
  { label: "Pain Points", cells: ["No menu preview before arrival", "Long queue, decision pressure", "No ETA, can't leave", "Wrong order risk"] },
  { label: "Opportunity", cells: ["Browse menu in-app", "Pre-order & pay ahead", "Live order tracking", "Notification when ready"], accent: true },
];

const solutionCards = [
  { title: "Browse & Pre-order", body: "Explore the full menu, filter by preference, and place your order before arriving — no queue, no pressure." },
  { title: "Customise & Pay", body: "Step-by-step drink customisation with real-time price updates and secure in-app payment." },
  { title: "Track & Pick Up", body: "Live status with a push notification when the order is ready for collection." },
];

const processNote =
  "I followed a double-diamond process — diverging to understand the problem space broadly, then converging on the right solution through rapid iteration and user feedback.";
const processSteps = [
  { num: "01", phase: "Discover", desc: "Secondary research + user interviews" },
  { num: "02", phase: "Define", desc: "Personas, segmentation, journey maps" },
  { num: "03", phase: "Ideate", desc: "Sketching, concept exploration, flows" },
  { num: "04", phase: "Design", desc: "Wireframes, hi-fi mockups, design system" },
  { num: "05", phase: "Prototype", desc: "Interactive prototype + usability testing" },
];

const stats = [
  { value: "4 → 2", label: "Taps to complete order" },
  { value: "91%", label: "Task completion in usability testing" },
  { value: "3 iter", label: "Design rounds before handoff" },
  { value: "4", label: "Weeks" },
];

const reflections = [
  { title: "What I'd do differently", body: "I'd spend more time on the onboarding flow. First-time users needed more hand-holding than the MVP assumed." },
  { title: "Key learning", body: "The reorder shortcut — the feature I almost cut for scope — turned out to be the highest-rated feature in testing. Convenience beats novelty every time." },
  { title: "On designing for the edge", body: study.learnings },
];

export function FoodBeverageCaseStudy() {
  return (
    <Page>
      <Hero
        title={<>Espresso <span className="italic text-emerald-800">Nook</span></>}
        intro="Designing a pre-order mobile experience for a specialty coffee café in Mumbai — from user research to hi-fi delivery"
        calloutLabel="The problem"
        callout={problem}
        meta={[
          { label: "Domain", value: "F&B · Mobile App · Product Design" },
          { label: "Year", value: "2023" },
          { label: "Role", value: "UX Designer" },
          { label: "Duration", value: study.metadata.timeline },
        ]}
      />

      <Stats items={stats} />

      <Section index="01" label="Why this mattered" title="The queue was costing the café its customers." lede={study.challenge}>
        <Rows items={study.objectives.map((body) => ({ body }))} />
      </Section>

      <Section tone="green" index="02" label="The moment that changed the research" title="The constraint behind every coffee habit.">
        <BigQuote quote={insights[0].quote} who="Interviewee" />
        <Reveal className="mt-10 max-w-2xl border-l-4 border-emerald-300 pl-6">
          <SubHead>What it meant</SubHead>
          <p className="mt-2 font-serif text-2xl leading-snug text-white">{insights[0].title}</p>
        </Reveal>
      </Section>

      <Section tone="dark" index="03" label="How we investigated" title="Five phases, from the 'why' to the prototype." lede={researchApproach}>
        <Chips className="mt-10" items={study.methods} />
        <Rows
          items={study.process.map((p) => ({ meta: p.phase, title: p.title, body: p.details }))}
        />
      </Section>

      <Section tone="dots" index="04" label="Who we designed for" title="Juhi Kapoor, the hardest order to get right." lede={segmentation}>
        <Reveal className="mt-14 grid overflow-hidden bg-stone-950 text-stone-100 shadow-xl shadow-stone-900/10 lg:grid-cols-12">
          <div className="flex items-center gap-6 border-b border-stone-800 p-8 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-10">
            <img src={imgPersona} alt="Juhi Kapoor" className="h-24 w-24 rounded-full object-cover ring-2 ring-emerald-400" />
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">Primary persona</p>
              <h3 className="mt-2 font-serif text-3xl">{study.persona!.name}</h3>
              <p className="mt-1 text-sm text-stone-400">{study.persona!.title}</p>
            </div>
          </div>
          <div className="grid gap-8 p-8 sm:grid-cols-2 lg:col-span-7 lg:p-10">
            <div>
              <SubHead className="!text-emerald-400">Needs</SubHead>
              <p className="mt-3 leading-relaxed text-stone-300">{study.persona!.needs}</p>
            </div>
            <div>
              <SubHead className="!text-emerald-400">Frustrations</SubHead>
              <p className="mt-3 leading-relaxed text-stone-300">{study.persona!.frustrations}</p>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section
        index="05"
        label="What we observed"
        title="Where the café experience broke down."
        lede="Mapping the current café experience revealed clear drop-off moments where anxiety and frustration peaked — all solvable with a pre-ordering flow."
      >
        <Reveal className="mt-14 bg-stone-950 p-6 text-stone-100 shadow-xl shadow-stone-900/10 sm:p-10">
          <div tabIndex={0} role="region" aria-label="Customer journey table, scrollable" className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-separate border-spacing-x-3 border-spacing-y-3 text-left">
            <thead>
              <tr>
                <th className="w-28 font-mono text-[10px] font-normal uppercase tracking-widest text-emerald-400">Stage</th>
                {journeyStages.map((s) => (
                  <th key={s} className="font-serif text-xl font-normal text-white">{s}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {journey.map((row) => (
                <tr key={row.label}>
                  <td className="align-top font-mono text-[10px] uppercase tracking-widest text-stone-400">{row.label}</td>
                  {row.cells.map((c) => (
                    <td
                      key={c}
                      className={`align-top p-4 text-sm leading-snug ${
                        row.accent ? "border-l-2 border-emerald-400 bg-emerald-400/10 text-emerald-200" : "bg-white/5 text-stone-300"
                      }`}
                    >
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </Reveal>
      </Section>

      <Section
        tone="stone"
        index="06"
        label="From observations to insights"
        title="Five themes across every segment."
        lede="Five recurring themes emerged across all user segments that shaped the product direction."
      >
        <InsightRows
          evidenceLabel="What users said"
          directionLabel="Journey opportunity"
          items={insights.map((ins, i) => ({
            title: ins.title,
            evidence: ins.quote,
            direction: ["Pre-order & pay ahead", "Browse menu in-app", "Quick Order templates for recurring purchases", "Live order tracking", "Notification when ready"][i],
          }))}
        />
      </Section>

      <Section tone="emerald" index="07" label="Opportunity and solution" title="Three steps replace the chaos of the counter." lede={`${study.solution} ${solutionSummary}`}>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {solutionCards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className={`h-full p-8 ${i === 0 ? "bg-stone-950 text-stone-100" : "bg-white text-stone-900"}`}>
                <p className={`font-mono text-[10px] uppercase tracking-widest ${i === 0 ? "text-emerald-400" : "text-emerald-800"}`}>{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-serif text-3xl leading-tight">{c.title}</h3>
                <p className={`mt-4 leading-relaxed ${i === 0 ? "text-stone-300" : "text-stone-600"}`}>{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        tone="dark"
        index="08"
        label="Design process and screens"
        title="Eight screens, from browsing to confirmation."
        lede={processNote}
      >
        <div className="mt-12 grid grid-cols-2 gap-px bg-stone-700 md:grid-cols-5">
          {processSteps.map((s) => (
            <div key={s.num} className="bg-stone-950 p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">{s.num}</p>
              <p className="mt-2 font-serif text-2xl text-white">{s.phase}</p>
              <p className="mt-2 text-sm leading-snug text-stone-400">{s.desc}</p>
            </div>
          ))}
        </div>
        <Gallery items={screens} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {study.screens.map((s) => (
            <p key={s.caption} className="border-l-2 border-emerald-400 pl-4 text-sm leading-relaxed text-stone-300">{s.caption}</p>
          ))}
        </div>
      </Section>

      <Section tone="stone" index="09" label="What would change if implemented" title="Impact.">
        <Reveal className="mt-14 max-w-4xl border-l-4 border-emerald-800 pl-6">
          <p className="font-serif text-3xl leading-snug sm:text-4xl">{impact}</p>
          <Prose className="mt-6">{study.outcome}</Prose>
        </Reveal>
      </Section>

      <Section index="10" label="Reflection" title="What changed my perspective.">
        <Reflection items={reflections} />
      </Section>

      <Closing />
    </Page>
  );
}
