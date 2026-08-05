import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Users, Zap, Eye, MessageSquare, BarChart3, Layers, ChevronRight } from "lucide-react";

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
      <p className="text-4xl font-bold text-white mb-1">{value}</p>
      <p className="text-sm text-white/70 leading-snug">{label}</p>
    </div>
  );
}

function QuoteCard({ quote, role }: { quote: string; role: string }) {
  return (
    <div className="bg-[#f5f0e8] rounded-2xl p-6 border border-stone-200">
      <p className="text-stone-700 italic leading-relaxed mb-4">&ldquo;{quote}&rdquo;</p>
      <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider">{role}</p>
    </div>
  );
}

function ProblemTheme({
  number, title, summary, examples, impact
}: { number: string; title: string; summary: string; examples: string[]; impact: string }) {
  return (
    <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden">
      <div className="bg-[#faf6ef] px-8 py-6 border-b border-stone-200 flex items-start gap-4">
        <span className="text-3xl font-bold text-stone-300 leading-none shrink-0">{number}</span>
        <div>
          <h3 className="text-xl font-bold text-stone-800 mb-1">{title}</h3>
          <p className="text-stone-600 text-sm leading-relaxed">{summary}</p>
        </div>
      </div>
      <div className="px-8 py-6">
        <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">Examples</p>
        <ul className="space-y-2 mb-5">
          {examples.map((e, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
              <ChevronRight className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              {e}
            </li>
          ))}
        </ul>
        <div className="bg-orange-50 rounded-xl px-4 py-3 border border-orange-100">
          <span className="text-xs font-semibold text-orange-700 uppercase tracking-wider">Impact · </span>
          <span className="text-sm text-orange-800">{impact}</span>
        </div>
      </div>
    </div>
  );
}

