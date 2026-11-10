import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const guides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    readingTime: z.string(),
    coverImage: z.string(),
    coverWidth: z.number(),
    coverHeight: z.number(),
    coverAlt: z.string(),
    relatedProductSlug: z.string(),
    order: z.number(),
    publishedDate: z.string(),
  }),
});

export const collections = { guides };
