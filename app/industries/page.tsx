import type { Metadata } from "next";
import { Hero, SectionTitle, CTABanner } from "@/components/sections";
import { Section } from "@/components/layout/section";
import { SpecPlate, SpecReadout } from "@/components/ui/spec-plate";
import { buildMetadata } from "@/lib/seo";
import { industries } from "@/lib/data/industries";

export const metadata: Metadata = buildMetadata({
  title: "Industries",
  description:
    "Precision manufacturing for aerospace, energy, medical device, semiconductor equipment, heavy equipment, and automotive programs.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <Hero
        eyebrow="Industries"
        title="Regulated sectors,"
        highlight="documented process."
        description="Different industries demand different things from a manufacturing partner — flight-critical traceability, cleanroom-adjacent tolerance, or sustained fatigue life. The process below flexes to fit each."
      />

      <Section>
        <SectionTitle
          eyebrow="Sectors we build for"
          title="Six industries, one quality system"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <SpecPlate key={industry.slug} className="flex h-full flex-col">
                <Icon className="h-8 w-8 text-accent" strokeWidth={1.5} aria-hidden />
                <h3 className="mt-5 font-display text-xl uppercase tracking-wide text-foreground">
                  {industry.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {industry.description}
                </p>
                <div className="mt-6 space-y-2 border-t border-border pt-4">
                  {industry.specs.map((spec) => (
                    <SpecReadout key={spec.label} label={spec.label} value={spec.value} />
                  ))}
                </div>
              </SpecPlate>
            );
          })}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <CTABanner
          eyebrow="Don't see your industry"
          title="If it needs held tolerance, we've probably built it"
          description="Talk to our engineering team about your sector's specific documentation and process requirements."
          primaryCta={{ label: "Talk to Engineering", href: "/contact" }}
          secondaryCta={{ label: "View Projects", href: "/projects" }}
        />
      </Section>
    </>
  );
}
