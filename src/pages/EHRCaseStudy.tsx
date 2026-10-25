import { User } from "lucide-react";
import imgHospital from "../imports/ContainerMargin-1/21fc9f9c07531f4765b65c7b97cda6ef8b4c51ef.png";
import { caseStudies } from "../data/content";
import {
  BigQuote, Chips, Closing, Hero, Notes, Page, Prose, Reflection, Reveal, Rows, Section, Stats, SubHead,
} from "../components/case-study/kit";

const study = caseStudies.find((s) => s.id === "ehr-healthcare-system")!;

/* ───────────────────────── content ───────────────────────── */

const researchQuestion =
  "What systemic, infrastructural, and usability barriers prevent effective EHR adoption across India's public and private healthcare landscape?";
const methodsText =
  "Expert interviews (NHA), secondary research, user surveys, contextual observation, persona development, journey mapping, competitive benchmarking.";
const outputText =
  "Stakeholder map, two validated personas, dual user journey maps, and a prioritised design opportunity framework across five themes.";

const context = [
  "The Indian healthcare sector is undergoing a fundamental transformation. For decades, patient records lived in manila folders, handwritten notebooks, and disconnected ledgers. The arrival of Electronic Health Records promised to fix this — but the transition has created as many problems as it has solved.",
  "India's public health sector handles 18% of total outpatient care and 44% of total inpatient care. The industry was valued at over $370 billion in 2022, growing to $372 billion in 2023, with projections reaching $638 billion by 2025. The scale of the system means that usability failures in EHR software have direct consequences at population scale.",
];
const perspective =
  "Healthcare is the maintenance or improvement of health through prevention, diagnosis, treatment, and management of disease, illness, injury, and other physical and mental impairments. It's delivered through a complex web of professionals and institutions — and in India, that web has historically been poorly connected. EHR is an attempt to create connective tissue. But you can't design connective tissue without first understanding what it's trying to connect.";

const stats = [
  { value: "$638B", label: "Projected market by 2025" },
  { value: "44%", label: "Inpatient care · public sector" },
  { value: "18%", label: "Outpatient care · public sector" },
  { value: "1.4B+", label: "Population · context for scale" },
];

const problemLede =
  "Before investigating EHR specifically, I needed to understand the broader system it operates within. Secondary research surfaced six compounding problems that shape why digital health adoption is so difficult.";
const failures = [
  { title: "Inadequate Infrastructure", body: "India has a shortage of healthcare facilities, especially in rural areas where the majority of the population resides. Many primary health centres lack essential equipment and reliable power — preconditions for any digital system." },
  { title: "Shortage of Healthcare Professionals", body: "A critical national deficit of doctors, nurses, and paramedical staff. This shortage is most severe in rural areas, creating a dual crisis: not enough people to deliver care, and not enough people to operate and maintain digital systems." },
  { title: "Urban-Rural Disparities", body: "Urban areas have better infrastructure, skilled professionals, and specialised care. Rural areas struggle with inadequate facilities. Any EHR solution must work across both contexts or it will serve only the already-served." },
  { title: "Financial Constraints & Low Insurance Coverage", body: "High out-of-pocket expenses burden most Indians. Limited health insurance penetration means patients delay or avoid treatments — and are reluctant to invest time in learning new digital systems that seem to serve the hospital more than them." },
  { title: "Fragmented System & Inequity in Access", body: "India's healthcare system is a complex mix of public and private providers with widely varying quality and regulation. Socioeconomic and regional disparities mean EHR implementations are inconsistent, siloed, and often incompatible." },
  { title: "Growing Non-Communicable Disease Burden", body: "Conditions like diabetes and cardiovascular disease are rising sharply, putting additional strain on a system already managing tuberculosis, malaria, and HIV/AIDS. This increases the volume and complexity of records that EHR systems must handle." },
];

const terrainLede =
  "A rigorous research project begins with precise definitions. The conflation of HIE, EHR, and EMR is pervasive — even among healthcare professionals — and it creates misaligned expectations about what digital health systems can and cannot do.";
const terms = [
  { meta: "HIE", title: "Health Information Exchange", body: "The electronic sharing of health-related information between healthcare organisations. HIE allows patients and professionals to securely share medical information — lab orders, referrals, discharge summaries — across institutional boundaries. It is the infrastructure that makes EHR meaningful at a population level." },
  { meta: "EHR", title: "Electronic Health Record", body: "A comprehensive, longitudinal digital record of a patient's medical history, accessible from multiple healthcare settings. EHRs include demographics, medical history, immunisations, medications, vital signs, lab results, and physician notes. They are designed to improve care quality by giving providers complete, current information." },
  { meta: "EMR", title: "Electronic Medical Record", body: "The digital equivalent of a paper chart in a single provider's office. EMRs contain diagnoses, notes, medication information, lab results, and immunisation records — but only from that one setting. Unlike EHRs, they are not designed for cross-institutional sharing. Most Indian facilities still operate at this level." },
];
const ehrComponents = ["Demographics", "Medical History", "Immunisation Records", "Medication Lists", "Vital Signs", "Lab Results", "Progress Notes", "Treatment Plans", "Allergy Information", "Family History", "Surgical Records"];

