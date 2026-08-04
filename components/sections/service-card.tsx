import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ServiceSpec {
  label: string;
  value: string;
}

export interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  specs?: ServiceSpec[];
  href?: string;
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  specs,
  href,
  className,
}: ServiceCardProps) {
  const content = (
    <div
      className={cn(
        "spec-corners group flex h-full flex-col border border-border bg-surface p-6 transition-colors",
        href && "hover:border-accent",
        className
      )}
    >
      <Icon className="h-8 w-8 text-accent" strokeWidth={1.5} aria-hidden />

      <h3 className="mt-5 font-display text-xl uppercase tracking-wide text-foreground">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{description}</p>

      {specs && specs.length > 0 && (
        <dl className="mt-6 space-y-2 border-t border-border pt-4">
          {specs.map((spec) => (
            <div key={spec.label} className="flex items-baseline justify-between gap-4">
              <dt className="font-mono text-xs uppercase tracking-widest text-muted">
                {spec.label}
              </dt>
              <dd className="font-mono text-sm text-foreground">{spec.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {href && (
        <span className="mt-6 inline-flex items-center gap-1 font-display text-xs uppercase tracking-widest text-accent">
          Learn more
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}
