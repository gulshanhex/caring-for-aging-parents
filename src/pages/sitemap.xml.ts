import type { APIRoute } from "astro";
import { siteConfig } from "../data/site";

export const GET: APIRoute = () => {
  const generatedSitemap = new URL("/sitemap-0.xml", siteConfig.url).toString();
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap>\n    <loc>${generatedSitemap}</loc>\n  </sitemap>\n</sitemapindex>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