const nhaIntro =
  "During the initial stages of this project, I had the opportunity to interview a Product Manager at the National Health Authority — the government body responsible for India's Ayushman Bharat Digital Mission (ABDM). This conversation was the single most important input to the research.";
const nhaReframe =
  "This question, posed by someone designing the national infrastructure, reframed the entire research. The challenge isn't purely technical — it's about trust, agency, and whether citizens believe the system is designed for them or against them.";
const nhaObservations = [
  "Healthcare data is extremely sensitive and personal — handling it requires not just security, but perceived security from the user's perspective.",
  "Understanding user psychology — both patients and doctors — is non-negotiable before designing any health data system.",
  "Policy intent and user mental models are frequently misaligned. The NHA's vision of interoperability means little to a patient worried about data misuse.",
  "Trust is infrastructure. Without it, even technically excellent EHR systems will face adoption resistance.",
];
const nhaChange =
  "I had entered this interview expecting to learn about technical implementation. What I got instead was a design challenge framed around human trust. This shifted my survey design, persona construction, and journey mapping to centre privacy perception and control as first-order concerns — not secondary features.";
const nhaPivot = "Added trust and privacy as explicit dimensions in all subsequent survey questions and user journey touchpoints.";

const methodologyLede =
  "This was a mixed-methods study structured in five phases, moving from secondary research to expert access to direct user inquiry. Each phase was designed to answer a different layer of the research question.";
const phases = [
  { phase: "Phase 01", time: "Weeks 1–2", title: "Secondary Research", desc: "Systematic review of EHR literature, government frameworks (ABDM, Ayushman Bharat Digital Mission), and vendor documentation. Goal: understand the regulatory and market landscape before forming hypotheses." },
  { phase: "Phase 02", time: "Week 3", title: "Expert Interview — NHA", desc: "In-depth interview with a Product Manager from the National Health Authority. This gave direct access to policy intent, known barriers, and the government's mental model of digital health adoption." },
  { phase: "Phase 03", time: "Weeks 4–5", title: "User Surveys", desc: "Structured surveys targeting both patients and healthcare professionals to understand lived experience with health record management. Surveys are efficient for capturing a wide sample on attitude and behaviour." },
  { phase: "Phase 04", time: "Weeks 6–7", title: "Persona Development & Journey Mapping", desc: "Synthesis of qualitative and quantitative findings into two validated personas and dual journey maps — one for the patient, one for the doctor. This grounded abstract insights in real human behaviour." },
  { phase: "Phase 05", time: "Week 8", title: "Competitive Benchmarking", desc: "Evaluation of existing platforms (Apollo 24/7 and others) against research-derived criteria. Identified what the market is getting right and where the critical gaps remain." },
];

const stakeholderLede =
  "An EHR system does not serve one user — it serves an ecosystem. Before designing for any single persona, I mapped every stakeholder and their proximity to the patient's health data. Proximity to the patient indicates the stake each actor has in the data's accuracy, accessibility, and privacy.";
const stakeholders = [
  { role: "Patient", stake: "Primary", desc: "The source and subject of all health data. Has the most to gain and lose from how records are managed." },
  { role: "Personal Caregiver", stake: "High", desc: "Family members or designated caregivers who manage health information on behalf of the patient." },
  { role: "Healthcare Providers", stake: "High", desc: "Doctors, nurses, specialists. Need timely, accurate data to make clinical decisions." },
  { role: "Insurance Providers", stake: "Medium", desc: "Require health data for claims processing. Risk of misaligned incentives with patient welfare." },
  { role: "Governing Bodies (NHA, MoHFW)", stake: "Medium", desc: "Set policy, manage national infrastructure (ABDM), and bear accountability for systemic outcomes." },
  { role: "MedTech & Research", stake: "Contextual", desc: "Secondary users of aggregated, anonymised data for product development and clinical research." },
];
const stakeholderNote =
  "The proximity of a stakeholder to the patient indicates the importance of that stakeholder in the system with regards to the patient's health data. The further from the patient, the more aggregated and abstracted their relationship to the data — and the lower the risk to any individual if data quality is poor.";

const peopleLede =
  "The research surfaced two distinct, non-overlapping experience breakdowns. The patient persona is characterised by confusion, burden, and privacy anxiety. The doctor persona is characterised by inefficiency, exhaustion, and a genuine desire to provide better care — if the tools would let them.";
