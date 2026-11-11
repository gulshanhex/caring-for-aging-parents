export interface SiteConfig {
  name: string;
  tagline: string;
  url: string;
  contactEmail: string;
  gumroadStoreUrl: string;
  freeSampleUrl: string;
  // Links are shown in the footer and in structured data only when `live` is true.
  social: Array<{ name: string; url: string; live: boolean }>;
  analytics: {
    enableCloudflareAnalytics: boolean;
    cloudflareBeaconToken: string;
    enableMetaPixel: boolean;
    metaPixelId: string;
  };
  disclaimerText: string;
  paymentNotice: string;
  navLinks: Array<{ label: string; href: string }>;
  footerLinks: Array<{ label: string; href: string }>;
}

// Override with PUBLIC_SITE_URL when the custom domain is active in Cloudflare Pages.
export const SITE_URL = import.meta.env.PUBLIC_SITE_URL || "https://caring-for-aging-parents.pages.dev";
// Set PUBLIC_GOOGLE_SITE_VERIFICATION in the build environment after copying the token from Search Console.
export const GOOGLE_SITE_VERIFICATION = import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION ?? "";

export const siteConfig: SiteConfig = {
  name: "Caring for Aging Parents",
  tagline: "Large-print, fill-in-by-hand sheets that keep family caregiving organized",
  url: SITE_URL,
  contactEmail: "hello@caringforagingparents.page",
  gumroadStoreUrl: "https://caringforagingparents.gumroad.com",
  freeSampleUrl: "https://caringforagingparents.gumroad.com/l/free-sample-handover-page",
  // Social profiles supplied for the footer.
  social: [
    { name: "Facebook", url: "https://www.facebook.com/caringforagingparentsofficial", live: true },
    { name: "Pinterest", url: "https://www.pinterest.com/caringforagingparentsofficial/", live: true },
    { name: "X", url: "https://x.com/caringforagingparentsofficial", live: true },
    { name: "Reddit", url: "https://www.reddit.com/user/caringforagingparentsofficial", live: true },
  ],
  analytics: {
    enableCloudflareAnalytics: false,
    cloudflareBeaconToken: "00000000000000000000000000000000",
    enableMetaPixel: false,
    metaPixelId: "000000000000000",
  },
  disclaimerText:
    "These are organizational tools, not medical, legal, or financial advice. Please speak to a qualified professional.",
  paymentNotice: "Payments are handled securely by Gumroad.",
  navLinks: [
    { label: "Shop", href: "/shop/" },
    { label: "Free Sample", href: "/free-sample/" },
    { label: "Guides", href: "/guides/" },
    { label: "How to Print", href: "/how-to-print/" },
    { label: "About", href: "/about/" },
  ],
  footerLinks: [
    { label: "Privacy", href: "/privacy/" },
    { label: "Terms", href: "/terms/" },
    { label: "Disclaimer", href: "/disclaimer/" },
    { label: "Contact", href: "/contact/" },
    { label: "FAQ", href: "/faq/" },
  ],
};
