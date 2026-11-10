import type { APIRoute } from "astro";
import { siteConfig } from "../data/site";

export const GET: APIRoute = () => {
  const sitemapUrl = new URL("/sitemap-index.xml", siteConfig.url).toString();
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
