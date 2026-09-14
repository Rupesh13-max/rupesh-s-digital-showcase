import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  Download,
  FileText,
  Github,
  Linkedin,
  Mail,
  Menu,
  Phone,
  X,
} from "lucide-react";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rupesh Vishwakarma | MERN Stack Developer Portfolio" },
      {
        name: "description",
        content:
          "MERN stack developer from Bhopal building responsive, scalable web apps — Appointy and SmartBudget, REST APIs, JWT auth and MongoDB.",
      },
      {
        property: "og:title",
        content: "Rupesh Vishwakarma | MERN Stack Developer Portfolio",
      },
      {
        property: "og:description",
        content:
          "Projects, skills, education and leadership experience of Rupesh Vishwakarma, full-stack MERN developer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  { group: "Programming", items: ["Java", "JavaScript", "C++", "Python"] },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT Auth",
      "Middleware",
      "API Integration",
    ],
  },
  { group: "Frontend", items: ["React.js", "HTML", "CSS"] },
  { group: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL"] },
  {
    group: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA"],
  },
];

const PROJECTS = [
  {
    name: "Appointy",
    tagline: "Doctor Appointment Platform",
    year: "2026",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Razorpay"],
    points: [
      "Full-stack MERN healthcare platform to search doctors, book appointments, manage profiles and pay online.",
      "Role-based authentication for patients, doctors and administrators with dedicated dashboards.",
      "REST APIs on Node.js and Express.js with MongoDB, plus Razorpay for secure transactions.",
    ],
  },
  {
    name: "SmartBudget",
    tagline: "Expense & Savings Tracker",
    year: "2025",
    stack: ["MongoDB Atlas", "Express.js", "React.js", "Node.js", "JWT", "Axios"],
    points: [
      "Expense tracking, income management, budgeting and savings goal management in one app.",
      "JWT authentication with protected API routes and secure user profile management.",
      "Category budgets, recurring expenses and savings progress in a responsive React interface.",
    ],
  },
];

const EDUCATION = [
  {
    school: "Technocrats Institute of Technology",
    detail: "B.Tech, Computer Science & Engineering — Artificial Intelligence",
    place: "Bhopal, Madhya Pradesh",
    period: "Aug 2023 – May 2027",
  },
  {
    school: "Govt. Model Higher Secondary School",
    detail: "Senior Secondary (Class 12), MPBSE",
    place: "Satna, Madhya Pradesh",
    period: "July 2022 – March 2023",
  },
  {
    school: "Govt. Model Higher Secondary School",
    detail: "Higher Secondary (Class 10), MPBSE",
    place: "Satna, Madhya Pradesh",
    period: "July 2020 – March 2021",
  },
];

const LEADERSHIP = [
  {
    title: "Hackathon Organizer",
    body: "Organized and coordinated college-level hackathons, managing participants, technical activities and event execution.",
  },
  {
    title: "Technical Event Coordinator",
    body: "Ran multiple coding and technical events, promoting collaborative problem-solving and student participation.",
  },
  {
    title: "Sports Event Coordinator",
    body: "Managed college sports activities including scheduling, participant coordination and operations.",
  },
  {
    title: "Leadership & Team Management",
    body: "Led student teams during technical and extracurricular events, coordinating tasks end to end.",
  },
];

