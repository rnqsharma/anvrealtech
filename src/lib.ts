import { getCollection } from "astro:content";

// Single place that loads properties. If listings later move to a CMS,
// only this function needs to change.
export async function getProperties() {
  const all = await getCollection("properties");
  return all.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

export const fmt = (n: number) => n.toLocaleString("en-IN");
