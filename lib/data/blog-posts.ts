export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "5-axis-vs-3-axis-machining",
    title: "5-Axis vs. 3-Axis Machining: When the Extra Setup Pays Off",
    excerpt:
      "Simultaneous 5-axis machining isn't always the right call. Here's how we decide which programs justify the extra setup time.",
    category: "Machining",
    author: "Engineering Team",
    date: "2026-06-02",
    readTime: "6 MIN READ",
    content: [
      "The instinct on a complex part is to reach for 5-axis machining by default. In practice, the extra setup and programming time only pays off once part geometry, tolerance stack-up, or fixturing cost cross a specific threshold.",
      "For prismatic parts with a limited number of features per side, 3-axis machining with a well-designed fixture is often faster to program and cheaper to run at volume. 5-axis earns its keep on parts with compound angles, blended surfaces, or tolerance requirements that can't tolerate multiple setups.",
      "The decision point we use internally comes down to three questions: how many setups would 3-axis require, what tolerance is being held across those setups, and what does the fixture cost look like at the quoted volume. Answering those honestly, before committing to a process, is what keeps quoted lead times accurate.",
    ],
  },
  {
    slug: "reading-a-cmm-report",
    title: "How to Read a CMM Inspection Report Without an Engineering Degree",
    excerpt:
      "A plain-language walkthrough of what's actually in a coordinate measuring machine report, and which numbers matter most.",
    category: "Quality",
    author: "Quality Team",
    date: "2026-04-18",
    readTime: "5 MIN READ",
    content: [
      "A CMM report can look like a wall of numbers if you're not the one who wrote the inspection program. Most of what matters sits in three columns: nominal value, measured value, and deviation.",
      "Nominal is what the print calls for. Measured is what the part actually came in at. Deviation is the difference, and it's the number to check against your tolerance band first, before anything else on the page.",
      "Flagged rows, usually highlighted or marked out-of-tolerance, are the only ones that need a conversation. Everything else on the report is confirmation, not a problem to solve.",
    ],
  },
  {
    slug: "buffer-stock-programs-explained",
    title: "Buffer-Stock Programs: A Practical Alternative to Safety Stock",
    excerpt:
      "Carrying your own safety stock ties up capital. Here's how a managed buffer-stock program shifts that risk without hurting supply reliability.",
    category: "Supply Chain",
    author: "Operations Team",
    date: "2026-02-11",
    readTime: "4 MIN READ",
    content: [
      "Safety stock solves a real problem — protecting a production line from supply variability — but it does so by tying up working capital on your balance sheet indefinitely.",
      "A managed buffer-stock program shifts that inventory onto the supplier's floor instead. We hold an agreed quantity, produced against a blanket order, and release it against your actual consumption rather than a forecast.",
      "The tradeoff is forecast accuracy: buffer programs work best with a defined annual volume and a release cadence, not ad hoc ordering. For steady, predictable consumption, it's usually the better structure.",
    ],
  },
  {
    slug: "design-for-manufacture-checklist",
    title: "A Design-for-Manufacture Checklist Before You Send Us a Print",
    excerpt:
      "Five things worth checking on a new part design before it goes out for quote — each one can meaningfully change lead time and cost.",
    category: "Engineering",
    author: "Engineering Team",
    date: "2025-11-30",
    readTime: "7 MIN READ",
    content: [
      "Small design decisions made before a part ever reaches a machine shop tend to have an outsized effect on both cost and lead time. A short checklist catches most of them.",
      "Sharp internal corners, tolerance bands tighter than the feature actually requires, and thread callouts on hard-to-reach faces are the three most common cost drivers we see on first-pass prints.",
      "None of these are wrong to design — sometimes the function genuinely requires them. The goal of a DFM pass isn't to eliminate every hard feature, it's to make sure each one is there on purpose.",
    ],
  },
  {
    slug: "material-traceability-explained",
    title: "What 'Full Material Traceability' Actually Means",
    excerpt:
      "The phrase shows up on every aerospace quote, but what does a traceable lot actually document, end to end?",
    category: "Quality",
    author: "Quality Team",
    date: "2025-09-22",
    readTime: "5 MIN READ",
    content: [
      "Full material traceability means every part in a lot can be tracked back to a specific heat or batch of raw material, with certification documenting its chemical and mechanical properties.",
      "In practice, that's a chain of paperwork: mill certification for the raw stock, a lot number assigned at receiving, and that lot number carried through every operation until the part ships with its own certificate of conformance.",
      "For regulated industries, this isn't optional documentation — it's what allows a root-cause investigation to trace a field issue back to a specific batch of material, rather than guessing across an entire production run.",
    ],
  },
  {
    slug: "robotic-cells-high-mix-production",
    title: "Making Robotic Cells Work in High-Mix Production",
    excerpt:
      "Robotic automation has a reputation for only paying off at high volume. Changeover design is what changes that math.",
    category: "Automation",
    author: "Engineering Team",
    date: "2025-07-14",
    readTime: "6 MIN READ",
    content: [
      "The standard objection to robotic automation in a high-mix shop is changeover time — if a cell takes an hour to reconfigure for a new part, the labor savings disappear fast.",
      "The fix isn't avoiding automation on mixed production, it's designing the cell around fast changeover from the start: standardized fixture interfaces, quick-swap end-of-arm tooling, and part programs that load from a library instead of being rebuilt.",
      "Done that way, a cell can pay for itself even at moderate volumes per part number, as long as the total combined volume across the part family justifies the initial buildout.",
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
