import Image from "next/image"
import { MapPin } from "lucide-react"

import { homepageContent } from "@/_config/home"

export function AddressSection() {
  return (
    <section className="py-[40px]">
      <div className="relative overflow-hidden rounded-[20px]">
        <Image
          src="/patentvc/footer-top-bg.png"
          alt="PatentVC Mountain View office"
          width={1190}
          height={210}
          className="h-[210px] w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-x-0 top-[24px] flex flex-col gap-5 px-[20px] lg:flex-row lg:items-start lg:justify-between lg:px-[32px]">
          <div className="flex max-w-[620px] items-center gap-6 rounded-[20px] bg-transparent">
            <Image
              src="/patentvc/office.png"
              alt="Office map preview"
              width={162}
              height={162}
              className="h-[120px] w-[120px] rounded-[16px] object-cover sm:h-[162px] sm:w-[162px]"
            />

            <div className="max-w-[345px]">
              <div className="text-[20px] font-gilroy-medium text-white">{homepageContent.address.title}</div>
              <div className="mt-2 text-[18px] leading-7 text-white">
                {homepageContent.address.line1}
                <br />
                {homepageContent.address.line2}
              </div>
            </div>
          </div>

          <a
            href={homepageContent.address.mapsHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-[46px] items-center justify-center gap-3 self-start rounded-[999px] bg-white px-5 text-[13px] font-gilroy-semibold text-[#212225]"
          >
            <MapPin className="h-4 w-4 text-[#f5744c]" />
            {homepageContent.address.mapsLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
