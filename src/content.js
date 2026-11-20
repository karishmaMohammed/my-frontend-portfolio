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
  headline: "MERN · AI & Automation · CAD & 3D · Remote / India",
  tagline:
    "I build revenue-generating SaaS, CAD processing pipelines, and production AI features end to end: architecture, backend, frontend, DevOps, and payments.",
  summary: `Senior Full-Stack Engineer with ${YEARS_EXPERIENCE}+ years building and shipping revenue-generating SaaS products, enterprise web applications, and AI-powered automation. I grew from intern to senior engineer at a startup as one of two engineers owning products end to end. My work spans the MERN stack (React.js, Next.js, Node.js, MongoDB), event-driven microservices (Kafka, Docker), and production AI integrations (Anthropic, OpenAI, vision models).`,
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
  { value: "20k+", to: 20, suffix: "k+", label: "CAD files processed" },
  { value: "10k+", to: 10, suffix: "k+", label: "Organic clicks on CAD tools" },
  { value: "100–500", from: 100, to: 500, prefix: "100–", label: "Enterprise hardware clients" },
];

export const PRINCIPLES = [
  {
    title: "The model selects, code measures",
    body: "AI chooses only from candidates the geometry engine has already measured, so it never invents a dimension.",
  },
  {
    title: "The UI never hangs",
    body: "Long-running work runs through a job queue with hard timeouts and failure fallbacks.",
  },
  {
    title: "Every score is traceable",
    body: "Quality reports are rule-based, so each number points back to a measurement.",
  },
];

export const EXPERIENCE = [
  {
    company: "Marathon-OS",
    url: "https://marathon-os.com",
    role: "Senior Full-Stack Developer",
    location: "Remote",
    start: "Mar 2024",
    end: "Present",
    current: true,
    summary:
      "Co-own the CAD tools platform end to end with one other engineer, from architecture to payments. Grew it to 10,000+ organic clicks and steady paid revenue.",
    highlights: [
      "Designed the job architecture for long-running CAD work: the API writes a MongoDB job and publishes to Kafka, and Dockerized FreeCAD workers have processed 20,000+ files, with hard timeouts and failure fallbacks so the UI never hangs.",
      "Built mesh-to-solid conversion (STL, OBJ, 3MF to STEP, IGES, BREP) by reverse-engineering meshes into planes, cylinders, cones, and NURBS with Open CASCADE. Size-based time budgets cut one 249-body file from ~278k to ~61k faces.",
      "Built an AI-assisted technical drawing service (paid tier): vision models choose views, datums, and dimensions only from candidates FreeCAD has measured. Exports PDF, SVG, and DXF with GD&T.",
      "Built a STEP BOM service that returns an assembly tree, geometry-based quantities, material-aware mass estimates, and a weighted confidence report.",
      "Building shape search with DGCNN and PointNet embeddings of library models, stored in MongoDB and Qdrant (in progress).",
      "Set up coding standards, Git branching, code review, unit testing, and CI/CD pipelines (GitHub Actions) for the engineering team.",
    ],
  },
  {
    company: "Marathon-OS",
    url: "https://marathon-os.com",
    role: "Full-Stack Developer",
    location: "Remote",
    start: "Sep 2022",
    end: "Mar 2024",
    current: false,
    summary: "Built core modules of a PLM/PDM SaaS platform used by 100–500 enterprise hardware clients.",
    highlights: [
      "Built core PLM/PDM modules with React.js, Node.js, and MongoDB.",
      "Designed REST APIs with pagination and projection optimisations, cutting frontend load time by ~35% on large enterprise datasets.",
      "Built a Three.js 3D CAD viewer that renders assemblies of up to 500k polygons smoothly in the browser.",
      "Integrated Razorpay payments, Google Drive APIs, and AWS S3 with real-time webhook processing, reducing manual file handling by ~40%.",
    ],
  },
  {
    company: "Marathon-OS",
    url: "https://marathon-os.com",
    role: "MERN Stack Developer Intern",
    location: "Remote",
    start: "May 2022",
    end: "Sep 2022",
    current: false,
    summary: "Laid the auth, component, and storage foundations, then moved into a full-time role.",
    highlights: [
      "Built JWT authentication and role-based access control with Node.js and MongoDB.",
      "Created a reusable React component library and integrated AWS S3 storage, speeding up UI delivery by ~30%.",
    ],
  },
];

