export interface ProjectSpecItem {
  label: string;
  value: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  industry: string;
  year: string;
  summary: string;
  specs: ProjectSpecItem[];
  featured?: boolean;
}

export const projects: ProjectData[] = [
  {
    slug: "turbine-housing-program",
    title: "Turbine Housing Production Program",
    industry: "Energy & Power Generation",
    year: "2025",
    summary:
      "Converted a legacy casting-and-machine process to a single-setup 5-axis program, cutting lead time on a 40-piece monthly turbine housing order.",
    specs: [
      { label: "Lead-time reduction", value: "38%" },
      { label: "Monthly volume", value: "40 UNITS" },
      { label: "Material", value: "INCONEL 718" },
    ],
    featured: true,
  },
  {
    slug: "avionics-bracket-family",
    title: "Avionics Bracket Family",
    industry: "Aerospace & Defense",
    year: "2024",
    summary:
      "Design-for-manufacture pass on a 14-part avionics bracket family, reducing part count and machining time ahead of a Tier 1 production release.",
    specs: [
      { label: "Part family size", value: "14 PARTS" },
      { label: "Cycle time cut", value: "22%" },
      { label: "Material", value: "7075-T6 ALUMINUM" },
    ],
    featured: true,
  },
  {
    slug: "surgical-instrument-line",
    title: "Surgical Instrument Component Line",
    industry: "Medical Device",
    year: "2024",
    summary:
      "Stood up a dedicated cleanroom-adjacent cell for a surgical instrument OEM, hitting first-article approval on a compressed eight-week timeline.",
    specs: [
      { label: "Time to FAI", value: "8 WEEKS" },
      { label: "Tolerance", value: "±0.0003 IN" },
      { label: "Material", value: "17-4 PH STAINLESS" },
    ],
  },
  {
    slug: "wafer-chamber-retrofit",
    title: "Wafer Chamber Component Retrofit",
    industry: "Semiconductor Equipment",
    year: "2023",
    summary:
      "Reverse-engineered and requalified a discontinued chamber component, restoring a customer's production line without a full tooling redesign.",
    specs: [
      { label: "Turnaround", value: "6 WEEKS" },
      { label: "Surface finish", value: "Ra 8 μIN" },
      { label: "Material", value: "6061-T6 ALUMINUM" },
    ],
  },
  {
    slug: "off-highway-drivetrain-run",
    title: "Off-Highway Drivetrain Component Run",
    industry: "Heavy Equipment",
    year: "2023",
    summary:
      "Scaled a drivetrain housing from prototype to a running production rate of 600 units/month while holding fatigue-critical tolerances.",
    specs: [
      { label: "Production rate", value: "600 UNITS/MO" },
      { label: "Fatigue rating", value: "1.2M CYCLES" },
      { label: "Material", value: "4140 STEEL" },
    ],
  },
  {
    slug: "automotive-tooling-refresh",
    title: "Automotive Production Tooling Refresh",
    industry: "Automotive",
    year: "2022",
    summary:
      "Rebuilt a full tooling set for a Tier 1 stamping supplier ahead of a model-year changeover, delivered on a fixed 10-week window.",
    specs: [
      { label: "Delivery window", value: "10 WEEKS" },
      { label: "Tool sets delivered", value: "22" },
      { label: "PPAP level", value: "LEVEL 3" },
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((project) => project.slug === slug);
}
