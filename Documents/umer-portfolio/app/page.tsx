import { MobileNav } from "./components/MobileNav";

// ─── Data ─────────────────────────────────────────────────────────────────────

const EXPERIENCE = [
  {
    company: "Rejolut Web3.0",
    role: "Senior Backend & Blockchain Engineer / Tech Lead",
    period: "Jul 2022 — Present",
    location: "Navi Mumbai",
    current: true,
    awards: ["Trailblazer Award", "Best Performer of the Year"],
    highlights: [
      "Leading backend architecture and technical delivery across fintech, blockchain, and automation platforms handling wallets, payments, and distributed transaction systems.",
      "Owning system design decisions, scalability planning, backend performance optimization, and production reliability across multiple client platforms.",
      "Leading development of OpenClaw (2026–Present), an AI-powered workflow automation platform enabling autonomous execution using LLM agents and local AI runtimes (Ollama).",
      "Built AI automation bots supporting API orchestration, intelligent task routing, workflow execution, and AI-powered search across enterprise workflows.",
      "Designed secure local AI execution environments preventing unsafe plugin access and API credential exposure.",
      "Developed scalable backend services using NestJS, TypeScript, PostgreSQL, and Redis supporting blockchain and financial systems.",
    ],
  },
  {
    company: "SoluLab Pvt Ltd",
    role: "Blockchain Consultant (Part-Time)",
    period: "Feb 2024 — Dec 2024",
    location: "Remote",
    current: false,
    awards: [],
    highlights: [
      "Provided blockchain architecture consulting for Web3 platforms focusing on smart contract security and scalable backend integrations.",
      "Reviewed Solidity contracts implementing upgradeable proxy patterns and secure token mechanisms.",
      "Advised engineering teams on off-chain indexing, distributed architecture, and blockchain-backend synchronization.",
      "Delivered consulting support for active blockchain products (8–10 hrs/week).",
    ],
  },
];

const PROJECTS = [
  {
    name: "Astranova BlackPass",
    subtitle: "SocialFi Platform — Flagship Project",
    year: "2024",
    stack: ["Immutable zkEVM", "Solidity", "NestJS", "PostgreSQL", "Azure"],
    description:
      "Led backend architecture and blockchain integration for a large-scale SocialFi ecosystem combining NFT ownership, quests, and reward systems.",
    highlights: [
      "Integrated Immutable zkEVM for gas-free minting and seamless wallet onboarding via Immutable Passport.",
      "Built scalable backend infrastructure synchronizing on-chain events with off-chain systems.",
      "Designed indexing and reward distribution systems for real-time engagement workflows.",
      "Deployed containerized infrastructure on Azure using CI/CD pipelines.",
    ],
  },
  {
    name: "TagoCash",
    subtitle: "Web3 Payments Platform",
    year: "2024 — Present",
    stack: ["NestJS", "PostgreSQL", "Redis", "Stellar", "Polygon", "Solana"],
    description:
      "Leading backend system architecture for a multi-chain fintech payments platform supporting global fiat on/off-ramps.",
    highlights: [
      "Integrated 10+ payment providers enabling cross-border transfers and mobile money operations.",
      "Built secure wallet infrastructure with encrypted key management and recovery flows.",
      "Implemented WebAuthn authentication, 2FA, and transaction approval workflows.",
      "Designed scalable APIs supporting P2P transfers, QR payments, subscriptions, and enterprise integrations.",
    ],
  },
  {
    name: "OpenClaw",
    subtitle: "AI Workflow Automation Platform",
    year: "2026 — Present",
    stack: ["Node.js", "TypeScript", "Ollama", "LLM Agents"],
    description:
      "Building an AI-driven automation platform enabling autonomous execution of developer and business workflows using local LLM runtimes.",
    highlights: [
      "Implemented plugin-based automation bots supporting intelligent task execution and API orchestration.",
      "Built AI semantic search enabling contextual workflow discovery and automation execution.",
      "Reduced SaaS dependency through local-first AI infrastructure.",
    ],
  },
  {
    name: "RVV Vesting Platform",
    subtitle: "Token Vesting Smart Contracts",
    year: "2025",
    stack: ["Solidity", "Next.js", "Base"],
    description:
      "Developed upgradeable smart contracts implementing token vesting with secure EIP-712 authorization on Base.",
    highlights: [],
  },
];

