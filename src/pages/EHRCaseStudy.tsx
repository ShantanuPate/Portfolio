import { Link } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Group340861 from "../imports/Group34086-1";
import imgHospital from "../imports/ContainerMargin-1/21fc9f9c07531f4765b65c7b97cda6ef8b4c51ef.png";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="h-px w-8 bg-black/20" />
      <span className="font-['JetBrains_Mono',sans-serif] text-[12px] text-black/50 tracking-[1.4px] uppercase">{children}</span>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[28px] text-[#1a1814] mb-6 leading-tight">{children}</h2>
  );
}

function BodyText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`font-['DM_Sans',sans-serif] text-[16px] text-[#4a4540] leading-[1.75] ${className}`}>{children}</p>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-3 py-1 bg-[#f0faf5] border border-[#005741]/20 text-[#005741] text-[12px] font-['DM_Sans',sans-serif] font-medium rounded-full">{children}</span>
  );
}

function InsightCard({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <div className="bg-[#ffeee6] rounded-[16px] p-6 flex gap-4">
      <div className="font-['JetBrains_Mono',sans-serif] text-[12px] text-[#f27430] mt-0.5 shrink-0">{number}</div>
      <div>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] text-[#1a1814] mb-2">{title}</p>
        <p className="font-['DM_Sans',sans-serif] text-[14px] text-[#6b5f58] leading-[1.6]">{body}</p>
      </div>
    </div>
  );
}

function QuoteCard({ quote, attribution }: { quote: string; attribution: string }) {
  return (
    <div className="border-l-4 border-[#005741] pl-6 py-2">
      <p className="font-['Plus_Jakarta_Sans',sans-serif] italic text-[18px] text-[#1a1814] leading-[1.5] mb-3">"{quote}"</p>
      <p className="font-['JetBrains_Mono',sans-serif] text-[12px] text-[#9b8f83] tracking-[0.5px]">— {attribution}</p>
    </div>
  );
}

function StatCard({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div className="bg-white rounded-[20px] border border-stone-200 p-6 text-center">
      <div className="font-['Plus_Jakarta_Sans',sans-serif] font-black text-[36px] text-[#005741] mb-1">{value}</div>
      <div className="font-['DM_Sans',sans-serif] font-medium text-[14px] text-[#1a1814]">{label}</div>
      {sub && <div className="font-['DM_Sans',sans-serif] text-[12px] text-[#9b8f83] mt-1">{sub}</div>}
    </div>
  );
}

function ProblemItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-2 h-2 rounded-full bg-[#f27430] mt-2.5 shrink-0" />
      <div>
        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] text-[#1a1814] mb-1">{title}</p>
        <p className="font-['DM_Sans',sans-serif] text-[14px] text-[#6b5f58] leading-[1.65]">{body}</p>
      </div>
    </div>
  );
}

// ── SVG helpers ───────────────────────────────────────────────

function Pill({ cx, cy, w, h = 28, text, dark = false, accent = false, outlined = false, fs = 10 }: {
  cx: number; cy: number; w: number; h?: number; text: string;
  dark?: boolean; accent?: boolean; outlined?: boolean; fs?: number;
}) {
  const fill = dark ? "#1a1814" : accent ? "#005741" : outlined ? "transparent" : "#f0faf5";
  const txtFill = dark || accent ? "white" : outlined ? "#1a1814" : "#005741";
  return (
    <g>
      <rect x={cx - w / 2} y={cy - h / 2} width={w} height={h} rx={h / 2}
        fill={fill} stroke={outlined ? "#1a1814" : "none"} strokeWidth={outlined ? 1.5 : 0} />
      <text x={cx} y={cy + fs * 0.38} textAnchor="middle" fill={txtFill}
        fontSize={fs} fontWeight="600" fontFamily="DM Sans, sans-serif">{text}</text>
    </g>
  );
}

function SmallPill({ cx, cy, text }: { cx: number; cy: number; text: string }) {
  const w = Math.max(58, text.length * 4.6);
  return (
    <g>
      <rect x={cx - w / 2} y={cy - 9} width={w} height={18} rx={9}
        fill="#f0faf5" stroke="#005741" strokeWidth={0.5} strokeOpacity={0.5} />
      <text x={cx} y={cy + 2.8} textAnchor="middle" fill="#005741"
        fontSize={6.5} fontFamily="DM Sans, sans-serif">{text}</text>
    </g>
  );
}

function Label({ x, y, text, size = 7 }: { x: number; y: number; text: string; size?: number }) {
  const lines = text.split('\n');
  return (
    <text textAnchor="middle" fill="#4a4540" fontSize={size} fontFamily="DM Sans, sans-serif">
      {lines.map((ln, i) => (
        <tspan key={i} x={x} y={y + i * (size * 1.4) - ((lines.length - 1) * size * 0.7)}>{ln}</tspan>
      ))}
    </text>
  );
}

// ── Visualization 1: Information Sharing Over the Years ────────
function InfoSharingTimeline() {
  return (
    <div
      className="rounded-[20px] border border-stone-200 bg-[#f9faff] mt-8 relative overflow-hidden"
      style={{ height: "480px" }}
    >
      <Group340861 />
    </div>
  );
}

