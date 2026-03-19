import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Bolt, Bot, BrainCircuit, CarFront, Cpu, HeartPulse, Shield, Wifi } from "lucide-react"

import { focusAreasPage } from "@/_config/routes"

export const metadata: Metadata = {
  title: "Focus Areas",
  description: "Explore the technologies PatentVC invests in, from AI and autonomous systems to cybersecurity and robotics.",
  alternates: {
    canonical: "/focus-areas",
  },
}

const focusIcons = {
  brain: BrainCircuit,
  car: CarFront,
  heart: HeartPulse,
  cpu: Cpu,
  shield: Shield,
  bot: Bot,
  wifi: Wifi,
  bolt: Bolt,
} as const

export default function FocusAreasRoute() {
  return (
    <>
      <section className="grid gap-10 pb-[46px] pt-[40px] lg:grid-cols-[781px_304px] lg:items-center lg:justify-between lg:gap-[57px] lg:pt-[40px]">
        <div className="max-w-[781px]">
          <h1 className="font-gilroy-bold text-[48px] leading-[57.6px] tracking-[-0.03em] text-white">
            {focusAreasPage.titleStart}
            <br />
            <span className="text-[#ffcba7]">{focusAreasPage.titleHighlight}</span>
          </h1>
          <p className="mt-[15px] max-w-[781px] font-gilroy-semibold text-[20px] leading-[26.6px] text-[#e8e8e8]">{focusAreasPage.description}</p>
        </div>

        <div className="relative mx-auto h-[262px] w-full max-w-[304px]">
          <DecorativeCircle className="left-0 top-[38px] size-[122px] bg-[#1f3940]" icon={<Bot className="size-12 text-[#25c0dd]" />} />
          <DecorativeCircle className="right-0 top-0 size-[165px] bg-[#49345d]" icon={<BrainCircuit className="size-16 text-[#9b5cf7]" />} />
          <DecorativeCircle className="left-[83px] top-[158px] size-[103px] bg-[#4c2d36]" icon={<Cpu className="size-10 text-[#ef4444]" />} />
          <DecorativeCircle className="right-[27px] top-[183px] size-[68px] bg-[#4e2d47]" icon={<Bolt className="size-7 text-[#ec4899]" />} />
        </div>
      </section>

      <div className="h-[9px] w-full bg-[#2b2c30]" />

      <section className="pb-16 pt-[60px]">
        <h2 className="text-center font-gilroy-bold text-[32px] leading-[38.4px] tracking-[-0.02em] text-white">{focusAreasPage.sectionTitle}</h2>

        <div className="mt-[33px] grid gap-y-[48px] lg:grid-cols-2 lg:gap-x-[90px]">
          {focusAreasPage.areas.map((area) => {
            const Icon = focusIcons[area.icon]

            return (
              <div key={area.title} className="rounded-[10px] bg-[#1d1e20] px-[27px] py-[24px] lg:min-h-[247px]">
                <div className="flex h-[77px] w-[81px] items-center justify-center rounded-[8px]" style={{ backgroundColor: area.soft }}>
                  <Icon className="size-8" style={{ color: area.accent }} />
                </div>
                <h3 className="mt-[20px] font-gilroy-bold text-[20px] leading-6 tracking-[-0.01em] text-white">{area.title}</h3>
                <p className="mt-[5px] font-gilroy-medium text-[16px] leading-[21.28px] tracking-[-0.01em] text-[#dedede]">{area.description}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

function DecorativeCircle({ className, icon }: { className: string; icon: ReactNode }) {
  return <div className={`absolute flex items-center justify-center rounded-full ${className}`}>{icon}</div>
}
