export type SiteNavItem = {
  label: string;
  href: string;
  match?: string;
};

export const siteNavItems: SiteNavItem[] = [
  {
    label: "For Limited Partners",
    href: "/invest-with-us",
    match: "/invest-with-us",
  },
  { label: "Focus Areas", href: "/focus-areas", match: "/focus-areas" },
  { label: "Why Us?", href: "/#why-us" },
  { label: "Our Team", href: "/team", match: "/team" },
  { label: "About Us", href: "/about-us", match: "/about-us" },
];

export const siteFooter = {
  copyright: "© 2023 reserved by PatentVC",
  tagline: "Turning ideas into assets, together",
  socialTitle: "social Links",
  quickLinksTitle: "Quick Links",
  linkedinHref: "https://www.linkedin.com/company/patentvc/",
  ctaTitle: "Apply to PatentVC",
  ctaDescription:
    "Unlock a $50,000 to $100,000 equity investment for protection and monetization of inventions as patents.",
  ctaLabel: "Apply Now",
  ctaHref: "/apply",
} as const;

export const headerCta = {
  href: "/apply",
  label: "Apply for funding",
} as const;
