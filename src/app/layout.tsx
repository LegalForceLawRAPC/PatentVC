import type { Metadata } from "next"
import localFont from "next/font/local"

import "./globals.css"
import { SiteFooter, SiteHeader } from "@/components/site"

const gilroy = localFont({
  src: [
    {
      path: "../../public/patentvc/fonts/gilroy-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/patentvc/fonts/gilroy-semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/patentvc/fonts/gilroy-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.patentvc.com"),
  title: {
    default: "PatentVC",
    template: "%s | PatentVC",
  },
  description: "PatentVC supports venture-backed companies with investment, IP strategy, and startup-focused legal expertise.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "PatentVC",
    title: "PatentVC",
    description: "PatentVC supports venture-backed companies with investment, IP strategy, and startup-focused legal expertise.",
    images: [{ url: "/patentvc/hero-photo.png", width: 814, height: 690, alt: "PatentVC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PatentVC",
    description: "PatentVC supports venture-backed companies with investment, IP strategy, and startup-focused legal expertise.",
    images: ["/patentvc/hero-photo.png"],
  },
  icons: {
    icon: "/patentvc/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${gilroy.variable} h-full scroll-smooth antialiased`}
    >
      <body className="page-flat min-h-full">
        <SiteHeader />
        <div className="page-flat mx-auto max-w-[1400px] px-4 pb-8 pt-[96px] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1184px]">{children}</div>
        </div>
        <SiteFooter />
      </body>
    </html>
  )
}
