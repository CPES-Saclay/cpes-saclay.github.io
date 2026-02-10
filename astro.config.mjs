import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import remarkCallout from "@r4ai/remark-callout";

export default defineConfig({
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
  integrations: [icon(), mdx()],
  publicDir: 'static',
  compressHTML: true
});