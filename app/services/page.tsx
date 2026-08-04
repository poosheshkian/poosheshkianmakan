import type { Metadata } from "next";
import { Hero, SectionTitle, ServiceCard, CTABanner } from "@/components/sections";
import { Section } from "@/components/layout/section";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/data/services";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "CNC machining, industrial automation, assembly, quality inspection, tooling, and supply-chain programs — full capability list for FERRUM Industrial.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Services"
        title="Six disciplines,"
        highlight="one production floor."
        description="Every service below runs under the same roof in Cleveland — engineering, machining, automation, and inspection stay in the same building, so a spec question gets answered in minutes."
      />

      <Section>
        <SectionTitle
          eyebrow="Full capability list"
          title="From first article to full production"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.slug} id={service.slug}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                specs={service.specs}
              />
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface">
        <CTABanner
          eyebrow="Not sure which service fits"
          title="Send a print, we'll tell you what it takes"
          description="Most quotes come back with a recommended process, tolerance feedback, and lead time within 48 hours."
          primaryCta={{ label: "Request a Quote", href: "/contact" }}
          secondaryCta={{ label: "See Past Projects", href: "/projects" }}
        />
      </Section>
    </>
  );
}
