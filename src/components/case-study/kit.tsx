import React, { createContext, useContext } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Lock, Mail } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const pad = "px-6 py-24 sm:px-10 lg:px-14";
export const wrap = "mx-auto max-w-7xl";
export const dots = {
  backgroundImage: "radial-gradient(rgb(168 162 158 / 0.4) 1px, transparent 1px)",
  backgroundSize: "22px 22px",
};
export const EMAIL = "mailto:shantanupate0@gmail.com";

export type Tone = "paper" | "dots" | "stone" | "dark" | "green" | "emerald";

const bg: Record<Tone, string> = {
  paper: "bg-stone-100",
  dots: "bg-stone-100 border-y border-stone-300",
  stone: "bg-stone-200",
  dark: "bg-stone-950",
  green: "bg-emerald-900",
  emerald: "bg-emerald-800",
};
const accents: Record<Tone, string> = {
  paper: "text-emerald-800",
  dots: "text-emerald-800",
  stone: "text-emerald-800",
  dark: "text-emerald-400",
  green: "text-emerald-300",
  emerald: "text-emerald-200",
};

const ToneCtx = createContext<Tone>("paper");
export function useTone() {
  const tone = useContext(ToneCtx);
  const light = tone === "dark" || tone === "green" || tone === "emerald";
  return { tone, light, accent: accents[tone] };
}

export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Label({ index, children }: { index: string; children: React.ReactNode }) {
  const { light, accent } = useTone();
  return (
    <div className={`flex items-center gap-4 font-mono text-xs uppercase tracking-widest ${light ? "text-stone-300" : "text-stone-600"}`}>
      <span className={accent}>{index}</span>
      <span>{children}</span>
    </div>
  );
}

