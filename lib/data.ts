export const profile = {
  name: "Abdul Wasay Waqas",
  role: "Full-Stack AI Engineer",
  roles: ["Full-Stack AI Engineer", "Voice & Conversational AI", "LLM Systems Builder"],
  tagline:
    "I build end-to-end AI products — real-time voice & LLM pipelines, robust Python/FastAPI backends, and polished React/Next.js frontends.",
  location: "Lahore, Pakistan",
  email: "wasaywaqas121@gmail.com",
  phone: "+92 316 4408053",
  socials: {
    linkedin: "https://www.linkedin.com/in/abdul-wasay-b5013024a",
    github: "https://github.com/abdulWasayWaqas",
  },
  resume: "/Abdul_Wasay_Waqas_CV.pdf",
  metrics: [
    { value: "2", label: "Production-scale products live (Convoi + HintMint)" },
    { value: "40+", label: "Concurrent voice sessions in production" },
    { value: "1,000+", label: "Real-time users served" },
    { value: "55%", label: "End-to-end latency cut (2.2s → <1s)" },
    { value: "15+", label: "AI providers integrated" },
  ],
};

export const about = {
  heading: "About",
  lead: "AI engineer focused on shipping real-time, production-grade systems.",
  body: [
    "I'm a full-stack AI engineer who ships production voice and conversational AI. My core work lives at the intersection of real-time STT–LLM–TTS pipelines, LiveKit voice agents, RAG, and multi-provider LLM orchestration — the systems that have to stay fast and reliable while thousands of people use them at once.",
    "At Convoi AI I architected a voice platform serving 40+ concurrent sessions and 1,000+ real-time users, cutting end-to-end latency by 55%. I own features across the whole stack: the data model, the FastAPI backend, the AI pipeline, the tests, and the Next.js frontend — then deploy it on AWS through CI/CD.",
    "I care about the details that make AI products actually usable: streaming responses, graceful fallbacks, tight latency budgets, and interfaces people enjoy.",
  ],
};

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "AI & ML",
    items: [
      "LLM Orchestration",
      "RAG",
      "Prompt Engineering",
      "Tool / Function Calling",
      "Vector Search & Embeddings",
      "STT / TTS / VAD",
      "Speaker Diarization",
      "Wakeword Detection",
      "LiveKit Agents",
      "LLM-based Evaluation",
    ],
  },
  {
    title: "Backend",
    items: [
      "Python",
      "FastAPI",
      "Django / DRF",
      "Async Python",
      "WebSockets",
      "Socket.IO",
      "Pydantic",
      "SQLAlchemy",
      "Celery / arq",
      "Microservices",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tauri (Rust desktop)",
      "Redux Toolkit",
      "TanStack Query",
      "Tailwind CSS",
      "Radix / shadcn",
      "Three.js / R3F",
      "Responsive UI",
    ],
  },
  {
    title: "Data & Cloud",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Qdrant (Vector DB)",
      "Firebase",
      "AWS (EC2, S3)",
      "Docker",
      "Nginx",
      "FFmpeg",
      "GitHub Actions / CI-CD",
    ],
  },
  {
    title: "Integrations & Testing",
    items: [
      "SIP Telephony / LiveKit SIP",
      "WebRTC",
      "WhatsApp Business API",
      "Twilio",
      "Stripe",
      "Pytest",
      "Playwright (E2E)",
    ],
  },
  {
    title: "Providers",
    items: [
      "OpenAI",
      "Anthropic",
      "Groq",
      "Google",
      "Azure",
      "Deepgram",
      "ElevenLabs",
      "Cartesia",
      "AssemblyAI",
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  link?: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Full-Stack AI Engineer",
    company: "Convoi AI",
    link: "https://go.convoi.ai",
    period: "Jan 2025 — Present",
    points: [
      "Architected and shipped a production voice AI platform on LiveKit (40+ concurrent sessions) with STT–LLM–TTS pipelines integrating 15+ providers (OpenAI, Anthropic, Deepgram, ElevenLabs, Cartesia, Groq, Google, Azure, AssemblyAI).",
      "Cut end-to-end voice agent latency 55% (2200ms → under 1000ms) via real-time STT-to-TTS orchestration, streaming token generation, and VAD tuning.",
      "Built a FastAPI backend (PostgreSQL, Redis/arq, Qdrant vector DB, Socket.IO) exposing 100+ REST endpoints, with runtime tool/function calling and RAG over Qdrant for multi-turn conversations.",
      "Owned the frontend: a Next.js admin CMS with 150+ responsive components (analytics, billing, RBAC, multi-tenant management) wired to the backend APIs.",
      "Designed an async subscriber microservice capturing 50+ concurrent LiveKit recordings via FFmpeg audio merging with reliable S3 upload.",
      "Deployed to AWS EC2 via GitHub Actions CI/CD; hardened AI reliability with retries, circuit breakers, and fallback model routing scaling to 1,000+ concurrent users.",
    ],
  },
  {
    role: "Freelance Full-Stack & Web Developer",
    company: "Fiverr & Upwork (Remote)",
    period: "2022 — 2023",
    points: [
      "Delivered full-stack web apps, AI/chatbot integrations, and SEO-optimized sites for international clients — focused on performance, usability, and on-time delivery.",
    ],
  },
  {
    role: "JavaScript Intern",
    company: "Qwerty Experts",
    period: "Jul 2023 — Sep 2023",
    points: [
      "Built responsive React/JavaScript UI components and shipped production frontend features under code review and Git-based workflows.",
    ],
  },
];

export type ProjectLink = { label: string; href: string };

