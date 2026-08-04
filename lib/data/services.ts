import {
  Cog,
  Cpu,
  Layers,
  ShieldCheck,
  Ruler,
  PackageSearch,
  type LucideIcon,
} from "lucide-react";

export interface ServiceSpecItem {
  label: string;
  value: string;
}

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  description: string;
  specs: ServiceSpecItem[];
}

export const services: ServiceData[] = [
  {
    slug: "machining",
    icon: Cog,
    title: "CNC Machining",
    summary: "5-axis milling and turning for complex geometries.",
    description:
      "Simultaneous 5-axis milling and multi-spindle turning for prismatic and rotational parts in aluminum, steel, titanium, and high-temperature alloys, from single prototypes to production lots.",
    specs: [
      { label: "Tolerance", value: "±0.0002 IN" },
      { label: "Max envelope", value: "1200 × 800 MM" },
      { label: "Materials", value: "AL / STEEL / TI / INCONEL" },
    ],
  },
  {
    slug: "automation",
    icon: Cpu,
    title: "Industrial Automation",
    summary: "PLC-driven cells and robotic integration.",
    description:
      "In-house controls engineering for robotic work cells, vision-guided pick-and-place, and PLC-driven production lines designed for high-mix, high-volume output.",
    specs: [
      { label: "Cycle time", value: "AS LOW AS 4S" },
      { label: "Uptime", value: "99.1%" },
      { label: "Controls", value: "ALLEN-BRADLEY / SIEMENS" },
    ],
  },
  {
    slug: "assembly",
    icon: Layers,
    title: "Assembly & Integration",
    summary: "Multi-component sub-assembly under one roof.",
    description:
      "Mechanical and electromechanical sub-assembly, torque-controlled fastening, and functional testing, reducing the number of supply-chain handoffs between spec and shipment.",
    specs: [
      { label: "Stations", value: "18 ACTIVE" },
      { label: "Output", value: "1,200 UNITS/DAY" },
      { label: "Testing", value: "IN-LINE FUNCTIONAL" },
    ],
  },
  {
    slug: "quality",
    icon: ShieldCheck,
    title: "Quality & Inspection",
    summary: "In-process CMM inspection and full traceability.",
    description:
      "First-article inspection, in-process CMM sampling, and full material and process traceability on every certified lot, backed by an AS9100D quality management system.",
    specs: [
      { label: "Standard", value: "AS9100D" },
      { label: "CMM accuracy", value: "±0.00008 IN" },
      { label: "Traceability", value: "LOT-LEVEL" },
    ],
  },
  {
    slug: "tooling",
    icon: Ruler,
    title: "Tooling & Fixture Design",
    summary: "Custom work-holding engineered in-house.",
    description:
      "In-house design and build of custom fixtures, gauges, and work-holding, cutting new-program lead time and holding tolerance across long production runs.",
    specs: [
      { label: "Design turnaround", value: "5–10 DAYS" },
      { label: "Fixture life", value: "100K+ CYCLES" },
      { label: "Software", value: "SOLIDWORKS / MASTERCAM" },
    ],
  },
  {
    slug: "supply-chain",
    icon: PackageSearch,
    title: "Supply Chain & Kitting",
    summary: "Buffer-stock and kitting programs.",
    description:
      "Managed buffer-stock, blanket-order scheduling, and kitting programs that keep customer production lines supplied without carrying the inventory risk themselves.",
    specs: [
      { label: "Programs active", value: "34" },
      { label: "Lead-time buffer", value: "UP TO 12 WKS" },
      { label: "Freight", value: "IN-HOUSE COORDINATION" },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((service) => service.slug === slug);
}
