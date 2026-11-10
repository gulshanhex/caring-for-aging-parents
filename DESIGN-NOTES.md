# Design Notes (`DESIGN-NOTES.md`)

This document maps the exact design tokens, layout patterns, component structures, and editorial conventions adapted from the three reference design systems (`DESIGN(1).md` — Etsy, `DESIGN(2).md` — Medium, and `DESIGN(3).md` — Anthropic), and explains how the project's **Accessibility & Brand Rules** take precedence wherever conflicts occur.

---

## 1. Tokens & Patterns Taken from `DESIGN(1).md` (Etsy)
**Applied to:** Home (`/`), Shop (`/shop/`), Product detail (`/shop/[slug]/`), and Free Sample (`/free-sample/`).

- **Full-Bleed Color Zoning for Functional Separation:**
  - *From Etsy:* Alternating between a crisp white (`#FFFFFF`) canvas for commerce/product scanning and a warm cream surface (`#FAF8EC`, adapted from Etsy's `#FFFBE6`) for storytelling, the "Why large print on paper" narrative band, and the free-sample callout section.
  - *Precedence adjustment:* Instead of Etsy's dark blue footer (`#2F3C7E`) or dark teal banner (`#1A4D4D`), we maintain light-mode surfaces (`#FAF8EC` cream and `#FFFFFF` white) with `#111111` body text and `#015A67` teal headings/accents to honor the strict light-mode and contrast rules.
- **Asymmetric Two-Column Hero Banner:**
  - *From Etsy:* The homepage hero pairs a left-aligned editorial statement + action buttons (roughly 45–50% width on desktop, stacking text-first on mobile) with a warm, rounded `0.75rem` (`12px`) illustration card on the right.
- **Product & Interest Cards (`0.75rem` / `12px` Corner Radius, Zero Drop Shadows):**
  - *From Etsy:* Product cards and step cards use flat surfaces with subtle `1px` borders (`#D8D5C5`) rather than drop shadows or elevation meshes. Product images sit inside `0.75rem` rounded frames with generous `1.5rem` grid gutters and clear vertical text stacks below.
- **Pill-Shaped Interactive Controls (`1.5rem` to `9999px` Radius):**
  - *From Etsy:* Primary and secondary action buttons use generous rounded pill/semi-pill geometry (`0.75rem`–`9999px`), adapted to a minimum height of `52px` (`min-h-[52px]`) and large horizontal padding (`px-7 py-3.5`) for effortless tapping on mobile phones at night.
- **Singular High-Contrast Call-to-Action Accent:**
  - *From Etsy:* Reserving a warm terracotta/orange-family fill exclusively for primary purchase/conversion actions so the "Buy" and "Get the free sample" buttons stand out unmistakably.
  - *Precedence adjustment:* Etsy's `#F1641E` and the illustration palette's `#B96038` are replaced on buttons by verified high-contrast CTA terracotta `#9E4A25` (hover `#8F421F`) with `#FFFFFF` text, and primary brand teal `#015A67` (hover `#014651`) with `#FFFFFF` text. `#B96038` is never used for text or buttons.

---

## 2. Tokens & Patterns Taken from `DESIGN(2).md` (Medium)
**Applied to:** Guides index (`/guides/`), Guide articles (`/guides/[slug]/`), How to Print (`/how-to-print/`), FAQ (`/faq/`), About (`/about/`), Contact (`/contact/`), Privacy (`/privacy/`), and Disclaimer (`/disclaimer/`).

- **Editorial Serif Display + Humanist Sans Body Pairing:**
  - *From Medium:* Pairing an authoritative editorial serif for headlines (`Source Serif 4`, weights `600` and `700`, replacing `GT Super`) with a clean, open-counter sans-serif for sustained reading and functional UI (`Atkinson Hyperlegible`, weights `400` and `700`, replacing `Sohne`).
  - *Precedence adjustment:* Medium's `1rem` (`16px`) body size and `1.5` line-height are overridden by our strict accessibility floor: body copy is `19px` on mobile and `20px` on desktop (never below `18px`), with `1.65` line-height and a `65ch` maximum reading measure.
- **Single-Column Long-Form Reading Architecture:**
  - *From Medium:* Long-form pages (Guides, How to Print, About, Privacy, Disclaimer, FAQ) center a focused single-column reading container (`max-w-[65ch]`) with generous vertical rhythm (`3rem` to `5rem` between major sections, `1.5rem` between related blocks) so written instructions dominate without visual competition.
- **Single-Pixel Horizontal Rules & Flat Card Borders:**
  - *From Medium:* Sections and FAQ `<details>` items are separated by crisp `1px` rules and subtle background shifts (`#FFFFFF` cards sitting cleanly on `#FAF8EC` cream bands) with zero gradients and zero box-shadows.
- **Topic/Metadata Pills & Disclosure Patterns:**
  - *From Medium:* Reading-time badges and related-product callouts use calm, bordered pill/card containers with `#444444` secondary metadata text (overriding Medium's `#6B6B6B` to guarantee WCAG AA+ contrast).

---

## 3. Tokens & Patterns Taken from `DESIGN(3).md` (Anthropic)
**Applied to:** Site-wide voice, spacing rhythm, calm pacing, article header structure, and anti-patterns.

- **Unhurried, Paper-Like Editorial Pacing:**
  - *From Anthropic:* Treating the viewport as a calm, warm paper field (`#FAF8EC` and `#FFFFFF`) where generous outer margins and deliberate vertical breathing room (`48px` section separation, `64px`–`96px` major vertical section padding on desktop, `32px` article block gaps) prevent cognitive overload for tired adult children reading late at night.
- **Structured Article Header Anatomy:**
  - *From Anthropic:* Guide articles and instructional pages open with a clear breadcrumb/category label, a decisive `h1` headline (`40px`–`48px`), a `1px` divider rule, reading-time metadata, a plain-language summary lead, a calm flat diagrammatic illustration (`8px`–`12px` rounded corners), and a narrow `65ch` reading column.
- **Underlined Inline Links & Minimal Component Chrome:**
  - *From Anthropic:* All inline and navigational text links use explicit underlines (`underline underline-offset-4 decoration-2`) and thin `1px` dividers rather than heavy SaaS widget chrome.
- **Adopted Anti-Patterns:**
  - *From Anthropic:* Strictly avoiding saturated gradients/meshes, dense multi-widget SaaS panels, floating chat bubbles, sticky popups, shadows as elevation, or decorative clutter. Illustrations explain the physical workflow (printing, filling in by hand, sharing a binder) in a calm, diagrammatic flat style.

---

## 4. Accessibility & Brand Rule Overrides Summary (Precedence Table)

| Design Attribute | Reference System Value | Enforced Project Rule (Override) |
| :--- | :--- | :--- |
| **Color Scheme** | Light default | Strictly `color-scheme: light` only; no dark mode, no gradients or meshes |
| **Body Font Size** | 16px (Etsy / Medium) / 17px (Anthropic) | **19px–20px** (`1.1875rem`–`1.25rem`), strictly **never below 18px** anywhere on the site |
| **Line Height & Measure** | 1.5–1.6 | **1.65** line-height, **max 65ch** reading width, **no italic paragraphs**, **no light/thin weights** (300 forbidden; headings 600–700, body 400/700) |
| **Heading Scale** | Up to 64px–120px (Medium / Anthropic) | **h1: 40–48px**, **h2: 30–34px**, **h3: 24px** |
| **Primary Text & Surfaces** | `#222222` / `#000000` on `#FFFBE6` / `#F7F4ED` | **`#111111`** text on **`#FFFFFF`** white and **`#FAF8EC`** cream bands; secondary text **`#444444`** minimum |
| **Brand & CTA Colors** | Etsy `#F1641E`, Medium `#1A8917` | Headings/links/primary buttons: **Teal `#015A67`** (hover **`#014651`**). Primary CTA buttons: **Terracotta `#9E4A25`** (hover **`#8F421F`**) with `#FFFFFF` text. **`#B96038` is never used for text or buttons.** Sage **`#81977A`** is decorative only. |
| **Interactive Targets** | 36px–44px buttons | Buttons **>= 52px tall**, all tap targets **>= 48px**, **3px visible focus ring** (`#015A67`), skip-to-content link, zero client JS by default (`<details>` for mobile menu & FAQ). |
