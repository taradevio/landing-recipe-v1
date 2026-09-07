// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  ...(process.env.PUBLIC_SITE_URL ? { site: process.env.PUBLIC_SITE_URL } : {}),
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
