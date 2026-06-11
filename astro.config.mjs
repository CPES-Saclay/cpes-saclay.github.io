import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkCallout from "@r4ai/remark-callout";

export default defineConfig({
  site: 'https://cpes-paris-saclay.fr',
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  markdown: {
    remarkPlugins: [remarkCallout],
    shikiConfig: {
      theme: "css-variables"
    }
  },
  integrations: [icon(), mdx(), sitemap({
    filter: (page) => !page.includes('/cpes29'),
  })],
  publicDir: 'static',
  compressHTML: true,
  redirects: {
    '/formation': '/partenaires',
    '/formation/ens-paris-saclay': '/partenaires/ens-paris-saclay',
    '/formation/hec-paris': '/partenaires/hec-paris',
    '/formation/institut-polytechnique-de-paris': '/partenaires/institut-polytechnique-de-paris',
    '/formation/lycee-international-de-palaiseau': '/partenaires/lycee-international-de-palaiseau',
    '/formation/universite-paris-saclay': '/partenaires/universite-paris-saclay',
    '/en/formation': '/en/partenaires',
    '/en/formation/ens-paris-saclay': '/en/partenaires/ens-paris-saclay',
    '/en/formation/hec-paris': '/en/partenaires/hec-paris',
    '/en/formation/institut-polytechnique-de-paris': '/en/partenaires/institut-polytechnique-de-paris',
    '/en/formation/lycee-international-de-palaiseau': '/en/partenaires/lycee-international-de-palaiseau',
    '/en/formation/universite-paris-saclay': '/en/partenaires/universite-paris-saclay',
  }
});