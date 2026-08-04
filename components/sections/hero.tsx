import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroCta {
  label: string;
  href: string;
}

export interface HeroProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  stats?: HeroStat[];
  className?: string;
}

export function Hero({
  eyebrow,
  title,
  highlight,
  description,
  primaryCta,
  secondaryCta,
  stats,
  className,
}: HeroProps) {
  return (
    <section
      aria-label="Introduction"
      className={cn(
        "bg-blueprint relative overflow-hidden border-b border-border pt-28 pb-16 md:pt-40 md:pb-24",
        className
      )}
    >
      {/* Radial fade so the blueprint grid recedes toward the edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, transparent 0%, var(--color-background) 85%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-(--container-max) px-6 md:px-10">
        {eyebrow && <p className="text-eyebrow mb-5">{eyebrow}</p>}

        <h1 className="max-w-4xl text-4xl font-medium text-foreground sm:text-5xl md:text-7xl">
          {title}
          {highlight && (
            <>
              {" "}
              <span className="text-accent">{highlight}</span>
            </>
          )}
        </h1>

        <p className="mt-6 max-w-xl text-base text-muted md:text-lg">{description}</p>

        {(primaryCta || secondaryCta) && (
          <div className="mt-9 flex flex-col gap-4 xs:flex-row xs:items-center">
            {primaryCta && (
              <Button asChild size="lg">
                <Link href={primaryCta.href}>
                  {primaryCta.label}
                  <ArrowUpRight />
                </Link>
              </Button>
            )}
            {secondaryCta && (
              <Button asChild variant="outline" size="lg">
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            )}
          </div>
        )}

        {stats && stats.length > 0 && (
          <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4 md:mt-20">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-mono text-xs uppercase tracking-widest text-muted">
                  {stat.label}
                </dt>
                <dd className="mt-2 font-display text-3xl text-foreground md:text-4xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
