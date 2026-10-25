import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, RotateCcw } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../app/components/ui/button";

import unifiedServiceCover from "../imports/Slide_16_9_-_3.png";
import ehrCover from "../imports/Vitals.png";
import diabetesCover from "../imports/Ascensia.png";
import ehrWorkflow from "../imports/Frame233-1/290999066d4957bb6d18fe7eb0892a0624a381b3.png";
import clinicalArchive from "../imports/Frame233-1/71a3ff9bd66ad4def0a83459e5d758867443569d.png";
import interfaceExploration from "../imports/Slide1691/ab97a98852d52bf6595a903a10e1f4ac7c58fb72.png";
import mobileFlow from "../imports/Slide1691/b5cb3111e12d0ac26603d6c3d7fdb77c680f4d1d.png";
import systemStates from "../imports/Slide1691/46e3c349954f418fd1bac41ba0f00eea1236952f.png";

type Path = {
  observation: string;
  pattern: string;
  insight: [string, string];
  decision: string;
  artifact: { src: string; label: string; fit: "cover" | "contain" };
  outcome: { title: string; image: string; href: string; tags: string };
};

const unified = {
  title: "Unified Service Operations Platform",
  image: unifiedServiceCover,
  href: "/case-study/unified-service-operations",
  tags: "Enterprise / Service design",
};
const ehr = {
  title: "EHR Healthcare System",
  image: ehrCover,
  href: "/case-study/ehr-healthcare-system",
  tags: "Healthcare / Product design",
};
const diabetes = {
  title: "Diabetes Care Redesign",
  image: diabetesCover,
  href: "/case-study/ascensia-diabetes-care",
  tags: "Healthcare / Mobile",
};

const paths: Path[] = [
  {
    observation: "Nurses spent more time documenting than caring for patients.",
    pattern: "Manual coordination",
    insight: ["The problem is not speed.", "The problem is time taken away from care."],
    decision: "Introduced contextual task management.",
    artifact: { src: ehrWorkflow, label: "Workflow sketch", fit: "contain" },
    outcome: ehr,
  },
  {
    observation: "Operations teams used multiple systems to complete one task.",
    pattern: "Fragmented workflows",
    insight: ["The problem is not speed.", "The problem is fragmented workflows."],
    decision: "Created a unified operational workspace.",
    artifact: { src: systemStates, label: "State wireframes", fit: "contain" },
    outcome: unified,
  },
  {
    observation: "Teams trusted spreadsheets more than the source platform.",
    pattern: "Poor system trust",
    insight: ["Users don’t need more features.", "Users need confidence in the information they see."],
    decision: "Consolidated fragmented information streams.",
    artifact: { src: interfaceExploration, label: "Interface directions", fit: "contain" },
    outcome: unified,
  },
  {
    observation: "Approvals required four handoffs across departments.",
    pattern: "Lack of visibility",
    insight: ["Approvals don’t stall in people.", "They stall where no one can see them."],
    decision: "Redesigned workflow visibility.",
    artifact: { src: ehrWorkflow, label: "Handoff map", fit: "contain" },
    outcome: unified,
  },
  {
    observation: "Information was duplicated across systems.",
    pattern: "Information silos",
    insight: ["The problem is not storage.", "The problem is no single source of truth."],
    decision: "Designed around real-world workflows rather than organizational structures.",
    artifact: { src: clinicalArchive, label: "Field observation", fit: "cover" },
    outcome: ehr,
  },
  {
    observation: "Users created workarounds to bypass the official process.",
    pattern: "Process complexity",
    insight: ["Workarounds aren’t misbehavior.", "They are unmet requirements, written by users."],
    decision: "Simplified the path to match how people actually work.",
    artifact: { src: mobileFlow, label: "Flow wireframe", fit: "contain" },
    outcome: diabetes,
  },
];

const steps = ["Observation", "Pattern", "Insight", "Product decision", "Outcome"];
const tilts = [-1.2, 0.8, -0.6, 1.1, -0.9, 0.5];

function Connector() {
  return (
    <>
      <motion.span
        aria-hidden
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="absolute -left-10 top-9 hidden h-px w-10 origin-left bg-emerald-800 lg:block"
      />
      <span aria-hidden className="absolute -left-[3px] top-[33px] hidden h-[7px] w-[7px] rounded-full bg-emerald-800 lg:block" />
      <motion.span
        aria-hidden
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="absolute -top-6 left-8 h-6 w-px origin-top bg-emerald-800 lg:hidden"
      />
    </>
  );
}

