import type { Metadata } from "next";
import { Hero, SectionTitle, CTABanner } from "@/components/sections";
import { Section } from "@/components/layout/section";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { buildMetadata } from "@/lib/seo";
import { faqs } from "@/lib/data/faqs";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about quoting, certifications, lead time, and working with FERRUM Industrial.",
  path: "/faq",
});

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((category) =>
      category.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Hero
        eyebrow="FAQ"
        title="Questions we hear"
        highlight="before the first PO."
        description="Straightforward answers on quoting, certifications, lead time, and how programs actually run once they're on our floor."
      />

      <Section>
        <SectionTitle
          eyebrow="Still have a question"
          title={`Reach us directly at ${siteConfig.contact.email}`}
          className="mb-4"
        />
        <FaqAccordion categories={faqs} />
      </Section>

      <Section className="border-t border-border bg-surface">
        <CTABanner
          eyebrow="Didn't find your answer"
          title="Ask a program engineer directly"
          description="Most questions about a specific part or program are answered faster over email or a short call than through a general FAQ."
          primaryCta={{ label: "Contact Us", href: "/contact" }}
        />
      </Section>
    </>
  );
}
