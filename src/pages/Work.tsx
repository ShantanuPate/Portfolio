import React, { createContext, useContext, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Lock } from "lucide-react";
import { caseStudies } from "../data/content";

const personal = caseStudies.slice(0, 2);
const designit = caseStudies.slice(2, 6);

const paper = "bg-[#f7f2e7]";
const lift = "shadow-[0_30px_50px_-24px_rgb(0_0_0/0.4),0_2px_5px_rgb(0_0_0/0.12)]";
const soft = "shadow-[0_14px_24px_-12px_rgb(0_0_0/0.35),0_1px_3px_rgb(0_0_0/0.12)]";
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* Evidence pinned beside each cover. All text is taken from the existing case studies. */
type Extra = {
  note: string;
  noteLabel: string;
  artifact: { title: string; sub: string; img?: string };
  reveal: { label: string; text: string };
};

const q = (id: string, i: number) => (caseStudies.find((s) => s.id === id)!.quotes[i] as { quote: string; title: string });
const EXTRA: Record<string, Extra> = {
  "ehr-healthcare-system": {
    note: q("ehr-healthcare-system", 0).quote,
    noteLabel: "Key insight",
    artifact: {
      title: "Interview synthesis",
      sub: "Key themes from clinical interviews",
      img: (caseStudies[0].screens as { src: string }[])[0]?.src,
    },
    reveal: { label: q("ehr-healthcare-system", 2).title, text: q("ehr-healthcare-system", 2).quote },
  },
  "food-beverage-app": {
    note: "I only have 10 minutes before my meeting. I can't afford to wait in line.",
    noteLabel: "Key insight",
    artifact: { title: "Juhi Kapoor", sub: "Persona · Age 28 · Fast-paced creative" },
    reveal: {
      label: "Frustrations",
      text: "Customizing her complex drink on other apps is too difficult, and pick-up times are often inaccurate.",
    },
  },
  "ascensia-diabetes-care": {
    note: q("ascensia-diabetes-care", 0).quote,
    noteLabel: "Key insight",
    artifact: { title: "Stakeholder workshops", sub: "5 remote workshops · 6 participants" },
    reveal: { label: q("ascensia-diabetes-care", 3).title, text: q("ascensia-diabetes-care", 3).quote },
  },
  "unified-service-operations": {
    note: q("unified-service-operations", 0).quote,
    noteLabel: "Key insight",
    artifact: { title: "Pain-point clusters", sub: "~200 pain points · 6 systemic themes" },
    reveal: { label: q("unified-service-operations", 2).title, text: q("unified-service-operations", 2).quote },
  },
  "laptop-consumer-research": {
    note: "Understand the experiences of laptop users in the digital realm and identify areas for enhancement.",
    noteLabel: "Research question",
    artifact: { title: "Methods in the field", sub: "User, stakeholder interviews · market research" },
    reveal: { label: "Team", text: "UX Researchers, Product Designer, UX Strategist, Product Lead" },
  },
  "user-access-management": {
    note: "Enterprise banking teams lacked a unified, intuitive portal to manage user roles, permissions, and access control across complex internal systems.",
    noteLabel: "Research question",
    artifact: { title: "Methods in the field", sub: "Interviews · MVP design · user testing" },
    reveal: { label: "Team", text: "UX Researchers, Product Designer, UX Lead, Information Architect" },
  },
};

/* ───────── pointer parallax ───────── */

const PointerCtx = createContext<{ sx: MotionValue<number>; sy: MotionValue<number> } | null>(null);

const BoardCtx = createContext<React.RefObject<HTMLElement | null> | null>(null);
let topZ = 10;

