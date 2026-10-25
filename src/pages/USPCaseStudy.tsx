import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Lock } from "lucide-react";

/* ───────────────────────── content (unchanged from original case study) ───────────────────────── */

const tools = ["ServiceNow", "Outlook", "GPS", "UBANK", "OpsRamp", "LMC", "Action V3", "AWS Connect", "Excel", "Power BI"];

const stats = [
  { value: "4", label: "Days of on-ground field research" },
  { value: "~30", label: "User interviews conducted" },
  { value: "~5", label: "Contextual shadowing sessions" },
  { value: "~200", label: "Pain points identified" },
];

const methods = [
  { title: "1:1 User Interviews", desc: "~30 interviews across delivery, assurance, and management roles" },
  { title: "Contextual Shadowing", desc: "~5 sessions observing real workflows in their operational context" },
  { title: "Workflow Mapping", desc: "Order management (end-to-end) and ticket management flows" },
  { title: "Role Hierarchy Mapping", desc: "Cross-team dependency and interaction mapping" },
  { title: "Pain-Point Synthesis", desc: "Collaborative capture and clustering of ~200 individual pain points" },
];

const problemImpacts = [
  { group: "Operations", items: ["Teams spent hours on manual tracking, reporting, and coordination", "Critical handoffs were delayed or missed entirely"] },
  { group: "Business", items: ["SLA compliance was difficult to monitor accurately", "Escalations increased due to lack of proactive visibility"] },
  { group: "People", items: ["Onboarding new team members took significantly longer than expected"] },
];

const questions = [
  { q: "How do different roles across service delivery and assurance actually execute their day-to-day workflows?", why: "Understanding the actual (not assumed) workflow sequence is the prerequisite for any meaningful redesign." },
  { q: "Where do breakdowns occur across tools, handoffs, and responsibilities?", why: "Pinpointing failure seams reveals where automation or design intervention will yield the highest ROI." },
  { q: "Which problems are role-specific, and which are systemic across the organization?", why: "Separating role-specific friction from systemic failures guides prioritization and avoids patchwork fixes." },
  { q: "What opportunities exist for automation, better UX, and AI-assisted operations?", why: "The research needed to translate directly into a product roadmap, not just a report." },
];

const participants = [
  { group: "Service Delivery", roles: ["Service Delivery Lead (1A / 1B)", "MSIM (Project Implementation Manager)", "Lead Engineer (LE)", "Provisioning Engineer (PE)", "DTAC (Configuration / Implementation)", "Billing (1A)"] },
  { group: "Service Assurance", roles: ["SA Lead", "L1 Lead", "L1 Agents", "L2 / L3 Agents"] },
  { group: "Management", roles: ["Account Delivery Head", "Problem Manager", "SLA Manager", "Transition Manager", "Escalation Management Team (Shift Leads)"] },
];

const workflows = [
  { title: "Order Management (End-to-End)", desc: "From customer request → order creation → design → provisioning → configuration → billing → closure.", steps: ["Customer Request", "Order Creation", "Solution Design", "Provisioning", "Configuration", "Billing", "Closure"] },
  { title: "Ticket Management", desc: "From incident detection or customer contact → L1 intake → investigation → escalation → resolution → SLA reporting.", steps: ["Incident Detection", "L1 Intake", "Investigation", "Escalation", "Resolution", "SLA Reporting"] },
];

const myRole = [
  "Planning and conducting user interviews and shadowing sessions",
  "Mapping roles, responsibilities, and cross-team dependencies",
  "Documenting end-to-end service delivery and ticket management workflows",
  "Capturing and synthesizing pain points across roles",
  "Identifying cross-cutting themes and systemic issues",
  "Translating research insights into design and product opportunity areas",
];

type Theme = { number: string; title: string; summary: string; examples: string[]; impact: string; quote?: { text: string; role: string } };

