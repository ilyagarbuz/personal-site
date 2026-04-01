import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
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
