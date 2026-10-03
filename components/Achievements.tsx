import Section from "./Section";
import Reveal from "./Reveal";
import { beyond } from "@/data/site";

export default function Achievements() {
  return (
    <Section id="beyond" title="Beyond the Code">
      <Reveal>
        <p className="max-w-xl text-lg text-muted">Comfortable behind a laptop, and just as comfortable with a microphone.</p>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <div className="h-full rounded-2xl bg-accent p-7 text-bg">
            <h3 className="font-display text-xl font-bold">Achievements</h3>
            <ul className="mt-5 space-y-4 text-lg font-medium leading-snug">
              {beyond.achievements.map((a) => <li key={a} className="border-t border-bg/25 pt-4 first:border-0 first:pt-0">{a}</li>)}
            </ul>
          </div>
        </Reveal>
        <Reveal>
          <div className="h-full rounded-2xl border border-dashed border-line p-7">
            <h3 className="font-display text-xl font-bold">Activities</h3>
            <ul className="mt-5 space-y-3">
              {beyond.activities.map((a) => <li key={a}>{a}</li>)}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
