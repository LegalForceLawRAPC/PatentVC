import Image from "next/image"
import Link from "next/link"

import { homepageContent } from "@/_config/home"

export function HeroSection() {
  return (
    <section
      id="top"
      className="grid gap-10 pb-16 pt-8 lg:grid-cols-[616px_442px] lg:items-center lg:justify-between lg:gap-[126px] lg:pb-20 lg:pt-[54px]"
    >
      <div className="max-w-[616px]">
        <h1 className="font-gilroy-bold text-[44px] leading-[1.02] tracking-[-0.04em] text-white sm:text-[56px] lg:text-[60px]">
          Turning ideas into
          <br />
          assets, together!
        </h1>

        <p className="mt-4 max-w-[616px] text-[15px] leading-7 text-[#d9d9d9]">{homepageContent.hero.description}</p>

        <Link
          href={homepageContent.hero.ctaHref}
          className="mt-[30px] inline-flex h-[59px] items-center justify-center rounded-[10px] bg-[#f5744c] px-[60px] text-[15px] font-gilroy-semibold text-white transition hover:bg-[#f8845f]"
        >
          {homepageContent.hero.ctaLabel}
        </Link>
      </div>

      <div className="relative mx-auto h-[439px] w-full max-w-[442px]">
        <Image src="/patentvc/hero-frame.png" alt="Hero frame" fill className="rounded-[20px] object-cover" priority />
        <div className="absolute left-[18px] top-[19px] h-[345px] w-[407px] overflow-hidden rounded-[14px]">
          <Image src="/patentvc/hero-photo.png" alt="TechCrunch Disrupt event collage" fill className="object-cover" priority />
        </div>

        <div className="absolute bottom-[18px] left-[22px] flex w-[398px] items-center justify-between">
          <span className="text-[15px] font-gilroy-medium text-[#d9d9d9]">{homepageContent.hero.imageLabel}</span>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#4a4b4f] bg-[#212225] text-white">
            <span className="text-lg">↗</span>
          </div>
        </div>
      </div>
    </section>
  )
}