function Board({ className = "", style, children }: { className?: string; style?: React.CSSProperties; children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  return (
    <section ref={ref} className={className} style={style}>
      <BoardCtx.Provider value={ref}>{children}</BoardCtx.Provider>
    </section>
  );
}

function Draggable({ className = "", children }: { className?: string; children: React.ReactNode }) {
  const board = useContext(BoardCtx);
  const [z, setZ] = useState(0);
  const [held, setHeld] = useState(false);
  return (
    <motion.div
      drag
      dragConstraints={board ?? undefined}
      dragElastic={0.06}
      dragMomentum={false}
      whileDrag={{ scale: 1.02 }}
      onPointerDown={() => setZ(++topZ)}
      onDragStart={() => setHeld(true)}
      onDragEnd={() => {
        setHeld(false);
      }}
      style={z ? { zIndex: z } : undefined}
      className={`select-none ${className.includes("absolute") ? "" : "relative"} ${held ? "cursor-grabbing" : "cursor-grab"} ${className}`}
    >
      {children}
    </motion.div>
  );
}

function Float({
  depth = 12,
  rotate = 0,
  className = "",
  children,
}: {
  depth?: number;
  rotate?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const p = useContext(PointerCtx)!;
  const x = useTransform(p.sx, [-0.5, 0.5], [-depth, depth]);
  const y = useTransform(p.sy, [-0.5, 0.5], [-depth, depth]);
  return (
    <Draggable className={className}>
      <motion.div style={{ x, y }}>
        <div style={{ transform: `rotate(${rotate}deg)` }}>{children}</div>
      </motion.div>
    </Draggable>
  );
}

/* ───────── physical bits ───────── */

function Tape({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`absolute z-10 h-6 w-24 border border-amber-200/70 bg-amber-100/70 shadow-[0_1px_2px_rgb(0_0_0/0.12)] ${className}`}
    />
  );
}

function Pin({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`absolute z-10 h-4 w-4 rounded-full bg-emerald-800 shadow-[inset_-2px_-2px_0_rgb(0_0_0/0.25),0_3px_4px_rgb(0_0_0/0.3)] ${className}`}
    />
  );
}

function Mono({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`font-mono text-[10px] uppercase tracking-widest ${className}`}>{children}</p>;
}

function CoverPrint({
  study,
  num,
  tilt,
  stack,
  nda,
}: {
  study: any;
  num: string;
  tilt: number;
  stack?: boolean;
  nda?: boolean;
}) {
  return (
    <div style={{ transform: `rotate(${tilt}deg)` }} className="relative">
      {stack && (
        <>
          <span aria-hidden className={`absolute inset-0 translate-x-3 translate-y-3 rotate-[2.2deg] bg-[#efe8d8] ${soft}`} />
          <span aria-hidden className={`absolute inset-0 -translate-x-2 translate-y-2 -rotate-[1.6deg] bg-white ${soft}`} />
        </>
      )}
      <div className={`relative p-3 pb-14 transition-all duration-500 ease-out group-hover:-translate-y-2 ${paper} ${lift} group-hover:shadow-[0_44px_60px_-24px_rgb(0_0_0/0.45),0_2px_6px_rgb(0_0_0/0.12)]`}>
        <Tape className="-top-3 left-10 -rotate-[5deg]" />
        <Tape className="-top-3 right-10 rotate-[4deg]" />
        <div className="relative overflow-hidden bg-stone-300">
          <img
            draggable={false}
            src={study.heroImage}
            alt={study.title}
            className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          {nda && (
            <span className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-stone-950/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-stone-200">
              <Lock className="h-3 w-3" /> NDA
            </span>
          )}
        </div>
        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-stone-600">
          <span>
            Fig. <span className="text-emerald-800">{num}</span> — {study.tags || study.metadata?.sector}
          </span>
          <span>{study.year}</span>
        </div>
      </div>
    </div>
  );
}

function Artifact({ x, className = "" }: { x: Extra; className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={`relative w-60 transition-transform duration-500 ease-out hover:-translate-y-1 ${className}`}
    >
      <span aria-hidden className={`absolute inset-0 translate-x-1.5 translate-y-1.5 rotate-[3deg] bg-white ${soft}`} />
      <div className={`relative p-4 ${paper} ${soft}`}>
        <Pin className="-top-2 left-1/2 -translate-x-1/2" />
        <Mono className="text-emerald-800">Research artifact</Mono>
        {x.artifact.img ? (
          <img draggable={false} src={x.artifact.img} alt={x.artifact.title} className="mt-3 aspect-[4/3] w-full object-cover" />
        ) : (
          <div className="mt-3 space-y-2" aria-hidden>
            <div className="h-1.5 w-full bg-stone-300" />
            <div className="h-1.5 w-5/6 bg-stone-300" />
            <div className="h-1.5 w-2/3 bg-stone-300" />
            <div className="h-1.5 w-3/4 bg-emerald-800/40" />
          </div>
        )}
        <p className="mt-4 font-serif text-xl leading-tight text-stone-950">{x.artifact.title}</p>
        <p className="mt-1 text-xs leading-snug text-stone-600">{x.artifact.sub}</p>

        <div
          className={`absolute inset-0 flex flex-col justify-center bg-stone-950 p-5 text-stone-100 transition-all duration-500 ease-out ${
            open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
          }`}
        >
          <Mono className="text-emerald-400">{x.reveal.label}</Mono>
          <p className="mt-3 font-serif text-lg italic leading-snug">{x.reveal.text}</p>
        </div>
      </div>
    </div>
  );
}

