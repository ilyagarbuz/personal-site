export interface ToolkitCategory {
  title: string;
  items: string[];
}

export const toolkit: ToolkitCategory[] = [
  {
    title: "Frontend",
    items: [
      "HTML",
      "CSS",
      "SCSS",
      "JavaScript",
      "TypeScript",
      "Vue",
      "Nuxt",
      "Tailwind",
      "Astro",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "MongoDB"],
  },
  {
    title: "Tools",
    items: ["Docker", "Figma", "Git"],
  },
];
