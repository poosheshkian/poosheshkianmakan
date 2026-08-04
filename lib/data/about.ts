import { ShieldCheck, Gauge, Users2, Recycle, type LucideIcon } from "lucide-react";

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export const timeline: TimelineEvent[] = [
  {
    year: "1998",
    title: "Founded in Cleveland, Ohio",
    description:
      "Opened as a 12,000 sq ft job shop serving regional automotive tooling suppliers with a three-machine floor.",
  },
  {
    year: "2006",
    title: "First aerospace program",
    description:
      "Earned AS9100 certification and shipped the first flight-critical bracket program for a Tier 1 aerospace supplier.",
  },
  {
    year: "2013",
    title: "Automation division launched",
    description:
      "Added in-house controls engineering and robotic integration to support high-mix, high-volume production lines.",
  },
  {
    year: "2019",
    title: "Second production hall opens",
    description:
      "Expanded to 180,000 sq ft across two Cleveland facilities, adding dedicated CMM inspection and assembly floors.",
  },
  {
    year: "2025",
    title: "410,000 parts shipped annually",
    description:
      "Reached a trailing twelve-month on-time delivery rate of 99.3% across aerospace, energy, and medical device programs.",
  },
];

export interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const values: ValueItem[] = [
  {
    icon: Gauge,
    title: "Precision as a default",
    description:
      "Tolerance isn't a premium option we upsell — it's the baseline every part is held to, verified before it ships.",
  },
  {
    icon: ShieldCheck,
    title: "Traceability without exception",
    description:
      "Every certified lot carries full material and process traceability, whether the program is 10 parts or 10,000.",
  },
  {
    icon: Users2,
    title: "Named engineers, not a queue",
    description:
      "Programs are staffed with a dedicated engineer and planner who know the part history and answer directly.",
  },
  {
    icon: Recycle,
    title: "Material accountability",
    description:
      "Scrap metal recovery and coolant recycling programs run across both facilities, reducing landfill waste year over year.",
  },
];

export interface Certification {
  name: string;
  issuer: string;
  scope: string;
}

export const certifications: Certification[] = [
  { name: "AS9100D", issuer: "ANAB", scope: "Aerospace quality management" },
  { name: "ISO 9001:2015", issuer: "ANAB", scope: "General quality management" },
  { name: "ITAR Registered", issuer: "U.S. Dept. of State", scope: "Defense export compliance" },
  { name: "NIST 800-171", issuer: "Self-attested / DIBCAC", scope: "Controlled unclassified information" },
];
