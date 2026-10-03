"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Project } from "@/data/site";

type Props = Required<Pick<Project, "shots" | "kind">>;

// Restrained tilt: max ~5deg. Only runs for fine pointers with hover and no reduced-motion preference.
export default function Showcase({ shots, kind }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState<(typeof shots)[number] | null>(null);
  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setZoom(null);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [zoom]);
  const ok = () => matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches;
  const move = (e: React.PointerEvent) => {
    if (!ok() || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    const s = ref.current.style;
    s.setProperty("--ry", `${x * 10}deg`); s.setProperty("--rx", `${-y * 10}deg`);
    s.setProperty("--px", `${x * 10}px`); s.setProperty("--py", `${y * 8}px`);
  };
  const leave = () => ["--rx", "--ry", "--px", "--py"].forEach((k) => ref.current?.style.removeProperty(k));
  const phone = kind === "phone";
  const [main, ...rest] = shots;

  const frame = (s: (typeof shots)[number], cls: string, priority = false) => (
    <div className={`overflow-hidden border border-line bg-card ${phone ? "rounded-[1.5rem] p-1.5" : "rounded-xl"} ${cls}`}>
      {!phone && (
        <div aria-hidden className="flex gap-1.5 border-b border-line px-3 py-2">
          <i className="h-2 w-2 rounded-full bg-line" /><i className="h-2 w-2 rounded-full bg-line" /><i className="h-2 w-2 rounded-full bg-line" />
        </div>
      )}
      <button type="button" onClick={() => setZoom(s)} aria-label={`Enlarge: ${s.alt}`}
        className={`block h-full cursor-zoom-in ${phone ? "" : "w-full"}`}>
      <Image src={s.src} alt={s.alt} width={s.w} height={s.h} priority={priority}
        sizes={phone ? "(min-width:768px) 160px, 40vw" : "(min-width:768px) 480px, 90vw"}
        className={`block h-auto w-full ${phone ? "rounded-[1.1rem]" : ""}`} />
      </button>
    </div>
  );

  return (
    <div ref={ref} onPointerMove={move} onPointerLeave={leave}
      className="group/show relative mb-6 overflow-hidden rounded-xl border border-line bg-bg/60 px-4 py-8 [perspective:900px]">
      <div className={`relative mx-auto flex items-center justify-center ${phone ? "h-72 sm:h-80" : ""}`}
        style={{
          transform: "rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))",
          transformStyle: "preserve-3d", transition: "transform 0.25s ease-out",
        }}>
        {phone ? (
          <>
            {rest.map((s, i) => (
              <div key={s.src} aria-hidden={false}
                className={`absolute h-full w-auto opacity-70 transition duration-500 ease-out ${i === 0
                  ? "-translate-x-[52%] group-hover/show:-translate-x-[62%] -rotate-3"
                  : "translate-x-[52%] group-hover/show:translate-x-[62%] rotate-3"}`}>
                {frame(s, "h-full w-auto [&_img]:h-full [&_img]:w-auto scale-90")}
              </div>
            ))}
            <div className="relative z-10 h-full transition duration-300 ease-out group-hover/show:scale-[1.03]"
              style={{ transform: "translate3d(var(--px,0),var(--py,0),40px)" }}>
              {frame(main, "h-full w-auto shadow-xl shadow-black/30 [&_img]:h-full [&_img]:w-auto", true)}
            </div>
          </>
        ) : (
          <div className="w-full max-w-md transition duration-300 ease-out group-hover/show:scale-[1.02]"
            style={{ transform: "translate3d(var(--px,0),var(--py,0),30px)" }}>
            {frame(main, "shadow-xl shadow-black/30 transition-shadow duration-300 group-hover/show:shadow-2xl")}
          </div>
        )}
      </div>
      {zoom && createPortal(
        <div role="dialog" aria-modal="true" aria-label={zoom.alt} onClick={() => setZoom(null)} onPointerMove={(e) => e.stopPropagation()}
          className="fixed inset-0 z-[60] flex cursor-zoom-out items-center justify-center bg-bg/90 p-4 backdrop-blur">
          <button type="button" autoFocus aria-label="Close" onClick={() => setZoom(null)}
            className="absolute right-4 top-4 rounded-md border border-line bg-card px-3 py-1.5 text-sm">Close</button>
          <Image src={zoom.src} alt={zoom.alt} width={zoom.w} height={zoom.h} sizes="95vw"
            className="h-auto max-h-[88vh] w-auto max-w-full rounded-xl border border-line object-contain" />
        </div>, document.body)}
    </div>
  );
}
