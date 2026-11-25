import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Regla SEO 1: Definir site y trailingSlash para evitar contenido duplicado
  site: process.env.SITE_URL || 'https://fundelibertad.org',
  trailingSlash: 'always',
  // En Vercel corre en la raíz '/', en GitHub Pages usa '/fundelibertad'
  base: process.env.VERCEL ? '/' : (process.env.ASTRO_BASE || '/fundelibertad'),
  vite: {
    plugins: [tailwindcss()]
  }
});
