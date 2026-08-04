export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  category: string;
  items: FaqItem[];
}

export const faqs: FaqCategory[] = [
  {
    category: "Quoting & Pricing",
    items: [
      {
        question: "How fast can I get a quote?",
        answer:
          "Most quotes are returned within 48 hours of receiving a print or 3D model. Complex assemblies or new-material requests may take longer while we confirm sourcing.",
      },
      {
        question: "What file formats do you accept for quoting?",
        answer:
          "STEP and IGES for models, and PDF for drawings, are preferred. We can also work from native SolidWorks, CATIA, or NX files on request.",
      },
      {
        question: "Is there a minimum order quantity?",
        answer:
          "No. We quote everything from single prototypes to production runs of 100,000+ units. Pricing is structured to reflect setup cost at low volumes.",
      },
    ],
  },
  {
    category: "Quality & Certifications",
    items: [
      {
        question: "What certifications does FERRUM hold?",
        answer:
          "We're AS9100D and ISO 9001 certified, and ITAR registered. Certificates and audit history are available on request under NDA.",
      },
      {
        question: "Do you provide material and process traceability?",
        answer:
          "Yes. Every certified production lot carries full material certification and process traceability back to raw stock, available in the final inspection package.",
      },
      {
        question: "Can you support first-article inspection (FAI) to AS9102?",
        answer:
          "Yes, AS9102 first-article inspection reports are available for any part on request, and are standard on aerospace and defense programs.",
      },
    ],
  },
  {
    category: "Production & Logistics",
    items: [
      {
        question: "What's your typical lead time?",
        answer:
          "Standard lead time is 3–5 weeks depending on material and complexity, with expedite options available for qualified programs.",
      },
      {
        question: "Do you offer buffer-stock or blanket-order programs?",
        answer:
          "Yes. We run managed buffer-stock and blanket-order programs for customers who need consistent supply without carrying the inventory themselves.",
      },
      {
        question: "Can you handle assembly and kitting, not just machined parts?",
        answer:
          "Yes, our assembly floor handles mechanical and electromechanical sub-assembly, functional testing, and kitting under the same roof as machining.",
      },
    ],
  },
  {
    category: "Working With Us",
    items: [
      {
        question: "Will I have a dedicated point of contact?",
        answer:
          "Every account is assigned a named engineer and program planner who knows the part history — not a rotating support queue.",
      },
      {
        question: "Do you sign NDAs before reviewing a print?",
        answer:
          "Yes, we routinely sign mutual NDAs before any design review, and can work from a template you provide.",
      },
    ],
  },
];
