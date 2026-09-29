import Section from "./Section";
import Reveal from "./Reveal";
import { skills } from "@/data/site";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {skills.map((g) => (
          <Reveal key={g.title}>
            <div className="border-l-2 border-line pl-5 transition-colors hover:border-accent">
              <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li key={i} className="rounded-md bg-card px-3 py-1.5 text-sm text-muted ring-1 ring-line transition hover:text-fg hover:ring-accent">{i}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