const personas = [
  {
    name: "The Patient",
    sub: "Urban, mid-income, manages chronic condition",
    badge: "Primary Persona",
    aboutLabel: "Personality",
    about: "Cautious, detail-oriented, health-conscious. Values trust and continuity. Increasingly comfortable with digital tools but deeply skeptical of government data systems.",
    needs: ["Quick access to relevant records during consultations", "Confidence that health data is private and secure", "Clear, jargon-free presentation of health history", "Control over who sees what information"],
    pains: ["Loss of precious time finding the right documents before appointments", "Delay in finding the right doctor — no reliable quality signal", "Concerns about privacy when health information is shared or transferred", "Gaps in records due to poor management — leading to adverse care outcomes"],
    sayLabel: "What the Patient is Saying",
    quotes: [
      { q: "In regular visits I have to carry at least a few documents — I'm never sure if I have the right ones.", by: "Survey respondent, Patient" },
      { q: "I'm worried about the secrecy of my health information when it's being shared and transferred.", by: "Survey respondent, Patient" },
    ],
  },
  {
    name: "Dr. Gautam Thakur",
    sub: "Family Physician & Consulting Homeopath · 31 years experience",
    badge: "Clinical Persona",
    aboutLabel: "Background",
    about: "Dr. Thakur has 31 years of experience across inpatient department work and rural practice. He operates at the intersection of traditional and modern medicine — making him an ideal lens for understanding how digital tools fit into real clinical workflows.",
    needs: ["Instant access to complete patient history at point of care", "Tools that reduce documentation burden without sacrificing accuracy", "System reliability — crashes during consultations are unacceptable", "Predictive support for diagnosis and treatment decisions"],
    pains: ["Loss of time finding patient documents in high-volume clinics", "Maintaining a physical record for each patient is taxing and unsustainable", "Current digital systems do not support clinical decision-making meaningfully", "Patient records arrive incomplete, out of order, or not at all"],
    sayLabel: "What Dr. Thakur is Saying",
    quotes: [
      { q: "I want my patients to have a healthy and satisfied lifestyle.", by: "Dr. Gautam Thakur, Family Physician (31 years)" },
      { q: "It would be very convenient for doctors to accurately predict the disease and its severity — if only the records were reliable.", by: "Dr. Gautam Thakur, on EHR potential" },
      { q: "Maintaining a physical record for each patient is taxing and exhausting. Something has to change.", by: "Dr. Gautam Thakur, on the status quo" },
    ],
  },
];

const journeyLede =
  "User journey maps translate persona insights into temporal, emotional narratives. I mapped two journeys — the patient's experience of managing and sharing health records, and the doctor's experience of receiving and using them. The critical finding: these journeys are designed as if they exist in parallel universes, not as two halves of the same interaction.";
const journeys = [
  {
    label: "Patient Journey",
    stages: ["Scheduled", "Pre-Visit Prep", "Arrival", "Consultation", "Post-Visit"],
    emotional: ["Anxious about forgetting documents", "Frustrated searching for records", "Rushed, carrying too much", "Relieved when doctor recognises them", "Uncertain about follow-up"],
    opportunities: ["Smart document checklist by appointment type", "Pre-visit record sharing request flow", "AI-assisted record relevance filtering"],
  },
  {
    label: "Doctor Journey",
    stages: ["Pre-Clinic Setup", "Patient Arrival", "Record Review", "Diagnosis", "Documentation"],
    emotional: ["Optimistic at start of day", "Pressured as schedule fills", "Frustrated by incomplete records", "Focused and engaged during diagnosis", "Exhausted by end-of-day documentation"],
    opportunities: ["Auto-populated consultation notes", "Patient history dashboard at-a-glance", "One-tap record request from patient"],
  },
];

const stateLede =
  "Secondary research revealed the distribution of information storage methods across the healthcare system — a mosaic of paper, siloed software, and early-stage digital adoption. The picture is neither uniformly bad nor uniformly promising.";
const stateBody =
  "EHR implementation has uplifted the healthcare sector in measurable ways — but has also introduced new failure modes. Many facilities have systems that don't talk to each other, staff trained on one platform struggle with another, and patients have no visibility into or control over their records. Ongoing government and private sector efforts — notably ABDM's Unified Health Interface — aim to address interoperability, but the pace of standardisation lags the pace of deployment.";
const challenges = [
  { title: "Lack of Interoperability", body: "Healthcare facilities use disparate systems that do not communicate with each other seamlessly. This hampers sharing of patient information and leads to inefficiencies in care delivery — the exact problem EHR was supposed to solve." },
  { title: "Data Privacy & Security Gaps", body: "Data breaches and unauthorised access to patient information highlight the need for robust security measures and strict adherence to privacy regulations such as India's Personal Data Protection Bill." },
  { title: "Infrastructure & Connectivity", body: "In many parts of India, especially rural areas, limited internet connectivity, electricity reliability, and hardware availability make effective EHR use impossible. No amount of good UX fixes a broken connection." },
  { title: "Health Literacy & User Training Gap", body: "Health literacy levels vary widely among providers and patients. Adequate training is rarely provided. The result: clinicians develop workarounds, patients disengage, and the system ossifies around its failure modes rather than evolving." },
];
const competitiveLede =
  "Competitive benchmarking grounded the research in what's currently available to users. I evaluated platforms against the research-derived criteria: trust signals, record accessibility, interoperability, onboarding, and privacy controls.";
