export type ProjectLinkType = "github" | "external" | "private";

export interface Project {
  title: string;
  description: string;
  tags: string;
  icon: "layout" | "server" | "sparkles";
  links: {
    type: ProjectLinkType;
    href?: string;
  };
}

export const projects: Project[] = [
  {
    title: "Ops Console",
    description:
      "Internal dashboard for shipping metrics, alerts, and on-call runbooks with role-based views.",
    tags: "Web App • Astro • 2026",
    icon: "layout",
    links: { type: "github", href: "https://github.com/" },
  },
  {
    title: "Commerce API",
    description:
      "Typed REST layer over inventory and checkout flows with resilient caching and tracing.",
    tags: "API • Nuxt • 2025",
    icon: "server",
    links: { type: "external", href: "https://example.com" },
  },
  {
    title: "Design System Lab",
    description:
      "Component playground and documentation used across product squads; focus on a11y and tokens.",
    tags: "Design • Vue • 2025",
    icon: "sparkles",
    links: { type: "private" },
  },
];
