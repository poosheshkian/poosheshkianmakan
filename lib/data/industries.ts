import {
  Plane,
  Zap,
  Stethoscope,
  Cpu,
  Truck,
  Factory,
  type LucideIcon,
} from "lucide-react";

export interface IndustrySpecItem {
  label: string;
  value: string;
}

export interface IndustryData {
  slug: string;
  icon: LucideIcon;
  name: string;
  summary: string;
  description: string;
  specs: IndustrySpecItem[];
}

export const industries: IndustryData[] = [
  {
    slug: "aerospace-defense",
    icon: Plane,
    name: "Aerospace & Defense",
    summary: "Flight-critical components under AS9100D.",
    description:
      "Structural and engine-adjacent components machined to flight-critical tolerances, with full material certification and lot traceability for prime and Tier 1 aerospace programs.",
    specs: [
      { label: "Certification", value: "AS9100D" },
      { label: "ITAR", value: "REGISTERED" },
      { label: "Active programs", value: "12" },
    ],
  },
  {
    slug: "energy-power",
    icon: Zap,
    name: "Energy & Power Generation",
    summary: "Turbine and grid-hardware components.",
    description:
      "Large-envelope machining and assembly for turbine housings, valve bodies, and grid infrastructure hardware built for continuous-duty service environments.",
    specs: [
      { label: "Max part weight", value: "2,200 LB" },
      { label: "Duty class", value: "CONTINUOUS" },
      { label: "Active programs", value: "8" },
    ],
  },
  {
    slug: "medical-device",
    icon: Stethoscope,
    name: "Medical Device",
    summary: "Cleanroom-adjacent precision components.",
    description:
      "Tight-tolerance components for surgical instrumentation and diagnostic equipment housings, produced under documented process controls and full lot traceability.",
    specs: [
      { label: "Tolerance", value: "±0.0003 IN" },
      { label: "Environment", value: "ISO 8 ADJACENT" },
      { label: "Active programs", value: "6" },
    ],
  },
  {
    slug: "semiconductor-equipment",
    icon: Cpu,
    name: "Semiconductor Equipment",
    summary: "Ultra-high-precision chamber components.",
    description:
      "Vacuum-chamber and wafer-handling components requiring exceptional surface finish and dimensional stability, produced with certified cleanliness protocols.",
    specs: [
      { label: "Surface finish", value: "Ra 8–16 μIN" },
      { label: "Cleanliness", value: "CERTIFIED CLEAN-PACK" },
      { label: "Active programs", value: "5" },
    ],
  },
  {
    slug: "heavy-equipment",
    icon: Truck,
    name: "Heavy Equipment",
    summary: "High-load structural and drivetrain parts.",
    description:
      "Structural weldments and drivetrain components engineered for high-cycle fatigue loads in off-highway and construction equipment applications.",
    specs: [
      { label: "Max envelope", value: "1800 × 1200 MM" },
      { label: "Fatigue rating", value: "1M+ CYCLES" },
      { label: "Active programs", value: "10" },
    ],
  },
  {
    slug: "automotive",
    icon: Factory,
    name: "Automotive",
    summary: "High-volume production tooling and parts.",
    description:
      "Production tooling, jigs, and precision-machined components for automotive OEM and Tier 1 suppliers, scaled for high-volume, low-mix output.",
    specs: [
      { label: "Annual volume", value: "UP TO 250K UNITS" },
      { label: "PPAP", value: "LEVEL 3" },
      { label: "Active programs", value: "9" },
    ],
  },
];

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return industries.find((industry) => industry.slug === slug);
}
