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
      sqft: z.number().optional(),       // e.g. 1800 (optional; leave out to show the rate instead)
      rate: z.number().optional(),       // price per sq yd in rupees, e.g. 14000
      photo: image(),                    // main photo
      video: z.string().optional(),      // e.g. "/videos/my-plot.mp4" (file in public/videos)
      highlights: z.array(z.string()).default([]), // short selling points, shown as chips
      amenities: z.array(z.string()).default([]),  // shown as a checklist grid
      media: z.array(z.object({              // photos and videos shown on the detail page, in order
        photo: image().optional(),
        video: z.string().optional(),    // e.g. "/videos/my-plot.mp4" (file in public/videos)
        poster: image().optional(),      // preview image for a video
      })).default([]),
      gallery: z.array(image()).default([]),
      featured: z.boolean().default(false), // featured photo is used in the home page hero
      sold: z.boolean().default(false),
      order: z.number().default(100),    // lower numbers appear first
    }),
});

export const collections = { properties };
