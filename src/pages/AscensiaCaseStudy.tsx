import imgHero from "../imports/Slide1691-1/ed35a1bf02bcf0c7ebc11a7b201073b00d925f55.png";
import imgCompany from "../imports/Slide1691-1/57acece43cb9192cd6c63c8726dcff91a28c967e.png";
import imgConcept1 from "../imports/Slide1691-1/5d55f0689ef4f7192bceeac7ca25e9d18386de3c.png";
import imgConcept2 from "../imports/Slide1691-1/4f91a24bc2d68e8d3d2533660fde26065a913e0d.png";
import imgConcept3 from "../imports/Slide1691-1/d795fe48f1d8d4bce66148bba5231fb680b83964.png";
import { caseStudies } from "../data/content";
import {
  BigQuote, Chips, Closing, Hero, InsightRows, Page, Prose, Reflection, Reveal, Rows, Section, Stats, SubHead,
} from "../components/case-study/kit";

const study = caseStudies.find((s) => s.id === "ascensia-diabetes-care")!;

const problem =
  "Patients managing a chronic condition, often facing challenges such as low vision or dexterity issues, found the existing app interface difficult to use. Inadequate colour contrast, small text and icon sizes, and complex data visualisations created significant accessibility barriers — leading to potential misinterpretation of critical health readings and frustration during essential self-management tasks.";
const brief =
  "The diabetes management app was redesigned with a renewed focus on accessibility, clarity, and user-centered design principles — simplifying navigation, improving readability, and creating a more inclusive experience for users across a wide range of ages and digital comfort levels.";
const client =
  "A global MedTech company dedicated to improving the health and lives of people with diabetes — operating across multiple markets with a strong focus on clinical accuracy, patient empowerment, and digital health innovation.";
const objectivesText =
  "Aligning business goals with product vision by understanding user pain points and prioritizing concepts based on user needs and strategic objectives.";
const participants = "PM, Regulatory, Clinical adviser, Marketing lead, Usability expert, Legal.";
const concept = "Focusing on minimal, modern, and accessible principles, iterating based on user feedback across multiple rounds.";

const [moment, ...others] = study.quotes;
const insights = others.map((q) => ({ title: q.title, evidence: q.quote, direction: q.insight }));

export function AscensiaCaseStudy() {
  return (
    <Page>
      <Hero
        title={<>Revolutionising Healthcare for <span className="italic text-emerald-800">Diabetes</span> Management</>}
        intro={study.subtitle!}
        calloutLabel="The problem"
        callout={study.problem}
        image={imgHero}
        meta={[
          { label: "Sector", value: "Healthcare" },
          { label: "My role", value: "Product Design" },
          { label: "Duration", value: "20 Weeks" },
          { label: "Year", value: "2025 · Designit" },
          { label: "Team", value: study.metadata.team },
          { label: "Lead role", value: study.metadata.role },
        ]}
      />

      <Stats
        items={[
          { value: "20", label: "Weeks" },
          { value: "5", label: "Stakeholder workshops" },
          { value: "6", label: "Workshop participants" },
          { value: "20+", label: "Concept iterations" },
        ]}
      />

      <Section
        index="01"
        label="Why this mattered"
        title="An app that made essential health tasks harder."
        lede={problem}
      >
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-6">
            <SubHead>About the client</SubHead>
            <p className="mt-4 font-serif text-2xl leading-snug">{client}</p>
            <SubHead className="mt-12">The brief</SubHead>
            <Prose className="mt-4">{brief}</Prose>
          </Reveal>
          <Reveal className="lg:col-span-6" delay={0.1}>
            <div className="overflow-hidden bg-stone-200 shadow-xl shadow-stone-900/10">
              <img src={imgCompany} alt="Client" className="w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="green" index="02" label="The moment that changed the research" title="What patients told us first.">
        <BigQuote quote={moment.quote} who={`Patient · ${moment.title}`} />
        <Reveal className="mt-10 max-w-2xl border-l-4 border-emerald-300 pl-6">
          <SubHead>What it meant</SubHead>
          <p className="mt-2 font-serif text-2xl leading-snug text-white">{moment.insight}</p>
        </Reveal>
      </Section>

      <Section tone="dark" index="03" label="How we investigated" title="Workshops with stakeholders, research with patients.">
        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SubHead>Objectives</SubHead>
            <p className="mt-4 font-serif text-2xl leading-snug text-white">{objectivesText}</p>
            <Prose className="mt-8">{study.approach}</Prose>
            <Chips className="mt-8" items={study.methods} />
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="border border-stone-700 p-8">
              <SubHead>Stakeholder workshops — remote</SubHead>
              <div className="mt-6 grid grid-cols-2 gap-6">
                <div>
                  <p className="font-serif text-6xl leading-none text-emerald-400">6</p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-stone-400">Participants</p>
                </div>
                <div>
                  <p className="font-serif text-6xl leading-none text-emerald-400">5</p>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-stone-400">Total workshops</p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-stone-300">{participants}</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-400">
                Stakeholder workshops conducted over the course of discovery and concept define phase.
              </p>
            </div>
          </Reveal>
        </div>
        <Rows items={study.objectives.map((body) => ({ body }))} />
      </Section>

      <Section
        tone="dots"
        index="04"
        label="From pain points to insights"
        title="Four frictions, four directions."
        lede="Each pain point a patient voiced points to a specific design response."
      >
        <InsightRows items={insights} evidenceLabel="What patients said" directionLabel="Design direction" />
      </Section>

      <Section tone="emerald" index="05" label="Opportunity and solution" title="A patient-centric app, clear at a glance." lede={study.solution}>
        <div className="mt-16 flex flex-wrap items-end justify-between gap-6 border-t border-white/20 pt-8">
          <p className="max-w-md text-lg leading-relaxed text-stone-100">{concept}</p>
          <div>
            <p className="font-serif text-8xl leading-none text-white">20+</p>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-emerald-200">Iterations</p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-3 items-end gap-4 sm:gap-6">
          {[imgConcept1, imgConcept2, imgConcept3].map((src, i) => (
            <Reveal key={src} delay={i * 0.08} className={i === 1 ? "-mt-8" : i === 2 ? "-mt-4" : ""}>
              <div className="overflow-hidden shadow-2xl shadow-black/30">
                <img src={src} alt={`Concept screen ${i + 1}`} className="w-full object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="stone" index="06" label="What would change if implemented" title="Navigation, hierarchy and sharing, improved.">
        <Reveal className="mt-14 max-w-4xl border-l-4 border-emerald-800 pl-6">
          <SubHead>Outcome</SubHead>
          <p className="mt-2 font-serif text-3xl leading-snug sm:text-4xl">{study.outcome}</p>
        </Reveal>
      </Section>

      <Section index="07" label="Reflection" title="What I learned.">
        <Reflection items={[{ body: study.learnings }]} />
      </Section>

      <Closing
        nda={{
          title: "The final output is under NDA",
          body: "The design system, final screens, delivery documentation, and multilingual outputs are confidential. Reach out directly to learn more about the process and outcomes.",
        }}
      />
    </Page>
  );
}
