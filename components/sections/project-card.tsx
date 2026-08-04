import { cn } from "@/lib/utils";
import type { ProjectSpecItem } from "@/lib/data/projects";

export interface ProjectCardProps {
  title: string;
  industry: string;
  year: string;
  summary: string;
  specs: ProjectSpecItem[];
  className?: string;
}

export function ProjectCard({ title, industry, year, summary, specs, className }: ProjectCardProps) {
  return (
    <article className={cn("spec-corners flex h-full flex-col border border-border bg-surface p-6", className)}>
      <div className="flex items-center justify-between gap-4">
        <span className="text-eyebrow">{industry}</span>
        <span className="font-mono text-xs text-muted">{year}</span>
      </div>

      <h3 className="mt-4 font-display text-xl uppercase tracking-wide text-foreground">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{summary}</p>

      <dl className="mt-6 space-y-2 border-t border-border pt-4">
        {specs.map((spec) => (
          <div key={spec.label} className="flex items-baseline justify-between gap-4">
            <dt className="font-mono text-xs uppercase tracking-widest text-muted">{spec.label}</dt>
            <dd className="font-mono text-sm text-foreground">{spec.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