function MethodsSheet({ methods, className = "" }: { methods: string[]; className?: string }) {
  return (
    <div className={`relative w-52 bg-white p-4 ${soft} ${className}`}>
      <Pin className="-top-2 left-6" />
      <Mono className="text-stone-600">Methods</Mono>
      <ul className="mt-3 space-y-1.5">
        {methods.map((m) => (
          <li key={m} className="border-b border-dashed border-stone-300 pb-1 font-mono text-[11px] text-stone-600">
            {m}
          </li>
        ))}
      </ul>
    </div>
  );
}

function InsightNote({ x, className = "" }: { x: Extra; className?: string }) {
  return (
    <div className={`relative w-64 bg-emerald-200 p-5 text-emerald-950 ${soft} ${className}`}>
      <Pin className="-top-2 left-1/2 -translate-x-1/2" />
      <Mono className="text-emerald-900">{x.noteLabel}</Mono>
      <p className="mt-3 font-serif text-xl italic leading-snug">“{x.note}”</p>
    </div>
  );
}

function OutcomeSlip({ study, soon, className = "" }: { study: any; soon: boolean; className?: string }) {
  return (
    <div className={`relative w-72 max-w-full border-l-4 border-emerald-800 bg-white px-4 py-3 ${soft} ${className}`}>
      <Mono className="text-emerald-800">Outcome</Mono>
      <p className="mt-1 text-sm leading-snug text-stone-700">{soon ? "In progress — case study coming soon." : study.outcome}</p>
    </div>
  );
}

function Details({ study, num, soon, className = "" }: { study: any; num: string; soon: boolean; className?: string }) {
  const role = study.roleLabel || study.metadata?.role;
  const industry = study.metadata?.sector || study.tags;
  return (
    <Draggable>
    <div className={`relative p-8 sm:p-10 ${paper} ${lift} ${className}`}>
      <Tape className="-top-3 left-1/2 -translate-x-1/2 rotate-[1.5deg]" />
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-stone-600">
        <span>
          File <span className="text-emerald-800">{num}</span> / {study.year}
        </span>
        <span className={`border px-2 py-0.5 ${soon ? "border-stone-400 text-stone-600" : "border-emerald-800 text-emerald-800"}`}>
          {soon ? "Coming soon" : "Case study"}
        </span>
      </div>
      <h3 className="mt-6 font-serif text-4xl leading-[1.04] text-stone-950 transition-colors duration-300 group-hover:text-emerald-800 sm:text-5xl">
        {study.title}
      </h3>
      <p className="mt-4 leading-relaxed text-stone-600">{study.subtitle || study.problem}</p>
      <dl className="mt-7 grid grid-cols-2 gap-x-5 gap-y-4 border-t border-dashed border-stone-400 pt-6">
        {[
          ["Industry", industry],
          ["Role", role],
          ["Duration", study.metadata?.timeline],
        ].map(([k, v]) =>
          v ? (
            <div key={k} className={k === "Role" ? "col-span-2" : ""}>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-stone-600">{k}</dt>
              <dd className="mt-1 text-sm leading-snug text-stone-700">{v}</dd>
            </div>
          ) : null,
        )}
      </dl>
    </div>
    </Draggable>
  );
}

