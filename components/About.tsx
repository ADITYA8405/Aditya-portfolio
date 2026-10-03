import Section from "./Section";
import Education from "./Education";
import Reveal from "./Reveal";
import { about } from "@/data/site";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed">
          {about.map((p) => <p key={p}>{p}</p>)}
        </Reveal>
        <Reveal><Education /></Reveal>
      </div>
    </Section>
  );
}