const SKILLS: Record<string, string[]> = {
  Languages: ["TypeScript", "JavaScript", "Solidity", "Go", "Rust", "SQL", "Java"],
  Backend: ["Node.js", "NestJS", "Microservices", "REST APIs"],
  "AI & Automation": [
    "LLM Integration",
    "Ollama",
    "AI Agents",
    "Workflow Automation",
    "Semantic Search",
    "Automation Bots",
  ],
  Blockchain: ["Ethereum", "Polygon", "Base", "Solana", "Stellar", "Immutable zkEVM"],
  Databases: ["PostgreSQL", "MongoDB", "Redis"],
  DevOps: ["Docker", "CI/CD", "GitHub Actions", "Nginx"],
  Cloud: ["AWS", "Azure"],
  Security: ["JWT", "OAuth2", "WebAuthn", "2FA"],
};

const INTERESTS = [
  "Backend & Distributed Systems",
  "System Design & Scalable Architecture",
  "Fintech & Blockchain Infrastructure",
  "Workflow Automation & AI Systems",
  "Performance Optimization & Reliability Engineering",
];

const STATS = [
  { label: "Years Experience", value: "3+" },
  { label: "Production Projects", value: "10+" },
  { label: "Chains Integrated", value: "6+" },
  { label: "Awards", value: "2×" },
];

const CONTACTS = [
  { label: "Email", value: "umerfakih48@gmail.com", href: "mailto:umerfakih48@gmail.com" },
  { label: "GitHub", value: "github.com/umerfakih", href: "https://github.com/umerfakih" },
  { label: "LinkedIn", value: "linkedin.com/in/umer-fakih", href: "https://linkedin.com/in/umer-fakih" },
  { label: "Phone", value: "+91 9967022253", href: "tel:+919967022253" },
  { label: "Location", value: "Thane, Maharashtra, India", href: null },
];

