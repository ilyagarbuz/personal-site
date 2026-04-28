import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      ogTitle: z.string().optional(),
      description: z.string(),
      pubDate: z.coerce.date(),
      readingTime: z.number().int().positive(),
      coverImage: image().optional(),
    }),
});

export const collections = { blog };
