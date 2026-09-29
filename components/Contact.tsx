import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "@/data/site";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <Reveal>
        <p className="font-display text-2xl font-semibold leading-snug sm:text-4xl">
          Have an opportunity, project, or just want to talk tech?
        </p>
        <a href={`mailto:${profile.email}`}
          className="mt-8 inline-block break-all rounded-lg bg-accent px-6 py-3 font-medium text-bg transition duration-200 hover:-translate-y-0.5 active:scale-95">
          {profile.email}
        </a>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-muted">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-fg hover:underline">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-fg hover:underline">LinkedIn</a>
          {profile.resumeUrl ? (
            <a href={profile.resumeUrl} download className="underline-offset-4 hover:text-fg hover:underline">Resume</a>
          ) : (
            <span aria-disabled="true" title="Resume will be added soon" className="cursor-not-allowed rounded-md border border-dashed border-line px-2 py-0.5 text-sm">Resume: coming soon</span>
          )}
          <span>{profile.location}</span>
        </div>
      </Reveal>
    </Section>
  );
}
