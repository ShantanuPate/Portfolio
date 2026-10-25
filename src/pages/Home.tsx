import { useCallback, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../app/components/ui/button";
import { InsightHero } from "../components/InsightHero";
import { EntryIntro, shouldPlayIntro } from "../components/EntryIntro";

import unifiedServiceCover from "../imports/Slide_16_9_-_3.png";
import ehrCover from "../imports/Vitals.png";
import diabetesCover from "../imports/Ascensia.png";
import foodCover from "../imports/Espresso_Nook.png";
import clinicalArchive from "../imports/Frame233-1/71a3ff9bd66ad4def0a83459e5d758867443569d.png";
import clinicalConversation from "../imports/Frame233-1/35cd4a6e9499a4286a8280f04619fd79ceca9bde.png";
import hospitalContext from "../imports/ContainerMargin/21fc9f9c07531f4765b65c7b97cda6ef8b4c51ef.png";
import interfaceExploration from "../imports/Slide1691/ab97a98852d52bf6595a903a10e1f4ac7c58fb72.png";
import mobileFlow from "../imports/Slide1691/b5cb3111e12d0ac26603d6c3d7fdb77c680f4d1d.png";
import systemStates from "../imports/Slide1691/46e3c349954f418fd1bac41ba0f00eea1236952f.png";

const expertise = [
  {
    number: "01",
    title: "Healthcare",
    copy: "Designing tools, workflows, and experiences that support healthcare professionals and patients.",
  },
  {
    number: "02",
    title: "Financial Services",
    copy: "Exploring trust, compliance, and digitization across customer and operational journeys.",
  },
  {
    number: "03",
    title: "Enterprise Operations",
    copy: "Simplifying fragmented systems, operational workflows, and service experiences.",
  },
];

const beliefs = [
  "Observe behaviour before collecting opinions.",
  "Map workflows before designing screens.",
  "Evidence over assumptions.",
  "Design for systems, not isolated interactions.",
];

const explorations = [
  "Enterprise AI Copilots",
  "Healthcare Workflow Simplification",
  "Digital Transformation in Financial Services",
  "Conversational Analytics",
  "Future of Research Operations",
];

const evidence = [
  ["60+", "Stakeholder interviews"],
  ["12+", "Workshops facilitated"],
  ["20+", "Journey maps"],
  ["4", "Industries explored"],
];

function SectionLabel({ index, children, light }: { index: string; children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`flex items-center gap-4 font-mono text-xs uppercase tracking-widest ${light ? "text-stone-300" : "text-stone-600"}`}>
      <span className={light ? "text-emerald-400" : "text-emerald-800"}>{index}</span>
      <span>{children}</span>
    </div>
  );
}