const platforms = [
  { platform: "Apollo 24/7", type: "Comprehensive Platform", desc: "Round-the-clock access to doctors, diagnostics, and medicines. Strong on appointment booking and teleconsultation. Weaker on longitudinal record management and data portability.", strengths: ["Teleconsultation UX", "Appointment booking", "Pharmacy integration"], gaps: ["Record portability", "Interoperability", "Privacy controls"] },
  { platform: "Government ABDM", type: "National Infrastructure", desc: "The Ayushman Bharat Digital Mission's Unified Health Interface aims to create a federated health record ecosystem. Ambitious in scope but nascent in execution and low in user awareness.", strengths: ["Policy backing", "Interoperability vision", "Universal coverage intent"], gaps: ["User awareness", "Trust perception", "Clinical tool integration"] },
  { platform: "Paper + WhatsApp", type: "De Facto Solution", desc: "The dominant system in most Indian clinics. Effective for familiarity and accessibility, but catastrophic for continuity, legibility, and privacy. Its dominance is a design indictment.", strengths: ["Familiarity", "Zero training", "Immediate access"], gaps: ["Privacy", "Longitudinal continuity", "Clinical decision support"] },
];

const surveyLede =
  "Surveys are an efficient method for capturing attitude and behaviour from a large sample in minimal time. They work best when the research questions are well-formed — which, after the NHA interview, ours were.";
const surveyMethod =
  "Questions and surveys are best suited to projects where the sample size is large and the hypotheses are already shaped by qualitative insight.";
const surveyMethodTail = "This sequencing — interview first, survey second — is why the data was so actionable.";
const findings = [
  { title: "Trust in Online Consultation", body: "People want trustworthy, online consultation from a notable doctor. The keyword is notable — credibility signals matter enormously. Anonymity in digital health increases friction." },
  { title: "Social Proof Before Commitment", body: "People want to know about doctor reviews and ratings before booking an appointment. Patients apply e-commerce decision-making patterns to healthcare — a behaviour that most EHR interfaces ignore entirely." },
  { title: "Preference for Familiar Practitioners", body: "Most people go for a family doctor when booking a consultation. Familiarity reduces anxiety. This has direct implications for continuity of care features in EHR design." },
  { title: "Privacy Distrust of Government Systems", body: "A significant portion of respondents are sceptical about sharing private health information with government systems due to trust issues. This finding directly validated the NHA PM's question." },
  { title: "Document Management Burden", body: "In regular visits to a doctor, patients carry multiple documents — often not knowing which are most relevant or recent. This creates both logistical and cognitive burden before care even begins." },
  { title: "System Performance Under Load", body: "Large information systems tend to lag and freeze as user traffic and data increase. Performance is a trust signal — a system that crashes becomes a system that clinicians work around." },
];

const oppLede =
  "The research produced five prioritised design opportunity themes. These are not feature requests — they are directions informed by evidence, each traceable to specific findings from the study.";
const opportunities = [
  { priority: "P0", theme: "Trust Architecture", from: "NHA interview + survey respondents sceptical of government data systems", opp: "Design explicit consent flows, granular sharing controls, and visible audit trails. Trust must be demonstrable, not assumed. Every data-sharing action should feel like an informed choice." },
  { priority: "P1", theme: "Record Accessibility & Relevance", from: "Patient persona: 'loss of precious time finding documents'; Doctor persona: incomplete records at point of care", opp: "Smart record surfacing — contextual filtering by appointment type, clinician specialty, and recency. Patients should arrive at consultations with exactly the right documents, automatically prepared." },
  { priority: "P1", theme: "Clinical Decision Support", from: "Dr. Thakur: 'Would be very convenient for doctors to accurately predict disease and severity'", opp: "Surface longitudinal health patterns, flag anomalies, and surface relevant clinical evidence within the consultation flow — not as a separate tool, but embedded in the record view." },
  { priority: "P2", theme: "Documentation Efficiency", from: "Dr. Thakur: 'Maintaining a physical record for each patient is taxing and exhausting'", opp: "Structured note templates, voice-to-text input, and auto-population from previous visits. Reduce documentation from a post-consultation burden to an ambient, low-friction activity." },
  { priority: "P2", theme: "Offline-First & Performance", from: "Survey finding: systems lag and freeze under load; rural infrastructure gap", opp: "Progressive web app architecture with offline data sync. Critical clinical information must be available even without connectivity. Performance is not a nice-to-have — it's a patient safety issue." },
];