const themes: Theme[] = [
  {
    number: "01",
    title: "Operational Inefficiencies",
    summary: "Manual work dominated daily operations across every role.",
    examples: [
      "Heavy reliance on Excel for tracking orders, SLAs, billing, and performance",
      "Manual task and ticket assignment with no automation",
      "Manual data transfer between email and ServiceNow",
      "Duplicate sub-orders and repetitive steps",
      "No notification system for task completion or dependencies",
      "Bulk MACD and multi-site changes processed individually",
    ],
    impact: "High effort, slow turnaround, error-prone processes, and poor scalability.",
    quote: { text: "I open Excel before ServiceNow every morning. That's just how it works.", role: "Service Delivery Lead" },
  },
  {
    number: "02",
    title: "Tool & Platform Limitations",
    summary: "Teams worked across too many disconnected, incompatible systems.",
    examples: [
      "Fragmented tools: ServiceNow, Outlook, AWS, UBANK, Excel, Power BI",
      "No single sign-on across systems",
      "Missing master scheduler in ServiceNow",
      "No dedicated space for solution design or documentation",
      "Power BI dashboards lacking critical operational data",
    ],
    impact: "Constant context switching, data silos, and reduced productivity.",
    quote: { text: "I have 12 tabs open at any time. Every tool is its own world.", role: "Provisioning Engineer" },
  },
  {
    number: "03",
    title: "Communication & Collaboration Breakdowns",
    summary: "Email was the default — and only — coordination mechanism.",
    examples: [
      "Over-dependence on email for internal and customer communication",
      "Escalations handled verbally or via Microsoft Teams",
      "No in-app escalation alerts or notifications",
      "No self-service escalation options for customers",
      "No internal chat or collaboration layer within ServiceNow",
    ],
    impact: "Missed updates, delayed responses, and reactive firefighting.",
  },
  {
    number: "04",
    title: "Visibility & Accountability Gaps",
    summary: "Teams lacked real-time operational visibility at every level.",
    examples: [
      "No centralized dashboards for task status, SLA breaches, ticket aging, or team workload",
      "No effort tracking for auto-resolved tickets",
      "Manual and inconsistent reporting processes",
      "Limited visibility into unassigned or blocked work",
    ],
    impact: "Managers were reactive rather than proactive — bottlenecks were discovered too late.",
    quote: { text: "By the time I find out an SLA is about to breach, it's already breached.", role: "SLA Manager" },
  },
  {
    number: "05",
    title: "People, Roles & Skill Challenges",
    summary: "Operational complexity was amplified by role ambiguity.",
    examples: [
      "Long onboarding cycles due to lack of structured training",
      "Merged roles requiring simultaneous phone handling and troubleshooting",
      "Unclear ownership across ticket lifecycles",
      "Poor communication of policies and performance expectations",
      "High dependency on experienced individuals as single points of knowledge",
    ],
    impact: "Inconsistent execution, slower ramp-up, and uneven team performance.",
    quote: { text: "New joiners take 3-4 months to be independently productive. There's no other way.", role: "Account Delivery Head" },
  },
  {
    number: "06",
    title: "Usability Challenges in ServiceNow",
    summary: "Even when automation existed, the UX slowed users down.",
    examples: [
      "Excessive clicks and scrolling to complete routine tasks",
      "Too many tabs open per order or ticket",
      "Irrelevant information hierarchy surfacing wrong data",
      "Read and edit modes not clearly distinguished",
      "Page refreshes losing scroll position mid-task",
      "No daily task views or role-specific dashboards",
    ],
    impact: "Increased task completion time and significant cognitive load.",
  },
];

// `from` links each opportunity back to the theme number(s) it responds to
const opportunities = [
  { number: "01", title: "Workflow Automation & Standardization", from: ["01"], items: ["Standardized, role-based task sequences", "Automated sub-task generation", "Parent–child ticket logic for bulk operations", "Reduced dependency on Excel and email"] },
  { number: "02", title: "Unified Visibility & Dashboards", from: ["04"], items: ["Real-time dashboards for task status, ticket aging, escalations, and team workload", "Individual and team-level performance visibility", "Visibility into effort for auto-resolved tickets"] },
  { number: "03", title: "Intelligent Assignment & Scheduling", from: ["01", "05"], items: ["Master scheduler for delivery planning", "Skill- and availability-based task assignment", "Dependency-aware task sequencing", "Better support for night shifts and workload balancing"] },
  { number: "04", title: "SLA & Performance Intelligence", from: ["04"], items: ["Automated SLA tagging and hold-time calculations", "Consolidated SLA reports replacing Excel", "Early SLA breach alerts and proactive notifications", "Response-time tracking per role and team"] },
  { number: "05", title: "Communication & Notification Layer", from: ["03"], items: ["In-app notifications for task completion, dependencies, and escalations", "Unified customer communication threads inside tickets", "Reduced reliance on email and verbal follow-ups"] },
  { number: "06", title: "UX Improvements in ServiceNow", from: ["02", "06"], items: ["Role-specific views with relevant information only", "Reduced clicks and persistent scroll position", "Clear read vs edit state distinction", "Structured note templates and daily task lists"] },
];

const roadmap = [
  { theme: "01", opp: "01", title: "Workflow-first, not feature-first", detail: "Research shifted focus from adding new features to redesigning broken workflows — a fundamental reframing of the product strategy." },
  { theme: "05", opp: "03", title: "AI placement grounded in evidence", detail: "Identified specific workflow points where AI could assist — smart routing, classification, and recommendations — rather than applying AI speculatively." },
  { theme: "04", opp: "04", title: "Automation ROI prioritization", detail: "Identified which automations would deliver the highest operational return — Excel elimination, automated task assignment, and SLA alerting ranked highest." },
  { theme: "06", opp: "06", title: "Design decisions rooted in observed behavior", detail: "Every design direction was traceable to a specific observed workflow, interview quote, or clustered pain point — not assumption." },
];

