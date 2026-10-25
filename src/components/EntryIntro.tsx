import { useEffect, useState } from "react";
import { motion } from "motion/react";

const STORAGE_KEY = "portfolio-intro-seen";

export function shouldPlayIntro() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  return !sessionStorage.getItem(STORAGE_KEY);
}

type Note = {
  quote: string;
  source: string;
  from: { x: number; y: number; r: number };
  to: { x: number; y: number; r: number };
  tone: "paper" | "green" | "ink";
};

// Real quotes from the EHR, Service Operations and Diabetes Care research.
const notes: Note[] = [
  {
    quote: "I open Excel before ServiceNow every morning.",
    source: "Service ops / Analyst",
    from: { x: 15, y: 24, r: -4 },
    to: { x: 25, y: 31, r: -2 },
    tone: "paper",
  },
  {
    quote: "I spend more time typing than talking to patients.",
    source: "EHR / Doctor",
    from: { x: 74, y: 15, r: 3 },
    to: { x: 69, y: 29, r: 1.5 },
    tone: "green",
  },
  {
    quote: "I have 12 tabs open at any time. Every tool is its own world.",
    source: "Service ops / Lead",
    from: { x: 28, y: 72, r: 2.5 },
    to: { x: 33, y: 45, r: 1 },
    tone: "paper",
  },
  {
    quote: "I need to click seven times to find a patient’s latest lab results.",
    source: "EHR / Nurse",
    from: { x: 86, y: 60, r: -2.5 },
    to: { x: 77, y: 43, r: -1.5 },
    tone: "paper",
  },
  {
    quote: "By the time I find out an SLA is about to breach, it’s already breached.",
    source: "Service ops / Manager",
    from: { x: 56, y: 83, r: -3 },
    to: { x: 44, y: 67, r: -1 },
    tone: "ink",
  },
  {
    quote: "It takes me 4 taps to get to my logbook.",
    source: "Diabetes care / User",
    from: { x: 8, y: 54, r: 4 },
    to: { x: 57, y: 73, r: 2 },
    tone: "paper",
  },
];

// Pairs of notes that visibly relate once they have moved together.
const links: [number, number][] = [
  [0, 2],
  [1, 3],
  [4, 5],
  [2, 4],
  [3, 5],
  [0, 1],
];

const toneClass = {
  paper: "bg-white text-stone-900",
  green: "bg-emerald-200 text-emerald-950",
  ink: "bg-stone-900 text-stone-100",
};

function Words({
  text,
  delay = 0,
  accent,
  gap = 0.15,
}: {
  text: string;
  delay?: number;
  accent?: string;
  gap?: number;
}) {
  return (
    <>
      {text.split(" ").map((w, i) => {
        const isAccent = accent === w.replace(/[.,]/g, "");
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: delay + i * gap + (i % 2) * 0.04, ease: [0.22, 1, 0.36, 1] }}
            className={`inline-block pr-[0.28em] ${isAccent ? "italic text-emerald-800" : ""}`}
          >
            {w}
          </motion.span>
        );
      })}
    </>
  );
}

/**
 * phase 0 notes arrive · 1 notes cluster · 2 statement · 3 closing line
 * 4 name · 5 exit
 */
