import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { Footer } from "@/components/home";

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
});

export const metadata: Metadata = {
  title: "PatentVC",
  description: "We offer patent protection for venture backed companies.",
  icons: {
    icon: "/patentvc/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${gilroy.variable} h-full scroll-smooth antialiased`}
    >
      <body className="page-flat min-h-full">
        {children}
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