// ── Visualization 2: Typical EMR System ───────────────────────
function EMRSystemDiagram() {
  const rCx = 280, rCy = 188;
  const spokes = [
    { cx: 280, cy: 65, label: "Patient" },
    { cx: 438, cy: 142, label: "Doctor" },
    { cx: 406, cy: 294, label: "Pharmacist" },
    { cx: 280, cy: 328, label: "Database", outlined: true },
    { cx: 154, cy: 294, label: "Payer" },
    { cx: 122, cy: 142, label: "Caregiver" },
  ];
  const subs: Array<{ label: string; cx: number; cy: number; pi: number }> = [
    { label: "Website", cx: 172, cy: 22, pi: 0 },
    { label: "Phone", cx: 275, cy: 14, pi: 0 },
    { label: "Calendar", cx: 385, cy: 22, pi: 0 },
    { label: "Savings card", cx: 174, cy: 46, pi: 0 },
    { label: "Activity tracker", cx: 388, cy: 46, pi: 0 },
    { label: "Symptoms checklist", cx: 526, cy: 90, pi: 1 },
    { label: "Patient portal", cx: 532, cy: 126, pi: 1 },
    { label: "Prescription", cx: 525, cy: 158, pi: 1 },
    { label: "Hospital", cx: 518, cy: 192, pi: 1 },
    { label: "Pharmacy Database", cx: 508, cy: 276, pi: 2 },
    { label: "Patient prescription", cx: 510, cy: 312, pi: 2 },
    { label: "Medication platform", cx: 504, cy: 346, pi: 2 },
    { label: "Patient Database", cx: 46, cy: 270, pi: 4 },
    { label: "Patient Profiles", cx: 40, cy: 308, pi: 4 },
    { label: "Insurance Policy", cx: 42, cy: 344, pi: 4 },
    { label: "Patient portal", cx: 22, cy: 92, pi: 5 },
    { label: "Prescription", cx: 14, cy: 132, pi: 5 },
    { label: "Patient support", cx: 18, cy: 172, pi: 5 },
  ];

  return (
    <div className="rounded-[20px] border border-stone-200 bg-[#f9faff] p-2 mt-8">
      <svg viewBox="-25 -10 610 380" className="w-full block">
        {spokes.map((s, i) => (
          <line key={i} x1={rCx} y1={rCy} x2={s.cx} y2={s.cy}
            stroke="#9b8f83" strokeWidth={1} />
        ))}
        {subs.map((s, i) => {
          const p = spokes[s.pi];
          return <line key={i} x1={p.cx} y1={p.cy} x2={s.cx} y2={s.cy}
            stroke="#d6cfc3" strokeWidth={0.8} />;
        })}
        {subs.map((s, i) => <SmallPill key={i} cx={s.cx} cy={s.cy} text={s.label} />)}
        <Pill cx={rCx} cy={rCy} w={118} h={36} text="Records Platform" dark fs={11} />
        {spokes.map((s, i) => (
          <Pill key={i} cx={s.cx} cy={s.cy} w={88} h={30}
            text={s.label} accent={!s.outlined} outlined={s.outlined} fs={10} />
        ))}
      </svg>
    </div>
  );
}

// ── Visualization 3: Information Sharing Flowchart ─────────────
function InfoSharingFlowchart() {
  return (
    <div className="rounded-[20px] border border-stone-200 bg-[#f9faff] p-4 mt-8">
      <svg viewBox="0 0 570 230" className="w-full block">
        <defs>
          <marker id="ehr-arr" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto">
            <polygon points="0 0, 7 3.5, 0 7" fill="#4a4540" />
          </marker>
        </defs>

        {/* L1 horizontal arrows */}
        <line x1={207} y1={45} x2={148} y2={45} stroke="#4a4540" strokeWidth={1} markerEnd="url(#ehr-arr)" />
        <line x1={359} y1={45} x2={412} y2={45} stroke="#4a4540" strokeWidth={1} markerEnd="url(#ehr-arr)" />

        {/* L1 pills */}
        <Pill cx={96} cy={45} w={108} h={28} text="Medical software & apps" fs={7} />
        <Pill cx={283} cy={45} w={148} h={30} text="Health Information Tech" dark fs={9} />
        <Pill cx={460} cy={45} w={90} h={28} text="Telehealth" fs={8} />

        {/* L1 → L2 branch */}
        <line x1={283} y1={61} x2={283} y2={80} stroke="#4a4540" strokeWidth={1} />
        <line x1={148} y1={80} x2={420} y2={80} stroke="#4a4540" strokeWidth={1} />
        <line x1={148} y1={80} x2={148} y2={98} stroke="#4a4540" strokeWidth={1} markerEnd="url(#ehr-arr)" />
        <line x1={283} y1={80} x2={283} y2={98} stroke="#4a4540" strokeWidth={1} markerEnd="url(#ehr-arr)" />
        <line x1={420} y1={80} x2={420} y2={98} stroke="#4a4540" strokeWidth={1} markerEnd="url(#ehr-arr)" />

        {/* L2 pills */}
        <Pill cx={148} cy={118} w={122} h={28} text="Electronic Medical Record" fs={7} />
        <Pill cx={283} cy={118} w={122} h={30} text="Electronic Health Record" accent fs={7} />
        <Pill cx={420} cy={118} w={118} h={28} text="Personal Health Record" fs={7} />

        {/* L2 → L3 branch */}
        <line x1={283} y1={134} x2={283} y2={155} stroke="#4a4540" strokeWidth={1} />
        <line x1={78} y1={155} x2={496} y2={155} stroke="#4a4540" strokeWidth={1} />
        <line x1={78} y1={155} x2={78} y2={173} stroke="#4a4540" strokeWidth={1} markerEnd="url(#ehr-arr)" />
        <line x1={212} y1={155} x2={212} y2={173} stroke="#4a4540" strokeWidth={1} markerEnd="url(#ehr-arr)" />
        <line x1={354} y1={155} x2={354} y2={173} stroke="#4a4540" strokeWidth={1} markerEnd="url(#ehr-arr)" />
        <line x1={496} y1={155} x2={496} y2={173} stroke="#4a4540" strokeWidth={1} markerEnd="url(#ehr-arr)" />

        {/* L3 pills */}
        <Pill cx={78} cy={193} w={110} h={28} text="Health Information Exchange" outlined fs={6.5} />
        <Pill cx={212} cy={193} w={108} h={28} text="Care Coordination" fs={7.5} />
        <Pill cx={354} cy={193} w={112} h={28} text="Medication Management" fs={7.5} />
        <Pill cx={496} cy={193} w={112} h={28} text="Centralized Patient Info" fs={7} />
      </svg>
    </div>
  );
}

