import Link from "next/link"
import { Linkedin } from "lucide-react"

import { siteFooter, siteNavItems } from "@/_config/site"

import { SiteLogo } from "./Logo"

export function SiteFooter() {
  return (
    <footer id="footer" className="page-flat mt-[40px] w-full overflow-x-hidden">
      <div className="bg-[#1e1f21] px-[60px] py-[40px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-[144px]">
            <div>
              <SiteLogo
                iconSize={34}
                nameClassName="block font-gilroy-semibold text-[20px] text-white"
                subtitleClassName="mt-[2px] block font-gilroy-medium text-[10px] text-[#d9d9d9]"
              />
              <p className="mt-[25px] max-w-[334px] font-gilroy-semibold text-[20px] leading-[25px] text-white">{siteFooter.tagline}</p>

              <div className="mt-[41px] text-[16px] text-white">{siteFooter.socialTitle}</div>
              <a
                href={siteFooter.linkedinHref}
                target="_blank"
                rel="noreferrer"
                className="mt-[9px] inline-flex size-10 items-center justify-center rounded-[6px] border border-[#38393d] text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>

            <div className="flex flex-col gap-[14px]">
              <div className="font-gilroy-medium text-[14px] leading-7 text-[#808080]">{siteFooter.quickLinksTitle}</div>
              {siteNavItems.map((item) => (
                <Link key={item.label} href={item.href} className="font-gilroy-semibold text-[15px] leading-7 text-white transition hover:text-[#ffcba7]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div
            className="w-full max-w-[479px] rounded-[20px] bg-[#212225] px-[42px] py-[42px]"
            style={{ backgroundImage: "url('/patentvc/footer-cta-graphic.png')", backgroundPosition: "center", backgroundSize: "cover" }}
          >
            <div className="text-[24px] font-gilroy-bold tracking-[-0.01em] text-white">{siteFooter.ctaTitle}</div>
            <p className="mt-[14px] max-w-[422px] text-[16px] leading-[21.28px] text-[#e8e8e8]">{siteFooter.ctaDescription}</p>
            <Link
              href={siteFooter.ctaHref}
              className="mt-8 inline-flex h-[60px] w-[209px] items-center justify-center rounded-[10px] bg-[#ffcba7] font-gilroy-bold text-[18px] text-[#151619] transition hover:bg-[#ffd5b5]"
            >
              {siteFooter.ctaLabel}
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#111113] px-[60px] py-[24px]">
        <div className="font-gilroy-semibold text-[15px] leading-7 text-[#d1d1d1]">{siteFooter.copyright}</div>
      </div>
    </footer>
  )
}