const reflections = [
  { title: "Research sequencing matters more than method selection.", body: "Starting with a policy expert (NHA) before surveying end users was the right call. It gave the survey instrument conceptual precision it couldn't have had otherwise — and it surfaced a problem dimension (trust) that pure user research might have taken weeks to reach." },
  { title: "The infrastructure problem is a design problem.", body: "It's tempting to treat connectivity gaps and EHR performance as engineering issues outside a researcher's scope. But they're not — they're user experience determinants. A system that crashes becomes a system that's abandoned. Designing for Indian healthcare means designing for intermittent conditions." },
  { title: "Two personas, two completely different relationships with failure.", body: "The patient fails silently — losing documents, feeling anxious, disengaging. The doctor fails loudly — overloaded, exhausted, working around bad tools. A good EHR solution must address both failure modes, not optimise for one at the expense of the other." },
  { title: "Trust cannot be designed as a feature.", body: "Privacy controls and consent flows help, but trust is fundamentally relational and contextual. The question the NHA PM asked doesn't have a design answer — it has an institutional answer. Designers can create the conditions for trust to grow, but they cannot manufacture it." },
];

/* ───────────────────────── diagrams ───────────────────────── */

const INK = "#0c0a09";
const EMERALD = "#065f46";
const MUTE = "#78716c";

function Pill({ cx, cy, w, h = 28, text, dark = false, accent = false, outlined = false, fs = 10 }: {
  cx: number; cy: number; w: number; h?: number; text: string; dark?: boolean; accent?: boolean; outlined?: boolean; fs?: number;
}) {
  const fill = dark ? INK : accent ? EMERALD : outlined ? "transparent" : "#ffffff";
  const txt = dark || accent ? "#ffffff" : outlined ? INK : EMERALD;
  return (
    <g>
      <rect x={cx - w / 2} y={cy - h / 2} width={w} height={h} rx={2} fill={fill} stroke={outlined ? INK : dark || accent ? "none" : "#d6d3d1"} strokeWidth={outlined ? 1.5 : 1} />
      <text x={cx} y={cy + fs * 0.38} textAnchor="middle" fill={txt} fontSize={fs} fontWeight="600">{text}</text>
    </g>
  );
}

function SmallPill({ cx, cy, text }: { cx: number; cy: number; text: string }) {
  const w = Math.max(58, text.length * 4.6);
  return (
    <g>
      <rect x={cx - w / 2} y={cy - 9} width={w} height={18} rx={2} fill="#ffffff" stroke="#a8a29e" strokeWidth={0.6} />
      <text x={cx} y={cy + 2.8} textAnchor="middle" fill={EMERALD} fontSize={6.5}>{text}</text>
    </g>
  );
}

function Panel({ children, caption }: { children: React.ReactNode; caption: string }) {
  return (
    <Reveal className="mt-14">
      <div className="border border-stone-300 bg-white p-4 shadow-xl shadow-stone-900/10 sm:p-6">{children}</div>
      <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-stone-600">{caption}</p>
    </Reveal>
  );
}