const outcomes = [
  { group: "User outcomes", items: ["Significantly reduce manual effort and Excel dependency across all roles", "Improve onboarding speed and new-joiner confidence"] },
  { group: "Business outcomes", items: ["Improve SLA compliance and reporting accuracy", "Enable operational scale without proportional headcount increase"] },
  { group: "Operational outcomes", items: ["Shorten order fulfillment and ticket resolution cycles", "Reduce escalations through proactive visibility and early alerting"] },
];

const reflections = [
  { title: "Clarity beats feature count", detail: "In complex operational systems, clarity, visibility, and automation matter more than the number of features available. Every additional capability without workflow coherence adds friction." },
  { title: "End-to-end research reveals structural causes", detail: "By studying workflows across roles from end to end, we moved beyond surface usability issues and uncovered the structural reasons behind inefficiency." },
  { title: "UX influence extends beyond screens", detail: "The research demonstrated how UX can influence not just interface design, but organizational effectiveness, service quality, and team confidence." },
  { title: "Enterprise research requires political navigation", detail: "Getting access to the right people, at the right depth, in a large telecom organization required as much stakeholder relationship work as it did research skill." },
];

const coreInsight =
  "The core problem was not a lack of tools — it was the absence of cohesive, role-aware, and automated workflows that matched how teams actually work.";

/* ───────────────────────── helpers ───────────────────────── */

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
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

function Label({ index, children, light }: { index: string; children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`flex items-center gap-4 font-mono text-xs uppercase tracking-widest ${light ? "text-stone-300" : "text-stone-600"}`}>
      <span className={light ? "text-emerald-300" : "text-emerald-800"}>{index}</span>
      <span>{children}</span>
    </div>
  );
}

function H2({ children, light, className = "" }: { children: React.ReactNode; light?: boolean; className?: string }) {
  return (
    <h2 className={`mt-6 font-serif text-4xl leading-[1.04] sm:text-5xl lg:text-6xl ${light ? "text-white" : "text-stone-950"} ${className}`}>
      {children}
    </h2>
  );
}

const pad = "px-6 py-24 sm:px-10 lg:px-14";
const wrap = "mx-auto max-w-7xl";
const dots = {
  backgroundImage: "radial-gradient(rgb(168 162 158 / 0.4) 1px, transparent 1px)",
  backgroundSize: "22px 22px",
};

/* observations → patterns visual */
function Sticky({ tone, r }: { tone: number; r: number }) {
  const c = ["bg-white", "bg-emerald-200", "bg-stone-300"][tone];
  return <span className={`block h-3.5 w-3.5 shadow-[0_1px_1px_rgb(0_0_0/0.18)] ${c}`} style={{ transform: `rotate(${r}deg)` }} />;
}

