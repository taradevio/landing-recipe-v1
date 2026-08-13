// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://recipe-app.example',
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
