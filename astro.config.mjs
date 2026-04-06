import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://easywastedisposal.co.uk',
  trailingSlash: 'never',
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        // Homepage
        if (item.url === 'https://easywastedisposal.co.uk/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        }
        // Service hub and location hub
        else if (item.url.endsWith('/services') || item.url.endsWith('/locations')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        }
        // Individual service pages
        else if (item.url.includes('/services/')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        // Location + service combo pages
        else if (item.url.match(/\/locations\/[^/]+\/[^/]+$/)) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        // Location area pages
        else if (item.url.includes('/locations/')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        // About, contact
        else if (item.url.includes('/about') || item.url.includes('/contact')) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }
        // Legal pages
        else if (item.url.includes('/privacy') || item.url.includes('/terms')) {
          item.priority = 0.3;
          item.changefreq = 'yearly';
        }
        else {
          item.priority = 0.5;
          item.changefreq = 'monthly';
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    cacheDir: process.env.TEMP
      ? `${process.env.TEMP}/vite-ewd`
      : 'node_modules/.vite',
  },
});
