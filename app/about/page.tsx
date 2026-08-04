import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { Hero, SectionTitle, FeatureCard, CTABanner } from "@/components/sections";
import { Section } from "@/components/layout/section";
import { Timeline } from "@/components/sections/timeline";
import { SpecPlate, SpecReadout } from "@/components/ui/spec-plate";
import { buildMetadata } from "@/lib/seo";
import { timeline, values, certifications } from "@/lib/data/about";

export const metadata: Metadata = buildMetadata({
  title: "About FERRUM Industrial",
  description:
    "28 years of precision manufacturing in Cleveland, Ohio — from a three-machine job shop to a 180,000 sq ft AS9100D-certified production operation.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About FERRUM"
        title="Built on the floor,"
        highlight="not in a boardroom."
        description="FERRUM started as a three-machine job shop in 1998 and grew into a 180,000 sq ft precision manufacturing operation without ever losing the engineer-to-machinist feedback loop that got it there."
      />

      <Section>
        <SectionTitle eyebrow="Company history" title="From job shop to production partner" />
        <Timeline events={timeline} className="mt-10" />
      </Section>

      <Section className="border-y border-border bg-surface">
        <SectionTitle
          eyebrow="What we hold ourselves to"
          title="Four principles that don't flex under schedule pressure"
        />
        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {values.map((value) => (
            <FeatureCard key={value.title} {...value} />
          ))}
        </div>
      </Section>

      <Section id="certifications" ariaLabel="Certifications">
        <SectionTitle
          eyebrow="Certifications"
          title="Audited, not just claimed"
          description="Certificates and audit history are available on request under NDA."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {certifications.map((cert) => (
            <SpecPlate key={cert.name}>
              <div className="mb-4 flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-accent" strokeWidth={1.5} aria-hidden />
                <h3 className="font-display text-lg uppercase tracking-wide text-foreground">
                  {cert.name}
                </h3>
              </div>
              <SpecReadout label="Issuer" value={cert.issuer} />
              <SpecReadout label="Scope" value={cert.scope} />
            </SpecPlate>
          ))}
        </div>
      </Section>

      <Section>
        <CTABanner
          eyebrow="Come see the floor"
          title="Schedule a facility tour"
          description="The fastest way to evaluate a manufacturing partner is to walk the floor. Cleveland facility tours are available by appointment."
          primaryCta={{ label: "Request a Tour", href: "/contact" }}
          secondaryCta={{ label: "View Capabilities", href: "/services" }}
        />
      </Section>
    </>
  );
}
