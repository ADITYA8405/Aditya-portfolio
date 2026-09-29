"use client";
import { useEffect, useState } from "react";
import { nav } from "@/data/site";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("theme") === "light") { setLight(true); document.documentElement.dataset.theme = "light"; }
    } catch {}
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    nav.forEach((n) => { const el = document.getElementById(n.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.dataset.theme = next ? "light" : "dark";
    try { localStorage.setItem("theme", next ? "light" : "dark"); } catch {}
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-bg/85 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5">
        <a href="#home" className="font-display text-lg font-bold">AJ<span className="text-accent">.</span></a>
        <ul className="hidden gap-1 md:flex">
          {nav.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} aria-current={active === n.id ? "true" : undefined}
                className={`relative rounded-md px-3 py-2 text-sm transition-colors hover:text-fg ${active === n.id ? "text-fg" : "text-muted"}`}>
                {n.label}
                <span className={`absolute inset-x-3 -bottom-px h-0.5 origin-left rounded bg-accent transition-transform duration-300 ${active === n.id ? "scale-x-100" : "scale-x-0"}`} />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={toggle} aria-label={light ? "Switch to dark theme" : "Switch to light theme"}
            className="rounded-md border border-line px-2.5 py-1.5 text-xs text-muted transition hover:border-accent hover:text-fg">
            {light ? "Dark" : "Light"}
          </button>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label="Toggle menu"
            className="rounded-md border border-line p-2 md:hidden">
            <span className="block h-0.5 w-5 bg-fg" /><span className="mt-1 block h-0.5 w-5 bg-fg" /><span className="mt-1 block h-0.5 w-5 bg-fg" />
          </button>
        </div>
      </nav>
      <div id="mobile-nav" className={`grid overflow-hidden transition-all duration-300 md:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <ul className="min-h-0 overflow-hidden bg-bg px-5">
          {nav.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}
                className={`block border-t border-line/60 py-3 ${active === n.id ? "text-accent" : "text-muted"}`}>{n.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