export type ProjectArt = "waveform" | "mic" | "analytics" | "stream";

export type Project = {
  name: string;
  blurb: string;
  stack: string[];
  links?: ProjectLink[];
  highlights: string[];
  image?: string;
  art?: ProjectArt;
};

export const projects: Project[] = [
  {
    name: "HintMint",
    blurb: "Real-time AI meeting copilot — live, on-call answers only you can see.",
    stack: ["Tauri (Rust)", "React", "TypeScript", "LLM", "RAG", "Streaming"],
    links: [{ label: "hintmint.io", href: "https://hintmint.io" }],
    image: "/projects/hintmint.png",
    highlights: [
      "Desktop AI meeting assistant (Tauri/Rust + React) that generates live, on-call answers in real time — shipped on the Microsoft Store at production scale.",
      "Engineered the streaming LLM pipeline: low-latency token streaming, prompt engineering, and speaker-aware context for accurate in-the-moment responses.",
      "Built cross-meeting memory with RAG so the assistant recalls context across past conversations.",
    ],
  },
  {
    name: "Convoi Web App",
    blurb: "The agent studio — plus the backend & LiveKit runtime powering it.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Redis / arq",
      "Qdrant",
      "LiveKit Agents",
      "Socket.IO",
    ],
    links: [{ label: "go.convoi.ai", href: "https://go.convoi.ai" }],
    image: "/projects/convoi-webapp.png",
    highlights: [
      "Built the no-code agent studio (Next.js/React) where users assemble voice AI agents — selecting LLM, transcriber (STT), voice (TTS), knowledge bases, and tools per agent.",
      "Worked into the LiveKit agent runtime: STT–LLM–TTS orchestration, streaming responses, runtime tool/function calling, and RAG over Qdrant knowledge bases.",
      "Backed by an async FastAPI service (PostgreSQL, Redis/arq, 100+ REST endpoints) with live call, session & agent status pushed over Socket.IO/WebSockets.",
      "Real-time observability: call logs, per-agent latency & cost breakdowns, and minutes/revenue analytics.",
    ],
  },
  {
    name: "Convoi Admin Console & CMS",
    blurb: "Multi-tenant control plane — clients, AI providers, billing & access.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "RBAC", "Data Tables"],
    links: [{ label: "admin.convoi.ai", href: "https://admin.convoi.ai" }],
    image: "/projects/convoi-cms.png",
    highlights: [
      "Data-dense multi-tenant admin console for managing clients, AI providers, API keys, billing, and role-based permissions.",
      "Built client-wise analytics (latency, revenue, minutes used) and a custom CMS so platform config ships without redeploys.",
    ],
  },
  {
    name: "Convoi Marketing Website",
    blurb: "SEO-optimized marketing site with an embedded live voice-agent demo.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "SEO"],
    links: [{ label: "convoi.ai", href: "https://convoi.ai" }],
    image: "/projects/convoi-site.png",
    highlights: [
      "Designed and built the public marketing site — responsive, animated, and SEO-optimized, featuring an embedded live voice-agent demo.",
      "Powered by a shared 150+ component design system reused across the site, product app, and admin console.",
    ],
  },
  {
    name: "Diarization Studio",
    blurb: "Speaker separation & LLM call analysis, full-stack.",
    stack: ["Next.js", "Django REST", "Deepgram", "Groq LLM", "PyAV"],
    image: "/projects/diarization.jpg",
    art: "waveform",
    highlights: [
      "Diarizes calls into per-speaker transcripts and isolated audio tracks (with and without gaps), each playable and downloadable.",
      "LLM-powered call analysis (Groq): summary, sentiment, intent, and action items, plus talk-time analytics.",
      "Python-based translation and SRT/VTT/TXT/JSON export in a green/black themed React workspace.",
    ],
  },
  {
    name: "Hello Wakeword",
    blurb: "Wakeword-activated voice agent for edge devices.",
    stack: ["Python", "LiveKit", "ONNX", "Deepgram", "OpenAI", "Cartesia"],
    image: "/projects/wakeword.jpg",
    art: "mic",
    highlights: [
      "Hands-free voice assistant triggered by a “hey livekit” wakeword using ONNX on-device inference.",
      "Engineered the wakeword → LiveKit connect → stream → auto-disconnect loop for edge devices (Raspberry Pi).",
    ],
  },
  {
    name: "Call Analysis Pipeline",
    blurb: "Post-call insights with LLM-based scoring + RAG indexing.",
    stack: ["Python", "FastAPI", "Qdrant", "LLM", "Async Workers"],
    image: "/projects/callanalysis.jpg",
    art: "analytics",
    highlights: [
      "Scored recorded conversations on intent, sentiment, objections, and outcome via LLM-based judging with structured Pydantic outputs.",
      "Indexed transcripts into Qdrant to power RAG knowledge bases.",
    ],
  },
  {
    name: "Real-Time Streaming Platform",
    blurb: "WebRTC streaming with an integrated AI voice chatbot.",
    stack: ["WebRTC", "LiveKit", "React", "WebSockets", "STT", "LLM"],
    image: "/projects/streaming.jpg",
    art: "stream",
    highlights: [
      "Real-time streaming app (WebRTC + LiveKit) with an integrated AI voice chatbot — speech-to-text feeding LLM responses.",
      "Responsive React frontend with live chat.",
    ],
  },
];

export const education = [
  {
    degree: "BS Computer Science",
    school: "Government College University, Lahore",
    period: "2021 — 2025",
  },
  {
    degree: "FSc Pre-Engineering",
    school: "Government College, Lahore",
    period: "",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
