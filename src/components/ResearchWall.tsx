import type { ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

import whiteboardWorkshop from "../imports/image-3.png";

const HAND = { fontFamily: "'Caveat', 'Bradley Hand', cursive" };

function Hand({ children, className = "", light = false }: { children: ReactNode; className?: string; light?: boolean }) {
  return (
    <span
      aria-hidden
      style={HAND}
      className={`pointer-events-none absolute z-10 select-none whitespace-nowrap text-xl leading-none sm:text-2xl ${
        light ? "text-emerald-200" : "text-emerald-800"
      } ${className}`}
    >
      {children}
    </span>
  );
}

function Tag({ index, type, tag, light = false }: { index: string; type: string; tag: string; light?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-widest">
      <span className={light ? "text-emerald-100" : "text-stone-600"}>
        {index} / {type}
      </span>
      <span className={`border px-2 py-0.5 ${light ? "border-emerald-300/60 text-emerald-200" : "border-emerald-800 text-emerald-800"}`}>
        {tag}
      </span>
    </div>
  );
}

function Story({ happened, mattered, changed, light = false }: { happened: string; mattered: string; changed: string; light?: boolean }) {
  const rows = [
    ["Happened", happened],
    ["Mattered", mattered],
    ["Changed", changed],
  ];
  return (
    <dl className={`mt-6 space-y-3 border-t pt-4 ${light ? "border-emerald-200/25" : "border-stone-300"}`}>
      {rows.map(([k, v]) => (
        <div key={k} className="grid grid-cols-[4.75rem_1fr] gap-3 text-[13px] leading-snug">
          <dt className={`pt-px font-mono text-[10px] uppercase tracking-widest ${light ? "text-emerald-200/70" : "text-emerald-800"}`}>
            {k}
          </dt>
          <dd className={light ? "text-emerald-50/85" : "text-stone-600"}>{v}</dd>
        </div>
      ))}
    </dl>
  );
}

function Project({ light = false }: { light?: boolean }) {
  return (
    <p className={`mt-5 font-mono text-[10px] uppercase tracking-widest ${light ? "text-emerald-100" : "text-stone-600"}`}>
      Unified Service Operations Platform
    </p>
  );
}

function Card({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${className}`}
    >
      {children}
    </motion.article>
  );
}

/* 03 — journey map sketch: 17 touchpoints, 6 handoffs between three teams */
const lanes = ["Delivery", "Assurance", "Management"];
const laneSeq = [0, 0, 1, 1, 1, 2, 2, 1, 1, 0, 0, 0, 2, 2, 1, 1, 1];

function JourneySketch() {
  const w = 420;
  const h = 200;
  const left = 78;
  const step = (w - left - 14) / (laneSeq.length - 1);
  const pts = laneSeq.map((l, i) => ({ x: left + i * step, y: 34 + l * 66, l }));
  const handoffs = pts.slice(1).filter((p, i) => p.l !== pts[i].l);
  const path = pts.map((p, i) => `${i ? "L" : "M"}${p.x.toFixed(1)} ${p.y}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label="Journey map sketch: 17 touchpoints across three teams with 6 handoffs" className="w-full">
      {lanes.map((name, i) => (
        <g key={name}>
          <line x1={left - 8} x2={w - 4} y1={34 + i * 66} y2={34 + i * 66} stroke="#d6d3d1" strokeDasharray="3 5" />
          <text x={0} y={38 + i * 66} fontSize="10" letterSpacing="1" fill="#78716c" className="font-mono uppercase">
            {name}
          </text>
        </g>
      ))}
      <path d={path} fill="none" stroke="#1c1917" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
      {handoffs.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="9" fill="none" stroke="#065f46" strokeWidth="1.6" strokeDasharray="2 3" />
      ))}
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="3.4" fill="#fff" stroke="#1c1917" strokeWidth="1.6" />
      ))}
    </svg>
  );
}

/* 04 — affinity wall: 83 stickies in 11 clusters */
const clusters = [12, 10, 9, 8, 8, 7, 7, 6, 6, 5, 5];

