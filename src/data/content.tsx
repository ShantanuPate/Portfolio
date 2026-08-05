import React from "react";
import usp169Thumb from "../imports/Slide_16_9_-_3.png";
import ascensiaHero from "../imports/Slide1691/916a8d99cde6dcea90f9a446ea80a888763e07b5.png";
import laptopThumb from "../imports/Slide_16_9_-_4.png";
import uamThumb from "../imports/Final_deck_4.png";
import ascensiaThumb from "../imports/Ascensia.png";
import fopThumb from "../imports/FOP.png";
import espressoThumb from "../imports/Espresso_Nook.png";
import vitalsThumb from "../imports/Vitals.png";
import ascensiaScreen1 from "../imports/Slide1691/27d88b831a5105f5e2c6c16927c270eeddd43a13.png";
import ascensiaScreen2 from "../imports/Slide1691/46e3c349954f418fd1bac41ba0f00eea1236952f.png";
import ascensiaScreen3 from "../imports/Slide1691/b5cb3111e12d0ac26603d6c3d7fdb77c680f4d1d.png";
import ascensiaScreen4 from "../imports/Slide1691/a3702a53fc34e23dcacb99acc279cae0e6d624d5.png";

import foodHero from "../imports/FinalDeck12/569a0ae6ff9f28b1d792825ddec727b263884521.png";

import foodScreen1 from "../imports/Frame2134281022/58ea514958d5ddac1ea0655468a4b41f313cffca.png";
import foodScreen2 from "../imports/UxResearcherPortfolioWebsite/b9707968c35f0abe9f085815d77861e32143aca4.png";
import foodScreen3 from "../imports/UxResearcherPortfolioWebsite/8185545c35027ea0ee93940ccc575bf58d532336.png";
import foodScreen4 from "../imports/Frame2134281022-1/5a84c46c87d9ca064857f47818e6397e99acbbf8.png";

import FinalDeck11 from "../imports/FinalDeck11";
import FinalDeck12 from "../imports/FinalDeck12";
import Frame2331 from "../imports/Frame233-1";
import ehrScreen1 from "../imports/Frame233-1/d5acb4a660a51380cf8294ed978ecfb075290be4.png";
import ehrScreen2 from "../imports/Frame233-1/ebc61bf42e99308fd3d325133b2a745c878ed268.png";
import ehrScreen3 from "../imports/Frame233-1/290999066d4957bb6d18fe7eb0892a0624a381b3.png";
import ehrScreen4 from "../imports/Frame233-1/fa52e2d024cd9f7e4c321ee726f238069baedfb0.png";

function Frame2331Thumb() {
  return (
    <div style={{ width: 842, height: 595, overflow: "hidden" }}>
      <Frame2331 />
    </div>
  );
}