function ViewCard({ study }: { study: any }) {
  return (
    <div className={`relative p-5 pr-6 ${paper} ${soft}`}>
      <Pin className="-top-2 left-4" />
      <p className="font-mono text-[10px] uppercase tracking-widest text-stone-600">Ready to read?</p>
      <Link
        to={`/case-study/${study.id}`}
        draggable={false}
        onPointerDown={(e) => e.stopPropagation()}
        aria-label={`View case study: ${study.title}`}
        className="mt-3 inline-flex cursor-pointer items-center gap-3 border border-emerald-800 bg-emerald-800 px-5 py-3 font-mono text-xs uppercase tracking-widest text-stone-50 transition-colors hover:bg-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
      >
        View case study
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

/* ───────── one entry per project, four compositions ───────── */

function Entry({ study, index, nda }: { study: any; index: number; nda?: boolean }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 70, damping: 18, mass: 0.6 });
  const soon = !!study.comingSoon;
  const x = EXTRA[study.id];
  const num = String(index + 1).padStart(2, "0");
  const layout = index % 4;

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const cover = (tilt: number, stack?: boolean) => (
    <Float depth={-5}>
      <CoverPrint study={study} num={num} tilt={tilt} stack={stack} nda={nda} />
    </Float>
  );

  let body: React.ReactNode;

  if (layout === 0) {
    body = (
      <div className="relative grid gap-12 lg:grid-cols-12 lg:items-center lg:pb-16">
        <div className="relative lg:col-span-7">
          {cover(-0.8)}
          <Float depth={16} rotate={-3} className="mt-8 w-fit lg:absolute lg:-bottom-20 lg:left-10 lg:mt-0">
            <Artifact x={x} />
          </Float>
        </div>
        <div className="relative lg:col-span-5 lg:-ml-12">
          <Details study={study} num={num} soon={soon} />
          <Float depth={20} rotate={-3} className="mt-8 w-fit lg:absolute lg:-top-16 lg:right-2 lg:mt-0">
            <InsightNote x={x} />
          </Float>
          <Float depth={10} rotate={1.2} className="mt-8 lg:ml-16">
            <OutcomeSlip study={study} soon={soon} />
          </Float>
          {!soon && (
            <Float depth={12} rotate={-1} className="mt-8 w-fit lg:ml-4">
              <ViewCard study={study} />
            </Float>
          )}
        </div>
      </div>
    );
  } else if (layout === 1) {
    body = (
      <div className="relative grid gap-12 lg:grid-cols-12 lg:items-center lg:pb-16">
        <div className="relative lg:order-2 lg:col-span-7">
          {cover(1.1)}
          <Float depth={16} rotate={3} className="mt-8 w-fit lg:absolute lg:-bottom-20 lg:right-10 lg:mt-0">
            <Artifact x={x} />
          </Float>
        </div>
        <div className="relative lg:order-1 lg:col-span-5 lg:-mr-12 lg:mt-12">
          <Details study={study} num={num} soon={soon} />
          <Float depth={20} rotate={3} className="mt-8 w-fit lg:absolute lg:-top-16 lg:left-2 lg:mt-0">
            <InsightNote x={x} />
          </Float>
          <Float depth={10} rotate={-1.2} className="mt-8 lg:ml-6">
            <OutcomeSlip study={study} soon={soon} />
          </Float>
          {!soon && (
            <Float depth={12} rotate={-1} className="mt-8 w-fit lg:ml-4">
              <ViewCard study={study} />
            </Float>
          )}
        </div>
      </div>
    );
  } else if (layout === 2) {
    body = (
      <div className="relative mx-auto max-w-5xl">
        <div className="relative">
          {cover(-0.5, true)}
          <Float depth={22} rotate={-4} className="mt-8 w-fit lg:absolute lg:-left-20 lg:top-10 lg:mt-0">
            <InsightNote x={x} />
          </Float>
          <Float depth={16} rotate={3} className="mt-8 w-fit lg:absolute lg:-right-16 lg:top-28 lg:mt-0">
            <Artifact x={x} />
          </Float>
        </div>
        <div className="relative mx-auto mt-12 max-w-3xl lg:-mt-6">
          <Details study={study} num={num} soon={soon} />
          <Float depth={10} rotate={1.5} className="mt-8 lg:absolute lg:-bottom-8 lg:-right-24 lg:mt-0">
            <OutcomeSlip study={study} soon={soon} />
          </Float>
          {!soon && (
            <Float depth={12} rotate={-1} className="mt-8 w-fit">
              <ViewCard study={study} />
            </Float>
          )}
        </div>
      </div>
    );
  } else {
    body = (
      <div className="relative grid gap-12 lg:grid-cols-12 lg:pb-8">
        <div className="relative lg:col-span-8 lg:col-start-4">
          {cover(1.4, true)}
          <Float depth={20} rotate={-5} className="mt-8 w-fit lg:absolute lg:-left-44 lg:top-16 lg:mt-0">
            <Artifact x={x} className="lg:w-72" />
          </Float>
          <Float depth={26} rotate={5} className="mt-8 w-fit lg:absolute lg:-left-32 lg:top-[17rem] lg:mt-0">
            <MethodsSheet methods={study.methods} />
          </Float>
        </div>
        <div className="relative lg:col-span-6 lg:col-start-2 lg:-mt-20">
          <Details study={study} num={num} soon={soon} />
        </div>
        <div className="relative lg:col-span-4 lg:col-start-8 lg:-mt-8">
          <Float depth={22} rotate={2.5} className="w-fit">
            <InsightNote x={x} />
          </Float>
          <Float depth={10} rotate={-1.5} className="mt-8 lg:ml-8">
            <OutcomeSlip study={study} soon={soon} />
          </Float>
          {!soon && (
            <Float depth={12} rotate={1} className="mt-8 w-fit lg:ml-4">
              <ViewCard study={study} />
            </Float>
          )}
        </div>
      </div>
    );
  }

  return (
    <PointerCtx.Provider value={{ sx, sy }}>
      <motion.article
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        <div className="group">{body}</div>
      </motion.article>
    </PointerCtx.Provider>
  );
}

