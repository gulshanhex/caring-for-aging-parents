import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { SITE_URL } from "./src/data/site";

export default defineConfig({
  site: SITE_URL,
  output: "static",
  trailingSlash: "always",
  integrations: [
    sitemap({
      // /guides/how-to-print-large-print-sheets/ points its canonical at /how-to-print/
      filter: (page) => !page.includes("/guides/how-to-print-large-print-sheets/"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
