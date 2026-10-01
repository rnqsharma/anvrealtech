// Everything the business may want to change lives here.
export const site = {
  name: "ANVRealtech",
  url: "https://anvrealtech.in",
  description:
    "ANVRealtech is a property dealer listing plots, flats and farm land. Browse available properties and contact us by phone or WhatsApp.",

  phoneDisplay: "+91 70116 35990",
  phoneE164: "+917011635990", // used for the tel: link
  whatsappNumber: "917011635990", // country code + number, digits only

  address: "Park Town, Aditya World City, C-124 & C-122, Wave City, Ghaziabad, Uttar Pradesh 201001",

  // Office location, taken from the Google Maps embed (map centre).
  officeLat: 28.675861,
  officeLng: 77.417997,

  hours: "Mon–Sun, 10 am – 7 pm",

  hero: {
    title: "Land and homes, checked before we list them.",
    text: "Browse available properties and talk to us directly. We will arrange the site visit.",
    sideLabel: "Site visits arranged",
    topLabel: "Plots · Flats · Farm land",
  },
};

export const telLink = `tel:${site.phoneE164}`;

export function waLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// Opens Google Maps (app on phones) with directions to the office from the user's location.
export const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${site.officeLat},${site.officeLng}`;
