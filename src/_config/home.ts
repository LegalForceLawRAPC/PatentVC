export type NavItem = {
  label: string;
  href: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type Service = {
  icon: "trending-up" | "shield" | "sparkles" | "flame";
  title: string;
  description: string;
};

export type Reason = {
  title: string;
  description: string;
};

export type FocusArea = {
  title: string;
  description: string;
  bg: string;
  accent: string;
};

export type CompanyLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const navItems: NavItem[] = [
  { label: "For Limited Partners", href: "#" },
  { label: "Focus Areas", href: "#focus-areas" },
  { label: "Why Us?", href: "#why-us" },
  { label: "Our Team", href: "#our-team" },
  { label: "About Us", href: "#footer" },
];

export const metrics: Metric[] = [
  { value: "1000+", label: "Granted Patents" },
  { value: "2000+", label: "Filed and Pending Patents" },
  { value: "300+", label: "International Patents" },
  { value: "500+", label: "Design Patents" },
];

export const services: Service[] = [
  {
    icon: "trending-up",
    title: "Venture Investment",
    description:
      "We provide follow-on investment to lead investors in $50K to $100K increments to build global patent and trademark assets and help founders minimize external legal spend.",
  },
  {
    icon: "shield",
    title: "Holistic IP Protection",
    description:
      "We actively collaborate with our portfolio companies to develop and implement IP strategies that fortify their competitive advantage in AI and autonomous technologies.",
  },
  {
    icon: "sparkles",
    title: "IP Monetization",
    description:
      "We guide our portfolio companies in the strategic monetization of their proprietary rights, transforming intellectual property into a tangible source of revenue",
  },
  {
    icon: "flame",
    title: "Downside Risk Protection",
    description:
      "We assist founders, venture capitalists, banks to securitize down rounds through IP strategy and protection, and confidential liquidation of assets for the benefit of creditors.",
  },
];

export const reasons: Reason[] = [
  {
    title: "Proven Success",
    description:
      "Our General Partners, former venture-backed founders, have built and exited 7 successful companies patent portfolios worth over $100 million.",
  },
  {
    title: "Helps you patent your idea",
    description:
      "We help our portfolio companies cost-efficient intellectual property solutions, reducing expenses for startups. Patent seekers 2.1x larger exit values compared to non-patent companies",
  },
  {
    title: "Global Resources",
    description:
      "Access to our global team, including legal experts and engineers, provides startups with diverse resources.",
  },
  {
    title: "Individualized attention",
    description:
      "We offer personalized consultations to assess your intellectual property portfolio and goals.",
  },
];

export const focusAreas: FocusArea[] = [
  {
    title: "Artificial Intelligence",
    description: "Guiding companies shaping the future of AI",
    bg: "bg-[#f4ebff]",
    accent: "text-[#8b5cf6]",
  },
  {
    title: "Autonomous Systems",
    description: "Companies specializing in autonomous technologies",
    bg: "bg-[#ffecf7]",
    accent: "text-[#e950ab]",
  },
  {
    title: "Semiconductors",
    description: "We help emerging semiconductor firms worldwide",
    bg: "bg-[#ffecf7]",
    accent: "text-[#e950ab]",
  },
  {
    title: "Cyber Security",
    description: "We support cyber security companies",
    bg: "bg-[#ffebed]",
    accent: "text-[#db4554]",
  },
];

export const firstCompanyLogos: CompanyLogo[] = [
  { src: "/patentvc/apple.png", alt: "Apple", width: 29, height: 36 },
  { src: "/patentvc/ge.png", alt: "General Electric", width: 40, height: 40 },
  { src: "/patentvc/ebay.png", alt: "eBay", width: 76, height: 31 },
  { src: "/patentvc/netapp.png", alt: "NetApp", width: 124, height: 34 },
  {
    src: "/patentvc/texas-instruments.png",
    alt: "Texas Instruments",
    width: 124,
    height: 62,
  },
];

export const secondCompanyLogos: CompanyLogo[] = [
  {
    src: "/patentvc/trademarkia.png",
    alt: "Trademarkia",
    width: 110,
    height: 16,
  },
  {
    src: "/patentvc/slw.png",
    alt: "Schwegman Lundberg",
    width: 113,
    height: 22,
  },
  {
    src: "/patentvc/bstz.png",
    alt: "Blakely Sokoloff Taylor and Zafman",
    width: 58,
    height: 53,
  },
];

export const homepageContent = {
  hero: {
    title: "Turning ideas into assets, together!",
    description:
      "We co-invest with incubator (Y Combinator, 500 Startups) in a seed or Series A round and help you build and manage IP assets",
    ctaLabel: "Apply for funding",
    ctaHref: "/apply",
    imageLabel: "TechCrunch Disrupt, September 2023",
  },
  success: {
    title: "Success Stories",
    description:
      "Built portfolios for startups with exit value in the billions sold, licensed or acquired by the world's leading companies.",
  },
  services: {
    eyebrow: "What we do?",
    title: "Strategic",
    highlightedTitle: "Co-Investment",
    titleSuffix: "with Incubators",
  },
  whyUs: {
    title: "Why choose PatentVC?",
  },
  contact: {
    title: "Have a question to us?",
    subtitle: "Ask us today!",
    email: "pitch@patentvc.com",
    disclaimer:
      "Please avoid telling us anything confidential until we have had a chance to do a conflict check. Tell us general information only.",
  },
  focusAreas: {
    title: "We invest in modern technologies",
    description:
      "We have deep expertise in Electrical, Mechanical, and Software patents including those around artificial intelligence and complex technologies.",
    ctaLabel: "Explore Focus Areas",
  },
  founder: {
    foundedBy: "Founded by",
    name: "Raj Abhyanker",
    role: "Founder and Patent Attorney",
    linkedinHref: "https://www.linkedin.com/in/thepatentattorney/",
    linkedinLabel: "View on LinkedIn",
    intro:
      "Licensed to practice patent law before the USPTO, and has been a member of the California bar for over 17 years.",
    experience:
      "Represented number of leading technology companies with intellectual property matters including Apple, General Electric, eBay, Intel, Texas Instruments, NetApp, Adobe and others.",
    backgroundLead:
      "Co-Founder of Trademarkia (America's #1 Trademark filing platform) and",
    backgroundTail:
      "Former Patent attorney at large patent law firms in the United States, including Blakely Sokoloff Taylor & Zafman and at Schwegman Lundberg.",
  },
  address: {
    title: "Visit Us at",
    line1: "4218 E Wilshire",
    line2: "Dr Phoenix AZ 85008",
    mapsHref: "https://maps.app.goo.gl/X3VRQYyQfWQYfrr76",
    mapsLabel: "View on Google Maps",
  },
  footer: {
    copyright: "© 2023 reserved by PatentVC",
    tagline: "Turning ideas into assets, together",
    socialTitle: "social Links",
    quickLinksTitle: "Quick Links",
    privacyLabel: "Privacy Policy",
    termsLabel: "Terms of Use",
    linkedinHref: "https://www.linkedin.com/company/patentvc/",
    ctaTitle: "Apply to PatentVC",
    ctaDescription:
      "Unlock a $50,000 to $100,000 equity investment for protection and monetization of inventions as patents.",
    ctaLabel: "Apply Now",
    ctaHref: "/apply",
  },
} as const;
