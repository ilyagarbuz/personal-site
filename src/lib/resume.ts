import type { Project } from "../data/projects";

export function resumeProjectLinks(project: Project) {
  return project.links.filter(
    (l): l is { type: "github" | "external"; href: string } =>
      (l.type === "github" || l.type === "external") && Boolean(l.href)
  );
}

export function contactVisibleUrl(href: string): string {
  if (href.startsWith("mailto:")) {
    return href.slice("mailto:".length);
  }
  return href.replace(/^https?:\/\//i, "").replace(/\/$/, "");
}
