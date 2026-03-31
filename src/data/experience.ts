export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  duties: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Senior Full Stack Developer",
    company: "Northwind Labs",
    period: "2023 — Present",
    duties: [
      "Led delivery of customer-facing web apps with Astro and Vue, improving TTI by ~30%.",
      "Designed service boundaries and APIs in Node.js; introduced contract tests and CI gates.",
      "Mentored engineers on TypeScript patterns, accessibility reviews, and performance budgets.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Riverstone Digital",
    period: "2020 — 2023",
    duties: [
      "Built Nuxt SSR experiences with headless CMS content and edge caching.",
      "Owned MongoDB data models and migration scripts for billing and usage features.",
      "Partnered with design on a shared token system and responsive component library.",
    ],
  },
];
