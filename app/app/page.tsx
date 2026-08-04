import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PKm | پوشش کیان ماکان — Industrial Surface Treatment & Coating Solutions",
  description:
    "Pooshesh Kian Makan (PKm) provides industrial surface treatment, protective coatings, and metal finishing services for manufacturers, contractors, and engineering teams.",
};

/* ---------------------------------------------------------
   Static content. No invented history, certifications,
   clients, statistics, or contact details — copy below is
   deliberately generic and safe to refine with real detail
   as it becomes available.
--------------------------------------------------------- */

const services = [
  {
    label: "01",
    title: "Industrial Surface Treatment",
    description:
      "Preparation and treatment of metal surfaces to improve adhesion, durability, and long-term resistance to wear and corrosion.",
  },
  {
    label: "02",
    title: "Protective Coating Systems",
    description:
      "Coating solutions engineered to protect industrial components and structures from corrosion, abrasion, and environmental exposure.",
  },
  {
    label: "03",
    title: "Metal Finishing",
    description:
      "Precision finishing services for metal parts and assemblies, tailored to functional and specification requirements.",
  },
  {
    label: "04",
    title: "Manufacturing Support Services",
    description:
      "Coating and finishing services integrated into manufacturing workflows, scaled to production volume and technical specification.",
  },
];

const whyUs = [
  {
    title: "Technical Expertise",
    description:
      "Our teams work from clear technical specifications, applying industrial coating and finishing methods suited to each material and application.",
  },
  {
    title: "Consistent Quality Process",
    description:
      "Every stage of surface preparation and application follows a controlled process, so results are consistent from batch to batch.",
  },
  {
    title: "Built for Industrial Use",
    description:
      "Our services are built around the demands of industrial environments: durability, resistance, and performance under real operating conditions.",
  },
  {
    title: "Direct, Responsive Communication",
    description:
      "Engineering and procurement teams work directly with our project contacts, from initial specification through delivery.",
  },
];

const industries = [
  {
    title: "Manufacturing Facilities",
    description: "Coating and finishing services aligned with production-line requirements and material specifications.",
  },
  {
    title: "Contractors & Fabricators",
    description: "Surface treatment support for structural and fabricated metal components.",
  },
  {
    title: "Engineering & Procurement Teams",
    description: "Technical coordination for teams sourcing coating and surface treatment work to spec.",
  },
  {
    title: "Industrial Equipment Manufacturers",
    description: "Finishing services for components and equipment built for demanding operating environments.",
  },
];

const capabilities = [
  {
    title: "Structural Steel Protective Coating",
    description:
      "Application of protective coating systems to structural steel components, prepared to specification before finishing.",
  },
  {
    title: "Metal Component Surface Finishing",
    description:
      "Surface finishing for manufactured metal parts, focused on consistency and adherence to technical tolerances.",
  },
  {
    title: "Industrial Equipment Refinishing",
    description:
      "Refinishing services for existing industrial equipment, restoring protective surface performance.",
  },
  {
    title: "Custom Coating System Application",
    description:
      "Coating application built around a client's material, environment, and performance requirements.",
  },
];

const faqs = [
  {
    question: "What services does PKm provide?",
    answer:
      "PKm provides industrial surface treatment, protective coating systems, and metal finishing services for manufacturers, contractors, and industrial equipment producers.",
  },
  {
    question: "Do you work from client specifications?",
    answer:
      "Yes. Our process starts from the technical specification or requirement provided by the client's engineering or procurement team.",
  },
  {
    question: "Can PKm support ongoing production needs?",
    answer:
      "Yes. Our services are structured to support both one-off projects and recurring production or maintenance schedules.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "Reach out through our contact page with your project or specification details, and our team will follow up directly.",
  },
];

const layers = [
  { name: "Substrate", tint: "bg-[#4A535C]" },
  { name: "Surface Prep", tint: "bg-[#6B747C]" },
  { name: "Primer", tint: "bg-[#8A5A34]" },
  { name: "Protective Topcoat", tint: "bg-[#C2703A]" },
];

