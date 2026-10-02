// Everything the business may want to change lives here.
export const site = {
  name: "ANVRealtech",
  url: "https://anvrealtech.in",
  description:
    "ANVRealtech is a property dealer listing plots, flats and farm land. Browse available properties and contact us by phone or WhatsApp.",

  phoneDisplay: "+91 70116 35990",
  phoneE164: "+917011635990", // used for the tel: link
  whatsappNumber: "917011635990", // country code + number, digits only

  address: "Park Town, Aditya World City, C-124 & C-122, Ghaziabad, Uttar Pradesh 201001",

  // Office location, exact pin position from Google Maps.
  officeLat: 28.656777049163743,
  officeLng: 77.48079811933295,

  hours: "Mon–Sun, 10 am – 7 pm",

  hero: {
    title: "Verified Homes & Land. Zero Surprises.",
    text: "Fully verified plots, flats, and farmland across NCR. Browse online or schedule a direct site visit today.",
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
