// Everything the business may want to change lives here.
export const site = {
  name: "ANVRealtech",
  url: "https://anvrealtech.in",
  description:
    "ANVRealtech is a property dealer listing plots, flats and farm land. Browse available properties and contact us by phone or WhatsApp.",

  // TODO: replace with the real number.
  phoneDisplay: "+91 00000 00000",
  phoneE164: "+910000000000", // used for the tel: link
  whatsappNumber: "910000000000", // country code + number, digits only

  hours: "Mon–Sat, 10 am – 7 pm",

  hero: {
    title: "Land and homes, checked before we list them.",
    text: "Browse available properties and talk to us directly. We will arrange the site visit.",
    sideLabel: "Site visits arranged",
    topLabel: "Plots, flats and farm land",
  },
};

export const telLink = `tel:${site.phoneE164}`;

export function waLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