function Portfolio() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60 [background:radial-gradient(60rem_40rem_at_80%_-10%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent),radial-gradient(50rem_35rem_at_0%_20%,color-mix(in_oklab,var(--accent)_16%,transparent),transparent)]" />

      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-display text-lg font-bold tracking-tight">
            Rupesh<span className="text-primary">.</span>
          </a>
          <ul className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={resumeAsset.url}
            download="Rupesh_Vishwakarma_resume.pdf"
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
          >
            <Download className="size-4" /> Resume
          </a>
          <button
            aria-label="Toggle menu"
            className="rounded-md p-2 text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
        {open && (
          <ul className="space-y-1 border-t border-border/60 px-5 pb-4 pt-2 md:hidden">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={resumeAsset.url}
                download="Rupesh_Vishwakarma_resume.pdf"
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground"
              >
                <Download className="size-4" /> Download resume
              </a>
            </li>
          </ul>
        )}
      </header>

      <main id="top" className="mx-auto max-w-6xl px-5">
        {/* Hero */}
        <section className="flex flex-col justify-center gap-6 py-20 md:py-32">
          <span className="w-fit rounded-full border border-primary/40 px-3 py-1 font-mono text-xs text-primary">
            Available for internships & freelance
          </span>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
            Rupesh Vishwakarma
            <span className="block text-gradient">MERN Stack Developer</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I build responsive, scalable web applications with MongoDB, Express.js,
            React.js and Node.js — from RESTful APIs and JWT authentication to
            polished, production-ready interfaces.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View projects <ArrowUpRight className="size-4" />
            </a>
            <a
              href={resumeAsset.url}
              download="Rupesh_Vishwakarma_resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Download className="size-4" /> Download resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
            >
              Get in touch
            </a>
          </div>
          <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["2+", "Full-stack projects"],
              ["10+", "Technologies"],
              ["4", "Leadership roles"],
              ["2027", "B.Tech (AI)"],
            ].map(([v, k]) => (
              <div key={k} className="glow-card rounded-xl p-4">
                <dt className="font-display text-2xl font-bold text-primary">{v}</dt>
                <dd className="text-xs text-muted-foreground">{k}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* About */}
        <Section id="about" title="About" kicker="01">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              I'm a Computer Science (AI) undergraduate at Technocrats Institute of
              Technology, Bhopal, focused on full-stack development. I enjoy designing
              clean APIs, integrating databases and shaping interfaces that feel fast
              and intuitive. Alongside code, I lead and organize hackathons and
              technical events — which has sharpened my collaboration, problem-solving
              and project coordination skills.
            </p>
            <ul className="space-y-3">
              {LEADERSHIP.slice(0, 2).map((l) => (
                <li key={l.title} className="glow-card rounded-xl p-4">
                  <p className="font-display font-semibold">{l.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{l.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills" kicker="02">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((s) => (
              <div key={s.group} className="glow-card rounded-2xl p-5">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
                  {s.group}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <li
                      key={i}
                      className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects" kicker="03">
          <div className="grid gap-6 lg:grid-cols-2">
            {PROJECTS.map((p) => (
              <article key={p.name} className="glow-card rounded-2xl p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold">{p.name}</h3>
                    <p className="text-sm text-muted-foreground">{p.tagline}</p>
                  </div>
                  <span className="font-mono text-xs text-primary">{p.year}</span>
                </div>
                <ul className="mt-5 space-y-3">
                  {p.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section id="education" title="Education" kicker="04">
          <ol className="relative space-y-6 border-l border-border pl-6">
            {EDUCATION.map((e) => (
              <li key={e.school + e.period} className="relative">
                <span className="absolute -left-[1.9rem] top-2 size-3 rounded-full bg-primary" />
                <div className="glow-card rounded-xl p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold">{e.school}</h3>
                    <span className="font-mono text-xs text-primary">{e.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{e.detail}</p>
                  <p className="text-xs text-muted-foreground/80">{e.place}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* Leadership */}
        <Section id="leadership" title="Achievements & Leadership" kicker="05">
          <div className="grid gap-4 sm:grid-cols-2">
            {LEADERSHIP.map((l) => (
              <div key={l.title} className="glow-card rounded-2xl p-6">
                <h3 className="font-display text-lg font-semibold">{l.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {l.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Resume */}
        <Section id="resume" title="Resume" kicker="06">
          <div className="glow-card rounded-3xl p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FileText className="size-6 text-primary" />
                <div>
                  <p className="font-display font-semibold">
                    Rupesh_Vishwakarma_resume.pdf
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Full resume — education, skills, projects and leadership
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={resumeAsset.url}
                  download="Rupesh_Vishwakarma_resume.pdf"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Download className="size-4" /> Download
                </a>
                <a
                  href={resumeAsset.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
                >
                  Open in new tab <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
            <object
              data={resumeAsset.url}
              type="application/pdf"
              className="mt-6 hidden h-[70vh] w-full rounded-xl border border-border sm:block"
              aria-label="Resume preview"
            >
              <p className="p-4 text-sm text-muted-foreground">
                Preview unavailable — use the download button above.
              </p>
            </object>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Get in touch" kicker="07">
          <div className="glow-card rounded-3xl p-8 sm:p-12">
            <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
              Have a project, role or idea in mind? I'd love to hear about it.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <ContactLink
                icon={<Mail className="size-4" />}
                label="rupeshvish01@gmail.com"
                href="mailto:rupeshvish01@gmail.com"
              />
              <ContactLink
                icon={<Phone className="size-4" />}
                label="+91 81030 36381"
                href="tel:+918103036381"
              />
              <ContactLink
                icon={<Linkedin className="size-4" />}
                label="LinkedIn"
                href="https://www.linkedin.com/in/rupesh-vishwakarma-364a54295"
              />
              <ContactLink
                icon={<Github className="size-4" />}
                label="Rupesh13-max"
                href="https://github.com/Rupesh13-max"
              />
            </div>
          </div>
        </Section>
      </main>

      <footer className="mx-auto max-w-6xl px-5 py-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Rupesh Vishwakarma — Built with React.
      </footer>
    </div>
  );
}

function Section({
  id,
  title,
  kicker,
  children,
}: {
  id: string;
  title: string;
  kicker: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border/60 py-16 md:py-24">
      <div className="mb-10 flex items-center gap-4">
        <span className="font-mono text-xs text-primary">{kicker}</span>
        <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function ContactLink({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="flex items-center justify-between gap-3 rounded-xl border border-border px-4 py-3 text-sm transition-colors hover:border-primary/50 hover:text-primary"
    >
      <span className="flex items-center gap-3">
        {icon}
        {label}
      </span>
      <ArrowUpRight className="size-4 opacity-60" />
    </a>
  );
}