function AffinitySketch() {
  return (
    <div
      role="img"
      aria-label="Affinity wall: 83 sticky notes grouped into 11 clusters"
      className="grid grid-cols-4 gap-x-4 gap-y-5 bg-stone-100 p-4"
    >
      {clusters.map((n, c) => (
        <div key={c} className="flex flex-col gap-1.5" style={{ transform: `rotate(${((c * 7) % 5) - 2}deg)` }}>
          <span className={`h-[3px] w-3/4 ${c === 0 ? "bg-emerald-800" : "bg-stone-400"}`} />
          <div className="flex flex-wrap gap-[3px]">
            {Array.from({ length: n }).map((_, i) => (
              <span
                key={i}
                className={`h-3 w-3 shadow-[0_1px_1px_rgb(0_0_0/0.15)] ${
                  c === 0 ? "bg-emerald-300" : i % 5 === 0 ? "bg-stone-300" : "bg-white"
                }`}
                style={{ transform: `rotate(${((i * 13 + c * 5) % 9) - 4}deg)` }}
              />
            ))}
          </div>
        </div>
      ))}
      <div className="flex items-end text-stone-400" aria-hidden>
        <span className="h-px w-full border-t border-dashed border-stone-400" />
      </div>
    </div>
  );
}

/* 05 — three rough workflow models */
function Wire({ label, children, chosen, struck }: { label: string; children: ReactNode; chosen?: boolean; struck?: boolean }) {
  return (
    <div className="relative">
      <div
        className={`aspect-[3/4] border-[1.5px] border-dashed bg-white p-2 ${
          chosen ? "border-emerald-800" : "border-stone-500"
        }`}
        style={{ borderRadius: "3px 6px 4px 7px" }}
      >
        {children}
      </div>
      <p
        style={HAND}
        className={`mt-2 text-center text-xl leading-none ${chosen ? "text-emerald-800" : "text-stone-600"} ${
          struck ? "line-through decoration-stone-400" : ""
        }`}
      >
        {label}
      </p>
    </div>
  );
}

function Bar({ w = "w-full", dark = false }: { w?: string; dark?: boolean }) {
  return <span className={`block h-1.5 ${w} ${dark ? "bg-stone-500" : "bg-stone-300"}`} />;
}

function WireSketch() {
  return (
    <div className="grid grid-cols-3 gap-3" role="img" aria-label="Three low-fidelity workflow models, the second one selected">
      <Wire label="A. checklist" struck>
        <div className="space-y-2.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span className="h-2 w-2 border border-stone-500" />
              <Bar w={i % 2 ? "w-2/3" : "w-4/5"} />
            </div>
          ))}
        </div>
      </Wire>
      <Wire label="B. stages" chosen>
        <div className="grid h-full grid-cols-3 gap-1">
          {[3, 2, 1].map((n, c) => (
            <div key={c} className="space-y-1.5 border-l border-dashed border-stone-400 pl-1">
              <Bar w="w-full" dark />
              {Array.from({ length: n }).map((_, i) => (
                <span key={i} className={`block h-4 border border-stone-400 ${c === 1 && i === 0 ? "bg-emerald-200" : ""}`} />
              ))}
            </div>
          ))}
        </div>
      </Wire>
      <Wire label="C. timeline">
        <div className="relative h-full">
          <span className="absolute bottom-1 left-1.5 top-1 w-px bg-stone-400" />
          <div className="space-y-4 pl-4 pt-1">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="relative">
                <span className="absolute -left-[13px] top-0 h-2 w-2 rounded-full border border-stone-500 bg-white" />
                <Bar w={i % 2 ? "w-1/2" : "w-3/4"} />
              </div>
            ))}
          </div>
        </div>
      </Wire>
    </div>
  );
}