function InfoSharingFlowchart() {
  const line = { stroke: INK, strokeWidth: 1 };
  return (
    <Panel caption="HIE, EHR and EMR in the wider health-information landscape">
      <svg viewBox="0 0 570 230" className="block w-full font-sans">
        <defs>
          <marker id="ehr-arr" markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto">
            <polygon points="0 0, 7 3.5, 0 7" fill={INK} />
          </marker>
        </defs>
        <line x1={207} y1={45} x2={148} y2={45} {...line} markerEnd="url(#ehr-arr)" />
        <line x1={359} y1={45} x2={412} y2={45} {...line} markerEnd="url(#ehr-arr)" />
        <Pill cx={96} cy={45} w={108} h={28} text="Medical software & apps" fs={7} />
        <Pill cx={283} cy={45} w={148} h={30} text="Health Information Tech" dark fs={9} />
        <Pill cx={460} cy={45} w={90} h={28} text="Telehealth" fs={8} />
        <line x1={283} y1={61} x2={283} y2={80} {...line} />
        <line x1={148} y1={80} x2={420} y2={80} {...line} />
        <line x1={148} y1={80} x2={148} y2={98} {...line} markerEnd="url(#ehr-arr)" />
        <line x1={283} y1={80} x2={283} y2={98} {...line} markerEnd="url(#ehr-arr)" />
        <line x1={420} y1={80} x2={420} y2={98} {...line} markerEnd="url(#ehr-arr)" />
        <Pill cx={148} cy={118} w={122} h={28} text="Electronic Medical Record" fs={7} />
        <Pill cx={283} cy={118} w={122} h={30} text="Electronic Health Record" accent fs={7} />
        <Pill cx={420} cy={118} w={118} h={28} text="Personal Health Record" fs={7} />
        <line x1={283} y1={134} x2={283} y2={155} {...line} />
        <line x1={78} y1={155} x2={496} y2={155} {...line} />
        <line x1={78} y1={155} x2={78} y2={173} {...line} markerEnd="url(#ehr-arr)" />
        <line x1={212} y1={155} x2={212} y2={173} {...line} markerEnd="url(#ehr-arr)" />
        <line x1={354} y1={155} x2={354} y2={173} {...line} markerEnd="url(#ehr-arr)" />
        <line x1={496} y1={155} x2={496} y2={173} {...line} markerEnd="url(#ehr-arr)" />
        <Pill cx={78} cy={193} w={110} h={28} text="Health Information Exchange" outlined fs={6.5} />
        <Pill cx={212} cy={193} w={108} h={28} text="Care Coordination" fs={7.5} />
        <Pill cx={354} cy={193} w={112} h={28} text="Medication Management" fs={7.5} />
        <Pill cx={496} cy={193} w={112} h={28} text="Centralized Patient Info" fs={7} />
      </svg>
    </Panel>
  );
}

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
    <Panel caption="A typical records platform and the people and systems around it">
      <svg viewBox="-25 -10 610 380" className="block w-full font-sans">
        {spokes.map((s, i) => <line key={i} x1={rCx} y1={rCy} x2={s.cx} y2={s.cy} stroke={MUTE} strokeWidth={1} />)}
        {subs.map((s, i) => {
          const p = spokes[s.pi];
          return <line key={i} x1={p.cx} y1={p.cy} x2={s.cx} y2={s.cy} stroke="#d6d3d1" strokeWidth={0.8} />;
        })}
        {subs.map((s, i) => <SmallPill key={i} cx={s.cx} cy={s.cy} text={s.label} />)}
        <Pill cx={rCx} cy={rCy} w={118} h={36} text="Records Platform" dark fs={11} />
        {spokes.map((s, i) => (
          <Pill key={i} cx={s.cx} cy={s.cy} w={88} h={30} text={s.label} accent={!s.outlined} outlined={s.outlined} fs={10} />
        ))}
      </svg>
    </Panel>
  );
}

/* ───────────────────────── page ───────────────────────── */