function Reveal({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mt-5 inline-flex items-center gap-2 border-b border-emerald-800 pb-0.5 font-mono text-xs uppercase tracking-wider text-emerald-800 transition hover:gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800"
    >
      {label} <ArrowRight className="h-3.5 w-3.5" />
    </button>
  );
}

export function InsightHero({ play = true }: { play?: boolean }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [stage, setStage] = useState(1);

  const select = (i: number) => {
    if (i === selected) return;
    setSelected(i);
    setStage(2);
  };
  const reset = () => {
    setSelected(null);
    setStage(1);
  };

  const path = selected === null ? null : paths[selected];
  const order = paths.map((_, i) => i);
  if (selected !== null) order.splice(order.indexOf(selected), 1), order.unshift(selected);

  const scrollToWork = () => document.getElementById("featured-work")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="border-b border-stone-300">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-14 sm:px-10 lg:px-14 lg:pb-20 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={play ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-8"
          >
            <p className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-stone-600">
              <span className="h-2 w-2 bg-emerald-700" />
              Portfolio / Shantanu Pate
            </p>
            <h1 className="font-serif text-5xl leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              Research-first Product Designer.
              <span className="block text-emerald-800">Turning observations into products.</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={play ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="lg:col-span-4"
          >
            <p className="text-lg leading-relaxed text-stone-600">
              I help teams understand how work actually happens, then design products around reality rather than
              assumptions.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                size="lg"
                onClick={scrollToWork}
                className="h-12 rounded-none bg-emerald-800 px-6 text-white hover:bg-emerald-900"
              >
                View Work
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-none border-stone-400 bg-transparent px-6 hover:bg-white"
              >
                <Link to="/about">About Me</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={play ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-14 border border-stone-300 bg-stone-200/70 p-5 sm:p-8 lg:mt-16"
          style={{
            backgroundImage: "radial-gradient(rgb(168 162 158 / 0.55) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        >
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl">How insight becomes product.</h2>
              <p className="mt-2 text-stone-600">
                Select observations to see how research turns into design decisions.
              </p>
            </div>
            {selected !== null && (
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-stone-600 transition hover:text-emerald-800"
              >
                <RotateCcw className="h-3.5 w-3.5" /> Clear wall
              </button>
            )}
          </div>

          <ol className="mt-8 hidden grid-cols-5 gap-x-3 border-b border-stone-400 pb-3 font-mono text-[11px] uppercase tracking-widest sm:grid">
            {steps.map((s, i) => (
              <li
                key={s}
                className={`flex items-center gap-2 transition-colors duration-500 ${
                  i + 1 <= stage ? "text-emerald-800" : "text-stone-400"
                }`}
              >
                <span>0{i + 1}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>

          <div
            className={`mt-8 grid gap-x-10 gap-y-8 ${
              selected === null ? "" : "lg:grid-cols-[1.05fr_0.85fr_1.3fr_1.2fr_1.3fr]"
            }`}
          >
            {/* 01 Observations */}
            <div
              className={`grid gap-4 self-start ${
                selected === null ? "sm:grid-cols-2 lg:grid-cols-3 lg:gap-5" : "grid-cols-1"
              }`}
            >
              {order.map((i) => {
                const isSel = i === selected;
                const compact = selected !== null && !isSel;
                return (
                  <motion.button
                    layout
                    transition={{ type: "spring", stiffness: 260, damping: 30 }}
                    key={i}
                    onClick={() => select(i)}
                    aria-pressed={isSel}
                    style={{ rotate: selected === null || isSel ? tilts[i] : 0 }}
                    className={`group relative bg-white text-left shadow-md shadow-stone-900/10 transition-[box-shadow,opacity,outline-color] duration-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800 ${
                      isSel ? "outline outline-2 outline-offset-2 outline-emerald-800" : ""
                    } ${compact ? "p-3 opacity-60 hover:opacity-100" : "p-5"}`}
                  >
                    <span aria-hidden className="absolute -top-2 left-6 h-4 w-12 -rotate-2 bg-stone-300/80" />
                    <span className="font-mono text-[11px] uppercase tracking-widest text-stone-600">
                      Obs. 0{i + 1}
                    </span>
                    <span
                      className={`mt-2 block font-serif leading-snug text-stone-900 ${
                        compact ? "line-clamp-2 text-sm" : "text-lg"
                      }`}
                    >
                      &ldquo;{paths[i].observation}&rdquo;
                    </span>
                    {selected === null && (
                      <span className="mt-4 block font-mono text-[11px] uppercase tracking-wider text-emerald-800 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                        Trace this &rarr;
                      </span>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {path && (
              <>
                {/* 02 Pattern */}
                <motion.div
                  key={`p-${selected}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.15 }}
                  className="relative self-start"
                >
                  <Connector />
                  <div className="-rotate-1 bg-emerald-200 p-5 shadow-md shadow-stone-900/10">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-900/70">
                      Pattern
                    </span>
                    <p className="mt-3 font-serif text-2xl leading-tight text-emerald-950">{path.pattern}</p>
                  </div>
                  {stage === 2 && <Reveal label="Frame the insight" onClick={() => setStage(3)} />}
                </motion.div>

                <AnimatePresence>
                  {stage >= 3 && (
                    /* 03 Insight */
                    <motion.div
                      key={`i-${selected}`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.1 }}
                      className="relative self-start"
                    >
                      <Connector />
                      <div className="border-l-4 border-emerald-800 bg-white p-6 shadow-md shadow-stone-900/10">
                        <span className="font-mono text-[11px] uppercase tracking-widest text-stone-600">
                          Insight
                        </span>
                        <p className="mt-3 font-serif text-xl leading-snug text-stone-600">{path.insight[0]}</p>
                        <p className="mt-1 font-serif text-2xl leading-tight text-stone-950">{path.insight[1]}</p>
                      </div>
                      {stage === 3 && <Reveal label="Make the decision" onClick={() => setStage(4)} />}
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {stage >= 4 && (
                    /* 04 Decision */
                    <motion.div
                      key={`d-${selected}`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.1 }}
                      className="relative self-start"
                    >
                      <Connector />
                      <div className="rotate-1 bg-white p-3 shadow-md shadow-stone-900/10">
                        <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                          <img
                            src={path.artifact.src}
                            alt={path.artifact.label}
                            className={`h-full w-full ${
                              path.artifact.fit === "cover" ? "object-cover grayscale" : "object-contain"
                            }`}
                          />
                        </div>
                        <div className="px-1 pb-1 pt-4">
                          <span className="font-mono text-[11px] uppercase tracking-widest text-stone-600">
                            Decision / {path.artifact.label}
                          </span>
                          <p className="mt-2 font-serif text-xl leading-snug">{path.decision}</p>
                        </div>
                      </div>
                      {stage === 4 && <Reveal label="See what shipped" onClick={() => setStage(5)} />}
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {stage >= 5 && (
                    /* 05 Outcome */
                    <motion.div
                      key={`o-${selected}`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.1 }}
                      className="relative self-start"
                    >
                      <Connector />
                      <Link
                        to={path.outcome.href}
                        className="group block -rotate-1 bg-stone-950 p-3 text-stone-100 shadow-xl shadow-stone-900/25 transition hover:rotate-0"
                      >
                        <div className="aspect-[4/3] overflow-hidden bg-stone-800">
                          <img
                            src={path.outcome.image}
                            alt={`${path.outcome.title} preview`}
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="px-1 pb-1 pt-4">
                          <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-400">
                            Research &rarr; Product
                          </span>
                          <p className="mt-2 font-serif text-xl leading-snug">{path.outcome.title}</p>
                          <p className="mt-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-stone-400">
                            {path.outcome.tags}
                            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:text-emerald-400" />
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </div>

          <AnimatePresence>
            {stage >= 5 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-12 grid gap-6 border-t border-stone-400 pt-8 lg:grid-cols-12"
              >
                <p className="font-serif text-4xl text-emerald-800 lg:col-span-4">This is how I work.</p>
                <p className="max-w-2xl text-lg leading-relaxed text-stone-700 lg:col-span-6">
                  I start with observations, uncover patterns, frame meaningful insights, and design products
                  around what people actually need.
                </p>
                <div className="flex items-start lg:col-span-2 lg:justify-end">
                  <button
                    onClick={reset}
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-stone-700 transition hover:text-emerald-800"
                  >
                    <RotateCcw className="h-3.5 w-3.5" /> Try another
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
