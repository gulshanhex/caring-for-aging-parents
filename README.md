# Caring for Aging Parents — Static Website

Production-ready, accessibility-first multipage static website for **Caring for Aging Parents** (`https://caringforagingparents.page`), built with **Astro 5**, **Tailwind CSS v4** (`@tailwindcss/vite`), **TypeScript**, **`@astrojs/sitemap`**, and self-hosted **`@fontsource/source-serif-4`** + **`@fontsource/atkinson-hyperlegible`** fonts.

---

## 1. Local Development & Build Commands

### Prerequisites
- **Node.js** `>= 18.20.0` (Node 20 LTS or 22 LTS recommended)
- **npm** `>= 9.0.0`

### Install Dependencies
```bash
npm install
```

### Start Local Dev Server
```bash
npm run dev
```
Opens at `http://localhost:4321`.

### Run Type & Astro Diagnostics
```bash
npm run check
```

### Build Static Production Output (`./dist`)
```bash
npm run build
```

### Regenerate Per-Page Social Preview Images
```bash
npm run generate:og
```
This creates one branded `1200x630` JPEG in `public/og/pages/` for each indexable route. The shared layout selects the matching card from the page's canonical path.

### Preview Production Build Locally
```bash
npm run preview
```

---

## 2. Deployment Options (Cloudflare Pages & Cloudflare Workers)

All Cloudflare configuration files are pre-configured and verified:
- `public/.assetsignore` (copied to `dist/.assetsignore` with exactly two lines: `_worker.js` and `_routes.json`)
- `public/_headers` (copied to `dist/_headers` with strict security headers and cache rules for `/_astro/*` [1 year immutable] and `/images/*` [1 day])
- `wrangler.jsonc` (`name: "caring-for-aging-parents"`, `compatibility_date: "2026-11-10"`, `assets: { directory: "./dist", not_found_handling: "404-page" }`)

### Option A1: Cloudflare Pages Direct ZIP Upload (No CLI Required)
1. Log in to the Cloudflare Dashboard and open **Workers & Pages** -> **Create** -> **Pages** -> **Upload assets**.
2. Name the project `caring-for-aging-parents`.
3. Upload `caring-for-aging-parents-site-dist.zip` directly (all `dist/` contents sit at the zip root).
4. Click **Deploy site** and attach your custom domain (`caringforagingparents.page`).

### Option A2: Cloudflare Pages via Wrangler CLI
```bash
npm run deploy:pages
# Runs: astro build && wrangler pages deploy ./dist --project-name=caring-for-aging-parents
```

### Option B: Cloudflare Workers Static Assets via Wrangler CLI
```bash
npm run deploy:workers
# Runs: astro build && wrangler deploy (uses wrangler.jsonc)
```

---

## 3. REPLACE BEFORE LAUNCH Checklist

All site configuration lives exclusively in **`src/data/site.ts`** and **`src/data/products.ts`**. Nothing is hardcoded in page templates.

- [ ] **Domain (`PUBLIC_SITE_URL`):** Set the Cloudflare Pages build environment variable to the actual live origin (currently `https://caring-for-aging-parents.pages.dev`; change it to `https://caringforagingparents.page` only after that custom domain resolves). This value drives canonical URLs, Open Graph tags, JSON-LD, `robots.txt`, and `sitemap-index.xml`.
- [ ] **Gumroad Store & Free Sample URLs (`src/data/site.ts`):**
  - Replace `gumroadStoreUrl` (`https://caringforagingparents.gumroad.com`) with your live Gumroad profile URL.
  - Replace `freeSampleUrl` (`https://caringforagingparents.gumroad.com/l/free-sample-handover-page`) with your live `$0` Gumroad product URL.
- [ ] **Product Gumroad URLs, Prices & Status (`src/data/products.ts`):**
  - Update `gumroadUrl`, `price` (currently `"$29"`), `numericPrice` (`"29.00"`), and `status` (`"live"` or `"draft"`) for:
    1. `caregiver-handover-sheet` (*Caregiver Handover Sheet*)
    2. `who-to-call-sheet` (*Who-to-Call Sheet*)
    3. `where-everything-is-organizer` (*Where-Everything-Is Organizer*)
