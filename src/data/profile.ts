export const profile = {
  name: "Ilya Garbuz",
  role: "Full Stack Developer",
  summary:
    "Crafting scalable web applications with modern tools: resilient APIs, polished interfaces, and deployments you can reason about.",
} as const;

export function profilePageTitle(): string {
  return `${profile.name} — ${profile.role}`;
}
