const CAREER_START = new Date(2022, 4, 1); // 1 May 2022

export function getYearsOfExperience(from = CAREER_START, now = new Date()) {
  let years = now.getFullYear() - from.getFullYear();
  const beforeAnniversary =
    now.getMonth() < from.getMonth() ||
    (now.getMonth() === from.getMonth() && now.getDate() < from.getDate());
  if (beforeAnniversary) years -= 1;
  return Math.max(years, 0);
}

export const YEARS_EXPERIENCE = getYearsOfExperience();

export const SITE = {
  name: "Karishma M",
  firstName: "Karishma",
  lastName: "M",
  role: "Senior Full-Stack Developer",
  headline: "MERN · AI & Automation · Remote / India",
  tagline:
    "I architect and ship scalable SaaS, CAD infrastructure, and AI-powered automation for hardware companies.",
  summary:
    `Senior Full-Stack Engineer with ${YEARS_EXPERIENCE}+ years building and shipping scalable SaaS platforms, enterprise web applications, and AI-powered automation systems. Expert in the MERN stack, microservices, Docker, Kafka, and OpenAI / Anthropic integrations. Proven record across CAD infrastructure and PLM/PDM platforms serving 100–500+ enterprise hardware clients.`,
  email: "karishmamuhammed7@gmail.com",
  phone: "+91 83090 35246",
  phoneRaw: "8309035246",
  location: "Remote / India",
  linkedin: "https://www.linkedin.com/in/karishma-mohammed/",
  github: "https://github.com/karishmaMohammed",
  resume: "/Karishma_M_Resume.pdf",
  photo: "https://portfolio-ks.s3.ap-south-1.amazonaws.com/karishma.jpg",
  availability: "Open to senior full-stack, AI platform, and remote product roles",
};

export const STATS = [
  { value: `${YEARS_EXPERIENCE}+`, to: YEARS_EXPERIENCE, suffix: "+", label: "Years shipping product" },
  { value: "6+", to: 6, suffix: "+", label: "Production SaaS modules" },
  { value: "15k+", to: 15, suffix: "k+", label: "CAD files processed" },
  { value: "100–500", from: 100, to: 500, prefix: "100–", label: "Enterprise clients served" },
];

export const EXPERIENCE = [
  {
    company: "Marathon-OS",
    url: "https://marathon-os.com",
    role: "Senior MERN Stack Developer",
    location: "Remote",
    start: "Sep 2022",
    end: "Present",
    current: true,
    summary:
      "Owning architecture and delivery across PLM/PDM, CAD microservices, and AI automation for enterprise hardware companies.",
    highlights: [
      "Architected and shipped 6+ production SaaS modules covering PLM/PDM, CAD microservices, and AI automation — serving 100–500 enterprise clients.",
      "Designed event-driven microservices with Kafka and Dockerized CAD pipelines, processing 15,000+ STEP/mesh files with a 60% reduction in conversion time.",
      "Built 3D CAD visualisation with Three.js so hardware companies can view, convert, and monetise CAD assets — feeding the freemium-to-paid pipeline.",
      "Developed an AI-powered CAD TechDraw service that converts 3D STEP files into 2D technical drawings using FreeCAD, Python, and Docker.",
      "Integrated Razorpay, Google Drive APIs, and AWS S3 with realtime webhooks, cutting manual file-handling effort by ~40%.",
      "Established coding standards, Git workflows, code review, unit testing, and CI/CD (GitHub Actions) across the engineering team.",
    ],
  },
  {
    company: "Marathon-OS",
    url: "https://marathon-os.com",
    role: "MERN Stack Developer Intern → Promoted",
    location: "Remote",
    start: "May 2022",
    end: "Sep 2022",
    current: false,
    summary:
      "Promoted to senior within four months after shipping auth, component systems, and cloud storage foundations.",
    highlights: [
      "Built secure JWT authentication and role-based access control with Node.js and MongoDB.",
      "Created a reusable React component library and integrated AWS S3, accelerating UI delivery by ~30%.",
      "Contributed to REST API integrations, bug triage, and collaborative Git workflows.",
    ],
  },
];

