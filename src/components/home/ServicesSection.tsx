import { Flame, Shield, Sparkles, TrendingUp, type LucideIcon } from "lucide-react"

import { homepageContent, services } from "@/_config/home"

const serviceIcons: Record<(typeof services)[number]["icon"], LucideIcon> = {
  "trending-up": TrendingUp,
  shield: Shield,
  sparkles: Sparkles,
  flame: Flame,
}

export function ServicesSection() {
  return (
    <section className="py-[20px]">
      <div className="text-center">
        <div className="font-gilroy-semibold text-[16px] leading-6 text-white">{homepageContent.services.eyebrow}</div>
        <h2 className="mt-[13px] font-gilroy-bold text-[24px] leading-[1.2] tracking-[-0.01em] text-white sm:text-[32px] lg:text-[40px]">
          {homepageContent.services.title} <span className="text-[#ffcba7]">{homepageContent.services.highlightedTitle}</span>{" "}
          {homepageContent.services.titleSuffix}
        </h2>
      </div>

      <div className="mt-[38px] grid gap-y-[32px] lg:grid-cols-2 lg:gap-x-[41px]">
        {services.map((service) => {
          const Icon = serviceIcons[service.icon]

          return (
            <div key={service.title} className="rounded-[20px] bg-[#1d1e20] px-12 py-10">
              <Icon className="h-[34px] w-[34px] text-[#f5744c]" strokeWidth={1.7} />
              <h3 className="mt-8 font-gilroy-bold text-[24px] leading-[1.2] tracking-[-0.01em] text-white">{service.title}</h3>
              <p className="mt-4 max-w-[475px] font-gilroy-semibold text-[16px] leading-6 text-[#dedede]">{service.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
