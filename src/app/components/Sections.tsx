import { profile, stats, services, skills, education, experience, steps, projects } from "@/lib/data";

function Heading({ title, text }: { title: string; text?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {text && <p className="mt-3 text-ink/70">{text}</p>}
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20">
      <Heading title="What I do" text="Three areas where I can help you build something useful." />
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <div key={s.title} className={`rounded-2xl p-8 text-center ${i === 1 ? "bg-brand text-white" : "bg-mist"}`}>
            <div className={`mx-auto mb-5 grid h-14 w-14 place-items-center rounded-xl text-lg font-bold ${i === 1 ? "bg-white/20 text-white" : "bg-brand-soft text-brand"}`}>{s.icon}</div>
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className={`mt-2 text-sm ${i === 1 ? "text-white/85" : "text-ink/70"}`}>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="bg-mist py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Heading title="Designing solutions, not just visuals" text={profile.about} />
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((s, i) => (
            <div key={s.label} className={`rounded-xl p-6 text-center ${i % 2 === 0 ? "bg-accent-soft" : "bg-brand-soft"}`}>
              <p className="text-3xl font-bold text-brand">{s.value}</p>
              <p className="mt-1 text-sm text-ink/70">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {skills.map((k) => (
            <span key={k} className="rounded-full border border-brand/30 bg-white px-4 py-1.5 text-sm font-medium text-brand">{k}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

interface TimelineItem {
  title: string;
  place: string;
  year: string;
  detail: string;
}

function Timeline({ title, items }: { title: string; items: TimelineItem[] }) {
  return (
    <div>
      <h3 className="mb-6 text-xl font-semibold">{title}</h3>
      <ol className="space-y-6 border-l-2 border-brand/25 pl-6">
        {items.map((e) => (
          <li key={e.title} className="relative">
            <span className="absolute -left-[33px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-white" />
            <p className="text-sm font-medium text-brand">{e.year}</p>
            <p className="font-semibold">{e.title}</p>
            <p className="text-sm text-ink/70">{e.place}</p>
            <p className="text-sm text-ink/70">{e.detail}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Background() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2">
      <Timeline title="Education" items={education} />
      <Timeline title="Experience" items={experience} />
    </section>
  );
}

export function Process() {
  return (
    <section className="bg-mist py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Heading title="My working process" />
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="text-center">
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-brand text-lg font-bold text-white">{i + 1}</div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
      <Heading title="My projects" text="Things I have built and am building." />
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white">
            <div className="grid h-40 place-items-center bg-gradient-to-br from-brand to-brand-dark text-5xl font-bold text-white">{p.title[0]}</div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium">{p.status}</span>
              </div>
              <p className="text-sm text-brand">{p.type}</p>
              <p className="mt-3 flex-1 text-sm text-ink/70">{p.text}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => <span key={t} className="rounded-md bg-mist px-2.5 py-1 text-xs">{t}</span>)}
              </div>
              <a href={p.link} target="_blank" rel="noreferrer" className="mt-5 text-sm font-semibold text-brand hover:underline">View on GitHub</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  const items = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/-/g, "")}` },
    { label: "LinkedIn", value: "abdullah-waheed", href: profile.linkedin },
    { label: "GitHub", value: "mabdullahw70-tech", href: profile.github },
  ];
  return (
    <section id="contact" className="bg-brand text-white">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-3xl font-bold sm:text-4xl">Got a project? Let&apos;s talk.</h2>
        <p className="mt-3 max-w-lg text-white/85">I&apos;m open to internships, freelance work and collaborations in web and AI development.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <a key={i.label} href={i.href} target={i.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="rounded-xl bg-white/10 p-5 hover:bg-white/20">
              <p className="text-sm text-white/70">{i.label}</p>
              <p className="mt-1 break-all font-medium">{i.value}</p>
            </a>
          ))}
        </div>
        <a href={`mailto:${profile.email}`} className="mt-10 inline-block rounded-full bg-accent px-8 py-3 font-semibold text-ink hover:brightness-95">Send an email</a>
      </div>
      <footer className="border-t border-white/20 py-6 text-center text-sm text-white/70">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </footer>
    </section>
  );
}