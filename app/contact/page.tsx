import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with PKm (Pooshesh Kian Makan) about industrial surface treatment, protective coating, and metal finishing projects.",
};

/* ---------------------------------------------------------
   No phone number, email, or address is fabricated here.
   Fields marked [ ... ] are explicit placeholders — replace
   with real contact details once confirmed.
--------------------------------------------------------- */

const contactChannels = [
  {
    label: "Email",
    value: "[ Email address ]",
    note: "Add the company's primary contact email.",
  },
  {
    label: "Phone",
    value: "[ Phone number ]",
    note: "Add a direct or office line.",
  },
  {
    label: "Address",
    value: "[ Company address ]",
    note: "Add the facility or office address.",
  },
];

const inquiryTypes = [
  "Industrial Surface Treatment",
  "Protective Coating Systems",
  "Metal Finishing",
  "Manufacturing Support Services",
  "Other Inquiry",
];

export default function ContactPage() {
  return (
    <main className="bg-[#0F1214] text-[#EDEFEF]">
      {/* ---------------- Hero ---------------- */}
      <section aria-labelledby="contact-hero-heading" className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 pt-28 pb-16 sm:pt-36 sm:pb-20">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#C2703A]">
            Contact
          </p>
          <h1
            id="contact-hero-heading"
            className="mt-6 max-w-2xl text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-5xl"
          >
            Talk to our team about your project.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#A9B0B6] sm:text-lg">
            Share your surface treatment or coating requirements and our
            team will follow up directly. The more detail you provide, the
            faster we can respond with a relevant answer.
          </p>
        </div>
      </section>

      {/* ---------------- Contact Form ---------------- */}
      <section aria-labelledby="contact-form-heading" className="border-b border-white/10 bg-[#14171A]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#C2703A]">
                Send an Inquiry
              </p>
              <h2
                id="contact-form-heading"
                className="mt-4 text-2xl font-black uppercase tracking-tight sm:text-3xl"
              >
                Project inquiry form
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#A9B0B6]">
                Fill in the fields to the right with your project or
                specification details. Fields marked with an asterisk are
                required.
              </p>
            </div>

            {/*
              NOTE: form submission handling is intentionally not wired
              to a backend yet — no API route or server action exists
              in this project so far. Connect this form's `action`
              (server action or /api/contact route) once one is built.
            */}
            <form className="grid gap-6" aria-describedby="contact-form-heading">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-[#A9B0B6]">
                    Full name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="rounded-sm border border-white/15 bg-[#0F1214] px-4 py-3 text-sm text-[#EDEFEF] outline-none placeholder:text-[#5C646B] focus-visible:border-[#C2703A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C2703A]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="font-mono text-xs uppercase tracking-widest text-[#A9B0B6]">
                    Company / organization
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    className="rounded-sm border border-white/15 bg-[#0F1214] px-4 py-3 text-sm text-[#EDEFEF] outline-none placeholder:text-[#5C646B] focus-visible:border-[#C2703A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C2703A]"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-[#A9B0B6]">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="rounded-sm border border-white/15 bg-[#0F1214] px-4 py-3 text-sm text-[#EDEFEF] outline-none placeholder:text-[#5C646B] focus-visible:border-[#C2703A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C2703A]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-mono text-xs uppercase tracking-widest text-[#A9B0B6]">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="rounded-sm border border-white/15 bg-[#0F1214] px-4 py-3 text-sm text-[#EDEFEF] outline-none placeholder:text-[#5C646B] focus-visible:border-[#C2703A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C2703A]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="inquiryType" className="font-mono text-xs uppercase tracking-widest text-[#A9B0B6]">
                  Inquiry type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  defaultValue={inquiryTypes[0]}
                  className="rounded-sm border border-white/15 bg-[#0F1214] px-4 py-3 text-sm text-[#EDEFEF] outline-none focus-visible:border-[#C2703A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C2703A]"
                >
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-[#A9B0B6]">
                  Project details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="resize-y rounded-sm border border-white/15 bg-[#0F1214] px-4 py-3 text-sm text-[#EDEFEF] outline-none placeholder:text-[#5C646B] focus-visible:border-[#C2703A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C2703A]"
                  placeholder="Describe the material, scope, specification, or timeline for your project."
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex w-fit items-center justify-center rounded-sm bg-[#E2A33D] px-8 py-3 text-sm font-bold uppercase tracking-wide text-[#14171A] transition-colors hover:bg-[#eeb35a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E2A33D]"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ---------------- Contact Information ---------------- */}
      <section aria-labelledby="contact-info-heading" className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#C2703A]">
            Direct Contact
          </p>
          <h2
            id="contact-info-heading"
            className="mt-4 max-w-2xl text-2xl font-black uppercase tracking-tight sm:text-3xl"
          >
            Contact information
          </h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {contactChannels.map((channel) => (
              <div key={channel.label} className="rounded-sm border border-white/10 p-8">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#A9B0B6]">
                  {channel.label}
                </h3>
                <p className="mt-4 text-base font-bold uppercase tracking-tight text-[#7C858C]">
                  {channel.value}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-[#5C646B]">
                  {channel.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Company Location ---------------- */}
      <section aria-labelledby="location-heading" className="border-b border-white/10 bg-[#14171A]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#C2703A]">
            Location
          </p>
          <h2
            id="location-heading"
            className="mt-4 max-w-2xl text-2xl font-black uppercase tracking-tight sm:text-3xl"
          >
            Company location
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#A9B0B6]">
            A map will be added here once the company address is confirmed.
          </p>

          <div
            role="img"
            aria-label="Placeholder for company location map, to be added once the address is confirmed."
            className="mt-10 flex aspect-[16/7] w-full items-center justify-center rounded-sm border border-dashed border-white/15 bg-[#0F1214]"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-[#5C646B]">
              Map placeholder — location to be added
            </span>
          </div>
        </div>
      </section>

      {/* ---------------- Closing CTA ---------------- */}
      <section aria-labelledby="contact-cta-heading">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="flex flex-col items-start justify-between gap-8 rounded-sm border border-white/10 p-10 sm:flex-row sm:items-center sm:p-14">
            <div>
              <h2 id="contact-cta-heading" className="text-2xl font-black uppercase tracking-tight sm:text-3xl">
                Prefer to browse our services first?
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#A9B0B6]">
                See the full range of surface treatment and coating
                services we provide.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex shrink-0 items-center justify-center rounded-sm border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-wide text-[#EDEFEF] transition-colors hover:border-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
