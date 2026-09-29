import type { Project } from "@/data/site";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-line bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/70">
      <h3 className="font-display text-xl font-bold">{p.name}</h3>
      <p className="mt-3 text-muted">{p.description}</p>

      {p.featured && (
        <p className="mt-4 rounded-lg bg-accent/10 px-4 py-3 text-sm ring-1 ring-accent/30">
          <span className="font-semibold text-accent">Highlight: </span>{p.featured}
        </p>
      )}
      {p.workflow && (
        <ol aria-label="Project workflow" className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
          {p.workflow.map((s, i) => (
            <li key={s} className="flex items-center gap-2">
              <span className="text-fg">{s}</span>{i < p.workflow!.length - 1 && <span aria-hidden className="text-accent">›</span>}
            </li>
          ))}
        </ol>
      )}
      {p.highlights && (
        <ul className="mt-4 space-y-1.5 text-sm">
          {p.highlights.map((h) => (
            <li key={h} className="flex gap-2"><span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />{h}</li>
          ))}
        </ul>
      )}

      <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-2">
        {p.tech.map((t) => <li key={t} className="rounded-full px-3 py-1 text-xs ring-1 ring-line">{t}</li>)}
      </ul>
      <div className="mt-auto flex gap-3 pt-6">
        <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} on GitHub`}
          className="rounded-lg bg-fg px-4 py-2 text-sm font-medium text-bg transition active:scale-95 hover:opacity-85">GitHub</a>
        {p.liveUrl && (
          <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
            className="rounded-lg border border-line px-4 py-2 text-sm font-medium transition active:scale-95 hover:border-accent">View Project</a>
        )}
      </div>
    </article>
  );
}