export const PROJECTS = [
  {
    name: "CAD Tools Platform",
    year: "Live",
    live: "https://marathon-os.com",
    repo: null,
    category: "AI + 3D Infrastructure",
    blurb: "A freemium online platform to view, convert, and draw CAD files, with paid services on top.",
    points: [
      "Six services on one Kafka job pipeline: format converter (STEP, IGES, BREP, STL, OBJ, 3MF, 3DM, DWG/DXF), a browser viewer with exploded views (Draco-compressed GLB), STEP BOM, technical drawings, a part library, and shape search (in progress).",
      "Part library with Elasticsearch search (MongoDB fallback), Redis caching, signed S3 downloads, and Razorpay paid downloads and credit packs.",
      "Quality reports for conversion and BOM are rule-based, never written by a model, so every score can be traced to a measurement.",
    ],
    stack: [
      "Next.js",
      "Three.js",
      "Node.js",
      "Express.js",
      "Python",
      "FreeCAD",
      "Open CASCADE",
      "MongoDB",
      "Elasticsearch",
      "Redis",
      "Kafka",
      "Docker",
      "AWS S3",
      "Qdrant",
      "Razorpay",
      "Anthropic",
      "OpenAI",
    ],
    accent: "ivory",
  },
  {
    name: "PLM / PDM Platform",
    year: "Production",
    live: null,
    repo: null,
    category: "Enterprise SaaS",
    blurb: "A Jira-like enterprise SaaS for hardware and manufacturing companies, serving 100–500 clients.",
    points: [
      "Unifies engineering, supply chain, production, and document management in one product.",
      "Covers design revisions, EBOM/MBOM, approval workflows, and PDM with Google Drive OAuth.",
      "REST APIs with pagination and projection, ~35% faster frontend load on large enterprise datasets.",
    ],
    stack: ["React.js", "React D3", "Node.js", "Express.js", "MongoDB", "Google Drive API"],
    accent: "copper",
  },
  {
    name: "WhatsApp AI Automation",
    year: "2026 · Freelance",
    live: null,
    repo: null,
    category: "AI Product",
    blurb: "AI customer support chatbot for Travseek, a Vietnam-based travel company.",
    points: [
      "Production WhatsApp chatbot (OpenAI GPT-4) with automated replies, lead capture, and human handoff.",
      "WhatsApp Business Cloud API integration with webhook processing and session state management.",
      "Analytics dashboard, conversation tracking, and a multi-user admin panel with role-based access control.",
    ],
    stack: ["Next.js", "Node.js", "Express.js", "MongoDB", "WhatsApp Business API", "OpenAI"],
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
    items: ["Node.js", "Express.js", "Python", "REST API Design", "Microservices", "Kafka", "Webhooks"],
  },
  {
    title: "Databases & Search",
    items: ["MongoDB", "Redis", "Elasticsearch", "Qdrant (Vector DB)"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (S3)", "Docker", "Vercel", "GitHub Actions", "CI/CD"],
  },
  {
    title: "AI & Automation",
    items: [
      "Anthropic API",
      "OpenAI API",
      "Vision Models",
      "Prompt Engineering",
      "Shape Embeddings (DGCNN, PointNet)",
      "RAG",
      "WhatsApp AI Bots",
      "n8n",
    ],
  },
  {
    title: "CAD & 3D",
    items: [
      "FreeCAD",
      "Open CASCADE",
      "Open3D",
      "trimesh",
      "STEP / IGES / BREP",
      "Mesh Processing",
      "GLB / Draco",
      "GD&T Technical Drawings",
    ],
  },
  {
    title: "Payments, APIs & Practice",
    items: [
      "Razorpay",
      "Google Drive API (OAuth)",
      "WhatsApp Business Cloud API",
      "Google Analytics",
      "Google Search Console",
      "Unit & Integration Testing",
      "System Design",
      "Code Review",
      "Git Workflows",
    ],
  },
];

export const EDUCATION = [
  {
    title: "B.Tech — Electronics & Communication Engineering",
    school: "GATES Institute of Technology",
    dates: "2017 – 2021",
    score: "CGPA 8.54 / 10",
  },
  {
    title: "Intermediate — MPC",
    school: "Narayana Junior College, Kurnool, AP",
    dates: "2015 – 2017",
    score: "97%",
  },
  {
    title: "SSC",
    school: "St. Mary’s High School, Gooty, AP",
    dates: "2015",
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