export default function HomePage() {
  return (
    <main className="bg-[#0F1214] text-[#EDEFEF]">
      {/* Reduced-motion-safe keyframes for the hero layer build-up */}
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .pkm-layer {
            opacity: 0;
            transform: scaleX(0.4);
            transform-origin: left;
            animation: pkm-build 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .pkm-layer-0 { animation-delay: 0.05s; }
          .pkm-layer-1 { animation-delay: 0.25s; }
          .pkm-layer-2 { animation-delay: 0.45s; }
          .pkm-layer-3 { animation-delay: 0.65s; }
          @keyframes pkm-build {
            to { opacity: 1; transform: scaleX(1); }
          }
        }
      `}</style>

      {/* ---------------- Hero ---------------- */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden border-b border-white/10"
      >
        <div className="mx-auto max-w-6xl px-6 pt-28 pb-20 sm:pt-36 sm:pb-28">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#C2703A]">
            پوشش کیان ماکان — PKm
          </p>

          <h1
            id="hero-heading"
            className="mt-6 max-w-3xl text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-6xl"
          >
            Surface treatment engineered to protect what you build.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#A9B0B6] sm:text-lg">
            Pooshesh Kian Makan (PKm) delivers industrial surface treatment,
            protective coatings, and metal finishing services for
            manufacturers, contractors, and engineering teams who need
            durable, specification-driven results.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-[#E2A33D] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#14171A] transition-colors hover:bg-[#eeb35a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E2A33D]"
            >
              Request a Quote
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-sm border border-white/20 px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#EDEFEF] transition-colors hover:border-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
            >
              View Services
            </Link>
          </div>

          {/* Signature element: labeled coating cross-section */}
          <div className="mt-20" role="img" aria-label="Diagram of a protective coating cross-section: substrate, surface preparation, primer, and protective topcoat.">
            <div className="flex h-10 w-full overflow-hidden rounded-sm">
              {layers.map((layer, i) => (
                <div
                  key={layer.name}
                  className={`pkm-layer pkm-layer-${i} ${layer.tint} h-full flex-1 border-r border-black/20 last:border-r-0`}
                />
              ))}
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 font-mono text-[11px] uppercase tracking-widest text-[#7C858C] sm:grid-cols-4">
              {layers.map((layer) => (
                <span key={layer.name}>{layer.name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Company Introduction ---------------- */}
      <section aria-labelledby="about-heading" className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="grid gap-12 sm:grid-cols-[1fr_2fr]">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#C2703A]">
              About PKm
            </p>
            <div className="max-w-2xl">
              <h2 id="about-heading" className="text-2xl font-black uppercase tracking-tight sm:text-3xl">
                Industrial coating and finishing, built around your specification.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#A9B0B6]">
                PKm works with industrial companies, factories, and
                contractors to deliver surface treatment and protective
                coating services suited to demanding operating conditions.
                We work directly from technical requirements, applying
                consistent process control across every project we take on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Services ---------------- */}
      <section aria-labelledby="services-heading" className="border-b border-white/10 bg-[#14171A]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#C2703A]">
            What We Do
          </p>
          <h2 id="services-heading" className="mt-4 max-w-2xl text-2xl font-black uppercase tracking-tight sm:text-3xl">
            Core services
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="bg-[#14171A] p-8">
                <span className="font-mono text-xs text-[#C2703A]">{service.label}</span>
                <h3 className="mt-4 text-lg font-bold uppercase tracking-tight">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#A9B0B6]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Why Choose Us ---------------- */}
      <section aria-labelledby="why-heading" className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#C2703A]">
            Why PKm
          </p>
          <h2 id="why-heading" className="mt-4 max-w-2xl text-2xl font-black uppercase tracking-tight sm:text-3xl">
            Why industrial teams choose to work with us
          </h2>

          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            {whyUs.map((item) => (
              <div key={item.title} className="border-l-2 border-[#C2703A] pl-6">
                <h3 className="text-base font-bold uppercase tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#A9B0B6]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Industries ---------------- */}
      <section aria-labelledby="industries-heading" className="border-b border-white/10 bg-[#14171A]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#C2703A]">
            Who We Serve
          </p>
          <h2 id="industries-heading" className="mt-4 max-w-2xl text-2xl font-black uppercase tracking-tight sm:text-3xl">
            Industries
          </h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div key={industry.title} className="rounded-sm border border-white/10 p-6">
                <h3 className="text-sm font-bold uppercase tracking-tight">{industry.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#A9B0B6]">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Featured Projects ---------------- */}
      <section aria-labelledby="projects-heading" className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#C2703A]">
            Our Work
          </p>
          <h2 id="projects-heading" className="mt-4 max-w-2xl text-2xl font-black uppercase tracking-tight sm:text-3xl">
            Project capabilities
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#A9B0B6]">
            A look at the type of work our teams take on across surface
            treatment and coating projects.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {capabilities.map((project) => (
              <div key={project.title} className="rounded-sm border border-white/10 p-8 transition-colors hover:border-[#C2703A]/60">
                <h3 className="text-base font-bold uppercase tracking-tight">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#A9B0B6]">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- FAQ Preview ---------------- */}
      <section aria-labelledby="faq-heading" className="border-b border-white/10 bg-[#14171A]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#C2703A]">
            Questions
          </p>
          <h2 id="faq-heading" className="mt-4 max-w-2xl text-2xl font-black uppercase tracking-tight sm:text-3xl">
            Frequently asked questions
          </h2>

          <div className="mt-12 max-w-3xl divide-y divide-white/10 border-t border-white/10">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-bold uppercase tracking-tight marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C2703A]">
                  {faq.question}
                  <span className="ml-4 shrink-0 font-mono text-lg text-[#C2703A] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[#A9B0B6]">{faq.answer}</p>
              </details>
            ))}
          </div>

          <Link
            href="/faq"
            className="mt-10 inline-flex items-center text-sm font-bold uppercase tracking-wide text-[#E2A33D] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E2A33D]"
          >
            View all questions
          </Link>
        </div>
      </section>

      {/* ---------------- Call to Action ---------------- */}
      <section aria-labelledby="cta-heading">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="flex flex-col items-start justify-between gap-8 rounded-sm border border-white/10 p-10 sm:flex-row sm:items-center sm:p-14">
            <div>
              <h2 id="cta-heading" className="text-2xl font-black uppercase tracking-tight sm:text-3xl">
                Have a specification to work from?
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#A9B0B6]">
                Send us your project or coating requirements and our team
                will follow up directly.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-sm bg-[#E2A33D] px-8 py-4 text-sm font-bold uppercase tracking-wide text-[#14171A] transition-colors hover:bg-[#eeb35a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E2A33D]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
