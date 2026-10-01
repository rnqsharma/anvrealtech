import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The site is served from the custom domain root (anvrealtech.in).
export default defineConfig({
  site: 'https://anvrealtech.in',
  integrations: [sitemap()],
});