export function EntryIntro({ onReveal, onDone }: { onReveal: () => void; onDone: () => void }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const times = [2000, 3600, 6600, 8200, 9500];
    const timers = times.map((t, i) => window.setTimeout(() => setPhase(i + 1), t));
    document.body.style.overflow = "hidden";
    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (phase === 5) {
      onReveal();
      sessionStorage.setItem(STORAGE_KEY, "1");
      const t = window.setTimeout(onDone, 1100);
      return () => clearTimeout(t);
    }
  }, [phase, onReveal, onDone]);

  const skip = () => setPhase(5);
  const notesOpacity = phase >= 4 ? 0 : phase >= 2 ? 0.16 : 1;

  return (
    <motion.div
      role="dialog"
      aria-label="Introduction"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase >= 5 ? 0 : 1, y: phase >= 5 ? -24 : 0 }}
      transition={{ duration: 1, ease: [0.45, 0, 0.2, 1] }}
      className={`fixed inset-0 z-[200] overflow-hidden bg-stone-100 text-stone-950 ${
        phase >= 5 ? "pointer-events-none" : ""
      }`}
      style={{
        backgroundImage: "radial-gradient(rgb(168 162 158 / 0.4) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    >
      {/* research notes */}
      <motion.div animate={{ opacity: notesOpacity }} transition={{ duration: 1 }} className="absolute inset-0">
        <svg
          aria-hidden
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {links.map(([a, b], i) => (
            <motion.line
              key={i}
              x1={notes[a].to.x}
              y1={notes[a].to.y}
              x2={notes[b].to.x}
              y2={notes[b].to.y}
              stroke="#065f46"
              strokeWidth={1.2}
              strokeDasharray="4 4"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={phase >= 1 ? { pathLength: 1, opacity: 0.7 } : {}}
              transition={{ duration: 1, delay: 0.4 + i * 0.15, ease: "easeInOut" }}
            />
          ))}
        </svg>

        {notes.map((n, i) => {
          const pos = phase >= 1 ? n.to : n.from;
          return (
            <motion.figure
              key={i}
              initial={{ opacity: 0, left: `${n.from.x}%`, top: `${n.from.y + 2}%`, rotate: n.from.r }}
              animate={{
                opacity: 1,
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                rotate: pos.r,
              }}
              transition={{
                opacity: { duration: 0.7, delay: phase === 0 ? 0.2 + i * 0.22 : 0 },
                top: { duration: phase >= 1 ? 1.5 : 0.9, delay: phase === 0 ? 0.2 + i * 0.22 : i * 0.06, ease: "easeInOut" },
                left: { duration: 1.5, delay: phase >= 1 ? i * 0.06 : 0, ease: "easeInOut" },
                rotate: { duration: 1.5, ease: "easeInOut" },
              }}
              className={`absolute w-40 -translate-x-1/2 -translate-y-1/2 p-3.5 shadow-lg shadow-stone-900/10 sm:w-56 sm:p-4 ${toneClass[n.tone]}`}
            >
              <span aria-hidden className="absolute -top-2 left-5 h-3.5 w-10 -rotate-2 bg-stone-300/80" />
              <blockquote className="font-serif text-[13px] leading-snug sm:text-base">“{n.quote}”</blockquote>
              <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-widest opacity-60">
                {n.source}
              </figcaption>
            </motion.figure>
          );
        })}
      </motion.div>

      {/* statement */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center">
        {phase >= 2 && phase < 3 && (
          <motion.div
            key="statement"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl font-serif text-4xl leading-tight sm:text-6xl lg:text-7xl"
          >
            <p className="text-stone-600">
              <Words text="People don’t struggle with software." delay={0.1} gap={0.2} />
            </p>
            <p className="mt-2">
              <Words text="People struggle with systems." delay={1.3} accent="systems" gap={0.24} />
            </p>
          </motion.div>
        )}
        {phase === 3 && (
          <motion.p
            key="final"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl italic text-emerald-800 sm:text-6xl lg:text-7xl"
          >
            And that’s where I come in.
          </motion.p>
        )}
        {phase >= 4 && (
          <motion.div
            key="name"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="font-serif text-5xl leading-none tracking-tight sm:text-7xl lg:text-8xl">Shantanu Pate</p>
            <p className="mt-6 font-mono text-xs uppercase tracking-widest text-stone-600 sm:text-sm">
              Product Designer &amp; UX Researcher
            </p>
            <p className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-serif text-lg italic text-emerald-800 sm:text-xl">
              <span>Research-first.</span>
              <span>Systems-focused.</span>
              <span>Evidence-driven.</span>
            </p>
          </motion.div>
        )}
      </div>

      <button
        onClick={skip}
        className="absolute bottom-6 right-6 font-mono text-xs uppercase tracking-widest text-stone-600 transition hover:text-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800"
      >
        Skip intro
      </button>
    </motion.div>
  );
}
