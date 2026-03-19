import Link from "next/link"
import { Sparkles } from "lucide-react"

import { focusAreas, homepageContent } from "@/_config/home"
import { cn } from "@/lib/utils"

export function FocusAreasSection() {
  return (
    <section id="focus-areas" className="py-[80px]">
      <div className="mx-auto max-w-[682px] text-center">
        <h2 className="font-gilroy-bold text-[36px] leading-[1.1] tracking-[-0.01em] text-white">{homepageContent.focusAreas.title}</h2>
        <p className="mt-4 font-gilroy-semibold text-[16px] leading-6 text-[#dedede]">{homepageContent.focusAreas.description}</p>
      </div>

      <div className="mt-12 grid gap-[27px] lg:grid-cols-2">
        {focusAreas.map((area) => (
          <div key={area.title} className="rounded-[12px] bg-[#1e1f21] px-[10px] py-[10px]">
            <div className="flex min-h-[76px] items-center gap-[14px] rounded-[8px] bg-[#26272b] px-[14px] py-[12px]">
              <div className={cn("flex h-[54px] w-[54px] items-center justify-center rounded-[8px]", area.bg)}>
                <Sparkles className={cn("h-6 w-6", area.accent)} strokeWidth={1.8} />
              </div>
              <div>
                <h3 className="font-gilroy-semibold text-[18px] text-white">{area.title}</h3>
                <p className="mt-1 font-gilroy-medium text-[13px] leading-6 text-[#d9d9d9]">{area.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="#focus-areas"
          className="inline-flex h-[52px] items-center justify-center rounded-[10px] bg-[#f5744c] px-[32px] text-[14px] font-gilroy-semibold text-white transition hover:bg-[#f8845f]"
        >
          {homepageContent.focusAreas.ctaLabel}
        </Link>
      </div>
    </section>
  )
}
