export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  duties: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "ARLIGHT",
    period: "Sep 2023 — Present",
    duties: [
      "Full-stack ownership of flagship B2B e-commerce properties: 10k+ SKU catalogs with live stock and pricing sync, plus account workflows for commercial proposals, exports (PDF/Excel), and price-list management.",
      "Built and maintained advanced LED product configurators and calculators—compatibility and kitting logic for profiles, strips, power supplies, and accessories to cut ordering errors and speed up BOM-style assembly.",
      "Supported operations for a network of ~50 dealer e-commerce sites: coordinated releases, integrations, and ongoing technical upkeep alongside the partner wholesale program.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Uonmap",
    period: "Apr 2022 — Sep 2023",
    duties: [
      "Shipped UI for a modular K-12 SaaS product with 16 configurable modules, bringing students, parents, teachers, and school staff into shared, role-aware workflows.",
      "Built frontend experiences that integrate AI- and IoT-driven signals through unified UX patterns, supporting safer campuses, wellbeing visibility, and clearer day-to-day operations.",
      "Iterated with product and design on features aimed at personalized learning, reducing administrative load on teachers, and easing staffing pressure through smarter tooling.",
    ],
  },
];