/* 06 — product preview */
function ProductPreview() {
  const rows: [string, string, string][] = [
    ["Order #4821", "Provisioning", "On track"],
    ["Ticket #7310", "Assurance", "SLA watch"],
    ["Order #4817", "Field visit", "On track"],
    ["Ticket #7302", "Escalated", "Needs owner"],
  ];
  return (
    <div className="flex aspect-[16/10] overflow-hidden bg-stone-100 text-[8px] text-stone-700 sm:text-[11px]" role="img" aria-label="Unified Service Operations Platform workspace preview">
      <div className="hidden w-[18%] flex-col gap-2 bg-stone-900 p-3 text-stone-400 sm:flex">
        <span className="mb-2 font-serif text-sm text-white">Unified Ops</span>
        {["Overview", "Orders", "Tickets", "SLA watch", "Teams"].map((x, i) => (
          <span key={x} className={i === 0 ? "text-emerald-300" : ""}>
            {x}
          </span>
        ))}
      </div>
      <div className="flex-1 p-3 sm:p-4">
        <p className="font-serif text-sm text-stone-900 sm:text-lg">Today across delivery, assurance and management</p>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {[
            ["Open orders", "148"],
            ["Tickets", "63"],
            ["SLA watch", "12"],
            ["Unowned", "3"],
          ].map(([k, v], i) => (
            <div key={k} className={`p-2 ${i === 2 ? "bg-emerald-800 text-white" : "bg-white"}`}>
              <p className="opacity-90">{k}</p>
              <p className="mt-1 font-serif text-base sm:text-2xl">{v}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 bg-white">
          {rows.map(([a, b, c], i) => (
            <div key={a} className={`grid grid-cols-3 px-2 py-1.5 sm:py-2 ${i ? "border-t border-stone-200" : ""}`}>
              <span className="font-medium text-stone-900">{a}</span>
              <span>{b}</span>
              <span className={c === "On track" ? "text-emerald-800" : "text-stone-900"}>{c}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ResearchWall() {
  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500;600&display=swap');`}</style>

      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-stone-600">
            <span className="text-emerald-800">04</span>
            <span>Researcher&apos;s desk</span>
          </div>
          <p role="heading" aria-level={2} className="mt-8 font-serif text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
            Before there were screens, there were <span className="italic text-emerald-800">questions.</span>
          </p>
        </div>
        <div className="max-w-md space-y-4 text-lg leading-relaxed text-stone-600 lg:col-span-4 lg:col-start-9">
          <p>Not every breakthrough starts with a screen.</p>
          <p>
            Most begin with conversations, observations, sticky notes, whiteboards, workshops, and unexpected
            discoveries.
          </p>
        </div>
      </div>

      <div className="mt-20 grid items-start gap-x-8 gap-y-14 lg:grid-cols-12">
        {/* 01 Observation — the critical opening moment */}
        <Card className="lg:col-span-7 lg:-rotate-[0.6deg]">
          <Hand className="-top-5 right-6 rotate-3">Workshop 03</Hand>
          <div className="bg-white p-3 shadow-xl shadow-stone-900/10 sm:p-4">
            <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
              <img
                src={whiteboardWorkshop}
                alt="A researcher taking notes on a tablet in front of whiteboards covered with workflow sketches from the Telco AI 360 workshop"
                loading="lazy"
                className="h-full w-full object-cover object-[50%_32%]"
              />
              <Hand light className="bottom-4 left-4 -rotate-2 bg-stone-900/70 px-3 py-1.5">
                Unexpected finding
              </Hand>
            </div>
            <div className="grid gap-6 px-1 pb-2 pt-5 sm:grid-cols-2 sm:gap-8">
              <div>
                <Tag index="01" type="Workshop" tag="Observation" />
                <p role="heading" aria-level={3} className="mt-5 font-serif text-3xl leading-tight sm:text-[2rem]">
                  Five teams described the same workflow in five completely different ways.
                </p>
                <p className="mt-4 text-stone-600">
                  The first sign that people weren&apos;t experiencing the process the way the organization believed
                  they were.
                </p>
                <Project />
              </div>
              <div className="sm:pt-[3.1rem]">
                <Story
                  happened="Each team sketched the workflow on its own board. No two versions matched."
                  mattered="The official process and the lived process had quietly drifted apart."
                  changed="We stopped documenting the org chart and started mapping how work really moved."
                />
              </div>
            </div>
          </div>
        </Card>

        {/* 02 Interview insight — the quote that reframed the project */}
        <Card delay={0.1} className="lg:col-span-5 lg:mt-24 lg:rotate-[0.8deg]">
          <Hand light className="-top-5 left-8 -rotate-2 !text-emerald-800">
            Repeated pattern
          </Hand>
          <div className="bg-emerald-900 p-7 text-white shadow-xl shadow-emerald-950/25 sm:p-9">
            <Tag light index="02" type="Research insight" tag="Interview insight" />
            <p aria-hidden className="mt-8 font-serif text-8xl leading-none text-emerald-400">
              &ldquo;
            </p>
            <blockquote className="-mt-8 font-serif text-4xl leading-[1.08] sm:text-5xl">
              We trust spreadsheets more than the source platform.
            </blockquote>
            <p className="mt-6 text-emerald-50/85">
              A statement that completely reframed how we thought about information trust and visibility.
            </p>
            <Story
              light
              happened="Heard early, then echoed by different roles in different words."
              mattered="The gap was never missing data. It was confidence in it."
              changed="Trust and visibility became design requirements, not nice-to-haves."
            />
            <Project light />
            <Hand light className="-bottom-5 right-6 rotate-2 !text-emerald-800">
              Validated across interviews
            </Hand>
          </div>
        </Card>

        {/* 03 Pattern */}
        <Card delay={0.05} className="lg:col-span-5 lg:rotate-[0.4deg]">
          <div className="border border-stone-300 bg-white p-5 shadow-lg shadow-stone-900/5">
            <Tag index="03" type="Journey mapping" tag="Pattern" />
            <div className="relative mt-5 bg-stone-50 p-3">
              <JourneySketch />
              <Hand className="-top-3 right-3 rotate-2">Context lost here</Hand>
            </div>
            <p role="heading" aria-level={3} className="mt-6 font-serif text-3xl leading-[1.1]">
              17 touchpoints.
              <br />6 handoffs.
              <br />
              <span className="text-emerald-800">1 fragmented experience.</span>
            </p>
            <p className="mt-4 text-stone-600">
              Mapping the journey revealed where teams were losing time, context, and visibility.
            </p>
            <Story
              happened="We traced a single request from intake to closure across tools and teams."
              mattered="Time and ownership leaked at every dashed circle."
              changed="Handoffs, not screens, became the unit of design."
            />
            <Project />
          </div>
        </Card>

        {/* 04 Synthesis */}
        <Card delay={0.1} className="lg:col-span-4 lg:mt-16 lg:-rotate-[0.8deg]">
          <Hand className="-top-5 left-4 -rotate-2">High confidence insight</Hand>
          <div className="bg-white p-5 shadow-lg shadow-stone-900/10">
            <Tag index="04" type="Affinity mapping" tag="Synthesis" />
            <div className="mt-5">
              <AffinitySketch />
            </div>
            <p role="heading" aria-level={3} className="mt-6 font-serif text-3xl leading-[1.1]">
              83 observations became <span className="text-emerald-800">11 opportunity areas.</span>
            </p>
            <p className="mt-4 text-stone-600">
              Patterns emerged only after bringing together interviews, workshops, and field observations.
            </p>
            <Story
              happened="Interview quotes, workshop notes and shadowing observations went onto one wall."
              mattered="No single method showed the pattern. Together they did."
              changed="A long list of complaints became a short list of opportunities."
            />
            <Project />
          </div>
        </Card>

        {/* 05 Design decision */}
        <Card delay={0.15} className="lg:col-span-3 lg:mt-4 lg:rotate-[1.2deg]">
          <Hand className="-top-5 right-2 rotate-3">Changed direction</Hand>
          <div className="border border-dashed border-stone-400 bg-stone-50 p-4">
            <Tag index="05" type="Wireframe exploration" tag="Decision" />
            <div className="mt-5">
              <WireSketch />
            </div>
            <p role="heading" aria-level={3} className="mt-6 font-serif text-2xl leading-[1.12]">
              Explored three workflow models before selecting one.
            </p>
            <p className="mt-3 text-sm text-stone-600">The final direction prioritized visibility over simplification.</p>
            <Story
              happened="Three rough models, same scenario, one afternoon of paper."
              mattered="The simplest one hid exactly what teams needed to see."
              changed="We chose the model that showed more, not less."
            />
            <Project />
          </div>
        </Card>

        {/* 06 Outcome — where the thread ends */}
        <Card delay={0.05} className="lg:col-span-10 lg:col-start-2">
          <div className="grid gap-8 bg-stone-950 p-5 text-stone-100 shadow-2xl shadow-stone-900/25 sm:p-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <ProductPreview />
            </div>
            <div className="flex flex-col lg:col-span-5">
              <Tag light index="06" type="Outcome" tag="Outcome" />
              <p role="heading" aria-level={3} className="mt-6 font-serif text-4xl leading-[1.05] sm:text-5xl">
                Unified Service Operations Platform
              </p>
              <p className="mt-5 text-stone-300">
                A single workspace designed around how teams actually worked rather than how systems were structured.
              </p>
              <Story
                light
                happened="Orders, tickets and SLA signals were brought into one shared view."
                mattered="Teams stopped hunting across tools just to learn status."
                changed="The research now informs the Telco AI 360 product roadmap."
              />
              <Link
                to="/case-study/unified-service-operations"
                className="group mt-auto inline-flex items-center gap-2 pt-8 font-mono text-xs uppercase tracking-widest text-emerald-300 transition hover:text-white"
              >
                Read the full research <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
