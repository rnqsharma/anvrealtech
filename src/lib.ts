import { getCollection } from "astro:content";

// Single place that loads properties. If listings later move to a CMS,
// only this function needs to change.
export async function getProperties() {
  const all = await getCollection("properties");
  return all.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

export const fmt = (n: number) => n.toLocaleString("en-IN");

// Price per sq yd and total, in rupees. Size must start with the number of sq yd, e.g. "500 sq yd".
export const rupees = (n: number) => "₹" + n.toLocaleString("en-IN");
export function totalPrice(size: string, rate: number) {
  const yards = parseFloat(size);
  if (!yards) return null;
  const total = yards * rate;
  return total >= 1e7 ? `₹${+(total / 1e7).toFixed(2)} crore` : `₹${+(total / 1e5).toFixed(2)} lakh`;
}
