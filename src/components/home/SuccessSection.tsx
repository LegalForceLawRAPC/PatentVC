import Image from "next/image"

import { homepageContent } from "@/_config/home"

export function SuccessSection() {
  return (
    <section className="grid gap-8 py-[80px] lg:grid-cols-[467px_612px] lg:items-center lg:justify-between">
      <div className="max-w-[467px]">
        <h2 className="font-gilroy-bold text-[32px] leading-[1.15] tracking-[-0.01em] text-white sm:text-[40px]">
          {homepageContent.success.title}
        </h2>
        <p className="mt-[18px] text-[16px] leading-10 text-[#d9d9d9]">{homepageContent.success.description}</p>
      </div>

      <div className="overflow-hidden rounded-[18px] bg-white">
        <Image
          src="/patentvc/success-logos.png"
          alt="Portfolio success company logos"
          width={612}
          height={372}
          className="h-auto w-full"
        />
      </div>
    </section>
  )
}
