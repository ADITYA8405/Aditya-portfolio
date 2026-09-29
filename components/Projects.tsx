"use client";
import { useState } from "react";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/site";

const tabs = [
  { key: "development", label: "Development" },
  { key: "data", label: "Data & Analytics" },
] as const;

export default function Projects() {
  const [tab, setTab] = useState<(typeof tabs)[number]["key"]>("development");
  return (
    <Section id="projects" title="Projects">
      <div role="tablist" aria-label="Project categories" className="mb-8 inline-flex rounded-xl border border-line p-1">
        {tabs.map((t) => (
          <button key={t.key} role="tab" id={`tab-${t.key}`} aria-selected={tab === t.key} aria-controls="project-panel" onClick={() => setTab(t.key)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${tab === t.key ? "bg-accent text-bg" : "text-muted hover:text-fg"}`}>
            {t.label}
          </button>
        ))}
      </div>
      <div key={tab} id="project-panel" role="tabpanel" aria-labelledby={`tab-${tab}`}
        className="grid animate-[fade_0.4s_ease-out] gap-6 md:grid-cols-2">
        {projects[tab].map((p) => <ProjectCard key={p.name} p={p} />)}
      </div>
      <style>{`@keyframes fade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}`}</style>
    </Section>
  );
}