- [ ] **Real Product Preview Images (`public/images/products/`):**
  - Replace the placeholder top-down sheet illustrations (`handover-sheet.webp`, `who-to-call.webp`, `where-everything-is.webp`, each `1200x1200`, `<= 200 KB`) with real preview images of your finished PDF sheets once ready.
- [ ] **Contact Email (`src/data/site.ts` -> `contactEmail`):**
  - Replace `hello@caringforagingparents.page` with your active monitored inbox.
- [ ] **Social Profile Links (`src/data/site.ts` -> `social`):**
  - Replace `facebookUrl` and `pinterestUrl` placeholders with your live Facebook Page and Pinterest profile URLs.
- [ ] **Google Search Console verification:** Add the token from Search Console as the Cloudflare Pages build environment variable `PUBLIC_GOOGLE_SITE_VERIFICATION`. The layout emits the `google-site-verification` meta tag only when this value is present.
- [ ] **Privacy Policy & Disclaimer Review (`src/pages/privacy.astro`, `src/pages/disclaimer.astro`):**
  - Review both pages to ensure they match your business entity details and jurisdiction before going live.
- [ ] **Optional Analytics (`src/data/site.ts` -> `analytics`):**
  - Both `enableCloudflareAnalytics` and `enableMetaPixel` are `false` by default (zero cookies, zero tracking). If you ever enable them in the future, update `src/pages/privacy.astro` first to disclose analytics usage accurately.

---

## 4. Assumptions Made During Engineering & Design

1. **Centralized Configuration (`src/data/site.ts` & `src/data/products.ts`):** Assumed all 3 starter products should default to `status: "live"` so that `Product` JSON-LD is generated and testable in the production build, while supporting `status: "draft"` to suppress `Product` JSON-LD automatically if a product is marked draft.
2. **Self-Hosted Typography (`@fontsource`):** Configured `Source Serif 4` (weights `600` and `700`) for headings and `Atkinson Hyperlegible` (weights `400` and `700`) for body copy and UI controls, self-hosted from `/_astro/*.woff2` with zero external requests to Google Fonts or third-party CDNs.
3. **Flat Vector Illustrations & WebP Rendering:** Because the build container operates in an isolated offline sandbox without external AI image generation APIs, all 12 site illustrations (`hero/hero-home.webp`, `steps/*.webp`, `products/*.webp`, `sample/free-sample.webp`, `about/about-desk.webp`, `guides/*.webp`) were authored as bespoke flat-vector SVG illustrations in code following the exact 6-color palette lock (`#FAF8EC`, `#015A67`, `#81977A`, `#B96038`, `#52332A`, `#E89B69`, soft shapes, no outlines, zero text) and rendered via headless Chromium + Pillow to exact-dimension `.webp` files (`7 KB–23 KB` each, well under the `200 KB` limit). Both the `.webp` files and the editable `.svg` source files are included in `/public/images/`.
4. **Programmatic OG & Facebook Cover Images:** Rendered `/public/og/og-1200x630` (`.jpg` + `.webp`) and `/public/og/facebook-cover-1640x624` (`.jpg` + `.webp`) programmatically in code using the brand color logo, bold serif teal title, legible sans tagline, and edge-bleeding sage/terracotta shapes, keeping all logo and text on the Facebook cover strictly within `x: 290..1350` (inside the required `x: 266..1374` mobile crop safe zone). Also placed a copy of `og-1200x630.jpg` and `.webp` at the `/public/` root for compatibility with the asset pack's `README.txt`.
5. **Silent Marketing Videos & Prompts:** Created both the 3 silent vertical `1080x1920` MP4 clips (`7 seconds`, `24 fps`, flat vector style, no text) in `/marketing-assets/videos/` AND the detailed shot-by-shot prompts in `/marketing-assets/video-prompts.md` (outside `/public/` so they are not deployed to the live website).
6. **Strict Content & Accessibility Guardrails:** Enforced `color-scheme: light`, `19px` mobile / `20px` desktop base body text (never below `18px`), `1.65` line-height, `65ch` maximum line width, `>= 52px` button heights, `>= 48px` tap targets, `3px` `#015A67` focus rings, underlined links, native `<details>` elements for the mobile menu and FAQ (zero client JS), and a complete `@media print` stylesheet on every page.
