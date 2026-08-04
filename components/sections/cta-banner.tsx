import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface CTABannerCta {
  label: string;
  href: string;
}

export interface CTABannerProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta: CTABannerCta;
  secondaryCta?: CTABannerCta;
  className?: string;
}

export function CTABanner({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
}: CTABannerProps) {
  return (
    <div
      className={cn(
        "spec-corners relative overflow-hidden border border-border-strong bg-surface px-6 py-14 text-center md:px-16 md:py-20",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-blueprint opacity-60"
      />
      <div className="relative mx-auto max-w-2xl">
        {eyebrow && <p className="text-eyebrow mb-4 text-center">{eyebrow}</p>}
        <h2 className="text-3xl font-medium text-foreground md:text-4xl">{title}</h2>
        {description && <p className="mt-4 text-base text-muted md:text-lg">{description}</p>}

        <div className="mt-8 flex flex-col items-center justify-center gap-4 xs:flex-row">
          <Button asChild size="lg">
            <Link href={primaryCta.href}>
              {primaryCta.label}
              <ArrowUpRight />
            </Link>
          </Button>
          {secondaryCta && (
            <Button asChild variant="outline" size="lg">
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
