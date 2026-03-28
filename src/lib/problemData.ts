export interface ProblemStatement {
  id: string;
  title: string;
  domain: string;
  background: string;
  problemStatement: string;
  keyObjectives: string[];
  scope: string[];
  challenges: {
    instituteLevel?: string[];
    studentLevel?: string[];
    industryLevel?: string[];
    administrativeLevel?: string[];
    others?: string[];
  };
  expectedCapabilities: string[];
  innovationOpportunities: string[];
  deliverables: string[];
}

export interface Domain {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const domains: Domain[] = [
  {
    id: "ai",
    name: "AI (Artificial Intelligence)",
    description: "Focus on Agentic AI, LLM integration, and smart automation to solve human-centric problems.",
    icon: "Brain",
  },
  {
    id: "fintech",
    name: "FINTECH",
    description: "Next-gen security, UPI-based innovations, and decentralized finance to make transactions safer.",
    icon: "Wallet",
  },
  {
    id: "edtech",
    name: "EDTECH",
    description: "Beyond Zoom calls; focus on personalized learning paths, AI tutors, and immersive VR/AR education.",
    icon: "GraduationCap",
  },
  {
    id: "healthtech",
    name: "HEALTH TECH",
    description: "Tech that assists in medical diagnosis, remote patient monitoring, and efficient hospital management.",
    icon: "Stethoscope",
  },
  {
    id: "datasafety",
    name: "DATA SAFETY",
    description: "Cybersecurity frameworks, encryption protocols, and systems designed to protect privacy in the digital void.",
    icon: "ShieldCheck",
  },
  {
    id: "egovernance",
    name: "E-GOVERNANCE",
    description: "Digitizing public services for faster, transparent, and more accessible citizen-government interaction.",
    icon: "Landmark",
  },
  {
    id: "agritech",
    name: "AGRI TECH",
    description: "Smart sensors for soil, crop disease detection via image processing, and supply chain transparency for farmers.",
    icon: "Leaf",
  },
  {
    id: "openinnovation",
    name: "OPEN INNOVATION",
    description: "The wildcard. For ideas so disruptive they don't fit into any existing portal.",
    icon: "Zap",
  },
];

export const problemStatements: ProblemStatement[] = [
  {
    id: "ps1",
    title: "Placement Drive Management System",
    domain: "E-GOVERNANCE",
    background: "In line with the vision of strengthening skill development ecosystems and improving employment outcomes, the Government of Punjab is developing HUNAR Punjab — a unified digital platform to connect students, institutes, and industry. Institutes of Punjab play a critical role in preparing youth for employment. However, one of the most crucial processes — placement management within institutes — remains largely manual, fragmented, and inefficient.",
    problemStatement: "Design and prototype a Placement Drive Management system that enables institutes to efficiently plan, execute, and track placement drives in a structured, transparent, and scalable manner.",
    keyObjectives: [
      "Streamlines the end-to-end placement drive lifecycle",
      "Improves visibility and transparency for all stakeholders",
      "Reduces manual effort and coordination gaps",
      "Enables data-driven decision-making for institutes and administrators",
      "Enhances the overall placement experience for students and employers",
    ],
    scope: [
      "Creation of a placement drive",
      "Identification and application of eligible students",
      "Shortlisting and screening",
      "Conduct of placement activities (tests/interviews)",
      "Final selection, job offers give and accepted and reporting",
    ],
    challenges: {
      instituteLevel: [
        "Placement drives are managed manually without standardized workflows",
        "Difficulty in tracking student applications and outcomes",
        "Limited tools for coordinating with companies and students",
      ],
      studentLevel: [
        "Lack of visibility into available placement opportunities",
        "No structured way to track application status",
        "Limited feedback or communication during the process",
      ],
      industryLevel: [
        "Difficulty in identifying suitable candidates",
        "Inefficient coordination with institutes",
        "Lack of structured hiring pipelines",
      ],
      administrativeLevel: [
        "Limited real-time data on placement performance",
        "Difficulty in monitoring institute-level outcomes",
        "Lack of consolidated reporting and analytics",
      ],
    },
    expectedCapabilities: [
      "Define job roles, eligibility criteria, number of vacancies, and selection process",
      "Discovery of relevant placement drives and application tracking",
      "Shortlisting & Screening stages management",
      "Coordination of placement activities and interview schedules",
      "Final selection, job offer management (accept/reject)",
      "Dashboards for Placement KPIs and performance insights",
    ],
    innovationOpportunities: [
      "Smart candidate-job matching",
      "Automated communication systems (SMS/WhatsApp/email)",
      "Real-time dashboards and tracking",
      "Offline-first or low-connectivity solutions",
      "Data-driven insights and analytics",
      "User-friendly interfaces for low digital literacy users",
    ],
    deliverables: [
      "Problem understanding and approach",
      "User journeys and workflows",
      "Wireframes / UI designs",
      "Functional prototype (web/app-based)",
    ],
  },
  {
    id: "ps2",
    title: "Service & Repair Marketplace (SRM)",
    domain: "OPEN INNOVATION",
    background: "Industrial Training Institutes (ITIs) are vocational training institutions that equip youth with practical, industry-relevant skills. At the district level, various govt institutions have continuous requirements for repair and maintenance services. However, the current process of identifying service providers and executing such work is often fragmented, manual, and inefficient.",
    problemStatement: "Despite the availability of skilled manpower and a steady demand for repair and maintenance services, there is no structured digital system to efficiently connect service demand with capable service providers.",
    keyObjectives: [
      "Create a digital marketplace that enables seamless matching, execution, and tracking of service and repair-related work.",
      "Ensuring efficient execution, transparency, and accountability.",
    ],
    scope: [
      "Service Request Interface (Raise/Categorize requests)",
      "Matching Mechanism (Proximity, Availability, Trade)",
      "Workflow Management (Request to Completion)",
      "Execution & Tracking (Real-time updates, completion proof)",
      "Payment & Record Management",
      "Feedback & Rating System",
    ],
    challenges: {
      others: [
        "Underutilization of ITI infrastructure and student skills",
        "Missed opportunities for Internal Revenue Generation (IRG) for ITIs",
        "Absence of systematic tracking of work and payments",
      ],
    },
    expectedCapabilities: [
      "End-to-end workflow (request → matching → execution → completion)",
      "Location-based features for efficient matching",
      "Simple dashboards for tracking requests and performance",
      "Smart logic for prioritization and improved matching",
    ],
    innovationOpportunities: [
      "Creation of a structured service and repair ecosystem",
      "Improved utilization of skilled manpower",
      "Scalable solution adaptable across different regions",
    ],
    deliverables: [
      "Functional prototype (MVP) showing end-to-end workflow",
      "Focus on core functionality and usability",
    ],
  },
];
