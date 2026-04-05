import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    cacheDir: process.env.TEMP
      ? `${process.env.TEMP}/vite-ewd`
      : 'node_modules/.vite',
  },
});