function Artifact({
  src,
  alt,
  label,
  className,
  imageClassName = "",
}: {
  src: string;
  alt: string;
  label: string;
  className: string;
  imageClassName?: string;
}) {
  return (
    <figure className={`group bg-white p-2 shadow-xl shadow-stone-900/10 ${className}`}>
      <div className="overflow-hidden bg-stone-200">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${imageClassName}`}
        />
      </div>
      <figcaption className="flex items-center justify-between gap-3 px-1 pb-1 pt-3 font-mono text-xs uppercase tracking-wider text-stone-600">
        <span>{label}</span>
        <span className="text-emerald-800">Archive</span>
      </figcaption>
    </figure>
  );
}

export function Home() {
  const [playIntro] = useState(shouldPlayIntro);
  const [introDone, setIntroDone] = useState(!playIntro);
  const [revealed, setRevealed] = useState(!playIntro);
  const reveal = useCallback(() => setRevealed(true), []);
  const finish = useCallback(() => setIntroDone(true), []);
  return (
    <div className="min-h-screen bg-stone-100 pt-20 text-stone-950">
      {!introDone && <EntryIntro onReveal={reveal} onDone={finish} />}
      <InsightHero play={revealed} />

      <section className="border-b border-stone-300 px-6 py-24 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <SectionLabel index="02">What I work on</SectionLabel>
          <div className="mt-12 grid border-t border-stone-400 lg:grid-cols-3">
            {expertise.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08 }}
                className="border-b border-stone-400 py-10 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                <span className="font-mono text-xs text-emerald-800">{item.number}</span>
                <p role="heading" aria-level={2} className="mt-14 font-serif text-4xl">
                  {item.title}
                </p>
                <p className="mt-5 max-w-sm leading-relaxed text-stone-600">{item.copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="featured-work" className="bg-stone-950 px-6 py-24 text-stone-100 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <SectionLabel light index="03">Featured work</SectionLabel>
          <div className="mb-20 mt-8 grid gap-8 lg:grid-cols-2 lg:items-end">
            <p role="heading" aria-level={2} className="max-w-3xl font-serif text-6xl leading-none sm:text-7xl">
              Stories from the field, not just finished screens.
            </p>
            <p className="max-w-md text-lg leading-relaxed text-stone-400 lg:justify-self-end">
              Selected work across complex operational systems and healthcare—showing the evidence, decisions,
              and design outcomes together.
            </p>
          </div>

          <article className="border-t border-stone-700 py-16">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">Flagship / 01</span>
                <p role="heading" aria-level={3} className="mt-6 font-serif text-5xl leading-none">
                  Unified Service Operations Platform
                </p>
                <p className="mt-7 leading-relaxed text-stone-400">
                  Studied operational workflows across teams to uncover inefficiencies, coordination gaps, and
                  opportunities for simplification.
                </p>
                <div className="mt-8 flex flex-wrap gap-2 font-mono text-xs uppercase text-stone-400">
                  <span>UX Research</span><span>/</span><span>Service Design</span><span>/</span><span>Enterprise</span>
                </div>
                <Button asChild variant="link" className="mt-8 h-auto p-0 text-emerald-400">
                  <Link to="/case-study/unified-service-operations">
                    Read the case study <ArrowRight />
                  </Link>
                </Button>
              </div>
              <Link
                to="/case-study/unified-service-operations"
                className="group overflow-hidden bg-stone-800 lg:col-span-8"
              >
                <img
                  src={unifiedServiceCover}
                  alt="Workshop setting for the Unified Service Operations Platform research"
                  className="aspect-video h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
              </Link>
            </div>
          </article>

          <article className="border-t border-stone-700 py-16">
            <div className="grid gap-10 lg:grid-cols-12">
              <Link
                to="/case-study/ehr-healthcare-system"
                className="group overflow-hidden bg-emerald-950 lg:col-span-8"
              >
                <img
                  src={ehrCover}
                  alt="Cover of the Vitals electronic health record case study"
                  className="aspect-video h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </Link>
              <div className="lg:col-span-4 lg:pl-6">
                <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">Flagship / 02</span>
                <p role="heading" aria-level={3} className="mt-6 font-serif text-5xl leading-none">
                  EHR Healthcare System
                </p>
                <p className="mt-7 leading-relaxed text-stone-400">
                  Redesigned healthcare workflows around the needs of clinical professionals.
                </p>
                <div className="mt-8 flex flex-wrap gap-2 font-mono text-xs uppercase text-stone-400">
                  <span>Product Design</span><span>/</span><span>Healthcare</span><span>/</span><span>Systems Thinking</span>
                </div>
                <Button asChild variant="link" className="mt-8 h-auto p-0 text-emerald-400">
                  <Link to="/case-study/ehr-healthcare-system">
                    Read the case study <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </article>

          <div className="grid border-t border-stone-700 md:grid-cols-2">
            {[
              {
                number: "03",
                title: "Diabetes Care App Redesign",
                image: diabetesCover,
                href: "/case-study/ascensia-diabetes-care",
                tags: "Healthcare / Product Design",
              },
              {
                number: "04",
                title: "Food & Beverage Experience",
                image: foodCover,
                href: "/case-study/food-beverage-app",
                tags: "Consumer / Product Design",
              },
            ].map((project, index) => (
              <article
                key={project.title}
                className="border-b border-stone-700 py-12 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <Link to={project.href} className="group block">
                  <div className="overflow-hidden bg-stone-800">
                    <img
                      src={project.image}
                      alt={`${project.title} project cover`}
                      className="aspect-video w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-6">
                    <div>
                      <span className="font-mono text-xs text-emerald-400">{project.number}</span>
                      <p role="heading" aria-level={3} className="mt-2 font-serif text-3xl">
                        {project.title}
                      </p>
                      <p className="mt-2 font-mono text-xs uppercase tracking-wider text-stone-400">{project.tags}</p>
                    </div>
                    <ArrowRight className="mt-2 text-stone-400 transition group-hover:translate-x-1 group-hover:text-emerald-400" />
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-6 border-t border-stone-700 pt-10">
            <p className="font-mono text-xs uppercase tracking-widest text-stone-400">
              More projects, with the research behind them
            </p>
            <Link
              to="/work"
              className="group inline-flex items-center gap-3 border border-stone-500 px-7 py-4 font-mono text-xs uppercase tracking-widest text-stone-100 transition-colors hover:border-emerald-400 hover:text-emerald-400"
            >
              View all work
              <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-b border-stone-300 px-6 py-24 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          {(() => {
            const { ResearchWall } = Object.values(
              import.meta.glob<{ ResearchWall: React.ComponentType }>("../components/ResearchWall.tsx", { eager: true }),
            )[0];
            return <ResearchWall />;
          })()}
        </div>
      </section>

      <section className="border-b border-stone-300 bg-emerald-800 px-6 py-20 text-white sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <SectionLabel index="05"><span className="text-white">Research in practice</span></SectionLabel>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {evidence.map(([value, label], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, rotate: index % 2 ? 2 : -2 }}
                whileInView={{ opacity: 1, rotate: index % 2 ? 1 : -1 }}
                viewport={{ once: true }}
                className="bg-stone-100 p-7 text-stone-950 shadow-lg"
              >
                <p className="font-serif text-6xl">{value}</p>
                <p className="mt-8 font-mono text-xs uppercase tracking-wider text-stone-600">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-stone-300 px-6 py-24 sm:px-10 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
          <div>
            <SectionLabel index="06">Now</SectionLabel>
            <p role="heading" aria-level={2} className="mt-8 font-serif text-5xl">
              Currently exploring
            </p>
            <p className="mt-6 max-w-sm leading-relaxed text-stone-600">
              Questions in my notebook right now—unfinished, active, and likely to change.
            </p>
          </div>
          <div className="border-t border-stone-400 lg:col-span-2">
            {explorations.map((topic, index) => (
              <div
                key={topic}
                className="group flex items-center justify-between gap-8 border-b border-stone-400 py-5"
              >
                <span className="font-mono text-xs text-emerald-800">0{index + 1}</span>
                <p className="flex-1 font-serif text-2xl transition group-hover:translate-x-2">{topic}</p>
                <span className="text-stone-400">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-stone-300 px-6 py-24 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <SectionLabel index="07">How I think</SectionLabel>
          <div className="mt-12 grid gap-0 border-l border-t border-stone-400 md:grid-cols-2">
            {beliefs.map((belief, index) => (
              <div key={belief} className="min-h-64 border-b border-r border-stone-400 p-8 sm:p-10">
                <span className="font-mono text-xs text-emerald-800">0{index + 1}</span>
                <p role="heading" aria-level={3} className="mt-16 max-w-md font-serif text-4xl leading-tight">
                  {belief}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-stone-300 bg-stone-200 px-6 py-24 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <SectionLabel index="08">Cross-industry notes</SectionLabel>
          <p role="heading" aria-level={2} className="mt-8 max-w-3xl font-serif text-5xl sm:text-6xl">
            What different industries taught me
          </p>
          <div className="mt-16 grid border-t border-stone-500 lg:grid-cols-3">
            {[
              ["Healthcare", "Accuracy matters more than speed."],
              ["Financial Services", "Trust matters more than convenience."],
              ["Enterprise Systems", "Visibility matters more than simplicity."],
            ].map(([industry, lesson]) => (
              <div key={industry} className="border-b border-stone-500 py-10 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0">
                <p className="font-mono text-xs uppercase tracking-wider text-emerald-800">{industry}</p>
                <p className="mt-14 font-serif text-4xl leading-tight">{lesson}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-stone-300 px-6 py-24 sm:px-10 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="09">About</SectionLabel>
            <p role="heading" aria-level={2} className="mt-8 font-serif text-5xl">
              Designer,
              <br />
              researcher,
              <br />
              observer.
            </p>
          </div>
          <div className="space-y-6 text-xl leading-relaxed text-stone-700 lg:col-span-7 lg:col-start-6">
            <p>
              I am a Product Designer and UX Researcher who enjoys understanding how people navigate complex
              systems.
            </p>
            <p>
              Over the last few years I&apos;ve worked across healthcare, service operations, enterprise platforms,
              and digital products, translating research insights into practical product decisions.
            </p>
            <p>
              Outside work I enjoy films, observing everyday services, and exploring how emerging technologies and
              AI can support design and research workflows.
            </p>
            <Button asChild variant="link" className="h-auto p-0 text-emerald-800">
              <Link to="/about">
                More about me <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-stone-950 px-6 py-24 text-white sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <SectionLabel light index="10">Contact</SectionLabel>
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-end">
            <p role="heading" aria-level={2} className="max-w-3xl font-serif text-6xl leading-none sm:text-7xl">
              Let&apos;s build better systems together.
            </p>
            <div className="border-t border-stone-700 lg:justify-self-end lg:w-full lg:max-w-md">
              <Button
                asChild
                variant="ghost"
                className="h-auto w-full justify-between rounded-none border-b border-stone-700 px-0 py-5 text-base text-stone-200 hover:bg-transparent hover:text-emerald-400"
              >
                <a href="mailto:shantanupate0@gmail.com">
                  Email <ArrowRight aria-hidden />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="h-auto w-full justify-between rounded-none border-b border-stone-700 px-0 py-5 text-base text-stone-200 hover:bg-transparent hover:text-emerald-400"
              >
                <a href="https://www.linkedin.com/in/shantanu-pate" target="_blank" rel="noopener noreferrer">
                  LinkedIn <ExternalLink aria-hidden />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="h-auto w-full justify-between rounded-none border-b border-stone-700 px-0 py-5 text-base text-stone-200 hover:bg-transparent hover:text-emerald-400"
              >
                <a href="mailto:shantanupate0@gmail.com?subject=Resume%20request">
                  Resume <span className="font-mono text-xs text-stone-400">Request a copy</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