function OpportunityCard({
  number, title, items, accent = false
}: { number: string; title: string; items: string[]; accent?: boolean }) {
  if (accent) {
    return (
      <div className="bg-[#1a1814] rounded-3xl p-8">
        <span className="text-5xl font-bold text-white/20 leading-none block mb-4">{number}</span>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-stone-300">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 mt-1.5" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className="bg-white rounded-3xl p-8 border border-stone-200">
      <span className="text-5xl font-bold text-stone-100 leading-none block mb-4">{number}</span>
      <h3 className="text-xl font-bold text-stone-800 mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-stone-600">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-1.5" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold text-orange-700 uppercase tracking-widest mb-3">{children}</p>
  );
}

const tools = ["ServiceNow", "Outlook", "GPS", "UBANK", "OpsRamp", "LMC", "Action V3", "AWS Connect", "Excel", "Power BI"];

export function USPCaseStudy() {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero */}
      <section className="bg-[#1a1814] pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-white/50 text-sm font-medium uppercase tracking-widest mb-8">Case Study</p>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
              Unified Service Operations Platform
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mb-12">
              Reimagining workflows for network service delivery and assurance teams inside a large telecom enterprise.
            </p>

            {/* Metadata strip */}
            <div className="flex flex-wrap gap-8 border-t border-white/10 pt-8">
              {[
                { label: "Sector", value: "Telecommunication" },
                { label: "Role", value: "UX Researcher" },
                { label: "Timeline", value: "4 days field + synthesis" },
                { label: "Year", value: "2026" },
              ].map(m => (
                <div key={m.label}>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{m.label}</p>
                  <p className="text-white font-semibold text-sm">{m.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#232118] px-6 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard value="4" label="Days of on-ground field research" />
          <StatCard value="~30" label="User interviews conducted" />
          <StatCard value="~5" label="Contextual shadowing sessions" />
          <StatCard value="~200" label="Pain points identified" />
        </div>
      </section>

      {/* Background */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <SectionLabel>01 · Background & Context</SectionLabel>
          <h2 className="text-3xl font-bold text-stone-800 mb-6">A fragmented ecosystem of tools and teams</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <p className="text-stone-600 leading-relaxed">
              Telecom service operations rely on a complex ecosystem of tools and teams to manage order fulfillment, incident resolution, SLA compliance, and customer escalations. In this organization, ServiceNow acts as the primary workflow system — but teams also depend on multiple supporting platforms.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Despite the presence of these systems, day-to-day operations were heavily manual. Teams struggled with fragmented workflows, excessive email dependency, Excel-based tracking, unclear ownership, and limited visibility into work status and performance.
            </p>
          </div>

          {/* Tool ecosystem */}
          <div className="bg-[#faf6ef] rounded-3xl p-8 border border-stone-200">
            <p className="text-sm font-semibold text-stone-500 mb-4">Tool ecosystem in use</p>
            <div className="flex flex-wrap gap-3">
              {tools.map(tool => (
                <span key={tool} className="bg-[#1a1814] text-white text-sm font-medium px-4 py-2 rounded-full">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Problem */}
      <section className="bg-white px-6 py-20 border-y border-stone-200">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SectionLabel>02 · Problem Statement</SectionLabel>
            <h2 className="text-3xl font-bold text-stone-800 mb-4 max-w-2xl">
              Fragmented systems, manual work, and zero operational visibility
            </h2>
            <p className="text-stone-600 leading-relaxed mb-8 max-w-3xl">
              Service Delivery, Service Assurance, and Management teams were unable to operate efficiently because their workflows were fragmented across multiple disconnected systems, heavily reliant on manual processes, and poorly supported by automation, visibility, and usability.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: <Layers className="w-5 h-5" />, text: "Teams spent hours on manual tracking, reporting, and coordination" },
                { icon: <ArrowRight className="w-5 h-5" />, text: "Critical handoffs were delayed or missed entirely" },
                { icon: <BarChart3 className="w-5 h-5" />, text: "SLA compliance was difficult to monitor accurately" },
                { icon: <Eye className="w-5 h-5" />, text: "Escalations increased due to lack of proactive visibility" },
                { icon: <Users className="w-5 h-5" />, text: "Onboarding new team members took significantly longer than expected" },
              ].map((c, i) => (
                <div key={i} className="bg-stone-50 rounded-2xl p-5 border border-stone-200 flex items-start gap-3">
                  <span className="text-orange-600 shrink-0 mt-0.5">{c.icon}</span>
                  <p className="text-sm text-stone-700 leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Goals */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <SectionLabel>03 · Research Goals</SectionLabel>
          <h2 className="text-3xl font-bold text-stone-800 mb-8">Four core questions driving the research</h2>
          <div className="space-y-4">
            {[
              { q: "How do different roles across service delivery and assurance actually execute their day-to-day workflows?", why: "Understanding the actual (not assumed) workflow sequence is the prerequisite for any meaningful redesign." },
              { q: "Where do breakdowns occur across tools, handoffs, and responsibilities?", why: "Pinpointing failure seams reveals where automation or design intervention will yield the highest ROI." },
              { q: "Which problems are role-specific, and which are systemic across the organization?", why: "Separating role-specific friction from systemic failures guides prioritization and avoids patchwork fixes." },
              { q: "What opportunities exist for automation, better UX, and AI-assisted operations?", why: "The research needed to translate directly into a product roadmap, not just a report." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-stone-200 grid md:grid-cols-[40px_1fr_1fr] gap-4 items-start">
                <span className="text-2xl font-bold text-stone-200 leading-none">{`0${i + 1}`}</span>
                <p className="text-stone-800 font-medium leading-relaxed">{item.q}</p>
                <p className="text-stone-500 text-sm leading-relaxed border-l border-stone-100 pl-4">{item.why}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Role */}
      <section className="bg-[#faf6ef] px-6 py-20 border-y border-stone-200">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SectionLabel>04 · My Role</SectionLabel>
            <h2 className="text-3xl font-bold text-stone-800 mb-6">UX Researcher, embedded in the field</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="space-y-3">
                {[
                  "Planning and conducting user interviews and shadowing sessions",
                  "Mapping roles, responsibilities, and cross-team dependencies",
                  "Documenting end-to-end service delivery and ticket management workflows",
                  "Capturing and synthesizing pain points across roles",
                  "Identifying cross-cutting themes and systemic issues",
                  "Translating research insights into design and product opportunity areas",
                ].map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-700">
                    <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                    <span className="text-sm leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white rounded-2xl p-6 border border-stone-200">
                <p className="text-sm font-semibold text-stone-500 mb-3">Team Context</p>
                <p className="text-stone-600 text-sm leading-relaxed">
                  I worked closely with designers and product stakeholders to ensure the research directly informed platform, workflow, and AI strategy decisions — across the Telco AI 360 vision.
                </p>
                <div className="mt-6 pt-4 border-t border-stone-100">
                  <p className="text-xs text-stone-400 uppercase tracking-wider mb-2">Cross-functional collaboration</p>
                  <div className="flex flex-wrap gap-2">
                    {["UX Research", "Design", "Product"].map(t => (
                      <span key={t} className="bg-stone-100 text-stone-700 text-xs font-medium px-3 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Methodology */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <SectionLabel>05 · Methodology</SectionLabel>
          <h2 className="text-3xl font-bold text-stone-800 mb-8">4 days of on-ground research, across 16 roles</h2>

          {/* Methods */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {[
              { icon: <Users className="w-5 h-5" />, title: "1:1 User Interviews", desc: "~30 interviews across delivery, assurance, and management roles" },
              { icon: <Eye className="w-5 h-5" />, title: "Contextual Shadowing", desc: "~5 sessions observing real workflows in their operational context" },
              { icon: <Layers className="w-5 h-5" />, title: "Workflow Mapping", desc: "Order management (end-to-end) and ticket management flows" },
              { icon: <Zap className="w-5 h-5" />, title: "Role Hierarchy Mapping", desc: "Cross-team dependency and interaction mapping" },
              { icon: <MessageSquare className="w-5 h-5" />, title: "Pain-Point Synthesis", desc: "Collaborative capture and clustering of ~200 individual pain points" },
            ].map((m, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-stone-200">
                <span className="text-orange-600 mb-3 block">{m.icon}</span>
                <p className="font-semibold text-stone-800 text-sm mb-1">{m.title}</p>
                <p className="text-stone-500 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

          {/* Roles in scope */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                group: "Service Delivery",
                roles: ["Service Delivery Lead (1A / 1B)", "MSIM (Project Implementation Manager)", "Lead Engineer (LE)", "Provisioning Engineer (PE)", "DTAC (Configuration / Implementation)", "Billing (1A)"]
              },
              {
                group: "Service Assurance",
                roles: ["SA Lead", "L1 Lead", "L1 Agents", "L2 / L3 Agents"]
              },
              {
                group: "Management",
                roles: ["Account Delivery Head", "Problem Manager", "SLA Manager", "Transition Manager", "Escalation Management Team (Shift Leads)"]
              }
            ].map(g => (
              <div key={g.group} className="bg-[#faf6ef] rounded-2xl p-6 border border-stone-200">
                <p className="text-xs font-semibold text-orange-700 uppercase tracking-wider mb-4">{g.group}</p>
                <ul className="space-y-2">
                  {g.roles.map(r => (
                    <li key={r} className="text-sm text-stone-700 flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-stone-400 shrink-0 mt-2" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key workflows */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Order Management (End-to-End)",
                desc: "From customer request → order creation → design → provisioning → configuration → billing → closure.",
                steps: ["Customer Request", "Order Creation", "Solution Design", "Provisioning", "Configuration", "Billing", "Closure"]
              },
              {
                title: "Ticket Management",
                desc: "From incident detection or customer contact → L1 intake → investigation → escalation → resolution → SLA reporting.",
                steps: ["Incident Detection", "L1 Intake", "Investigation", "Escalation", "Resolution", "SLA Reporting"]
              }
            ].map(w => (
              <div key={w.title} className="bg-white rounded-2xl border border-stone-200 overflow-hidden">
                <div className="bg-stone-800 px-6 py-4">
                  <p className="text-white font-semibold text-sm">{w.title}</p>
                </div>
                <div className="p-6">
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">{w.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {w.steps.map((s, i) => (
                      <div key={i} className="flex items-center gap-1">
                        <span className="bg-stone-100 text-stone-700 text-xs font-medium px-3 py-1 rounded-full">{s}</span>
                        {i < w.steps.length - 1 && <span className="text-stone-300 text-xs">→</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Key Findings */}
      <section className="bg-white px-6 py-20 border-y border-stone-200">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SectionLabel>06 · Key Findings</SectionLabel>
            <h2 className="text-3xl font-bold text-stone-800 mb-4">~200 pain points, 6 systemic themes</h2>
            <p className="text-stone-600 leading-relaxed mb-10 max-w-2xl">
              The core problem was not a lack of tools — it was the absence of cohesive, role-aware, and automated workflows that matched how teams actually work.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <ProblemTheme
                number="01"
                title="Operational Inefficiencies"
                summary="Manual work dominated daily operations across every role."
                examples={[
                  "Heavy reliance on Excel for tracking orders, SLAs, billing, and performance",
                  "Manual task and ticket assignment with no automation",
                  "Manual data transfer between email and ServiceNow",
                  "Duplicate sub-orders and repetitive steps",
                  "No notification system for task completion or dependencies",
                  "Bulk MACD and multi-site changes processed individually",
                ]}
                impact="High effort, slow turnaround, error-prone processes, and poor scalability."
              />
              <ProblemTheme
                number="02"
                title="Tool & Platform Limitations"
                summary="Teams worked across too many disconnected, incompatible systems."
                examples={[
                  "Fragmented tools: ServiceNow, Outlook, AWS, UBANK, Excel, Power BI",
                  "No single sign-on across systems",
                  "Missing master scheduler in ServiceNow",
                  "No dedicated space for solution design or documentation",
                  "Power BI dashboards lacking critical operational data",
                ]}
                impact="Constant context switching, data silos, and reduced productivity."
              />
              <ProblemTheme
                number="03"
                title="Communication & Collaboration Breakdowns"
                summary="Email was the default — and only — coordination mechanism."
                examples={[
                  "Over-dependence on email for internal and customer communication",
                  "Escalations handled verbally or via Microsoft Teams",
                  "No in-app escalation alerts or notifications",
                  "No self-service escalation options for customers",
                  "No internal chat or collaboration layer within ServiceNow",
                ]}
                impact="Missed updates, delayed responses, and reactive firefighting."
              />
              <ProblemTheme
                number="04"
                title="Visibility & Accountability Gaps"
                summary="Teams lacked real-time operational visibility at every level."
                examples={[
                  "No centralized dashboards for task status, SLA breaches, ticket aging, or team workload",
                  "No effort tracking for auto-resolved tickets",
                  "Manual and inconsistent reporting processes",
                  "Limited visibility into unassigned or blocked work",
                ]}
                impact="Managers were reactive rather than proactive — bottlenecks were discovered too late."
              />
              <ProblemTheme
                number="05"
                title="People, Roles & Skill Challenges"
                summary="Operational complexity was amplified by role ambiguity."
                examples={[
                  "Long onboarding cycles due to lack of structured training",
                  "Merged roles requiring simultaneous phone handling and troubleshooting",
                  "Unclear ownership across ticket lifecycles",
                  "Poor communication of policies and performance expectations",
                  "High dependency on experienced individuals as single points of knowledge",
                ]}
                impact="Inconsistent execution, slower ramp-up, and uneven team performance."
              />
              <ProblemTheme
                number="06"
                title="Usability Challenges in ServiceNow"
                summary="Even when automation existed, the UX slowed users down."
                examples={[
                  "Excessive clicks and scrolling to complete routine tasks",
                  "Too many tabs open per order or ticket",
                  "Irrelevant information hierarchy surfacing wrong data",
                  "Read and edit modes not clearly distinguished",
                  "Page refreshes losing scroll position mid-task",
                  "No daily task views or role-specific dashboards",
                ]}
                impact="Increased task completion time and significant cognitive load."
              />
            </div>

            {/* Quotes */}
            <div className="grid md:grid-cols-2 gap-4">
              <QuoteCard
                quote="I open Excel before ServiceNow every morning. That's just how it works."
                role="Service Delivery Lead"
              />
              <QuoteCard
                quote="By the time I find out an SLA is about to breach, it's already breached."
                role="SLA Manager"
              />
              <QuoteCard
                quote="I have 12 tabs open at any time. Every tool is its own world."
                role="Provisioning Engineer"
              />
              <QuoteCard
                quote="New joiners take 3-4 months to be independently productive. There's no other way."
                role="Account Delivery Head"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Opportunities */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <SectionLabel>07 · Design Opportunities</SectionLabel>
          <h2 className="text-3xl font-bold text-stone-800 mb-4">6 high-impact opportunity areas</h2>
          <p className="text-stone-600 leading-relaxed mb-10 max-w-2xl">
            Based on synthesis, we identified opportunity areas aligned with the Telco AI 360 vision — each grounded in direct research evidence.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <OpportunityCard
              number="01"
              title="Workflow Automation & Standardization"
              accent
              items={[
                "Standardized, role-based task sequences",
                "Automated sub-task generation",
                "Parent–child ticket logic for bulk operations",
                "Reduced dependency on Excel and email",
              ]}
            />
            <OpportunityCard
              number="02"
              title="Unified Visibility & Dashboards"
              items={[
                "Real-time dashboards for task status, ticket aging, escalations, and team workload",
                "Individual and team-level performance visibility",
                "Visibility into effort for auto-resolved tickets",
              ]}
            />
            <OpportunityCard
              number="03"
              title="Intelligent Assignment & Scheduling"
              items={[
                "Master scheduler for delivery planning",
                "Skill- and availability-based task assignment",
                "Dependency-aware task sequencing",
                "Better support for night shifts and workload balancing",
              ]}
            />
            <OpportunityCard
              number="04"
              title="SLA & Performance Intelligence"
              items={[
                "Automated SLA tagging and hold-time calculations",
                "Consolidated SLA reports replacing Excel",
                "Early SLA breach alerts and proactive notifications",
                "Response-time tracking per role and team",
              ]}
            />
            <OpportunityCard
              number="05"
              title="Communication & Notification Layer"
              items={[
                "In-app notifications for task completion, dependencies, and escalations",
                "Unified customer communication threads inside tickets",
                "Reduced reliance on email and verbal follow-ups",
              ]}
            />
            <OpportunityCard
              number="06"
              title="UX Improvements in ServiceNow"
              items={[
                "Role-specific views with relevant information only",
                "Reduced clicks and persistent scroll position",
                "Clear read vs edit state distinction",
                "Structured note templates and daily task lists",
              ]}
            />
          </div>
        </motion.div>
      </section>

      {/* Research Impact */}
      <section className="bg-[#faf6ef] px-6 py-20 border-y border-stone-200">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SectionLabel>08 · Research Impact</SectionLabel>
            <h2 className="text-3xl font-bold text-stone-800 mb-8">How research shaped the product roadmap</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Workflow-first, not feature-first", detail: "Research shifted focus from adding new features to redesigning broken workflows — a fundamental reframing of the product strategy." },
                { title: "AI placement grounded in evidence", detail: "Identified specific workflow points where AI could assist — smart routing, classification, and recommendations — rather than applying AI speculatively." },
                { title: "Automation ROI prioritization", detail: "Identified which automations would deliver the highest operational return — Excel elimination, automated task assignment, and SLA alerting ranked highest." },
                { title: "Design decisions rooted in observed behavior", detail: "Every design direction was traceable to a specific observed workflow, interview quote, or clustered pain point — not assumption." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-stone-200">
                  <p className="font-semibold text-stone-800 mb-2">{item.title}</p>
                  <p className="text-stone-600 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expected Impact */}
      <section className="bg-[#1a1814] px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SectionLabel>09 · Expected Impact</SectionLabel>
            <h2 className="text-3xl font-bold text-white mb-8">If implemented, these changes would:</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Significantly reduce manual effort and Excel dependency across all roles",
                "Shorten order fulfillment and ticket resolution cycles",
                "Improve SLA compliance and reporting accuracy",
                "Reduce escalations through proactive visibility and early alerting",
                "Improve onboarding speed and new-joiner confidence",
                "Enable operational scale without proportional headcount increase",
              ].map((item, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-5 border border-white/10">
                  <span className="text-orange-400 font-bold text-sm block mb-2">{`0${i + 1}`}</span>
                  <p className="text-white/80 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reflections */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <SectionLabel>10 · Reflections</SectionLabel>
          <h2 className="text-3xl font-bold text-stone-800 mb-8">What this project reinforced</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Clarity beats feature count", detail: "In complex operational systems, clarity, visibility, and automation matter more than the number of features available. Every additional capability without workflow coherence adds friction." },
              { title: "End-to-end research reveals structural causes", detail: "By studying workflows across roles from end to end, we moved beyond surface usability issues and uncovered the structural reasons behind inefficiency." },
              { title: "UX influence extends beyond screens", detail: "The research demonstrated how UX can influence not just interface design, but organizational effectiveness, service quality, and team confidence." },
              { title: "Enterprise research requires political navigation", detail: "Getting access to the right people, at the right depth, in a large telecom organization required as much stakeholder relationship work as it did research skill." },
            ].map((r, i) => (
              <div key={i} className="bg-[#faf6ef] rounded-2xl p-6 border border-stone-200">
                <p className="font-bold text-stone-800 mb-2">{r.title}</p>
                <p className="text-stone-600 text-sm leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* NDA Gate */}
      <section className="px-6 py-20 bg-[#faf6ef] border-t border-stone-200">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-stone-200 bg-white overflow-hidden"
          >
            <div className="bg-[#1a1814] px-10 py-12 flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">Confidential Work · NDA</p>
                <h3 className="text-2xl font-bold text-white mb-2">Designs & Final Flows Available on Request</h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-xl">
                  The wireframes, high-fidelity designs, interaction flows, and service blueprints produced from this research are protected under a non-disclosure agreement and cannot be shared publicly.
                </p>
              </div>
            </div>
            <div className="px-10 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <p className="text-stone-500 text-sm leading-relaxed max-w-lg">
                If you&apos;re a recruiter, design lead, or collaborator and would like to see the full design deliverables, reach out directly — I&apos;m happy to walk you through the work in a private session.
              </p>
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white text-sm font-semibold rounded-full hover:bg-orange-700 transition-colors whitespace-nowrap shrink-0"
              >
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back */}
      <section className="border-t border-stone-200 px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-800 transition-colors font-medium text-sm group">
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}
