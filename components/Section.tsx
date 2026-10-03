import Reveal from "./Reveal";

export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="mx-auto max-w-5xl px-5 py-20 sm:py-28">
      <Reveal>
        <h2 id={`${id}-h`} className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        <div className="mt-3 h-1 w-10 rounded-full bg-accent" />
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}