export function H2({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { light } = useTone();
  return (
    <h2 className={`mt-6 font-serif text-4xl leading-[1.04] sm:text-5xl lg:text-6xl ${light ? "text-white" : "text-stone-950"} ${className}`}>
      {children}
    </h2>
  );
}

export function Prose({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { light } = useTone();
  return <p className={`text-lg leading-relaxed ${light ? "text-stone-200" : "text-stone-600"} ${className}`}>{children}</p>;
}

export function SubHead({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { accent } = useTone();
  return <p className={`font-mono text-[11px] uppercase tracking-widest ${accent} ${className}`}>{children}</p>;
}

export function Section({
  tone = "paper",
  index,
  label,
  title,
  lede,
  children,
}: {
  tone?: Tone;
  index: string;
  label: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <ToneCtx.Provider value={tone}>
      <section className={`${bg[tone]} ${pad}`} style={tone === "dots" ? dots : undefined}>
        <div className={wrap}>
          <Reveal>
            <Label index={index}>{label}</Label>
            <H2 className="max-w-4xl">{title}</H2>
            {lede && <Prose className="mt-8 max-w-3xl">{lede}</Prose>}
          </Reveal>
          {children}
        </div>
      </section>
    </ToneCtx.Provider>
  );
}

export function Hero({
  eyebrow = "Case study",
  title,
  intro,
  calloutLabel,
  callout,
  meta,
  image,
  imageAlt = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro: string;
  calloutLabel: string;
  callout: string;
  meta: { label: string; value?: string }[];
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className={`${pad} border-b border-stone-300`} style={dots}>
      <div className={wrap}>
        <Link to="/work" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-stone-600 transition-colors hover:text-emerald-800">
          <ArrowLeft className="h-4 w-4" /> Back to work
        </Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
          <div className="mt-12 flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-stone-600">
            <span className="text-emerald-800">00</span>
            <span>{eyebrow}</span>
          </div>
          <h1 className="mt-8 max-w-5xl font-serif text-5xl leading-[0.98] sm:text-7xl lg:text-8xl">{title}</h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-stone-600">{intro}</p>

          <div className="mt-14 grid gap-12 lg:grid-cols-12">
            <div className="border-l-4 border-emerald-800 bg-emerald-800/5 py-6 pl-6 pr-6 lg:col-span-7">
              <SubHead>{calloutLabel}</SubHead>
              <p className="mt-3 font-serif text-2xl leading-snug sm:text-3xl">{callout}</p>
            </div>
            <dl className="grid grid-cols-2 content-start gap-x-6 gap-y-6 lg:col-span-5">
              {meta
                .filter((m) => m.value)
                .map((m) => (
                  <div key={m.label}>
                    <dt className="font-mono text-[10px] uppercase tracking-widest text-stone-400">{m.label}</dt>
                    <dd className="mt-1 text-sm leading-snug text-stone-700">{m.value}</dd>
                  </div>
                ))}
            </dl>
          </div>

          {image && (
            <div className="mt-16 overflow-hidden bg-stone-200 shadow-xl shadow-stone-900/10">
              <img src={image} alt={imageAlt} className="aspect-[16/7] w-full object-cover" />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export function Stats({ items }: { items: { value: string; label: string }[] }) {
  return (
    <section className="bg-stone-950 px-6 py-14 sm:px-10 lg:px-14">
      <div className={`${wrap} grid grid-cols-2 gap-x-6 gap-y-10 ${({ 2: "lg:grid-cols-2", 3: "lg:grid-cols-3", 4: "lg:grid-cols-4" } as Record<number, string>)[Math.min(Math.max(items.length, 2), 4)]}`}>
        {items.map((s) => (
          <div key={s.label}>
            <p className="font-serif text-5xl leading-none text-emerald-400 sm:text-6xl">{s.value}</p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-stone-400">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export type RowItem = { meta?: string; title?: string; body?: React.ReactNode; extra?: React.ReactNode };

export function Rows({ items, className = "" }: { items: RowItem[]; className?: string }) {
  const { light, accent } = useTone();
  const rule = light ? "border-white/20" : "border-stone-300";
  return (
    <div className={`mt-14 ${className}`}>
      {items.map((r, i) => {
        const n = String(i + 1).padStart(2, "0");
        return (
          <Reveal key={i} delay={Math.min(i, 4) * 0.04}>
            {r.title ? (
              <div className={`grid gap-4 border-t py-8 lg:grid-cols-12 lg:gap-10 ${rule}`}>
                <div className="lg:col-span-5">
                  <p className={`font-mono text-xs uppercase tracking-widest ${accent}`}>{r.meta ?? n}</p>
                  <h3 className={`mt-3 font-serif text-2xl leading-tight sm:text-3xl ${light ? "text-white" : "text-stone-950"}`}>{r.title}</h3>
                </div>
                <div className="lg:col-span-7">
                  {r.body && <p className={`leading-relaxed ${light ? "text-stone-300" : "text-stone-600"}`}>{r.body}</p>}
                  {r.extra}
                </div>
              </div>
            ) : (
              <div className={`grid gap-4 border-t py-7 lg:grid-cols-12 lg:gap-10 ${rule}`}>
                <p className={`font-mono text-xs uppercase tracking-widest lg:col-span-1 lg:pt-2 ${accent}`}>{r.meta ?? n}</p>
                <p className={`font-serif text-2xl leading-snug lg:col-span-11 ${light ? "text-stone-100" : "text-stone-900"}`}>{r.body}</p>
              </div>
            )}
          </Reveal>
        );
      })}
    </div>
  );
}

export function Chips({ items, className = "" }: { items: string[]; className?: string }) {
  const { light } = useTone();
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((m, i) => (
        <li
          key={m}
          className={`px-3 py-1.5 font-mono text-xs shadow-[0_1px_1px_rgb(0_0_0/0.15)] ${
            light ? "border border-white/25 bg-white/5 text-stone-100" : "border border-stone-300 bg-white text-stone-700"
          }`}
          style={{ transform: `rotate(${[-1.2, 0.8, -0.5, 1][i % 4]}deg)` }}
        >
          {m}
        </li>
      ))}
    </ul>
  );
}

export function BigQuote({ quote, who, children }: { quote: string; who?: string; children?: React.ReactNode }) {
  return (
    <Reveal className="relative mt-12">
      <span aria-hidden className="pointer-events-none absolute -top-16 -left-2 font-serif text-[14rem] leading-none text-emerald-300/20 select-none">
        “
      </span>
      <blockquote className="relative max-w-5xl font-serif text-4xl leading-[1.08] text-white sm:text-6xl lg:text-7xl">{quote}</blockquote>
      {who && <p className="mt-8 font-mono text-xs uppercase tracking-widest text-emerald-300">— {who}</p>}
      {children}
    </Reveal>
  );
}

export function Notes({ items }: { items: { title: string; body?: string; quote?: string; tag?: string }[] }) {
  const rot = [-1.4, 1, -0.6, 1.3, -1, 0.7];
  const tones = ["bg-white text-stone-900", "bg-stone-950 text-stone-100", "bg-emerald-200 text-emerald-950"];
  return (
    <div className="mt-14 columns-1 gap-6 md:columns-2 lg:columns-3">
      {items.map((it, i) => (
        <div key={it.title} className="mb-6 break-inside-avoid">
          <Reveal delay={Math.min(i, 5) * 0.05}>
            <div className={`p-7 shadow-xl shadow-stone-900/10 ${tones[i % 3]}`} style={{ transform: `rotate(${rot[i % 6]}deg)` }}>
              <p className="font-mono text-[10px] uppercase tracking-widest opacity-80">
                {String(i + 1).padStart(2, "0")}
                {it.tag ? ` · ${it.tag}` : ""}
              </p>
              <h3 className="mt-3 font-serif text-2xl leading-tight">{it.title}</h3>
              {it.quote && <p className="mt-4 font-serif text-lg italic leading-snug opacity-90">“{it.quote}”</p>}
              {it.body && <p className="mt-4 text-sm leading-relaxed opacity-80">{it.body}</p>}
            </div>
          </Reveal>
        </div>
      ))}
    </div>
  );
}

export function InsightRows({
  items,
  evidenceLabel = "Evidence",
  directionLabel = "Direction",
}: {
  items: { title: string; evidence: string; direction: string; quote?: boolean }[];
  evidenceLabel?: string;
  directionLabel?: string;
}) {
  return (
    <div className="mt-14 space-y-4">
      {items.map((it, i) => (
        <Reveal key={it.title} delay={Math.min(i, 4) * 0.04}>
          <div className="grid gap-8 bg-stone-950 p-8 text-stone-100 lg:grid-cols-12 lg:gap-10 lg:p-10">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 font-serif text-3xl leading-tight">{it.title}</h3>
            </div>
            <div className="lg:col-span-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-stone-400">{evidenceLabel}</p>
              <p className={`mt-3 leading-relaxed text-stone-200 ${it.quote === false ? "" : "font-serif text-xl italic"}`}>
                {it.quote === false ? it.evidence : `“${it.evidence}”`}
              </p>
            </div>
            <div className="border-stone-700 lg:col-span-4 lg:border-l lg:pl-10">
              <p className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">{directionLabel}</p>
              <p className="mt-3 leading-relaxed text-stone-300">{it.direction}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function Gallery({ items }: { items: { src: string; label: string }[] }) {
  return (
    <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
      {items.map((s, i) => (
        <Reveal key={s.label} delay={Math.min(i, 3) * 0.05}>
          <div className="aspect-[9/19] overflow-hidden bg-stone-800 shadow-xl shadow-black/30">
            <img src={s.src} alt={s.label} className="h-full w-full object-cover object-top" />
          </div>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-stone-400">{s.label}</p>
        </Reveal>
      ))}
    </div>
  );
}

export function Reflection({ items }: { items: { title?: string; body: string }[] }) {
  return (
    <div className="mt-14 space-y-12">
      {items.map((r, i) => (
        <Reveal key={i}>
          <div className="grid gap-4 lg:grid-cols-12 lg:gap-10">
            <p className="font-mono text-xs uppercase tracking-widest text-emerald-800 lg:col-span-1 lg:pt-2">{String(i + 1).padStart(2, "0")}</p>
            <div className="lg:col-span-11">
              {r.title && <h3 className="max-w-4xl font-serif text-3xl leading-tight sm:text-4xl">{r.title}</h3>}
              <p className={`max-w-3xl text-lg leading-relaxed text-stone-600 ${r.title ? "mt-4" : "font-serif text-2xl text-stone-800 sm:text-3xl"}`}>{r.body}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function Closing({ nda, title = "Interested in learning more?" }: { nda?: { title: string; body: string }; title?: string }) {
  return (
    <section className={`bg-stone-950 ${pad} text-stone-100`}>
      <div className={`${wrap} text-center`}>
        <Reveal className="mx-auto max-w-2xl">
          {nda && (
            <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center border border-emerald-400 text-emerald-400">
              <Lock className="h-6 w-6" />
            </div>
          )}
          <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">{nda ? "Confidential · NDA" : "Next"}</p>
          <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">{nda ? nda.title : title}</h2>
          {nda && <p className="mt-6 text-lg leading-relaxed text-stone-400">{nda.body}</p>}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href={EMAIL} className="inline-flex items-center gap-2 bg-emerald-400 px-7 py-4 font-mono text-xs uppercase tracking-widest text-stone-950 transition-colors hover:bg-emerald-300">
              <Mail className="h-4 w-4" /> Get in touch
            </a>
            <Link to="/work" className="inline-flex items-center gap-2 border border-stone-600 px-7 py-4 font-mono text-xs uppercase tracking-widest text-stone-200 transition-colors hover:border-emerald-400 hover:text-emerald-400">
              Back to portfolio
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Page({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-stone-100 pt-20 text-stone-950">{children}</div>;
}