function SynthesisFlow() {
  const clumps = [14, 12, 11, 10, 9, 7];
  const stages = [
    { n: "Observations", note: "~200 pain points · ~30 interviews · ~5 shadowing sessions" },
    { n: "Patterns", note: "Collaborative capture and clustering of ~200 individual pain points" },
    { n: "Themes", note: "6 systemic themes" },
    { n: "Insights", note: "Workflow-first, not feature-first" },
  ];
  return (
    <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch lg:gap-6">
      {/* observations */}
      <div className="flex flex-col">
        <div className="flex flex-1 flex-wrap content-start gap-1.5 bg-stone-200 p-5">
          {Array.from({ length: 63 }).map((_, i) => (
            <Sticky key={i} tone={i % 7 === 0 ? 1 : i % 4 === 0 ? 2 : 0} r={((i * 17) % 13) - 6} />
          ))}
        </div>
        <StageCaption i={0} {...stages[0]} />
      </div>
      <FlowArrow />
      {/* patterns */}
      <div className="flex flex-col">
        <div className="grid flex-1 grid-cols-3 content-start gap-x-4 gap-y-5 bg-stone-200 p-5">
          {clumps.map((n, c) => (
            <div key={c} className="flex flex-col gap-1.5">
              <span className={`h-[3px] w-4/5 ${c === 0 ? "bg-emerald-800" : "bg-stone-400"}`} />
              <div className="flex flex-wrap gap-[3px]">
                {Array.from({ length: n }).map((_, i) => (
                  <Sticky key={i} tone={c === 0 ? 1 : 0} r={((i * 11 + c * 7) % 9) - 4} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <StageCaption i={1} {...stages[1]} />
      </div>
      <FlowArrow />
      {/* themes */}
      <div className="flex flex-col">
        <ol className="flex-1 divide-y divide-stone-300 border border-stone-300 bg-white">
          {themes.map((t) => (
            <li key={t.number} className="flex gap-3 px-4 py-3 text-sm text-stone-800">
              <span className="font-mono text-xs text-emerald-800">{t.number}</span>
              {t.title}
            </li>
          ))}
        </ol>
        <StageCaption i={2} {...stages[2]} />
      </div>
      <FlowArrow />
      {/* insights */}
      <div className="flex flex-col">
        <div className="flex flex-1 flex-col justify-center bg-emerald-800 p-6 text-white">
          <p className="font-serif text-3xl leading-tight">{roadmap[0].title}</p>
          <p className="mt-4 text-sm leading-relaxed text-emerald-50/85">{roadmap[0].detail}</p>
        </div>
        <StageCaption i={3} {...stages[3]} />
      </div>
    </div>
  );
}

function StageCaption({ i, n, note }: { i: number; n: string; note: string }) {
  return (
    <div className="mt-4">
      <p className="font-mono text-[11px] uppercase tracking-widest text-emerald-800">
        0{i + 1} / {n}
      </p>
      <p className="mt-1 text-sm leading-snug text-stone-600">{note}</p>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex items-center justify-center text-emerald-800">
      <ArrowRight className="h-6 w-6 rotate-90 lg:rotate-0" />
    </div>
  );
}

/* ───────────────────────── page ───────────────────────── */

export function USPCaseStudy() {
  const themeByNo = Object.fromEntries(themes.map((t) => [t.number, t]));
  const oppsForTheme = (no: string) => opportunities.filter((o) => o.from.includes(no));

  return (
    <div className="min-h-screen bg-stone-100 pt-20 text-stone-950">
      {/* 1 — HERO */}
      <section className="border-b border-stone-300 px-6 pb-20 pt-20 sm:px-10 lg:px-14" style={dots}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className={wrap}
        >
          <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-stone-600">
            <Label index="00">Case study · Telecommunication · 2026</Label>
          </div>
          <h1 className="mt-8 max-w-5xl font-serif text-5xl leading-[0.98] sm:text-7xl lg:text-8xl">
            Unified Service <span className="italic text-emerald-800">Operations</span> Platform
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone-600 sm:text-xl">
            Reimagining workflows for network service delivery and assurance teams inside a large telecom enterprise.
          </p>

          <div className="relative mt-14 border-l-4 border-emerald-800 bg-white/70 py-8 pl-8 pr-6 shadow-lg shadow-stone-900/5 sm:pl-12">
            <p className="font-mono text-[11px] uppercase tracking-widest text-emerald-800">The key insight</p>
            <p className="mt-4 max-w-5xl font-serif text-3xl leading-[1.15] sm:text-4xl lg:text-5xl">
              The core problem was <span className="italic text-emerald-800">not a lack of tools</span> — it was the absence of cohesive, role-aware, and automated workflows that matched how teams actually work.
            </p>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-stone-300 pt-8 md:grid-cols-4">
            {[
              ["Role", "UX Researcher"],
              ["Timeline", "4 days field + synthesis"],
              ["Team", "UX Research, Design, Product"],
              ["Methods", "Interviews · Shadowing · Workflow mapping · Pain-point synthesis"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[10px] uppercase tracking-widest text-stone-400">{k}</dt>
                <dd className="mt-1 text-sm leading-snug text-stone-800">{v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </section>

      <section className="bg-stone-950 px-6 py-12 text-white sm:px-10 lg:px-14">
        <div className={`${wrap} grid grid-cols-2 gap-y-8 md:grid-cols-4`}>
          {stats.map((s, i) => (
            <div key={s.label} className={`px-4 ${i ? "md:border-l md:border-stone-700" : "pl-0"}`}>
              <p className="font-serif text-6xl leading-none text-emerald-400 sm:text-7xl">{s.value}</p>
              <p className="mt-3 text-sm leading-snug text-stone-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2 — WHY THIS MATTERED */}
      <section className={`border-b border-stone-300 ${pad}`}>
        <div className={wrap}>
          <Reveal>
            <Label index="01">The problem · Why this mattered</Label>
            <H2 className="max-w-4xl">A fragmented ecosystem of tools and teams.</H2>
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-12">
            <Reveal className="space-y-5 text-lg leading-relaxed text-stone-600 lg:col-span-5">
              <p>
                Telecom service operations rely on a complex ecosystem of tools and teams to manage order fulfillment, incident resolution, SLA compliance, and customer escalations. In this organization, ServiceNow acts as the primary workflow system — but teams also depend on multiple supporting platforms.
              </p>
              <p>
                Despite the presence of these systems, day-to-day operations were heavily manual. Teams struggled with fragmented workflows, excessive email dependency, Excel-based tracking, unclear ownership, and limited visibility into work status and performance.
              </p>
              <p className="border-t border-stone-300 pt-5 text-base text-stone-800">
                Service Delivery, Service Assurance, and Management teams were unable to operate efficiently because their workflows were fragmented across multiple disconnected systems, heavily reliant on manual processes, and poorly supported by automation, visibility, and usability.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-7">
              <div className="bg-stone-200 p-6 sm:p-8" style={dots}>
                <p className="font-mono text-[11px] uppercase tracking-widest text-stone-600">System complexity · Tool ecosystem in use</p>
                <ul className="mt-6 flex flex-wrap gap-3">
                  {tools.map((t, i) => (
                    <li
                      key={t}
                      style={{ transform: `rotate(${((i * 5) % 7) - 3}deg)` }}
                      className={`px-4 py-2 font-mono text-xs shadow-md shadow-stone-900/10 ${
                        t === "Excel" ? "bg-emerald-200 text-emerald-950" : t === "ServiceNow" ? "bg-stone-950 text-white" : "bg-white text-stone-800"
                      }`}
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {problemImpacts.map((g) => (
                  <div key={g.group} className="border-t-2 border-emerald-800 pt-4">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-emerald-800">{g.group}</p>
                    <ul className="mt-3 space-y-3 text-sm leading-snug text-stone-700">
                      {g.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3 — THE MOMENT THAT CHANGED THE RESEARCH */}
      <section className="relative overflow-hidden bg-emerald-900 px-6 py-28 text-white sm:px-10 lg:px-14 lg:py-36">
        <div className={wrap}>
          <Reveal>
            <Label index="02" light>The discovery · The moment that changed the research</Label>
          </Reveal>
          <Reveal delay={0.1}>
            <p aria-hidden className="mt-10 font-serif text-[10rem] leading-[0.6] text-emerald-400/60 sm:text-[14rem]">
              &ldquo;
            </p>
            <blockquote className="-mt-4 max-w-6xl font-serif text-5xl leading-[1.04] sm:text-7xl lg:text-8xl">
              I open <span className="italic text-emerald-300">Excel</span> before ServiceNow every morning. That&apos;s just how it works.
            </blockquote>
            <p className="mt-8 font-mono text-xs uppercase tracking-widest text-emerald-200/80">Service Delivery Lead</p>
          </Reveal>

          <div className="mt-20 grid gap-10 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-5">
              <p className="text-xl leading-relaxed text-emerald-50/90">
                Despite the presence of these systems, day-to-day operations were heavily manual.
              </p>
              <p className="mt-6 font-serif text-3xl italic leading-snug text-emerald-300">
                The core problem was not a lack of tools.
              </p>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-3 lg:col-span-7">
              {[themes[3], themes[1], themes[4]].map((t, i) => (
                <Reveal key={t.number} delay={0.1 * i}>
                  <figure
                    className="bg-stone-100 p-5 text-stone-950 shadow-xl shadow-emerald-950/30"
                    style={{ transform: `rotate(${[-1.5, 1, -0.8][i]}deg)` }}
                  >
                    <blockquote className="font-serif text-lg leading-snug">&ldquo;{t.quote!.text}&rdquo;</blockquote>
                    <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-widest text-stone-600">{t.quote!.role}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4 — HOW WE INVESTIGATED */}
      <section className={`border-b border-stone-300 ${pad}`}>
        <div className={wrap}>
          <Reveal>
            <Label index="03">The investigation · How we investigated</Label>
            <H2 className="max-w-4xl">4 days of on-ground research, across 16 roles.</H2>
          </Reveal>

          <div className="mt-14 grid gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-widest text-emerald-800">Research questions</p>
              <ol className="mt-5 space-y-5">
                {questions.map((item, i) => (
                  <li key={i} className="grid grid-cols-[2rem_1fr] gap-2">
                    <span className="font-mono text-xs text-emerald-800">0{i + 1}</span>
                    <div>
                      <p className="font-serif text-xl leading-snug">{item.q}</p>
                      <p className="mt-1 text-sm leading-snug text-stone-600">{item.why}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-7">
              <p className="font-mono text-[11px] uppercase tracking-widest text-emerald-800">Methods</p>
              <ul className="mt-5 divide-y divide-stone-300 border-y border-stone-300">
                {methods.map((m) => (
                  <li key={m.title} className="grid gap-1 py-4 sm:grid-cols-[13rem_1fr] sm:gap-6">
                    <span className="font-serif text-xl">{m.title}</span>
                    <span className="text-sm leading-snug text-stone-600">{m.desc}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-10 font-mono text-[11px] uppercase tracking-widest text-emerald-800">Participants</p>
              <div className="mt-5 grid gap-6 sm:grid-cols-3">
                {participants.map((g) => (
                  <div key={g.group}>
                    <p className="border-b border-stone-300 pb-2 text-sm font-semibold">{g.group}</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-stone-600">
                      {g.roles.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-16">
            <p className="font-mono text-[11px] uppercase tracking-widest text-emerald-800">Project scope · Two workflows mapped</p>
            <div className="mt-5 grid gap-6 lg:grid-cols-2">
              {workflows.map((w) => (
                <div key={w.title} className="bg-stone-950 p-6 text-stone-100">
                  <p className="font-serif text-2xl">{w.title}</p>
                  <p className="mt-2 text-sm leading-snug text-stone-400">{w.desc}</p>
                  <ol className="mt-5 flex flex-wrap items-center gap-y-2 font-mono text-[11px] uppercase tracking-wider">
                    {w.steps.map((s, i) => (
                      <li key={s} className="flex items-center">
                        <span className="border border-stone-700 px-2 py-1 text-stone-300">{s}</span>
                        {i < w.steps.length - 1 && <span className="px-1.5 text-emerald-400">→</span>}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-16 grid gap-8 border-t border-stone-300 pt-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-[11px] uppercase tracking-widest text-emerald-800">My role</p>
              <p className="mt-3 font-serif text-3xl leading-tight">UX Researcher, embedded in the field.</p>
              <p className="mt-4 text-sm leading-relaxed text-stone-600">
                I worked closely with designers and product stakeholders to ensure the research directly informed platform, workflow, and AI strategy decisions — across the Telco AI 360 vision.
              </p>
            </div>
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:col-span-8">
              {myRole.map((r, i) => (
                <li key={r} className="grid grid-cols-[1.75rem_1fr] text-sm leading-snug text-stone-700">
                  <span className="font-mono text-xs text-emerald-800">{i + 1}</span>
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 5 — WHAT WE OBSERVED */}
      <section className={`border-b border-stone-300 ${pad}`} style={dots}>
        <div className={wrap}>
          <Reveal>
            <Label index="04">What we observed</Label>
            <H2 className="max-w-4xl">~200 pain points, six clusters.</H2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
              The core problem was not a lack of tools — it was the absence of cohesive, role-aware, and automated workflows that matched how teams actually work.
            </p>
          </Reveal>

          <div className="mt-16 columns-1 gap-8 md:columns-2 lg:columns-3">
            {themes.map((t, i) => {
              const tone = [
                "bg-white",
                "bg-stone-950 text-stone-100",
                "bg-emerald-200 text-emerald-950",
                "bg-white",
                "bg-stone-950 text-stone-100",
                "bg-white",
              ][i];
              const dark = tone.includes("stone-950");
              const green = tone.includes("emerald");
              return (
                <Reveal key={t.number} delay={0.05 * (i % 3)} className="mb-8 break-inside-avoid">
                  <article
                    className={`p-6 shadow-lg shadow-stone-900/10 ${tone}`}
                    style={{ transform: `rotate(${[-0.6, 0.5, -0.4, 0.7, -0.5, 0.4][i]}deg)` }}
                  >
                    <p className={`font-mono text-[11px] uppercase tracking-widest ${dark ? "text-emerald-400" : green ? "text-emerald-900" : "text-emerald-800"}`}>
                      Cluster {t.number}
                    </p>
                    <h3 className="mt-3 font-serif text-3xl leading-[1.08]">{t.title}</h3>
                    <p className={`mt-3 text-sm leading-snug ${dark ? "text-stone-400" : green ? "text-emerald-900/80" : "text-stone-600"}`}>{t.summary}</p>
                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {t.examples.map((e) => (
                        <li
                          key={e}
                          className={`px-2 py-1 text-[12px] leading-snug ${
                            dark ? "bg-stone-800 text-stone-300" : green ? "bg-white/70 text-emerald-950" : "bg-stone-100 text-stone-700"
                          }`}
                        >
                          {e}
                        </li>
                      ))}
                    </ul>
                    <p className={`mt-5 border-t pt-4 text-sm leading-snug ${dark ? "border-stone-700 text-stone-300" : green ? "border-emerald-900/20" : "border-stone-300 text-stone-700"}`}>
                      <span className={`font-mono text-[10px] uppercase tracking-widest ${dark ? "text-emerald-400" : "text-emerald-800"}`}>Impact · </span>
                      {t.impact}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6 — FROM OBSERVATIONS TO INSIGHTS */}
      <section className={`border-b border-stone-300 ${pad}`}>
        <div className={wrap}>
          <Reveal>
            <Label index="05">Synthesis · From observations to insights</Label>
            <H2 className="max-w-4xl">
              ~200 pain points became <span className="italic text-emerald-800">6 systemic themes.</span>
            </H2>
          </Reveal>
          <Reveal delay={0.1}>
            <SynthesisFlow />
          </Reveal>
        </div>
      </section>

      {/* 7 — KEY INSIGHTS */}
      <section className="bg-stone-950 px-6 py-24 text-stone-100 sm:px-10 lg:px-14 lg:py-32">
        <div className={wrap}>
          <Reveal>
            <Label index="06" light>The insights</Label>
            <H2 light className="max-w-4xl">
              Six things the research <span className="italic text-emerald-400">made impossible to ignore.</span>
            </H2>
          </Reveal>

          <div className="mt-16 border-t border-stone-700">
            {themes.map((t) => {
              const opps = oppsForTheme(t.number);
              return (
                <Reveal key={t.number} className="grid gap-8 border-b border-stone-700 py-10 lg:grid-cols-12">
                  <div className="lg:col-span-4">
                    <p className="font-mono text-xs uppercase tracking-widest text-emerald-400">Insight {t.number}</p>
                    <p className="mt-3 font-serif text-3xl leading-[1.1] sm:text-4xl">{t.summary}</p>
                    <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-stone-400">{t.title}</p>
                  </div>
                  <div className="lg:col-span-3">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-stone-400">Why it matters</p>
                    <p className="mt-2 text-base leading-snug text-stone-200">{t.impact}</p>
                  </div>
                  <div className="lg:col-span-3">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-stone-400">Supporting evidence</p>
                    {t.quote ? (
                      <figure className="mt-2 border-l-2 border-emerald-400 pl-4">
                        <blockquote className="font-serif text-lg italic leading-snug text-stone-100">&ldquo;{t.quote.text}&rdquo;</blockquote>
                        <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-widest text-stone-400">{t.quote.role}</figcaption>
                      </figure>
                    ) : (
                      <p className="mt-2 border-l-2 border-emerald-400 pl-4 text-sm leading-snug text-stone-300">{t.examples[0]}</p>
                    )}
                  </div>
                  <div className="lg:col-span-2">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-stone-400">Strategic implication</p>
                    <ul className="mt-2 space-y-2">
                      {opps.map((o) => (
                        <li key={o.number} className="text-sm leading-snug text-emerald-300">
                          <span className="font-mono text-[10px] text-stone-400">Opp {o.number} → </span>
                          {o.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8 — OPPORTUNITY AREAS */}
      <section className="bg-emerald-800 px-6 py-24 text-white sm:px-10 lg:px-14 lg:py-32">
        <div className={wrap}>
          <Reveal>
            <Label index="07" light>The opportunities</Label>
            <H2 light className="max-w-4xl">6 high-impact opportunity areas.</H2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-emerald-50/85">
              Based on synthesis, we identified opportunity areas aligned with the Telco AI 360 vision — each grounded in direct research evidence.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {opportunities.map((o, i) => (
              <Reveal key={o.number} delay={0.05 * (i % 3)}>
                <article
                  className={`flex h-full flex-col p-7 shadow-xl shadow-emerald-950/30 ${i === 0 ? "bg-stone-950 text-stone-100" : "bg-stone-100 text-stone-950"}`}
                >
                  <p className={`font-serif text-6xl leading-none ${i === 0 ? "text-emerald-400" : "text-emerald-800"}`}>{o.number}</p>
                  <h3 className="mt-5 font-serif text-2xl leading-tight">{o.title}</h3>
                  <ul className={`mt-5 space-y-2 text-sm leading-snug ${i === 0 ? "text-stone-300" : "text-stone-700"}`}>
                    {o.items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 ${i === 0 ? "bg-emerald-400" : "bg-emerald-800"}`} />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <div className={`mt-auto border-t pt-4 ${i === 0 ? "border-stone-700" : "border-stone-300"}`}>
                    <p className={`mt-4 font-mono text-[10px] uppercase tracking-widest ${i === 0 ? "text-stone-400" : "text-stone-600"}`}>Responds to</p>
                    <ul className="mt-2 space-y-1">
                      {o.from.map((n) => (
                        <li key={n} className={`text-xs leading-snug ${i === 0 ? "text-emerald-300" : "text-emerald-800"}`}>
                          <span className="font-mono">{n}</span> · {themeByNo[n].title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9 — PRODUCT AND ROADMAP IMPLICATIONS */}
      <section className={`border-b border-stone-300 ${pad}`}>
        <div className={wrap}>
          <Reveal>
            <Label index="08">Product implications · How research shaped the product roadmap</Label>
            <H2 className="max-w-4xl">From finding, to design implication, to product direction.</H2>
          </Reveal>

          <div className="mt-16 hidden grid-cols-[1fr_2.5rem_1fr_2.5rem_1.4fr] px-1 font-mono text-[11px] uppercase tracking-widest text-stone-600 lg:grid">
            <span>Research finding</span>
            <span />
            <span>Design implication</span>
            <span />
            <span>Potential product direction</span>
          </div>
          <div className="mt-4 space-y-5 lg:mt-3">
            {roadmap.map((r, i) => {
              const t = themeByNo[r.theme];
              const o = opportunities.find((x) => x.number === r.opp)!;
              return (
                <Reveal key={r.title} delay={0.05 * i}>
                  <div className="grid items-stretch gap-3 lg:grid-cols-[1fr_2.5rem_1fr_2.5rem_1.4fr] lg:gap-0">
                    <div className="border border-stone-300 bg-white p-5">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-stone-600 lg:hidden">Research finding</p>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-emerald-800">{t.number} · {t.title}</p>
                      <p className="mt-2 font-serif text-xl leading-snug">{t.summary}</p>
                    </div>
                    <FlowArrow />
                    <div className="border border-stone-300 bg-stone-200 p-5">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-stone-600 lg:hidden">Design implication</p>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-emerald-800">Opportunity {o.number}</p>
                      <p className="mt-2 font-serif text-xl leading-snug">{o.title}</p>
                    </div>
                    <FlowArrow />
                    <div className="bg-emerald-800 p-5 text-white">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-emerald-200 lg:hidden">Potential product direction</p>
                      <p className="font-serif text-2xl leading-snug">{r.title}</p>
                      <p className="mt-2 text-sm leading-snug text-emerald-50/85">{r.detail}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10 — WHAT WOULD CHANGE IF IMPLEMENTED */}
      <section className="border-b border-stone-300 bg-stone-200 px-6 py-24 sm:px-10 lg:px-14">
        <div className={wrap}>
          <Reveal>
            <Label index="09">Expected impact</Label>
            <H2 className="max-w-4xl">If implemented, these changes would:</H2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {outcomes.map((g, gi) => (
              <Reveal key={g.group} delay={0.08 * gi}>
                <p className="border-b-2 border-emerald-800 pb-3 font-mono text-xs uppercase tracking-widest text-emerald-800">{g.group}</p>
                <ul className="mt-6 space-y-6">
                  {g.items.map((it) => (
                    <li key={it} className="font-serif text-2xl leading-snug text-stone-900">
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11 — REFLECTION */}
      <section className={pad}>
        <div className={wrap}>
          <Reveal>
            <Label index="10">Reflection</Label>
            <H2 className="max-w-4xl">
              What <span className="italic text-emerald-800">changed my perspective.</span>
            </H2>
          </Reveal>
          <div className="mt-14 border-t border-stone-300">
            {reflections.map((r, i) => (
              <Reveal key={r.title} className="grid gap-4 border-b border-stone-300 py-8 lg:grid-cols-12 lg:gap-10">
                <p className="font-mono text-xs text-emerald-800 lg:col-span-1">0{i + 1}</p>
                <p className="font-serif text-3xl leading-tight sm:text-4xl lg:col-span-5">{r.title}</p>
                <p className="text-base leading-relaxed text-stone-600 lg:col-span-6">{r.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NDA gate */}
      <section className="bg-stone-950 px-6 py-24 text-white sm:px-10 lg:px-14">
        <Reveal className={wrap}>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-stone-400">
            <Lock className="h-4 w-4 text-emerald-400" /> Confidential work · NDA
          </div>
          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:items-end">
            <div>
              <p role="heading" aria-level={2} className="font-serif text-5xl leading-none sm:text-6xl">
                Designs &amp; Final Flows Available on Request
              </p>
              <p className="mt-6 max-w-xl text-stone-400">
                The wireframes, high-fidelity designs, interaction flows, and service blueprints produced from this research are protected under a non-disclosure agreement and cannot be shared publicly.
              </p>
            </div>
            <div className="border-t border-stone-700 lg:justify-self-end lg:w-full lg:max-w-md">
              <p className="py-5 text-sm leading-relaxed text-stone-400">
                If you&apos;re a recruiter, design lead, or collaborator and would like to see the full design deliverables, reach out directly — I&apos;m happy to walk you through the work in a private session.
              </p>
              <a
                href="mailto:shantanupate0@gmail.com"
                className="flex items-center justify-between border-y border-stone-700 py-5 text-base text-stone-200 transition-colors hover:text-emerald-400"
              >
                Get in touch <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/work"
                className="flex items-center justify-between border-b border-stone-700 py-5 text-base text-stone-200 transition-colors hover:text-emerald-400"
              >
                Back to Portfolio <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
