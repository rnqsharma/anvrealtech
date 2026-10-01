# ANVRealtech website

Static website built with [Astro](https://astro.build), hosted free on GitHub Pages at https://anvrealtech.in.

## Run it locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build into dist/
```

## Change the phone number, WhatsApp number and wording

Edit `src/config/site.ts`. The phone and WhatsApp numbers there are placeholders (`+91 00000 00000`).
Please also review the homepage wording in the same file before going live.

## Add a property

1. Put a photo in `src/assets/properties/` (ideally under 2 MB, at least 1600 px wide).
2. Copy any file in `src/content/properties/`, rename it (for example `noida-sector-137.md`) and edit it:

```md
---
title: Residential plot
city: Noida
address: Sector 137
size: 200 sq yd
sqft: 1800
photo: ../../assets/properties/noida-sector-137.jpg
gallery: []          # optional extra photos, same path style
featured: false      # true = this photo is used in the homepage banner
sold: false          # true = shows a "Sold" tag
order: 5             # lower numbers appear first
---
Short description shown on the property page.
```

Location filter buttons are created automatically from the `city` values.
To remove a property, delete its `.md` file (and photo).
The sample listings and their placeholder photos should be deleted before launch.

## Publish on GitHub Pages

1. Create a GitHub repository and push this project to the `main` branch.
2. In the repository, go to Settings → Pages and set Source to **GitHub Actions**.
3. Every push to `main` now builds and deploys the site (see `.github/workflows/deploy.yml`).

GitHub Pages on the free plan needs a public repository. Do not put passwords or keys in this project.

### Custom domain (anvrealtech.in)

1. In Settings → Pages, enter `anvrealtech.in` as the custom domain and enable Enforce HTTPS once available.
2. At the domain registrar, add the DNS records GitHub lists in its custom domain guide
   (A records for the apex domain, and a CNAME for `www` pointing to `<your-github-username>.github.io`).
3. `public/CNAME` already contains the domain.

## Project layout

```
src/config/site.ts        phone, WhatsApp, wording
src/content/properties/   one .md file per property
src/assets/properties/    property photos
src/components/           header, footer, contact block, property card
src/pages/                home page, property page, 404
src/lib.ts                loads properties (the only place to change if listings move to a CMS later)
src/styles/global.css     all styling
```
