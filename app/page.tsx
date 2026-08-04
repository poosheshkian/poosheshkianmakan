import {
  Cog,
  Cpu,
  Layers,
  ShieldCheck,
  Clock,
  Award,
  Truck,
  Users,
} from "lucide-react";
import { Section } from "@/components/layout/section";
import {
  Hero,
  SectionTitle,
  ServiceCard,
  FeatureCard,
  StatisticsCard,
  GallerySection,
  CTABanner,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Precision Contract Manufacturing"
        title="Engineered for"
        highlight="zero-tolerance production."
        description="FERRUM designs and machines precision components, automation systems, and assemblies for aerospace, energy, and advanced manufacturing programs — built to spec, on schedule, every run."
        primaryCta={{ label: "Request a Quote", href: "/contact" }}
        secondaryCta={{ label: "View Capabilities", href: "/services" }}
        stats={[
          { value: "28 YRS", label: "In Operation" },
          { value: "±0.0002 IN", label: "Machine Tolerance" },
          { value: "410K", label: "Parts Shipped / YR" },
          { value: "99.3%", label: "On-Time Delivery" },
        ]}
      />

      {/* Capabilities */}
      <Section>
        <SectionTitle
          eyebrow="Capabilities"
          title="Manufacturing built around tolerance, not guesswork"
          description="From single prototypes to production runs of 100,000+, every part moves through the same disciplined process — design review, machining, inspection, delivery."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            icon={Cog}
            title="CNC Machining"
            description="5-axis milling and turning for complex geometries in aluminum, steel, titanium, and high-temp alloys."
            specs={[
              { label: "Tolerance", value: "±0.0002 IN" },
              { label: "Max envelope", value: "1200 × 800 MM" },
            ]}
            href="/services#machining"
          />
          <ServiceCard
            icon={Cpu}
            title="Industrial Automation"
            description="PLC-driven cell design and robotic integration for high-mix, high-volume production lines."
            specs={[
              { label: "Cycle time", value: "AS LOW AS 4S" },
              { label: "Uptime", value: "99.1%" },
            ]}
            href="/services#automation"
          />
          <ServiceCard
            icon={Layers}
            title="Assembly & Integration"
            description="Multi-component sub-assembly, fastening, and testing under one roof, reducing supply-chain handoffs."
            specs={[
              { label: "Stations", value: "18 ACTIVE" },
              { label: "Output", value: "1,200 UNITS/DAY" },
            ]}
            href="/services#assembly"
          />
          <ServiceCard
            icon={ShieldCheck}
            title="Quality & Inspection"
            description="In-process CMM inspection and full material traceability on every certified production lot."
            specs={[
              { label: "Standard", value: "AS9100D" },
              { label: "CMM accuracy", value: "±0.00008 IN" },
            ]}
            href="/services#quality"
          />
        </div>
      </Section>

      {/* Statistics */}
      <Section className="border-y border-border bg-surface">
        <SectionTitle
          eyebrow="By the numbers"
          title="A track record measured in tolerance and time"
        />
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          <StatisticsCard
            value="180,000 FT²"
            label="Facility Footprint"
            description="Across two Cleveland production halls."
          />
          <StatisticsCard
            value="64"
            label="Certified Engineers"
            description="On staff across shifts."
          />
          <StatisticsCard
            value="AS9100D"
            label="Certification"
            description="Aerospace quality management."
          />
          <StatisticsCard
            value="99.3%"
            label="On-Time Delivery"
            description="Trailing twelve-month average."
          />
        </div>
      </Section>

      {/* Why FERRUM */}
      <Section>
        <SectionTitle
          eyebrow="Why manufacturers choose us"
          title="Fewer handoffs, tighter feedback loops"
          description="Engineering, machining, and quality sit on the same floor — so a tolerance question gets answered in minutes, not through a ticketing system."
        />
        <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          <FeatureCard
            icon={Clock}
            title="Fast quote turnaround"
            description="DFM feedback and pricing on new prints within 48 hours, backed by an in-house programming team."
          />
          <FeatureCard
            icon={Award}
            title="Certified quality system"
            description="AS9100D and ISO 9001 certified, with full material and process traceability on every lot."
          />
          <FeatureCard
            icon={Truck}
            title="Reliable logistics"
            description="In-house freight coordination and buffer-stock programs keep production lines from waiting on parts."
          />
          <FeatureCard
            icon={Users}
            title="Dedicated program teams"
            description="Every account is assigned a named engineer and planner who knows the part history, not a call queue."
          />
        </div>
      </Section>

      {/* Gallery — full-bleed, so it intentionally skips the Section/Container wrapper */}
      <section aria-label="Facility gallery" className="py-20 md:py-28">
        <div className="mx-auto mb-12 w-full max-w-(--container-max) px-6 md:px-10">
          <SectionTitle
            eyebrow="Inside the facility"
            title="Where the parts get made"
            description="A look at the machining floor, automation cells, and inspection lab in Cleveland."
          />
        </div>
        <GallerySection
          items={[
            { caption: "5-Axis Machining Cell", meta: "BAY 2", wide: true },
            { caption: "CMM Inspection Lab", meta: "BAY 5" },
            { caption: "Robotic Assembly", meta: "BAY 3" },
            { caption: "Material Staging", meta: "BAY 1" },
            { caption: "Finished Goods & Freight", meta: "BAY 6", wide: true },
          ]}
        />
      </section>

      {/* CTA */}
      <Section>
        <CTABanner
          eyebrow="Start a program"
          title="Ready to spec your next run?"
          description="Send a print or a rough sketch — our engineering team responds with DFM feedback and a quote within two business days."
          primaryCta={{ label: "Request a Quote", href: "/contact" }}
          secondaryCta={{ label: "Talk to Engineering", href: "/contact#engineering" }}
        />
      </Section>
    </>
  );
}
