export interface SiteConfig {
  name: string;
  tagline: string;
  url: string;
  contactEmail: string;
  gumroadStoreUrl: string;
  freeSampleUrl: string;
  social: {
    facebookUrl: string;
    pinterestUrl: string;
  };
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

export const SITE_URL = "https://caringforagingparents.page";

export const siteConfig: SiteConfig = {
  name: "Caring for Aging Parents",
  tagline: "Large-print, fill-in-by-hand sheets that keep family caregiving organized",
  url: SITE_URL,
  contactEmail: "hello@caringforagingparents.page",
  gumroadStoreUrl: "https://caringforagingparents.gumroad.com",
  freeSampleUrl: "https://caringforagingparents.gumroad.com/l/free-sample-handover-page",
  social: {
    facebookUrl: "https://www.facebook.com/caringforagingparents",
    pinterestUrl: "https://www.pinterest.com/caringforagingparents",
  },
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
    { label: "Disclaimer", href: "/disclaimer/" },
    { label: "Contact", href: "/contact/" },
    { label: "FAQ", href: "/faq/" },
  ],
};
