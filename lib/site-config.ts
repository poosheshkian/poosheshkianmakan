export const siteConfig = {
  name: "FERRUM INDUSTRIAL",
  shortName: "FERRUM",
  tagline: "Precision manufacturing, engineered to tolerance.",
  description:
    "FERRUM Industrial designs and manufactures precision-machined components, industrial automation systems, and heavy equipment assemblies for aerospace, energy, and advanced manufacturing.",
  url: "https://www.ferrumindustrial.com",
  locale: "en_US",
  contact: {
    email: "contact@ferrumindustrial.com",
    phone: "+1 (216) 555-0142",
    address: "4820 Foundry Road, Cleveland, OH 44114",
  },
  social: {
    linkedin: "https://linkedin.com/company/ferrum-industrial",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const primaryNav: NavItem[] = [
  { label: "Services", href: "/services", description: "Machining, automation, and assembly capacity" },
  { label: "Industries", href: "/industries", description: "Sectors we build for" },
  { label: "Projects", href: "/projects", description: "Selected engineering programs" },
  { label: "About", href: "/about", description: "Facilities, certifications, and team" },
  { label: "Contact", href: "/contact", description: "Request a quote or facility tour" },
];

export const footerNav = {
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Certifications", href: "/about#certifications" },
    { label: "FAQ", href: "/faq" },
  ],
  work: [
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} satisfies Record<string, NavItem[]>;