export const PROJECTS = [
  {
    name: "PLM / PDM Platform",
    year: "Production",
    live: "https://marathon-os.com",
    repo: null,
    category: "Enterprise SaaS",
    blurb:
      "A Jira-like manufacturing platform that unifies engineering, supply chain, production, and document management for 100–500 hardware clients.",
    points: [
      "Full product lifecycle: design revisions, EBOM/MBOM, approvals, and PDM with Google Drive OAuth.",
      "Scalable REST APIs with pagination and projection — ~35% faster frontend load on large enterprise datasets.",
    ],
    stack: ["React.js", "React D3", "Node.js", "Express", "MongoDB", "Google Drive API"],
    accent: "copper",
  },
  {
    name: "CAD Microservices SaaS",
    year: "Production",
    live: "https://marathon-os.com",
    repo: null,
    category: "AI + 3D Infrastructure",
    blurb:
      "Freemium CAD viewing, conversion, and monetization platform with event-driven microservices and AI TechDraw.",
    points: [
      "Dockerized CAD pipelines + Kafka handling 15,000+ conversion jobs; 5,110 organic clicks and 116k impressions in 28 days.",
      "Three.js visualisation of assemblies up to 500k polygons, plus Razorpay and S3 for paid conversion workflows.",
      "AI TechDraw: upload a 3D STEP file, receive an auto-generated 2D drawing via FreeCAD + Python batch processing.",
    ],
    stack: [
      "Next.js",
      "Three.js",
      "Node.js",
      "Python",
      "FreeCAD",
      "Docker",
      "Kafka",
      "OpenAI",
      "Anthropic",
      "Razorpay",
    ],
    accent: "ivory",
  },
  {
    name: "WhatsApp AI Automation",
    year: "2026 · Freelance",
    live: null,
    repo: null,
    category: "AI Product",
    blurb:
      "Production WhatsApp AI chatbot and support automation for Travseek, a Vietnam-based travel company.",
    points: [
      "GPT-4 replies, lead capture, and human-handoff logic on WhatsApp Business Cloud API.",
      "Webhook event processing, session state, realtime analytics, and a multi-user admin panel with RBAC.",
    ],
    stack: ["Next.js", "Node.js", "Express", "MongoDB", "WhatsApp API", "OpenAI"],
    accent: "ember",
  },
];

export const SKILL_GROUPS = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "JavaScript", "Redux", "Tailwind CSS", "Three.js", "React D3"],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Python",
      "REST APIs",
      "Microservices",
      "Kafka",
      "Redis",
      "Docker",
      "Webhooks",
      "Elasticsearch",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Docker", "Vercel", "GitHub Actions", "CI/CD", "MongoDB", "Redis"],
  },
  {
    title: "AI & Automation",
    items: [
      "OpenAI APIs",
      "Anthropic API",
      "RAG",
      "Prompt Engineering",
      "WhatsApp AI Bots",
      "n8n Workflows",
    ],
  },
  {
    title: "Product & Platforms",
    items: ["Razorpay", "Google Drive APIs", "WhatsApp Business API", "Google Analytics", "System Design"],
  },
];

export const EDUCATION = [
  {
    title: "B.Tech — Electronics & Communication",
    school: "GATES Institute of Technology",
    dates: "Jun 2017 – Aug 2021",
    score: "CGPA 8.54 / 10",
  },
  {
    title: "Intermediate — MPC",
    school: "Narayana Junior College, Kurnool",
    dates: "Jun 2015 – Apr 2017",
    score: "97 / 100",
  },
  {
    title: "SSC",
    school: "St. Mary’s High School, Gooty",
    dates: "Jun 2005 – Mar 2015",
    score: "CGPA 9.2 / 10",
  },
];

export const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