function PersonaCard({ p }: { p: (typeof personas)[number] }) {
  return (
    <Reveal>
      <div className="bg-stone-950 text-stone-100 shadow-xl shadow-stone-900/10">
        <div className="flex flex-wrap items-center gap-5 border-b border-stone-800 p-8">
          <div className="flex h-14 w-14 items-center justify-center border border-emerald-400 text-emerald-400">
            <User className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-serif text-3xl text-white">{p.name}</h3>
            <p className="mt-1 text-sm text-stone-400">{p.sub}</p>
          </div>
          <span className="border border-emerald-400 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-emerald-400">{p.badge}</span>
        </div>
        <div className="grid gap-10 p-8 md:grid-cols-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-emerald-400">{p.aboutLabel}</p>
            <p className="mt-3 text-sm leading-relaxed text-stone-300">{p.about}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-emerald-400">Core Needs</p>
            <ul className="mt-3 space-y-2">
              {p.needs.map((n) => (
                <li key={n} className="flex gap-2 text-sm leading-relaxed text-stone-300"><span className="shrink-0 text-emerald-400">→</span>{n}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-emerald-400">Pain Points</p>
            <ul className="mt-3 space-y-2">
              {p.pains.map((n) => (
                <li key={n} className="flex gap-2 text-sm leading-relaxed text-stone-300"><span className="shrink-0 text-stone-600">×</span>{n}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-800 p-8">
          <p className="font-mono text-[11px] uppercase tracking-widest text-stone-400">{p.sayLabel}</p>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            {p.quotes.map((q) => (
              <figure key={q.q} className="border-l-2 border-emerald-400 pl-5">
                <blockquote className="font-serif text-xl italic leading-snug text-white">“{q.q}”</blockquote>
                <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-widest text-stone-400">— {q.by}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function EHRCaseStudy() {
  return (
    <Page>
      <Hero
        title={<>EHR <span className="italic text-emerald-800">Healthcare</span> System</>}
        intro="A comprehensive UX research study into the adoption, usability, and structural failures of Electronic Health Record systems in India — from contextual inquiry to design opportunity mapping."
        calloutLabel="Research question"
        callout={researchQuestion}
        meta={[
          { label: "Domain", value: "Healthcare · Enterprise · UX Research" },
          { label: "Year", value: "2024" },
          { label: "Role", value: "UX Researcher & Design Strategist" },
          { label: "Duration", value: study.metadata.timeline },
          { label: "Methods", value: methodsText },
          { label: "Output", value: outputText },
        ]}
      />

      <Stats items={stats} />

      {/* 01 */}
      <Section index="01" label="Why this mattered" title="Why healthcare records matter in India." lede={context[0]}>
        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <Prose>{context[1]}</Prose>
          </Reveal>
          <Reveal className="border-l-4 border-emerald-800 bg-emerald-800/5 py-6 pl-6 pr-6 lg:col-span-6" delay={0.1}>
            <SubHead>My perspective on healthcare</SubHead>
            <p className="mt-3 font-serif text-xl leading-snug">{perspective}</p>
          </Reveal>
        </div>
        <Reveal className="mt-16 overflow-hidden bg-stone-200 shadow-xl shadow-stone-900/10">
          <img src={imgHospital} alt="Hospital room with medical equipment and beds" className="aspect-[16/7] w-full object-cover object-bottom" />
        </Reveal>
        <div className="mt-24">
          <SubHead>Problem space</SubHead>
          <h3 className="mt-4 max-w-3xl font-serif text-3xl leading-tight sm:text-4xl">Six structural failures in Indian healthcare</h3>
          <Prose className="mt-6 max-w-3xl">{problemLede}</Prose>
          <Rows items={failures.map((f) => ({ title: f.title, body: f.body }))} />
        </div>
      </Section>

      {/* 02 */}
      <Section tone="stone" index="02" label="Defining the terrain" title="HIE, EHR, and EMR." lede={terrainLede}>
        <Rows items={terms} />
        <InfoSharingFlowchart />
        <Reveal className="mt-14">
          <SubHead>Key EHR data components</SubHead>
          <Chips className="mt-4" items={ehrComponents} />
        </Reveal>
      </Section>

      {/* 03 */}
      <Section tone="green" index="03" label="The moment that changed the research" title="The NHA interview: policy meets reality." lede={nhaIntro}>
        <BigQuote quote="Why would people want to share their private health information?" who="Product Manager, National Health Authority (NHA)" />
        <Reveal className="mt-10 max-w-3xl border-l-4 border-emerald-300 pl-6">
          <SubHead>The critical question raised</SubHead>
          <p className="mt-2 font-serif text-2xl leading-snug text-white">{nhaReframe}</p>
        </Reveal>
        <div className="mt-20 grid gap-14 lg:grid-cols-2">
          <div>
            <SubHead>Observations from the interview</SubHead>
            <Rows className="!mt-6" items={nhaObservations.map((body) => ({ body }))} />
          </div>
          <Reveal>
            <SubHead>How it changed the research</SubHead>
            <Prose className="mt-6">{nhaChange}</Prose>
            <div className="mt-8 border border-emerald-300/50 bg-emerald-950/40 p-6">
              <SubHead>Research pivot</SubHead>
              <p className="mt-2 leading-relaxed text-stone-100">{nhaPivot}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 04 */}
      <Section tone="dark" index="04" label="How we investigated" title="Five phases, from policy to people." lede={methodologyLede}>
        <Rows items={phases.map((p) => ({ meta: `${p.phase} · ${p.time}`, title: p.title, body: p.desc }))} />
        <div className="mt-24">
          <SubHead>Stakeholder analysis</SubHead>
          <h3 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-white sm:text-4xl">Mapping the ecosystem</h3>
          <Prose className="mt-6 max-w-3xl">{stakeholderLede}</Prose>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stakeholders.map((s, i) => (
              <Reveal key={s.role} delay={Math.min(i, 3) * 0.05}>
                <div className={`h-full p-6 ${i === 0 ? "bg-emerald-800 text-white" : "border border-stone-700 text-stone-200"}`}>
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-serif text-xl leading-tight">{s.role}</p>
                    <span className={`shrink-0 font-mono text-[10px] uppercase tracking-widest ${i === 0 ? "text-emerald-200" : "text-emerald-400"}`}>{s.stake}</span>
                  </div>
                  <p className={`mt-3 text-sm leading-relaxed ${i === 0 ? "text-emerald-50" : "text-stone-400"}`}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8 max-w-3xl border-l-2 border-stone-600 pl-5">
            <SubHead>Research note</SubHead>
            <p className="mt-2 text-sm leading-relaxed text-stone-400">{stakeholderNote}</p>
          </Reveal>
        </div>
      </Section>

      {/* 05 */}
      <Section index="05" label="Who we found" title="Two people. One system. Different failures." lede={peopleLede}>
        <div className="mt-14 space-y-10">
          {personas.map((p) => (
            <PersonaCard key={p.name} p={p} />
          ))}
        </div>
      </Section>

      {/* 06 */}
      <Section tone="dots" index="06" label="What we observed: journeys" title="Following the record through the system." lede={journeyLede}>
        <div className="mt-14 space-y-8">
          {journeys.map((j) => (
            <Reveal key={j.label}>
              <div className="border border-stone-300 bg-white p-6 shadow-xl shadow-stone-900/10 md:p-10">
                <h3 className="font-serif text-3xl">{j.label}</h3>
                <div className="mt-8 grid gap-10 md:grid-cols-3">
                  <div>
                    <SubHead>Journey stages</SubHead>
                    <ol className="mt-4 space-y-3">
                      {j.stages.map((s, i) => (
                        <li key={s} className="flex items-center gap-3 text-sm text-stone-800">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-stone-950 font-mono text-[11px] text-emerald-400">{i + 1}</span>
                          {s}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <SubHead>Emotional arc</SubHead>
                    <ul className="mt-4 space-y-3">
                      {j.emotional.map((e) => (
                        <li key={e} className="text-sm leading-snug text-stone-600">— {e}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <SubHead>Design opportunities</SubHead>
                    <ul className="mt-4 space-y-3">
                      {j.opportunities.map((o) => (
                        <li key={o} className="border-l-2 border-emerald-800 bg-emerald-800/5 px-3 py-2 text-sm leading-snug text-stone-800">{o}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 07 */}
      <Section tone="stone" index="07" label="What we observed: the system" title="The current state of EHR in India." lede={stateLede}>
        <Reveal className="mt-8 max-w-3xl">
          <Prose>{stateBody}</Prose>
        </Reveal>
        <div className="mt-20">
          <SubHead>Four critical challenges</SubHead>
          <Rows className="!mt-6" items={challenges.map((c) => ({ title: c.title, body: c.body }))} />
        </div>
        <EMRSystemDiagram />
        <div className="mt-24">
          <SubHead>Competitive landscape</SubHead>
          <h3 className="mt-4 max-w-3xl font-serif text-3xl leading-tight sm:text-4xl">What existing platforms do well — and don't</h3>
          <Prose className="mt-6 max-w-3xl">{competitiveLede}</Prose>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {platforms.map((p, i) => (
              <Reveal key={p.platform} delay={i * 0.06}>
                <div className="flex h-full flex-col gap-5 bg-white p-7 shadow-xl shadow-stone-900/10">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-stone-600">{p.type}</p>
                    <p className="mt-1 font-serif text-3xl">{p.platform}</p>
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-stone-600">{p.desc}</p>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-emerald-800">Strengths</p>
                    {p.strengths.map((s) => <p key={s} className="mt-1 text-sm text-stone-700">+ {s}</p>)}
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-stone-600">Gaps</p>
                    {p.gaps.map((g) => <p key={g} className="mt-1 text-sm text-stone-700">− {g}</p>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* 08 */}
      <Section index="08" label="From observations to insights" title="What the data told us." lede={surveyLede}>
        <Reveal className="mt-8 max-w-3xl border-l-4 border-emerald-800 pl-6">
          <SubHead>Key finding from method selection</SubHead>
          <p className="mt-2 font-serif text-2xl leading-snug">
            {surveyMethod} <span className="text-stone-600">{surveyMethodTail}</span>
          </p>
        </Reveal>
        <Notes items={findings} />
      </Section>

      {/* 09 */}
      <Section tone="emerald" index="09" label="Opportunity areas" title="From research to direction." lede={oppLede}>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {opportunities.map((o, i) => (
            <Reveal key={o.theme} delay={Math.min(i, 3) * 0.05}>
              <div className={`h-full p-8 ${i === 0 ? "bg-stone-950 text-stone-100" : "bg-white text-stone-900"}`}>
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
                  <span className={i === 0 ? "text-emerald-400" : "text-emerald-800"}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={i === 0 ? "text-stone-400" : "text-stone-600"}>{o.priority}</span>
                </div>
                <h3 className="mt-3 font-serif text-3xl leading-tight">{o.theme}</h3>
                <p className={`mt-4 text-sm leading-relaxed ${i === 0 ? "text-stone-400" : "text-stone-600"}`}>
                  <span className="font-mono text-[10px] uppercase tracking-widest">Responds to · </span>{o.from}
                </p>
                <p className={`mt-4 leading-relaxed ${i === 0 ? "text-stone-200" : "text-stone-700"}`}>{o.opp}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 10 */}
      <Section tone="stone" index="10" label="Product and roadmap implications" title="A framework any vendor can apply." lede={study.solution}>
        <Reveal className="mt-14 max-w-4xl border-l-4 border-emerald-800 pl-6">
          <SubHead>Delivered</SubHead>
          <p className="mt-2 font-serif text-3xl leading-snug sm:text-4xl">{study.outcome}</p>
          <p className="mt-6 text-lg leading-relaxed text-stone-600">{outputText}</p>
        </Reveal>
      </Section>

      {/* 11 */}
      <Section index="11" label="Reflection" title="What this research taught me.">
        <Reflection items={reflections} />
        <Reveal className="mt-16 max-w-3xl border-t border-stone-300 pt-8">
          <SubHead>What I learned</SubHead>
          <Prose className="mt-3">{study.learnings}</Prose>
        </Reveal>
      </Section>

      <Closing />
    </Page>
  );
}
