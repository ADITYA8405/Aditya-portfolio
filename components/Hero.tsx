"use client";
import { useRef } from "react";
import { profile } from "@/data/site";

const btn = "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-medium transition duration-200 active:scale-95";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  // A soft "stage light" follows the pointer: the one deliberate flourish on the page.
  const move = (e: React.PointerEvent) => {
    const r = ref.current!.getBoundingClientRect();
    ref.current!.style.setProperty("--x", `${e.clientX - r.left}px`);
    ref.current!.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <section id="home" ref={ref} onPointerMove={move} aria-label="Introduction"
      className="relative flex min-h-screen items-center overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(480px circle at var(--x, 72%) var(--y, 32%), var(--spot), transparent 65%)" }} />
      <div className="relative mx-auto w-full max-w-5xl px-5 pt-24 pb-16">
        <h1 className="font-display text-[clamp(3.5rem,14vw,9rem)] font-extrabold leading-[0.9] tracking-tighter">
          Aditya<br />Jain
        </h1>
        <p className="mt-6 text-sm font-semibold tracking-[0.2em] text-accent sm:text-base">{profile.tagline}</p>
        <p className="mt-4 max-w-xl text-lg text-muted">{profile.support}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#projects" className={`${btn} bg-accent text-bg hover:-translate-y-0.5`}>View Projects</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className={`${btn} border border-line hover:border-accent`}>GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={`${btn} border border-line hover:border-accent`}>LinkedIn</a>
          <a href="#resumes" className={`${btn} border border-line hover:border-accent`}>Resume</a>
          <a href="#contact" className={`${btn} border border-line hover:border-accent`}>Contact Me</a>
        </div>
      </div>
    </section>
  );
}
