import { defineConfig } from "astro/config";

// https://astro.build/config
// Absolute URLs for Open Graph / canonical links. Override when building:
// PUBLIC_SITE_URL=https://yoursite.com npm run build
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? "https://ilyagarbuz.netlify.app",
  output: "static",
});
