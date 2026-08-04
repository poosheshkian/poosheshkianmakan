import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { Hero, SectionTitle } from "@/components/sections";
import { Section } from "@/components/layout/section";
import { ContactForm } from "@/components/sections/contact-form";
import { SpecPlate, SpecReadout } from "@/components/ui/spec-plate";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Request a quote, schedule a facility tour, or reach FERRUM Industrial's engineering team directly.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Send a print,"
        highlight="get a real answer."
        description="Whether it's a new program quote or a question about an existing order, requests go to a named engineer — not a general inbox."
      />

      <Section id="engineering" ariaLabel="Contact form and details">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionTitle eyebrow="Request a quote" title="Tell us about the part" />
            <ContactForm className="mt-10" />
          </div>

          <div className="space-y-6">
            <SpecPlate>
              <div className="mb-4 flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" strokeWidth={1.5} aria-hidden />
                <span className="font-display text-sm uppercase tracking-wide text-foreground">
                  Email
                </span>
              </div>
              <SpecReadout label="General inquiries" value={siteConfig.contact.email} />
            </SpecPlate>

            <SpecPlate>
              <div className="mb-4 flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" strokeWidth={1.5} aria-hidden />
                <span className="font-display text-sm uppercase tracking-wide text-foreground">
                  Phone
                </span>
              </div>
              <SpecReadout label="Main line" value={siteConfig.contact.phone} />
            </SpecPlate>

            <SpecPlate>
              <div className="mb-4 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" strokeWidth={1.5} aria-hidden />
                <span className="font-display text-sm uppercase tracking-wide text-foreground">
                  Facility
                </span>
              </div>
              <SpecReadout label="Address" value={siteConfig.contact.address} />
              <SpecReadout label="Tours" value="BY APPOINTMENT" />
            </SpecPlate>
          </div>
        </div>
      </Section>
    </>
  );
}