export function EHRCaseStudy() {
  return (
    <div className="bg-[#faf6ef] min-h-screen w-full">

      {/* ── Header ─────────────────────────────────────────────── */}
      <header className="bg-[#ffeee6] pt-10 pb-20 px-6 w-full">
        <div className="max-w-6xl mx-auto flex items-center justify-between mb-24">
          <Link to="/" className="flex items-center gap-2 text-[#9b8f83] font-['DM_Sans',sans-serif] font-medium text-[14px] hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-4 h-4" /> Back to Work
          </Link>
          <div className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[#1a1814] text-[15px]">Shantanu.</div>
        </div>
        <div className="max-w-4xl mx-auto">
          <SectionLabel>Case Study</SectionLabel>
          <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[52px] md:text-[68px] text-[#1a1814] leading-[1.05] mb-6">
            EHR Healthcare System
          </h1>
          <p className="font-['DM_Sans',sans-serif] text-[18px] text-[#9b8f83] leading-[1.6] max-w-3xl mb-10">
            A comprehensive UX research study into the adoption, usability, and structural failures of Electronic Health Record systems in India — from contextual inquiry to design opportunity mapping.
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40 shrink-0"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
              <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#1a1814]">Healthcare · Enterprise · UX Research</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40 shrink-0"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#1a1814]">2024</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40 shrink-0"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <span className="font-['DM_Sans',sans-serif] text-[14px] text-[#1a1814]">UX Researcher & Design Strategist</span>
            </div>
          </div>
        </div>
      </header>

      {/* ── Summary Grid ───────────────────────────────────────── */}
      <section className="bg-[#eae0d0] w-full py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-[#1a1814] mb-3">Research Question</h3>
            <p className="font-['DM_Sans',sans-serif] text-[14px] text-[#9b8f83] leading-[1.6]">What systemic, infrastructural, and usability barriers prevent effective EHR adoption across India's public and private healthcare landscape?</p>
          </div>
          <div>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-[#1a1814] mb-3">Methods</h3>
            <p className="font-['DM_Sans',sans-serif] text-[14px] text-[#9b8f83] leading-[1.6]">Expert interviews (NHA), secondary research, user surveys, contextual observation, persona development, journey mapping, competitive benchmarking.</p>
          </div>
          <div>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-[#1a1814] mb-3">Output</h3>
            <p className="font-['DM_Sans',sans-serif] text-[14px] text-[#9b8f83] leading-[1.6]">Stakeholder map, two validated personas, dual user journey maps, and a prioritised design opportunity framework across five themes.</p>
          </div>
        </div>
      </section>

      {/* ── Main Body ──────────────────────────────────────────── */}
      <main className="w-full py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-32">

          {/* 01 — Context */}
          <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <SectionLabel>01 — Context</SectionLabel>
            <SectionHeading>Why Healthcare Records Matter in India</SectionHeading>
            <div className="space-y-4 mb-10">
              <BodyText>The Indian healthcare sector is undergoing a fundamental transformation. For decades, patient records lived in manila folders, handwritten notebooks, and disconnected ledgers. The arrival of Electronic Health Records promised to fix this — but the transition has created as many problems as it has solved.</BodyText>
              <BodyText>India's public health sector handles 18% of total outpatient care and 44% of total inpatient care. The industry was valued at over $370 billion in 2022, growing to $372 billion in 2023, with projections reaching $638 billion by 2025. The scale of the system means that usability failures in EHR software have direct consequences at population scale.</BodyText>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <StatCard value="$638B" label="Projected market by 2025" sub="India healthcare industry" />
              <StatCard value="44%" label="Inpatient care" sub="Public sector share" />
              <StatCard value="18%" label="Outpatient care" sub="Public sector share" />
              <StatCard value="1.4B+" label="Population" sub="Context for scale" />
            </div>

            <div className="bg-[#f9faff] rounded-[20px] p-8 border border-stone-200">
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] text-[#005741] uppercase tracking-wider mb-4">My Perspective on Healthcare</p>
              <BodyText>Healthcare is the maintenance or improvement of health through prevention, diagnosis, treatment, and management of disease, illness, injury, and other physical and mental impairments. It's delivered through a complex web of professionals and institutions — and in India, that web has historically been poorly connected. EHR is an attempt to create connective tissue. But you can't design connective tissue without first understanding what it's trying to connect.</BodyText>
            </div>
            <div className="pt-8">
              <div className="h-[461px] relative rounded-[20px] w-full overflow-hidden">
                <img alt="Hospital room with medical equipment and beds" className="absolute inset-0 max-w-none object-bottom size-full rounded-[20px]" src={imgHospital} />
              </div>
            </div>
          </motion.section>

          {/* 02 — Problem Space */}
          <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <SectionLabel>02 — Problem Space</SectionLabel>
            <SectionHeading>Six Structural Failures in Indian Healthcare</SectionHeading>
            <BodyText className="mb-10">Before investigating EHR specifically, I needed to understand the broader system it operates within. Secondary research surfaced six compounding problems that shape why digital health adoption is so difficult.</BodyText>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <ProblemItem title="Inadequate Infrastructure" body="India has a shortage of healthcare facilities, especially in rural areas where the majority of the population resides. Many primary health centres lack essential equipment and reliable power — preconditions for any digital system." />
                <ProblemItem title="Shortage of Healthcare Professionals" body="A critical national deficit of doctors, nurses, and paramedical staff. This shortage is most severe in rural areas, creating a dual crisis: not enough people to deliver care, and not enough people to operate and maintain digital systems." />
                <ProblemItem title="Urban-Rural Disparities" body="Urban areas have better infrastructure, skilled professionals, and specialised care. Rural areas struggle with inadequate facilities. Any EHR solution must work across both contexts or it will serve only the already-served." />
              </div>
              <div className="space-y-6">
                <ProblemItem title="Financial Constraints & Low Insurance Coverage" body="High out-of-pocket expenses burden most Indians. Limited health insurance penetration means patients delay or avoid treatments — and are reluctant to invest time in learning new digital systems that seem to serve the hospital more than them." />
                <ProblemItem title="Fragmented System & Inequity in Access" body="India's healthcare system is a complex mix of public and private providers with widely varying quality and regulation. Socioeconomic and regional disparities mean EHR implementations are inconsistent, siloed, and often incompatible." />
                <ProblemItem title="Growing Non-Communicable Disease Burden" body="Conditions like diabetes and cardiovascular disease are rising sharply, putting additional strain on a system already managing tuberculosis, malaria, and HIV/AIDS. This increases the volume and complexity of records that EHR systems must handle." />
              </div>
            </div>
          </motion.section>

          {/* 03 — Key Terminologies */}
          <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <SectionLabel>03 — Foundational Concepts</SectionLabel>
            <SectionHeading>Defining the Terrain: HIE, EHR, and EMR</SectionHeading>
            <BodyText className="mb-8">A rigorous research project begins with precise definitions. The conflation of HIE, EHR, and EMR is pervasive — even among healthcare professionals — and it creates misaligned expectations about what digital health systems can and cannot do.</BodyText>
            <div className="space-y-4 mb-10">
              {[
                { term: "HIE — Health Information Exchange", color: "bg-[#005741]", body: "The electronic sharing of health-related information between healthcare organisations. HIE allows patients and professionals to securely share medical information — lab orders, referrals, discharge summaries — across institutional boundaries. It is the infrastructure that makes EHR meaningful at a population level." },
                { term: "EHR — Electronic Health Record", color: "bg-[#f27430]", body: "A comprehensive, longitudinal digital record of a patient's medical history, accessible from multiple healthcare settings. EHRs include demographics, medical history, immunisations, medications, vital signs, lab results, and physician notes. They are designed to improve care quality by giving providers complete, current information." },
                { term: "EMR — Electronic Medical Record", color: "bg-[#1a1814]", body: "The digital equivalent of a paper chart in a single provider's office. EMRs contain diagnoses, notes, medication information, lab results, and immunisation records — but only from that one setting. Unlike EHRs, they are not designed for cross-institutional sharing. Most Indian facilities still operate at this level." },
              ].map(({ term, color, body }) => (
                <div key={term} className="flex gap-0 rounded-[16px] overflow-hidden border border-stone-200">
                  <div className={`${color} w-1.5 shrink-0`} />
                  <div className="bg-white p-6 flex-1">
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] text-[#1a1814] mb-2">{term}</p>
                    <p className="font-['DM_Sans',sans-serif] text-[14px] text-[#6b5f58] leading-[1.65]">{body}</p>
                  </div>
                </div>
              ))}
            </div>
            <InfoSharingFlowchart />
            <div className="bg-[#ffeee6] rounded-[20px] p-8 mt-8">
              <p className="font-['JetBrains_Mono',sans-serif] text-[12px] text-[#f27430] uppercase tracking-wider mb-3">Key EHR Data Components</p>
              <div className="flex flex-wrap gap-2">
                {["Demographics", "Medical History", "Immunisation Records", "Medication Lists", "Vital Signs", "Lab Results", "Progress Notes", "Treatment Plans", "Allergy Information", "Family History", "Surgical Records"].map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
          </motion.section>

          {/* 04 — Research Methodology */}
          <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <SectionLabel>04 — Research Methodology</SectionLabel>
            <SectionHeading>How I Approached This Study</SectionHeading>
            <BodyText className="mb-10">This was a mixed-methods study structured in five phases, moving from secondary research to expert access to direct user inquiry. Each phase was designed to answer a different layer of the research question.</BodyText>
            <div className="space-y-4">
              {[
                { phase: "Phase 01", title: "Secondary Research", desc: "Systematic review of EHR literature, government frameworks (ABDM, Ayushman Bharat Digital Mission), and vendor documentation. Goal: understand the regulatory and market landscape before forming hypotheses.", time: "Weeks 1–2" },
                { phase: "Phase 02", title: "Expert Interview — NHA", desc: "In-depth interview with a Product Manager from the National Health Authority. This gave direct access to policy intent, known barriers, and the government's mental model of digital health adoption.", time: "Week 3" },
                { phase: "Phase 03", title: "User Surveys", desc: "Structured surveys targeting both patients and healthcare professionals to understand lived experience with health record management. Surveys are efficient for capturing a wide sample on attitude and behaviour.", time: "Weeks 4–5" },
                { phase: "Phase 04", title: "Persona Development & Journey Mapping", desc: "Synthesis of qualitative and quantitative findings into two validated personas and dual journey maps — one for the patient, one for the doctor. This grounded abstract insights in real human behaviour.", time: "Weeks 6–7" },
                { phase: "Phase 05", title: "Competitive Benchmarking", desc: "Evaluation of existing platforms (Apollo 24/7 and others) against research-derived criteria. Identified what the market is getting right and where the critical gaps remain.", time: "Week 8" },
              ].map(({ phase, title, desc, time }) => (
                <div key={phase} className="flex gap-0 overflow-hidden rounded-[16px] border border-stone-200">
                  <div className="bg-[#1a1814] text-white px-5 py-6 flex flex-col items-center justify-center gap-1 min-w-[100px] text-center shrink-0">
                    <span className="font-['JetBrains_Mono',sans-serif] text-[10px] text-[#f27430] tracking-[1px]">{phase}</span>
                    <span className="font-['DM_Sans',sans-serif] text-[11px] text-white/50">{time}</span>
                  </div>
                  <div className="bg-white p-6 flex-1">
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] text-[#1a1814] mb-1">{title}</p>
                    <p className="font-['DM_Sans',sans-serif] text-[14px] text-[#6b5f58] leading-[1.65]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 05 — Expert Interview */}
          <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <SectionLabel>05 — Expert Access</SectionLabel>
            <SectionHeading>The NHA Interview: Policy Meets Reality</SectionHeading>
            <BodyText className="mb-8">During the initial stages of this project, I had the opportunity to interview a Product Manager at the National Health Authority — the government body responsible for India's Ayushman Bharat Digital Mission (ABDM). This conversation was the single most important input to the research.</BodyText>
            <div className="bg-[#004852] rounded-[24px] p-8 md:p-10 mb-8">
              <p className="font-['JetBrains_Mono',sans-serif] text-[12px] text-[#00d27e] uppercase tracking-wider mb-6">The Critical Question Raised</p>
              <QuoteCard quote="Why would people want to share their private health information?" attribution="Product Manager, National Health Authority (NHA)" />
              <p className="font-['DM_Sans',sans-serif] text-[14px] text-white/70 leading-[1.6] mt-6">This question, posed by someone designing the national infrastructure, reframed the entire research. The challenge isn't purely technical — it's about trust, agency, and whether citizens believe the system is designed for them or against them.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-[#1a1814] mb-4">Observations from the Interview</p>
                <div className="space-y-3">
                  {[
                    "Healthcare data is extremely sensitive and personal — handling it requires not just security, but perceived security from the user's perspective.",
                    "Understanding user psychology — both patients and doctors — is non-negotiable before designing any health data system.",
                    "Policy intent and user mental models are frequently misaligned. The NHA's vision of interoperability means little to a patient worried about data misuse.",
                    "Trust is infrastructure. Without it, even technically excellent EHR systems will face adoption resistance.",
                  ].map((obs, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="w-5 h-5 rounded-full bg-[#00d27e]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#005741]" />
                      </div>
                      <p className="font-['DM_Sans',sans-serif] text-[14px] text-[#4a4540] leading-[1.65]">{obs}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-[#1a1814] mb-4">How It Changed the Research</p>
                <BodyText>I had entered this interview expecting to learn about technical implementation. What I got instead was a design challenge framed around human trust. This shifted my survey design, persona construction, and journey mapping to centre privacy perception and control as first-order concerns — not secondary features.</BodyText>
                <div className="mt-4 p-4 bg-[#f0faf5] rounded-[12px] border border-[#005741]/20">
                  <p className="font-['JetBrains_Mono',sans-serif] text-[11px] text-[#005741] uppercase tracking-wider mb-2">Research Pivot</p>
                  <p className="font-['DM_Sans',sans-serif] text-[13px] text-[#4a4540]">Added trust and privacy as explicit dimensions in all subsequent survey questions and user journey touchpoints.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 06 — Stakeholder Map */}
          <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <SectionLabel>06 — Stakeholder Analysis</SectionLabel>
            <SectionHeading>Mapping the Ecosystem</SectionHeading>
            <BodyText className="mb-10">An EHR system does not serve one user — it serves an ecosystem. Before designing for any single persona, I mapped every stakeholder and their proximity to the patient's health data. Proximity to the patient indicates the stake each actor has in the data's accuracy, accessibility, and privacy.</BodyText>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                { role: "Patient", stake: "Primary", desc: "The source and subject of all health data. Has the most to gain and lose from how records are managed.", color: "bg-[#004852] text-white" },
                { role: "Personal Caregiver", stake: "High", desc: "Family members or designated caregivers who manage health information on behalf of the patient.", color: "bg-[#005741] text-white" },
                { role: "Healthcare Providers", stake: "High", desc: "Doctors, nurses, specialists. Need timely, accurate data to make clinical decisions.", color: "bg-[#00d27e]/20 text-[#004852]" },
                { role: "Insurance Providers", stake: "Medium", desc: "Require health data for claims processing. Risk of misaligned incentives with patient welfare.", color: "bg-[#ffeee6] text-[#1a1814]" },
                { role: "Governing Bodies (NHA, MoHFW)", stake: "Medium", desc: "Set policy, manage national infrastructure (ABDM), and bear accountability for systemic outcomes.", color: "bg-[#ffeee6] text-[#1a1814]" },
                { role: "MedTech & Research", stake: "Contextual", desc: "Secondary users of aggregated, anonymised data for product development and clinical research.", color: "bg-stone-100 text-[#1a1814]" },
              ].map(({ role, stake, desc, color }) => (
                <div key={role} className={`rounded-[16px] p-5 ${color}`}>
                  <div className="flex items-start justify-between mb-2 gap-2">
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] leading-tight">{role}</p>
                    <span className="font-['JetBrains_Mono',sans-serif] text-[10px] opacity-60 shrink-0 mt-0.5">{stake}</span>
                  </div>
                  <p className="font-['DM_Sans',sans-serif] text-[12px] opacity-80 leading-[1.5]">{desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-stone-100 rounded-[16px] p-5 border border-stone-200">
              <p className="font-['JetBrains_Mono',sans-serif] text-[11px] text-[#9b8f83] uppercase tracking-wider mb-2">Research Note</p>
              <p className="font-['DM_Sans',sans-serif] text-[13px] text-[#4a4540] leading-[1.6]">The proximity of a stakeholder to the patient indicates the importance of that stakeholder in the system with regards to the patient's health data. The further from the patient, the more aggregated and abstracted their relationship to the data — and the lower the risk to any individual if data quality is poor.</p>
            </div>
          </motion.section>

          {/* 07 — Survey Insights */}
          <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <SectionLabel>07 — Key Survey Findings</SectionLabel>
            <SectionHeading>What the Data Told Us</SectionHeading>
            <BodyText className="mb-4">Surveys are an efficient method for capturing attitude and behaviour from a large sample in minimal time. They work best when the research questions are well-formed — which, after the NHA interview, ours were.</BodyText>
            <BodyText className="mb-10">Key finding from method selection: <span className="font-medium text-[#1a1814]">Questions and surveys are best suited to projects where the sample size is large and the hypotheses are already shaped by qualitative insight.</span> This sequencing — interview first, survey second — is why the data was so actionable.</BodyText>
            <div className="grid md:grid-cols-2 gap-4">
              <InsightCard number="01" title="Trust in Online Consultation" body="People want trustworthy, online consultation from a notable doctor. The keyword is notable — credibility signals matter enormously. Anonymity in digital health increases friction." />
              <InsightCard number="02" title="Social Proof Before Commitment" body="People want to know about doctor reviews and ratings before booking an appointment. Patients apply e-commerce decision-making patterns to healthcare — a behaviour that most EHR interfaces ignore entirely." />
              <InsightCard number="03" title="Preference for Familiar Practitioners" body="Most people go for a family doctor when booking a consultation. Familiarity reduces anxiety. This has direct implications for continuity of care features in EHR design." />
              <InsightCard number="04" title="Privacy Distrust of Government Systems" body="A significant portion of respondents are sceptical about sharing private health information with government systems due to trust issues. This finding directly validated the NHA PM's question." />
              <InsightCard number="05" title="Document Management Burden" body="In regular visits to a doctor, patients carry multiple documents — often not knowing which are most relevant or recent. This creates both logistical and cognitive burden before care even begins." />
              <InsightCard number="06" title="System Performance Under Load" body="Large information systems tend to lag and freeze as user traffic and data increase. Performance is a trust signal — a system that crashes becomes a system that clinicians work around." />
            </div>
          </motion.section>

          {/* 08 — Personas */}
          <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <SectionLabel>08 — Persona Profiles</SectionLabel>
            <SectionHeading>Two People. One System. Different Failures.</SectionHeading>
            <BodyText className="mb-10">The research surfaced two distinct, non-overlapping experience breakdowns. The patient persona is characterised by confusion, burden, and privacy anxiety. The doctor persona is characterised by inefficiency, exhaustion, and a genuine desire to provide better care — if the tools would let them.</BodyText>

            {/* Patient Persona */}
            <div className="bg-[#fee4d7] rounded-[24px] overflow-hidden mb-8">
              <div className="bg-[#1a1814] p-6 flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-[#f27430]/30 flex items-center justify-center shrink-0">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f27430" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <div className="flex-1">
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[20px] text-white">The Patient</p>
                  <p className="font-['DM_Sans',sans-serif] text-[14px] text-white/60">Urban, mid-income, manages chronic condition</p>
                </div>
                <span className="bg-[#f27430] px-3 py-1.5 rounded-full font-['DM_Sans',sans-serif] font-bold text-[12px] text-white shrink-0">Primary Persona</span>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <p className="font-['JetBrains_Mono',sans-serif] text-[11px] text-[#f27430] uppercase tracking-wider mb-3">Personality</p>
                    <p className="font-['DM_Sans',sans-serif] text-[14px] text-[#1a1814] leading-[1.6]">Cautious, detail-oriented, health-conscious. Values trust and continuity. Increasingly comfortable with digital tools but deeply skeptical of government data systems.</p>
                  </div>
                  <div>
                    <p className="font-['JetBrains_Mono',sans-serif] text-[11px] text-[#f27430] uppercase tracking-wider mb-3">Core Needs</p>
                    <ul className="space-y-2">
                      {["Quick access to relevant records during consultations", "Confidence that health data is private and secure", "Clear, jargon-free presentation of health history", "Control over who sees what information"].map(n => (
                        <li key={n} className="font-['DM_Sans',sans-serif] text-[13px] text-[#1a1814] flex gap-2 items-start"><span className="text-[#f27430] mt-1 shrink-0">→</span>{n}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-['JetBrains_Mono',sans-serif] text-[11px] text-[#f27430] uppercase tracking-wider mb-3">Pain Points</p>
                    <ul className="space-y-2">
                      {["Loss of precious time finding the right documents before appointments", "Delay in finding the right doctor — no reliable quality signal", "Concerns about privacy when health information is shared or transferred", "Gaps in records due to poor management — leading to adverse care outcomes"].map(p => (
                        <li key={p} className="font-['DM_Sans',sans-serif] text-[13px] text-[#1a1814] flex gap-2 items-start"><span className="text-[#f27430] mt-1 shrink-0">×</span>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="border-t border-[#f27430]/20 pt-6">
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] text-[#1a1814] mb-4">What the Patient is Saying</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <QuoteCard quote="In regular visits I have to carry at least a few documents — I'm never sure if I have the right ones." attribution="Survey respondent, Patient" />
                    <QuoteCard quote="I'm worried about the secrecy of my health information when it's being shared and transferred." attribution="Survey respondent, Patient" />
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor Persona */}
            <div className="bg-[#f0faf5] rounded-[24px] overflow-hidden">
              <div className="bg-[#004852] p-6 flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-[#00d27e]/20 flex items-center justify-center shrink-0">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00d27e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <div className="flex-1">
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[20px] text-white">Dr. Gautam Thakur</p>
                  <p className="font-['DM_Sans',sans-serif] text-[14px] text-white/60">Family Physician & Consulting Homeopath · 31 years experience</p>
                </div>
                <span className="bg-[#00d27e] px-3 py-1.5 rounded-full font-['DM_Sans',sans-serif] font-bold text-[12px] text-[#004852] shrink-0">Clinical Persona</span>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <p className="font-['JetBrains_Mono',sans-serif] text-[11px] text-[#005741] uppercase tracking-wider mb-3">Background</p>
                    <p className="font-['DM_Sans',sans-serif] text-[14px] text-[#1a1814] leading-[1.6]">Dr. Thakur has 31 years of experience across inpatient department work and rural practice. He operates at the intersection of traditional and modern medicine — making him an ideal lens for understanding how digital tools fit into real clinical workflows.</p>
                  </div>
                  <div>
                    <p className="font-['JetBrains_Mono',sans-serif] text-[11px] text-[#005741] uppercase tracking-wider mb-3">Core Needs</p>
                    <ul className="space-y-2">
                      {["Instant access to complete patient history at point of care", "Tools that reduce documentation burden without sacrificing accuracy", "System reliability — crashes during consultations are unacceptable", "Predictive support for diagnosis and treatment decisions"].map(n => (
                        <li key={n} className="font-['DM_Sans',sans-serif] text-[13px] text-[#1a1814] flex gap-2 items-start"><span className="text-[#005741] mt-1 shrink-0">→</span>{n}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-['JetBrains_Mono',sans-serif] text-[11px] text-[#005741] uppercase tracking-wider mb-3">Pain Points</p>
                    <ul className="space-y-2">
                      {["Loss of time finding patient documents in high-volume clinics", "Maintaining a physical record for each patient is taxing and unsustainable", "Current digital systems do not support clinical decision-making meaningfully", "Patient records arrive incomplete, out of order, or not at all"].map(p => (
                        <li key={p} className="font-['DM_Sans',sans-serif] text-[13px] text-[#1a1814] flex gap-2 items-start"><span className="text-[#005741] mt-1 shrink-0">×</span>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="border-t border-[#005741]/20 pt-6">
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] text-[#1a1814] mb-4">What Dr. Thakur is Saying</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <QuoteCard quote="I want my patients to have a healthy and satisfied lifestyle." attribution="Dr. Gautam Thakur, Family Physician (31 years)" />
                    <QuoteCard quote="It would be very convenient for doctors to accurately predict the disease and its severity — if only the records were reliable." attribution="Dr. Gautam Thakur, on EHR potential" />
                  </div>
                  <QuoteCard quote="Maintaining a physical record for each patient is taxing and exhausting. Something has to change." attribution="Dr. Gautam Thakur, on the status quo" />
                </div>
              </div>
            </div>
          </motion.section>

          {/* 09 — User Journey Maps */}
          <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <SectionLabel>09 — Journey Mapping</SectionLabel>
            <SectionHeading>Following the Record Through the System</SectionHeading>
            <BodyText className="mb-10">User journey maps translate persona insights into temporal, emotional narratives. I mapped two journeys — the patient's experience of managing and sharing health records, and the doctor's experience of receiving and using them. The critical finding: these journeys are designed as if they exist in parallel universes, not as two halves of the same interaction.</BodyText>
            <div className="space-y-6">
              {[
                {
                  label: "Patient Journey",
                  color: "bg-[#ffeee6]",
                  accent: "#f27430",
                  stages: ["Scheduled", "Pre-Visit Prep", "Arrival", "Consultation", "Post-Visit"],
                  emotional: ["Anxious about forgetting documents", "Frustrated searching for records", "Rushed, carrying too much", "Relieved when doctor recognises them", "Uncertain about follow-up"],
                  opportunities: ["Smart document checklist by appointment type", "Pre-visit record sharing request flow", "AI-assisted record relevance filtering"],
                },
                {
                  label: "Doctor Journey",
                  color: "bg-[#f0faf5]",
                  accent: "#005741",
                  stages: ["Pre-Clinic Setup", "Patient Arrival", "Record Review", "Diagnosis", "Documentation"],
                  emotional: ["Optimistic at start of day", "Pressured as schedule fills", "Frustrated by incomplete records", "Focused and engaged during diagnosis", "Exhausted by end-of-day documentation"],
                  opportunities: ["Auto-populated consultation notes", "Patient history dashboard at-a-glance", "One-tap record request from patient"],
                },
              ].map(({ label, color, accent, stages, emotional, opportunities }) => (
                <div key={label} className={`${color} rounded-[20px] p-6 md:p-8`}>
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] text-[#1a1814] mb-6">{label}</p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <p className="font-['JetBrains_Mono',sans-serif] text-[10px] uppercase tracking-wider mb-3" style={{ color: accent }}>Journey Stages</p>
                      <div className="flex flex-col gap-2">
                        {stages.map((s, i) => (
                          <div key={s} className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[10px] font-bold shrink-0" style={{ color: accent }}>{i + 1}</div>
                            <span className="font-['DM_Sans',sans-serif] text-[13px] text-[#1a1814]">{s}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-['JetBrains_Mono',sans-serif] text-[10px] uppercase tracking-wider mb-3" style={{ color: accent }}>Emotional Arc</p>
                      <div className="flex flex-col gap-2">
                        {emotional.map(e => (
                          <p key={e} className="font-['DM_Sans',sans-serif] text-[12px] text-[#4a4540] leading-[1.5]">— {e}</p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-['JetBrains_Mono',sans-serif] text-[10px] uppercase tracking-wider mb-3" style={{ color: accent }}>Design Opportunities</p>
                      <div className="flex flex-col gap-2">
                        {opportunities.map(o => (
                          <div key={o} className="bg-white/60 rounded-[8px] px-3 py-2">
                            <p className="font-['DM_Sans',sans-serif] text-[12px] text-[#1a1814] leading-[1.4]">{o}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 10 — EHR Current State */}
          <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <SectionLabel>10 — System Analysis</SectionLabel>
            <SectionHeading>The Current State of EHR in India</SectionHeading>
            <BodyText className="mb-8">Secondary research revealed the distribution of information storage methods across the healthcare system — a mosaic of paper, siloed software, and early-stage digital adoption. The picture is neither uniformly bad nor uniformly promising.</BodyText>
            <BodyText className="mb-10">EHR implementation has uplifted the healthcare sector in measurable ways — but has also introduced new failure modes. Many facilities have systems that don't talk to each other, staff trained on one platform struggle with another, and patients have no visibility into or control over their records. Ongoing government and private sector efforts — notably ABDM's Unified Health Interface — aim to address interoperability, but the pace of standardisation lags the pace of deployment.</BodyText>
            <div className="space-y-4">
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] text-[#1a1814] mb-2">Four Critical Challenges</p>
              {[
                { title: "Lack of Interoperability", body: "Healthcare facilities use disparate systems that do not communicate with each other seamlessly. This hampers sharing of patient information and leads to inefficiencies in care delivery — the exact problem EHR was supposed to solve." },
                { title: "Data Privacy & Security Gaps", body: "Data breaches and unauthorised access to patient information highlight the need for robust security measures and strict adherence to privacy regulations such as India's Personal Data Protection Bill." },
                { title: "Infrastructure & Connectivity", body: "In many parts of India, especially rural areas, limited internet connectivity, electricity reliability, and hardware availability make effective EHR use impossible. No amount of good UX fixes a broken connection." },
                { title: "Health Literacy & User Training Gap", body: "Health literacy levels vary widely among providers and patients. Adequate training is rarely provided. The result: clinicians develop workarounds, patients disengage, and the system ossifies around its failure modes rather than evolving." },
              ].map(({ title, body }) => (
                <div key={title} className="bg-white rounded-[16px] border border-stone-200 p-6">
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] text-[#1a1814] mb-2">{title}</p>
                  <p className="font-['DM_Sans',sans-serif] text-[14px] text-[#4a4540] leading-[1.65]">{body}</p>
                </div>
              ))}
            </div>
            <EMRSystemDiagram />
          </motion.section>

          {/* 11 — Competitive Landscape */}
          <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <SectionLabel>11 — Competitive Landscape</SectionLabel>
            <SectionHeading>What Existing Platforms Do Well — and Don't</SectionHeading>
            <BodyText className="mb-10">Competitive benchmarking grounded the research in what's currently available to users. I evaluated platforms against the research-derived criteria: trust signals, record accessibility, interoperability, onboarding, and privacy controls.</BodyText>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { platform: "Apollo 24/7", type: "Comprehensive Platform", desc: "Round-the-clock access to doctors, diagnostics, and medicines. Strong on appointment booking and teleconsultation. Weaker on longitudinal record management and data portability.", strengths: ["Teleconsultation UX", "Appointment booking", "Pharmacy integration"], gaps: ["Record portability", "Interoperability", "Privacy controls"] },
                { platform: "Government ABDM", type: "National Infrastructure", desc: "The Ayushman Bharat Digital Mission's Unified Health Interface aims to create a federated health record ecosystem. Ambitious in scope but nascent in execution and low in user awareness.", strengths: ["Policy backing", "Interoperability vision", "Universal coverage intent"], gaps: ["User awareness", "Trust perception", "Clinical tool integration"] },
                { platform: "Paper + WhatsApp", type: "De Facto Solution", desc: "The dominant system in most Indian clinics. Effective for familiarity and accessibility, but catastrophic for continuity, legibility, and privacy. Its dominance is a design indictment.", strengths: ["Familiarity", "Zero training", "Immediate access"], gaps: ["Privacy", "Longitudinal continuity", "Clinical decision support"] },
              ].map(({ platform, type, desc, strengths, gaps }) => (
                <div key={platform} className="bg-white rounded-[20px] border border-stone-200 p-6 flex flex-col gap-4">
                  <div>
                    <p className="font-['JetBrains_Mono',sans-serif] text-[10px] text-[#9b8f83] uppercase tracking-wider mb-1">{type}</p>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] text-[#1a1814]">{platform}</p>
                  </div>
                  <p className="font-['DM_Sans',sans-serif] text-[13px] text-[#4a4540] leading-[1.6] flex-1">{desc}</p>
                  <div>
                    <p className="font-['DM_Sans',sans-serif] text-[11px] font-bold text-[#005741] uppercase tracking-wider mb-2">Strengths</p>
                    {strengths.map(s => <p key={s} className="font-['DM_Sans',sans-serif] text-[12px] text-[#4a4540]">+ {s}</p>)}
                  </div>
                  <div>
                    <p className="font-['DM_Sans',sans-serif] text-[11px] font-bold text-[#f27430] uppercase tracking-wider mb-2">Gaps</p>
                    {gaps.map(g => <p key={g} className="font-['DM_Sans',sans-serif] text-[12px] text-[#4a4540]">− {g}</p>)}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 12 — Design Opportunities */}
          <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <SectionLabel>12 — Design Opportunities</SectionLabel>
            <SectionHeading>From Research to Direction</SectionHeading>
            <BodyText className="mb-10">The research produced five prioritised design opportunity themes. These are not feature requests — they are directions informed by evidence, each traceable to specific findings from the study.</BodyText>
            <div className="space-y-4">
              {[
                { priority: "P0", theme: "Trust Architecture", from: "NHA interview + survey respondents sceptical of government data systems", opp: "Design explicit consent flows, granular sharing controls, and visible audit trails. Trust must be demonstrable, not assumed. Every data-sharing action should feel like an informed choice.", color: "bg-[#004852] text-white" },
                { priority: "P1", theme: "Record Accessibility & Relevance", from: "Patient persona: 'loss of precious time finding documents'; Doctor persona: incomplete records at point of care", opp: "Smart record surfacing — contextual filtering by appointment type, clinician specialty, and recency. Patients should arrive at consultations with exactly the right documents, automatically prepared.", color: "bg-[#005741] text-white" },
                { priority: "P1", theme: "Clinical Decision Support", from: "Dr. Thakur: 'Would be very convenient for doctors to accurately predict disease and severity'", opp: "Surface longitudinal health patterns, flag anomalies, and surface relevant clinical evidence within the consultation flow — not as a separate tool, but embedded in the record view.", color: "bg-[#ffeee6] text-[#1a1814]" },
                { priority: "P2", theme: "Documentation Efficiency", from: "Dr. Thakur: 'Maintaining a physical record for each patient is taxing and exhausting'", opp: "Structured note templates, voice-to-text input, and auto-population from previous visits. Reduce documentation from a post-consultation burden to an ambient, low-friction activity.", color: "bg-[#ffeee6] text-[#1a1814]" },
                { priority: "P2", theme: "Offline-First & Performance", from: "Survey finding: systems lag and freeze under load; rural infrastructure gap", opp: "Progressive web app architecture with offline data sync. Critical clinical information must be available even without connectivity. Performance is not a nice-to-have — it's a patient safety issue.", color: "bg-stone-100 text-[#1a1814]" },
              ].map(({ priority, theme, from, opp, color }) => (
                <div key={theme} className={`rounded-[16px] overflow-hidden ${color}`}>
                  <div className="flex">
                    <div className="px-4 py-6 flex items-start justify-center font-['JetBrains_Mono',sans-serif] text-[11px] font-bold opacity-60 shrink-0 w-12">{priority}</div>
                    <div className="p-6 flex-1 border-l border-current/10">
                      <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] mb-2">{theme}</p>
                      <p className="font-['DM_Sans',sans-serif] text-[12px] opacity-60 mb-3 leading-[1.5]"><span className="font-semibold">Evidence:</span> {from}</p>
                      <p className="font-['DM_Sans',sans-serif] text-[14px] opacity-90 leading-[1.65]">{opp}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 13 — Reflections */}
          <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <SectionLabel>13 — Reflections</SectionLabel>
            <SectionHeading>What This Research Taught Me</SectionHeading>
            <div className="bg-[#004852] rounded-[24px] p-8 md:p-12">
              <div className="space-y-8">
                {[
                  { heading: "Research sequencing matters more than method selection.", body: "Starting with a policy expert (NHA) before surveying end users was the right call. It gave the survey instrument conceptual precision it couldn't have had otherwise — and it surfaced a problem dimension (trust) that pure user research might have taken weeks to reach." },
                  { heading: "The infrastructure problem is a design problem.", body: "It's tempting to treat connectivity gaps and EHR performance as engineering issues outside a researcher's scope. But they're not — they're user experience determinants. A system that crashes becomes a system that's abandoned. Designing for Indian healthcare means designing for intermittent conditions." },
                  { heading: "Two personas, two completely different relationships with failure.", body: "The patient fails silently — losing documents, feeling anxious, disengaging. The doctor fails loudly — overloaded, exhausted, working around bad tools. A good EHR solution must address both failure modes, not optimise for one at the expense of the other." },
                  { heading: "Trust cannot be designed as a feature.", body: "Privacy controls and consent flows help, but trust is fundamentally relational and contextual. The question the NHA PM asked doesn't have a design answer — it has an institutional answer. Designers can create the conditions for trust to grow, but they cannot manufacture it." },
                ].map(({ heading, body }) => (
                  <div key={heading} className="border-l-2 border-[#00d27e] pl-6">
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-white mb-2">{heading}</p>
                    <p className="font-['DM_Sans',sans-serif] text-[14px] text-white/70 leading-[1.7]">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

        </div>
      </main>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className="bg-[#eae0d0] py-24 px-6 text-center">
        <p className="font-['DM_Sans',sans-serif] text-[16px] text-[#1a1814] font-bold mb-6">Interested in learning more?</p>
        <Link to="/" className="inline-flex items-center justify-center gap-2 bg-[#bd4f2f] text-white font-['DM_Sans',sans-serif] font-medium text-[14px] px-8 py-4 rounded-full hover:bg-[#a64326] transition-colors">
          View All Work <ArrowRight className="w-4 h-4" />
        </Link>
      </footer>
    </div>
  );
}
