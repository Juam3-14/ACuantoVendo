import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
    return rss({
        title: "Juampi's Astro Learning | Blog",
        description: 'My journey learning Astro',
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>spa-ar</language>`,
    });
}

import { defineConfig } from "astro/config";

export default defineConfig({
    site: "https://example.com" //Acá debería ir la url del servicio de hosting que estemos usando
});