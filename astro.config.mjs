import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://alextrs.dev',
  integrations: [mdx(), sitemap(), tailwind(), image(
    {
      serviceEntryPoint: '@astrojs/image/sharp',
      cacheDir: "./.cache/image",
      logLevel: 'debug',
    }
  )]
});