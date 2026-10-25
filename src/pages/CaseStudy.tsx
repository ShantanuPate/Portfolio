import { useParams } from "react-router";
import { caseStudies } from "../data/content";
import {
  BigQuote, Chips, Closing, Hero, InsightRows, Page, Prose, Reflection, Reveal, Rows, Section, SubHead,
} from "../components/case-study/kit";

export function CaseStudy() {
  const { id } = useParams();
  const study: any = caseStudies.find((s) => s.id === id) || caseStudies[0];
  const soon = !!study.comingSoon;
  const quotes: { quote: string; title: string; insight: string }[] = study.quotes || [];
  const [moment, ...rest] = quotes;
  const process: { phase: string; title: string; details: string }[] = study.process || [];
  const objectives: string[] = study.objectives || [];

  let n = 0;
  const idx = () => String(++n).padStart(2, "0");

  return (
    <Page>
      <Hero
        title={study.title}
        intro={study.subtitle || study.about}
        calloutLabel="The problem"
        callout={study.problem}
        image={study.heroImage}
        imageAlt={study.title}
        meta={[
          { label: "Domain", value: study.tags },
          { label: "Year", value: study.year },
          { label: "Role", value: study.roleLabel || study.metadata?.role },
          { label: "Duration", value: study.metadata?.timeline },
          { label: "Sector", value: study.metadata?.sector },
          { label: "Team", value: study.metadata?.team },
        ]}
      />

      {soon ? (
        <>
          <Section index={idx()} label="How we are investigating" title="Methods in use.">
            <Chips className="mt-12" items={study.methods} />
          </Section>
          <Closing title="This case study is coming soon." />
        </>
      ) : (
        <>
          {(study.about || study.challenge) && (
            <Section index={idx()} label="Why this mattered" title="The problem behind the brief." lede={study.about}>
              {study.challenge && (
                <Reveal className="mt-12 max-w-4xl border-l-4 border-emerald-800 pl-6">
                  <SubHead>The challenge</SubHead>
                  <p className="mt-2 font-serif text-2xl leading-snug sm:text-3xl">{study.challenge}</p>
                </Reveal>
              )}
            </Section>
          )}

          {moment && (
            <Section tone="green" index={idx()} label="The moment that changed the research" title="What we heard first.">
              <BigQuote quote={moment.quote} who={moment.title} />
              <Reveal className="mt-10 max-w-2xl border-l-4 border-emerald-300 pl-6">
                <SubHead>What it meant</SubHead>
                <p className="mt-2 font-serif text-2xl leading-snug text-white">{moment.insight}</p>
              </Reveal>
            </Section>
          )}

          <Section tone="dark" index={idx()} label="How we investigated" title="Approach and methods." lede={study.approach}>
            <Chips className="mt-10" items={study.methods} />
            {process.length > 0 && <Rows items={process.map((p) => ({ meta: p.phase, title: p.title, body: p.details }))} />}
            {objectives.length > 0 && <Rows items={objectives.map((body) => ({ body }))} />}
          </Section>

          {study.persona && (
            <Section tone="dots" index={idx()} label="Who we designed for" title={study.persona.name}>
              <div className="mt-12 grid gap-10 bg-stone-950 p-8 text-stone-100 shadow-xl shadow-stone-900/10 sm:grid-cols-2 lg:p-10">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">Needs</p>
                  <p className="mt-3 leading-relaxed text-stone-300">{study.persona.needs}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">Frustrations</p>
                  <p className="mt-3 leading-relaxed text-stone-300">{study.persona.frustrations}</p>
                </div>
              </div>
            </Section>
          )}

          {rest.length > 0 && (
            <Section tone="stone" index={idx()} label="From observations to insights" title="Key insights.">
              <InsightRows
                evidenceLabel="Evidence"
                directionLabel="Implication"
                items={rest.map((q) => ({ title: q.title, evidence: q.quote, direction: q.insight }))}
              />
            </Section>
          )}

          {study.solution && (
            <Section tone="emerald" index={idx()} label="Opportunity and solution" title="Where the research led." lede={study.solution} />
          )}

          {study.outcome && (
            <Section index={idx()} label="What would change if implemented" title="Outcome.">
              <Reveal className="mt-12 max-w-4xl border-l-4 border-emerald-800 pl-6">
                <p className="font-serif text-3xl leading-snug sm:text-4xl">{study.outcome}</p>
              </Reveal>
            </Section>
          )}

          {study.learnings && (
            <Section tone="stone" index={idx()} label="Reflection" title="What I learned.">
              <Reflection items={[{ body: study.learnings }]} />
            </Section>
          )}

          <Closing
            nda={{
              title: "The rest of this case study is under NDA",
              body: "The outcomes, metrics, and final deliverables for this project are protected. Reach out and I'll walk you through the details personally.",
            }}
          />
        </>
      )}
    </Page>
  );
}
