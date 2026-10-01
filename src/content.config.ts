import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const properties = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/properties" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),                 // e.g. "Residential plot"
      city: z.string(),                  // used for the location filter
      address: z.string().optional(),    // e.g. "Sector 150"
      size: z.string(),                  // e.g. "200 sq yd"
      sqft: z.number(),                  // e.g. 1800
      photo: image(),                    // main photo
      gallery: z.array(image()).default([]),
      featured: z.boolean().default(false), // featured photo is used in the home page hero
      sold: z.boolean().default(false),
      order: z.number().default(100),    // lower numbers appear first
    }),
});

export const collections = { properties };