export const caseStudies = [
  {
    id: "ehr-healthcare-system",
    title: "EHR Healthcare System",
    tags: "Healthcare · Enterprise · Research",
    year: "2024",
    roleLabel: "UX Researcher & Design Strategist",
    subtitle: "Comprehensive analysis of Electronic Health Record implementation and its impact on healthcare delivery in India.",
    thumbnailWidth: 842,
    thumbnailHeight: 595,
    thumbnail: <Frame2331Thumb />,
    heroImage: vitalsThumb,
    color: "bg-teal-900",
    problem: "Healthcare providers in India struggle with fragmented, poorly designed EHR systems that increase administrative burden and reduce the quality of patient care.",
    methods: ["Secondary Research", "Stakeholder Interviews", "Competitive Analysis", "User Journey Mapping"],
    outcome: "Delivered a comprehensive research report with actionable UX recommendations, a redesigned information architecture, and a validated interaction framework for EHR adoption.",
    metadata: {
      role: "UX Researcher & Design Strategist",
      timeline: "16 Weeks",
      sector: "Healthcare · Enterprise",
      team: "Independent Research"
    },
    about: "This project is an in-depth UX research study examining the landscape of Electronic Health Record (EHR) systems in India. As digital transformation accelerates across the healthcare sector, EHR systems have become critical infrastructure — yet widespread usability failures continue to impede adoption and burden clinical staff.",
    challenge: "The shift from paper-based records to EHR has introduced as many problems as it has solved. Clinicians report spending more time on data entry than on patient care. Nurses navigate confusing interfaces under time pressure. Administrators deal with siloed systems that don't communicate. The challenge was to understand the root causes of these failures through rigorous research and translate findings into a design framework that genuinely works for all stakeholders.",
    approach: "The research was structured in three phases. Phase one involved secondary research — a systematic review of existing EHR literature, usability studies, and regulatory frameworks in India. Phase two consisted of qualitative interviews with doctors, nurses, and hospital administrators across three institutions. Phase three synthesised findings into user journey maps, a competitive analysis of five leading EHR platforms, and a set of prioritised design recommendations.",
    process: [
      { phase: "Discover", title: "Secondary Research", details: "Reviewed 40+ academic papers, government guidelines, and EHR vendor documentation to understand the landscape." },
      { phase: "Define", title: "Stakeholder Interviews", details: "Conducted 18 interviews across doctors, nurses, and administrators to identify pain points and workarounds." },
      { phase: "Analyse", title: "Competitive Benchmarking", details: "Evaluated five leading EHR platforms against a custom heuristics framework focused on clinical workflows." },
      { phase: "Synthesise", title: "Journey Mapping", details: "Mapped end-to-end journeys for three key personas, surfacing critical failure points in the current experience." },
      { phase: "Recommend", title: "Design Framework", details: "Translated research into a prioritised set of interaction principles and IA recommendations ready for implementation." }
    ],
    objectives: [
      "Understand the systemic barriers to EHR adoption among clinical staff in India.",
      "Identify the highest-impact usability failures across existing EHR platforms.",
      "Develop user personas and journey maps grounded in real clinical workflows.",
      "Produce a prioritised design framework that addresses both quick wins and long-term improvements."
    ],
    quotes: [
      { quote: "I spend more time typing than talking to patients. Something has gone wrong.", title: "Administrative Overload", insight: "EHR interfaces must reduce, not multiply, documentation effort — inline auto-suggestions and voice input are high-priority interventions." },
      { quote: "The system logs me out every five minutes. In an emergency, that's dangerous.", title: "Session Management Failure", insight: "Session persistence policies need to reflect the realities of clinical environments — biometric re-auth and role-based timeouts are essential." },
      { quote: "I need to click seven times to find a patient's latest lab results.", title: "Information Architecture Breakdown", insight: "Critical clinical data must be surfaced at the top of the hierarchy, not buried within nested menus." },
      { quote: "Nobody trained us. We figured it out ourselves over months.", title: "Onboarding Gap", insight: "Contextual help, progressive disclosure, and embedded tutorials can dramatically reduce the time-to-proficiency for new clinical staff." }
    ],
    solution: "The research culminated in a comprehensive EHR Design Framework — a set of 24 evidence-based recommendations organised across four layers: information architecture, interaction design, accessibility, and change management. The framework was validated in a co-design workshop with clinical staff and is designed to be platform-agnostic, enabling any EHR vendor or hospital IT team to apply it incrementally.",
    screens: [
      { src: ehrScreen1, caption: "Research synthesis: key themes from clinical interviews" },
      { src: ehrScreen2, caption: "Competitive heuristics audit across five EHR platforms" },
      { src: ehrScreen3, caption: "User journey map for the primary clinical persona" },
      { src: ehrScreen4, caption: "Prioritised design recommendations framework" }
    ],
    learnings: "This project deepened my understanding of research as a design act. Every decision about what to study, who to talk to, and how to synthesise findings shapes the solution space. I also learned that in enterprise healthcare contexts, change management and stakeholder alignment are as important as the design output itself — a perfect wireframe means nothing if clinical staff aren't brought along on the journey."
  },
  {
    id: "food-beverage-app",
    title: "Food & Beverage App",
    year: "2023",
    problem: "Understanding user coffee habits to design a tailored food and beverage discovery and ordering experience.",
    methods: ["Secondary Research", "User Segmentation", "Iterative Design", "App Testing"],
    outcome: "Created detailed personas, streamlined user flows, and high-fidelity mockups.",
    thumbnail: <FinalDeck12 />,
    heroImage: espressoThumb,
    color: "bg-orange-100",
    metadata: {
      role: "Product Designer",
      timeline: "4 Weeks",
      sector: "Food & Beverage / E-Commerce",
      team: "Independent"
    },
    about: "This project involved designing a comprehensive Food & Beverage mobile app from scratch. The focus was on creating a delightful, friction-free experience for daily coffee drinkers. The process was heavily research-driven, aiming to uncover the nuances of how people order, customize, and pick up their daily beverages.",
    challenge: "The coffee ordering market is highly saturated, but users frequently complain about clunky customization interfaces and inaccurate pickup times. The challenge was to design an app that caters to 'power users' who have highly specific daily orders, while remaining accessible to new users who just want to browse the menu.",
    approach: "The project was structured across five distinct phases. It began with extensive secondary research and user interviews to understand the 'why' behind people's coffee habits. This qualitative data informed our user segmentation and persona creation. We then mapped out the ideal user flows before jumping into wireframing and high-fidelity design.",
    process: [
      { phase: "Discover", title: "Secondary & User Research", details: "Analyzed market trends and conducted 1:1 interviews to understand ordering habits." },
      { phase: "Define", title: "Analysis & Personas", details: "Synthesized data into user segmentation, notably creating the 'Juhi Kapoor' persona." },
      { phase: "Ideate", title: "Concept & Flows", details: "Sketched initial concepts and mapped out the core ordering and customization flows." },
      { phase: "Design", title: "Wireframing & UI", details: "Created wireframes, progressed to high-fidelity mockups, and established a design system." },
      { phase: "Prototype", title: "Testing & Iteration", details: "Built an interactive prototype and conducted usability testing to refine the UI." }
    ],
    objectives: [
      "Identify the core pain points in existing coffee ordering applications.",
      "Develop accurate user personas based on real behavioral data.",
      "Design an intuitive customization interface for complex drink orders.",
      "Validate the design through rigorous usability testing."
    ],
    persona: {
      name: "Juhi Kapoor",
      title: "Age 28 · Fast-paced creative",
      needs: "A quick, seamless way to order her usual coffee on the way to work, without standing in a long line.",
      frustrations: "Customizing her complex drink on other apps is too difficult, and pick-up times are often inaccurate."
    },
    quotes: [],
    solution: "The resulting design is an app that makes daily ordering effortless. By introducing 'Quick Order' templates for recurring purchases and a highly visual, step-by-step customization engine, the app reduces cognitive load. The UI relies on warm, inviting photography and clear typography to evoke the feeling of a premium cafe experience.",
    screens: [
      { src: foodScreen1, caption: "Home screen with Quick Order access and personalized recommendations" },
      { src: foodScreen2, caption: "Visual drink customization interface" },
      { src: foodScreen3, caption: "Cart and checkout flow with accurate pickup estimates" },
      { src: foodScreen4, caption: "Order tracking and loyalty rewards dashboard" }
    ],
    learnings: "This project reinforced the value of rigorous user segmentation. By designing specifically for the 'Juhi Kapoor' persona—a frequent, highly-customized orderer—we were able to solve the hardest edge cases, which naturally made the app easier for everyone else to use."
  },
  {
    id: "ascensia-diabetes-care",
    title: "Diabetes Care App Redesign",
    tags: "HealthTech · Mobile · Accessibility",
    year: "2025",
    roleLabel: "Product Designer & UX Researcher",
    subtitle: "Redesigning a diabetes management app with accessibility, clarity, and user empowerment at its core.",
    problem: "Redesigning the healthcare experience to solve overwhelming UI and navigation frustration for diabetes patients.",
    methods: ["Stakeholder Workshops", "User Research", "Prototyping", "Usability Testing"],
    outcome: "Improved navigation, clearer visual hierarchy, and seamless data sharing.",
    thumbnail: <FinalDeck11 />,
    heroImage: ascensiaThumb,
    color: "bg-stone-200",
    metadata: {
      role: "Lead Product Designer & Researcher",
      timeline: "20 Weeks",
      sector: "Healthcare & MedTech",
      team: "PM, 3 Engineers, 1 UX Writer"
    },
    about: "This project was undertaken for a global MedTech company dedicated to improving the health and lives of people with diabetes. The goal was to deeply understand patient pain points and prioritize design concepts based on user needs and strategic business objectives — all within a tightly regulated healthcare context.",
    challenge: "The digital boom has disrupted the healthcare industry, but the transition from document-based storage systems to EHR (Electronic Health Record) and EMR (Electronic Medical Record) has brought its own set of challenges. Patients reported feeling overwhelmed by the sheer density of their medical data. Core features like the daily logbook were buried under complex navigation, and the visual hierarchy made it difficult for users to distinguish critical health alerts from standard system notifications.",
    approach: "We adopted a mixed-methods approach. We started with Stakeholder Workshops to align on business requirements before moving into contextual inquiries with actual patients. The goal was to understand their daily routines, how they manage their condition, and where the current app falls short. This led to rapid wireframing and iterative prototyping, followed by rigorous usability testing to validate our design hypotheses.",
    objectives: [
      "Align business goals with product vision by understanding user pain points.",
      "Simplify the navigation architecture to reduce time-to-task.",
      "Establish a clear visual hierarchy for health metrics and alerts.",
      "Design an intuitive data sharing flow for doctor visits."
    ],
    quotes: [
      { quote: "I just want to see my numbers — I don't need all these buttons.", title: "Overwhelming UI", insight: "Users need a simplified dashboard that surfaces critical metrics immediately upon login." },
      { quote: "It takes me 4 taps to get to my logbook. That's too much.", title: "Navigation Frustration", insight: "The most frequently used features must be accessible within a single tap from the home screen." },
      { quote: "I can't tell what's important on the screen. Everything's the same weight.", title: "Visual Hierarchy", insight: "We need to utilize typography, color, and spacing to draw attention to actionable insights." },
      { quote: "It's annoying to export the report - I need something easier before my checkups.", title: "Data Sharing", insight: "The export flow needs to be frictionless and easily discoverable." },
      { quote: "I wish it would give me a pat on the back when I have a good week.", title: "Trust and Motivation", insight: "Incorporate micro-interactions and positive reinforcement to build emotional trust." }
    ],
    solution: "The final solution is a patient-centric application that prioritizes ease of use and clarity. We overhauled the navigation, bringing the logbook and critical metrics to the forefront. A new visual language was introduced to ensure data is digestible at a glance, and we streamlined the report generation process, empowering patients to confidently share their health data with their clinicians.",
    screens: [
      { src: ascensiaScreen1, caption: "Streamlined Patient Dashboard focusing on critical metrics" },
      { src: ascensiaScreen2, caption: "Simplified Logbook entry flow" },
      { src: ascensiaScreen3, caption: "Data Visualization and trend analysis" },
      { src: ascensiaScreen4, caption: "One-tap report export functionality" }
    ],
    learnings: "Working in the heavily regulated healthcare sector taught me the importance of balancing compliance with user-centered design. I learned that in MedTech, clarity is not just a usability principle — it is a safety requirement."
  },
  {
    id: "unified-service-operations",
    title: "Unified Service Operations Platform",
    tags: "Telecommunication · Enterprise UX · Internal Tools",
    year: "2026",
    roleLabel: "UX Researcher",
    subtitle: "Reimagining workflows for network service delivery and assurance teams inside a large telecom enterprise.",
    thumbnailWidth: 1920,
    thumbnailHeight: 1080,
    thumbnail: <img src={usp169Thumb} alt="Unified Service Operations Platform" style={{ width: 1920, height: 1080, objectFit: "cover", display: "block" }} />,
    heroImage: fopThumb,
    color: "bg-stone-800",
    problem: "Service Delivery, Assurance, and Management teams were unable to operate efficiently due to fragmented systems, manual processes, and poor visibility.",
    methods: ["1:1 User Interviews", "Contextual Inquiry & Shadowing", "Workflow Mapping", "Role Hierarchy Analysis", "Pain-Point Synthesis"],
    outcome: "~200 pain points synthesized into 6 systemic themes, directly informing the Telco AI 360 product roadmap.",
    metadata: {
      role: "UX Researcher",
      timeline: "20 Weeks",
      sector: "Telecommunication · Enterprise",
      team: "UX Research, Design, Product"
    },
    about: "This research was initiated to deeply understand how service delivery and assurance teams actually work inside a large telecom organization, uncover operational bottlenecks, and inform AI-driven and workflow-level improvements as part of a broader Telco AI 360 vision.",
    challenge: "Telecom service operations relied on a complex ecosystem of disconnected tools — ServiceNow, Outlook, GPS, UBANK, OpsRamp, Excel, and Power BI. Despite the presence of these systems, day-to-day operations were heavily manual. Teams struggled with fragmented workflows, excessive email dependency, unclear ownership, and limited visibility into work status and performance.",
    approach: "We conducted 4 days of on-ground research combining qualitative interviews and contextual observation across ~30 interviews, ~5 shadowing sessions, workflow mapping for order and ticket management, and collaborative pain-point clustering.",
    objectives: [
      "Understand how different roles actually execute their day-to-day workflows.",
      "Identify where breakdowns occur across tools, handoffs, and responsibilities.",
      "Distinguish role-specific from systemic organizational problems.",
      "Surface high-impact opportunities for automation, better UX, and AI assistance."
    ],
    quotes: [
      { quote: "I open Excel before ServiceNow every morning. That's just how it works.", title: "Manual Dependency", insight: "ServiceNow fails to replace Excel because it lacks role-specific views and real-time tracking — the tool ecosystem redesign must start here." },
      { quote: "By the time I find out an SLA is about to breach, it's already breached.", title: "Visibility Gap", insight: "Proactive SLA alerting and centralized dashboards are the single highest-ROI intervention identified in the research." },
      { quote: "I have 12 tabs open at any time. Every tool is its own world.", title: "Tool Fragmentation", insight: "Context switching across 10+ platforms is the primary source of cognitive load — consolidation into a unified workspace is essential." },
      { quote: "New joiners take 3-4 months to be independently productive. There's no other way.", title: "Onboarding Failure", insight: "The absence of structured in-app guidance and role-specific task views extends ramp-up time far beyond what's operationally acceptable." }
    ],
    solution: "The research culminated in 6 systemic problem themes and a corresponding set of design and automation opportunity areas — including workflow automation, unified dashboards, intelligent assignment, SLA intelligence, an in-app communication layer, and targeted ServiceNow UX improvements. These directly informed the Telco AI 360 product direction.",
    screens: [],
    learnings: "In complex operational systems, clarity, visibility, and automation matter more than feature count. By studying workflows end-to-end and across roles, we moved beyond surface usability issues and uncovered the structural reasons behind inefficiency. The research demonstrated how UX can influence not just screens, but organizational effectiveness and service quality."
  },
  {
    id: "laptop-consumer-research",
    title: "Laptop Consumer Research",
    tags: "Consumer Research · UX Strategy · Concept Design",
    year: "2026",
    roleLabel: "User Research, UX Strategy, Concept Design",
    subtitle: "Understand the experiences of laptop users in the digital realm and identify areas for enhancement.",
    heroImage: laptopThumb,
    comingSoon: true,
    color: "bg-stone-800",
    problem: "Understand the experiences of laptop users in the digital realm and identify areas for enhancement.",
    methods: ["User Interviews", "Stakeholder Interviews", "Market Research"],
    outcome: "Coming soon",
    metadata: {
      role: "User Research, UX Strategy, Concept Design",
      timeline: "20 Weeks",
      sector: "Consumer Research",
      team: "UX Researchers, Product Designer, UX Strategist, Product Lead"
    },
    about: "",
    challenge: "",
    approach: "",
    process: [],
    objectives: [],
    quotes: [],
    solution: "",
    screens: [],
    learnings: ""
  },
  {
    id: "user-access-management",
    title: "User Access Management",
    tags: "Banking & Fintech · Product Design · Design System",
    year: "2026",
    roleLabel: "UX Research, Product Design, Design System",
    subtitle: "User access management portal for a bank — designing secure, intuitive role-based access control for enterprise banking teams.",
    heroImage: uamThumb,
    comingSoon: true,
    color: "bg-stone-900",
    problem: "Enterprise banking teams lacked a unified, intuitive portal to manage user roles, permissions, and access control across complex internal systems.",
    methods: ["User Interviews", "Stakeholder Interviews", "MVP Design", "User Testing"],
    outcome: "Coming soon",
    metadata: {
      role: "UX Research, Product Design, Design System",
      timeline: "12 Weeks",
      sector: "Banking & Fintech",
      team: "UX Researchers, Product Designer, UX Lead, Information Architect"
    },
    about: "",
    challenge: "",
    approach: "",
    process: [],
    objectives: [],
    quotes: [],
    solution: "",
    screens: [],
    learnings: ""
  }
];

export const skills = {
  qualitative: ["In-depth Interviews", "Contextual Inquiry", "Diary Studies", "Usability Testing"],
  quantitative: ["Survey Design", "A/B Testing Analysis", "Tree Testing", "Web Analytics"],
  tools: ["Figma", "Dovetail", "Miro", "Qualtrics", "UserTesting", "Amplitude"]
};

export const processSteps = [
  {
    id: "01",
    title: "Problem Framing",
    description: "Aligning with stakeholders on the business goals and defining the core research questions.",
    icon: "Target"
  },
  {
    id: "02",
    title: "Research Planning",
    description: "Selecting the right methodologies, recruiting participants, and writing test scripts.",
    icon: "ClipboardList"
  },
  {
    id: "03",
    title: "Data Collection",
    description: "Moderating sessions, observing behavior, and gathering both qualitative and quantitative data.",
    icon: "Users"
  },
  {
    id: "04",
    title: "Synthesis",
    description: "Finding patterns through affinity mapping, thematic analysis, and collaborative workshops.",
    icon: "Network"
  },
  {
    id: "05",
    title: "Insights & Recommendations",
    description: "Translating findings into actionable design decisions and measurable impact.",
    icon: "Lightbulb"
  }
];