/* ───────── page ───────── */

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-stone-600">
      <span className="text-emerald-800">{index}</span>
      <span>{children}</span>
    </div>
  );
}

const boardDots = (rgb: string) => ({
  backgroundImage: `radial-gradient(${rgb} 1px, transparent 1px)`,
  backgroundSize: "22px 22px",
});

export function Work() {
  return (
    <div className="min-h-screen bg-stone-100 pt-20 text-stone-950">
      <section className="border-b border-stone-300 px-6 py-24 sm:px-10 lg:px-14" style={boardDots("rgb(168 162 158 / 0.4)")}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto max-w-7xl"
        >
          <SectionLabel index="00">Portfolio</SectionLabel>
          <h1 className="mt-8 max-w-4xl font-serif text-6xl leading-[0.98] sm:text-7xl lg:text-8xl">
            Selected <span className="italic text-emerald-800">work.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone-600">
            A collection of research-led design projects across healthcare, enterprise, and consumer products.
          </p>
        </motion.div>
      </section>

      <Board className="overflow-hidden bg-stone-200 px-6 py-28 sm:px-10 lg:px-14" style={boardDots("rgb(120 113 108 / 0.28)")}>
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-6 border-b border-stone-400/60 pb-6">
            <div>
              <SectionLabel index="01">Independent projects</SectionLabel>
              <h2 className="mt-4 font-serif text-4xl leading-none sm:text-5xl">Personal</h2>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-stone-600">{personal.length} projects</span>
          </div>
          <div className="mt-24 space-y-44">
            {personal.map((study, i) => (
              <Entry key={study.id} study={study} index={i} />
            ))}
          </div>
        </div>
      </Board>

      <Board className="overflow-hidden bg-stone-950 px-6 py-28 text-stone-100 sm:px-10 lg:px-14" style={boardDots("rgb(255 255 255 / 0.07)")}>
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-6 border-b border-stone-700 pb-6">
            <div>
              <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-stone-400">
                <span className="text-emerald-400">02</span>
                <span>A Wipro Company</span>
              </div>
              <h2 className="mt-4 font-serif text-4xl leading-none sm:text-5xl">Designit</h2>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-stone-400">{designit.length} projects</span>
          </div>
          <p className="mt-6 flex w-fit items-center gap-2 border border-stone-700 px-4 py-3 text-xs text-stone-400">
            <Lock className="h-3.5 w-3.5 shrink-0" />
            Final designs and deliverables are under NDA. Case studies present research process and outcomes only.
          </p>
          <div className="mt-24 space-y-44">
            {designit.map((study, i) => (
              <Entry key={study.id} study={study} index={i + personal.length} nda />
            ))}
          </div>
        </div>
      </Board>
    </div>
  );
}
