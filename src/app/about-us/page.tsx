import type { Metadata } from "next"
import Image from "next/image"
import { MapPin } from "lucide-react"

import { aboutPage } from "@/_config/routes"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about PatentVC, our origins, and our locations in Mountain View and Arizona.",
  alternates: {
    canonical: "/about-us",
  },
}

export default function AboutUsRoute() {
  return (
    <>
      <section className="relative left-1/2 w-screen max-w-[1400px] -translate-x-1/2 overflow-hidden bg-[#212225]">
        <div className="relative h-[258px] overflow-hidden bg-[#212225]">
          <div className="absolute inset-x-[-24px] bottom-[-188px] h-[420px] rounded-[50%] border border-[#2a2b2e] bg-transparent" />
          <div className="absolute inset-x-[-24px] bottom-[-208px] h-[430px] rounded-[50%] border border-[#2b2c30] bg-transparent opacity-70" />
          <Image src="/patentvc/footer-logo-mark.png" alt="" width={118} height={176} className="absolute left-[74px] top-[-6px] opacity-[0.12]" />
          <Image src="/patentvc/footer-logo-mark.png" alt="" width={118} height={176} className="absolute right-[88px] top-[6px] opacity-[0.12]" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center pt-[6px]">
            <h1 className="font-gilroy-bold text-[32px] leading-[38.4px] tracking-[-0.01em] text-white">{aboutPage.title}</h1>
            <div className="mt-[9px] h-[8px] w-[141px] rotate-[1deg] bg-[#f5744c]" />
          </div>
        </div>
      </section>

      <section className="grid gap-10 pb-[56px] pt-0 lg:grid-cols-[707px_315px] lg:items-start lg:justify-between lg:gap-[139px]">
        <div className="space-y-[26px] font-gilroy-semibold text-[20px] leading-[26.6px] text-[#e8e8e8]">
          {aboutPage.paragraphs.map((paragraph, index) => (
            <p key={paragraph}>
              {index === 0 ? (
                <>
                  PatentVC is a spinout of <span className="text-[#ffcba7] underline decoration-solid underline-offset-2">Trademarkia.com</span>, dedicated to co-investing with leading Silicon Valley incubators such as YCombinator and Series A investors.
                </>
              ) : (
                paragraph
              )}
            </p>
          ))}
        </div>

        <Image src="/patentvc/about-mark.png" alt="PatentVC mark card" width={315} height={288} className="mx-auto h-auto w-[315px]" />
      </section>

      <section className="pb-[56px]">
        <div className="rounded-[20px] bg-[#1d1e20] px-[40px] py-[49px] lg:px-[231px] lg:py-[49px]">
          <div className="text-center">
            <h2 className="font-gilroy-bold text-[32px] leading-[38.4px] tracking-[-0.02em] text-white">
              {aboutPage.locationsTitle} <span className="text-[#ffcba7]">{aboutPage.locationsHighlight}</span>
            </h2>
            <p className="mt-[9px] font-gilroy-medium text-[20px] leading-[26.6px] text-[#e8e8e8]">{aboutPage.locationsSubtitle}</p>
          </div>

          <div className="mt-[50px] grid gap-[61px] lg:grid-cols-2">
            {aboutPage.locations.map((location) => (
              <div key={location.title} className="flex items-start gap-4">
                <div className="flex size-[50px] shrink-0 items-center justify-center rounded-full bg-white text-[#f5744c]">
                  <MapPin className="size-5" />
                </div>
                <div className="font-gilroy-bold text-[16px] leading-[25.28px] text-white">
                  <div>{location.title}</div>
                  <div>{location.company}</div>
                  <div>{location.line1}</div>
                  <div>{location.line2}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
