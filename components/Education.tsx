import { education as e } from "@/data/site";

export default function Education() {
  return (
    <div className="rounded-2xl border border-line bg-card p-6">
      <h3 className="font-display text-lg font-semibold">Education</h3>
      <p className="mt-4 font-medium">{e.school}</p>
      <p className="mt-1 text-sm text-muted">{e.degree}</p>
      <dl className="mt-5 flex gap-8 text-sm">
        <div><dt className="text-muted">Duration</dt><dd className="mt-0.5 font-medium">{e.years}</dd></div>
        <div><dt className="text-muted">CGPA</dt><dd className="mt-0.5 font-medium text-accent">{e.cgpa}</dd></div>
      </dl>
    </div>
  );
}