// ─── Components ───────────────────────────────────────────────────────────────

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-12">
      <span className="font-mono text-cyan-400/60 text-xs tracking-[0.25em]">{index}</span>
      <div className="h-px w-6 bg-gradient-to-r from-cyan-400/50 to-transparent" />
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [featuredProject, ...restProjects] = PROJECTS;

  return (
    <>
      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#080808]/90 border-b border-zinc-800/60">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-mono text-cyan-400 font-bold tracking-widest text-sm">
            UF.
          </a>
          <div className="flex items-center gap-6">
            {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hidden md:block text-xs text-zinc-500 hover:text-white transition-colors tracking-widest uppercase font-medium"
              >
                {item}
              </a>
            ))}
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex text-xs font-mono px-4 py-1.5 border border-cyan-400/40 text-cyan-400 rounded hover:bg-cyan-400/10 hover:border-cyan-400/70 transition-all"
            >
              Resume ↗
            </a>
            <MobileNav />
          </div>
        </div>
      </nav>

      <main className="pt-16">

        {/* ── HERO ── */}
        <section className="min-h-screen flex items-center relative overflow-hidden">
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          {/* Ambient blobs */}
          <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.04] blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/[0.04] blur-3xl pointer-events-none" />

          <div className="max-w-5xl mx-auto px-6 py-32 w-full relative">
            <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12">

              {/* Text */}
              <div className="flex-1">
                <p className="hero-1 font-mono text-cyan-400 text-xs tracking-[0.35em] mb-6 uppercase">
                  Hello, I&apos;m
                </p>
                <h1 className="hero-2 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-[1.05]">
                  Umer Fakih
                </h1>
                <h2 className="hero-3 text-lg md:text-xl text-zinc-400 mb-8 font-light tracking-wide">
                  Backend Engineer
                  <span className="text-zinc-600 mx-3">/</span>
                  Tech Lead
                </h2>
                <p className="hero-4 max-w-xl text-zinc-400 leading-relaxed mb-10 text-sm md:text-[15px]">
                  Building scalable systems, fintech platforms, and blockchain applications
                  for production. Currently at{" "}
                  <span className="text-zinc-100 font-medium">Rejolut Web3.0</span> and
                  building{" "}
                  <span className="text-cyan-400 font-medium">OpenClaw</span>, an AI-powered
                  workflow automation platform.
                </p>
                <div className="hero-5 flex flex-wrap gap-3 mb-12">
                  <a
                    href="#projects"
                    className="px-6 py-3 bg-cyan-400 text-black font-semibold text-sm rounded-lg hover:bg-cyan-300 transition-colors"
                  >
                    View Projects
                  </a>
                  <a
                    href="#contact"
                    className="px-6 py-3 border border-zinc-700 text-zinc-200 text-sm rounded-lg hover:border-zinc-500 hover:bg-zinc-800/50 transition-all"
                  >
                    Get in Touch
                  </a>
                  <a
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 text-zinc-500 text-sm hover:text-zinc-300 transition-colors font-mono"
                  >
                    Resume ↗
                  </a>
                </div>
                <div className="flex items-center gap-5 text-zinc-600 text-sm font-mono">
                  <a
                    href="https://github.com/umerfakih"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    GitHub
                  </a>
                  <span>·</span>
                  <a
                    href="https://linkedin.com/in/umer-fakih"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <span>·</span>
                  <a href="mailto:umerfakih48@gmail.com" className="hover:text-cyan-400 transition-colors">
                    Email
                  </a>
                </div>
              </div>

              {/* Avatar */}
              <div className="hero-2 flex justify-center md:justify-end shrink-0">
                <div className="relative">
                  <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-cyan-400/20 via-cyan-400/5 to-transparent blur-2xl" />
                  <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-[2px] bg-gradient-to-br from-cyan-400/50 via-zinc-600/20 to-zinc-800/40">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/avatar.jpeg"
                      alt="Umer Fakih"
                      className="w-full h-full rounded-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-1.5 bg-[#0d0d0d] border border-zinc-700/80 rounded-full px-3 py-1.5 shadow-xl">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-zinc-300">Open to Work</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="py-24 px-6 border-t border-zinc-800/50">
          <div className="max-w-5xl mx-auto reveal">
            <SectionLabel index="01" title="About" />
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4 text-zinc-400 leading-relaxed text-[15px]">
                <p>
                  I&apos;m a Backend Engineer and Tech Lead focused on building scalable
                  systems, fintech platforms, and blockchain-based applications designed
                  for real-world production environments.
                </p>
                <p>
                  Starting my journey as an intern, I&apos;ve grown into a technical
                  leadership role by working across backend engineering, smart contract
                  development, and system architecture. I currently lead backend
                  development and system design for production platforms, owning
                  technical decisions around scalability, performance, and reliability.
                </p>
                <p>
                  My experience spans designing distributed backend services, developing
                  smart contracts, and building automation-driven platforms such as{" "}
                  <span className="text-cyan-400">OpenClaw</span> to streamline business
                  and engineering workflows.
                </p>
                <p>
                  Beyond development, I actively mentor engineers, review architecture
                  and code, and drive engineering best practices to ensure long-term
                  system stability and scalability.
                </p>
              </div>
              <div>
                <p className="text-xs font-mono text-zinc-600 tracking-widest uppercase mb-5">
                  Core Interests
                </p>
                <ul className="space-y-3 mb-10">
                  {INTERESTS.map((interest) => (
                    <li key={interest} className="flex items-start gap-3 text-zinc-300 text-sm">
                      <span className="text-cyan-400 mt-0.5 shrink-0">▸</span>
                      {interest}
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-2 gap-3">
                  {STATS.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-4 hover:border-zinc-700 transition-colors"
                    >
                      <p className="text-2xl font-bold text-cyan-400 font-mono">{stat.value}</p>
                      <p className="text-xs text-zinc-500 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience" className="py-24 px-6 border-t border-zinc-800/50">
          <div className="max-w-5xl mx-auto reveal">
            <SectionLabel index="02" title="Experience" />
            <div className="space-y-8">
              {EXPERIENCE.map((job) => (
                <div
                  key={job.company}
                  className="relative pl-6 border-l-2 border-zinc-800 hover:border-cyan-400/30 transition-colors duration-300 group"
                >
                  <div className="absolute -left-[5px] top-[22px] w-2.5 h-2.5 rounded-full border-2 border-zinc-700 bg-[#080808] group-hover:border-cyan-400 group-hover:bg-cyan-400/20 transition-all duration-300" />
                  <div className="bg-zinc-900/30 border border-zinc-800/70 rounded-2xl p-6 md:p-7 hover:border-zinc-700/80 hover:bg-zinc-900/50 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                      <div>
                        <div className="flex items-center gap-3 flex-wrap mb-1">
                          <h3 className="text-base font-semibold text-white">{job.company}</h3>
                          {job.current && (
                            <span className="text-[10px] font-mono px-2.5 py-0.5 bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 rounded-full tracking-wider">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-cyan-400/80">{job.role}</p>
                      </div>
                      <div className="shrink-0 md:text-right">
                        <p className="text-sm text-zinc-400 font-mono">{job.period}</p>
                        <p className="text-xs text-zinc-600 mt-0.5">{job.location}</p>
                      </div>
                    </div>
                    {job.awards.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-5">
                        {job.awards.map((award) => (
                          <span
                            key={award}
                            className="text-xs px-3 py-1 bg-yellow-400/8 text-yellow-300/70 border border-yellow-400/15 rounded-full"
                          >
                            🏆 {award}
                          </span>
                        ))}
                      </div>
                    )}
                    <ul className="space-y-2.5">
                      {job.highlights.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed">
                          <span className="text-zinc-700 mt-1.5 shrink-0 text-[10px]">—</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" className="py-24 px-6 border-t border-zinc-800/50">
          <div className="max-w-5xl mx-auto reveal">
            <SectionLabel index="03" title="Projects" />

            {/* Featured project */}
            <div className="mb-5 bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 group">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="text-[10px] font-mono px-2.5 py-1 bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 rounded-full tracking-wider">
                        Flagship
                      </span>
                      <span className="font-mono text-xs text-zinc-600">{featuredProject.year}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {featuredProject.name}
                    </h3>
                    <p className="text-sm text-zinc-500 mt-1">{featuredProject.subtitle}</p>
                  </div>
                </div>
                <p className="text-zinc-400 text-[15px] leading-relaxed mb-6 max-w-3xl">
                  {featuredProject.description}
                </p>
                {featuredProject.highlights.length > 0 && (
                  <div className="grid sm:grid-cols-2 gap-2.5 mb-6">
                    {featuredProject.highlights.map((point, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-zinc-500 text-sm">
                        <span className="text-cyan-400/50 mt-0.5 shrink-0">▸</span>
                        {point}
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/50">
                  {featuredProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 bg-zinc-800/70 text-zinc-300 border border-zinc-700/40 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Rest of projects */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {restProjects.map((project) => (
                <div
                  key={project.name}
                  className="bg-zinc-900/30 border border-zinc-800/70 rounded-xl p-5 flex flex-col hover:border-zinc-700 hover:bg-zinc-900/50 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-[11px] text-zinc-600 mt-0.5">{project.subtitle}</p>
                    </div>
                    <span className="font-mono text-[10px] text-zinc-700 shrink-0">{project.year}</span>
                  </div>
                  <p className="text-zinc-500 text-xs leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  {project.highlights.length > 0 && (
                    <ul className="space-y-1.5 mb-4">
                      {project.highlights.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-zinc-600 text-xs leading-relaxed">
                          <span className="text-cyan-400/40 mt-0.5 shrink-0">▸</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/40 mt-auto">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 bg-zinc-800/60 text-zinc-500 border border-zinc-700/30 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" className="py-24 px-6 border-t border-zinc-800/50">
          <div className="max-w-5xl mx-auto reveal">
            <SectionLabel index="04" title="Technical Skills" />
            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(SKILLS).map(([category, items]) => (
                <div
                  key={category}
                  className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-5 hover:border-zinc-700/80 transition-colors"
                >
                  <p className="text-[11px] font-mono text-cyan-400/60 tracking-[0.2em] uppercase mb-4">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1 bg-zinc-800/50 text-zinc-300 border border-zinc-700/30 rounded-full hover:border-zinc-600 hover:text-white transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section className="py-16 px-6 border-t border-zinc-800/50">
          <div className="max-w-5xl mx-auto reveal">
            <SectionLabel index="05" title="Education" />
            <div className="bg-zinc-900/30 border border-zinc-800/70 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-base font-semibold text-white">
                  ASM — Audyogik Shikshan Mandal
                </h3>
                <p className="text-sm text-zinc-400 mt-1.5">
                  MCA — Master of Computer Applications
                </p>
                <p className="text-xs text-zinc-600 mt-1">Thane, Maharashtra</p>
              </div>
              <div className="flex items-center gap-6 shrink-0">
                <p className="text-sm text-zinc-500 font-mono">2020 — 2022</p>
                <div className="bg-zinc-800/60 border border-zinc-700/40 rounded-xl px-5 py-3 text-center">
                  <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest mb-1">CGPA</p>
                  <p className="text-2xl font-bold text-cyan-400 font-mono leading-none">8.9</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="py-24 px-6 border-t border-zinc-800/50">
          <div className="max-w-5xl mx-auto reveal">
            <SectionLabel index="06" title="Get In Touch" />
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-zinc-400 leading-relaxed mb-8 text-[15px] max-w-md">
                  Open to discussions around backend architecture, system design, and
                  building impactful engineering systems. Feel free to reach out — I&apos;m
                  always happy to connect.
                </p>
                <a
                  href="mailto:umerfakih48@gmail.com"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-cyan-400 text-black font-semibold text-sm rounded-lg hover:bg-cyan-300 transition-colors"
                >
                  Say Hello ↗
                </a>
              </div>

              <div className="space-y-0 bg-zinc-900/30 border border-zinc-800/60 rounded-2xl overflow-hidden">
                {CONTACTS.map((item, i) => (
                  <div
                    key={item.label}
                    className={`flex items-center justify-between px-5 py-4 ${
                      i < CONTACTS.length - 1 ? "border-b border-zinc-800/50" : ""
                    }`}
                  >
                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em] w-20 shrink-0">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors font-mono truncate ml-4"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm text-zinc-500 font-mono ml-4">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-zinc-800/50 py-8 px-6 mt-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-cyan-400 font-bold text-xs tracking-widest">UF.</span>
            <span className="text-zinc-700 text-xs">|</span>
            <span className="font-mono text-zinc-600 text-xs">
              © 2026 Umer Fakih · Built with Next.js & Tailwind CSS
            </span>
          </div>
          <div className="flex items-center gap-5 text-zinc-600 text-xs font-mono">
            <a
              href="https://github.com/umerfakih"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/umer-fakih"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              LinkedIn
            </a>
            <a href="mailto:umerfakih48@gmail.com" className="hover:text-zinc-300 transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
