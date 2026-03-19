import Image from "next/image"
import Link from "next/link"

import { investPage } from "@/_config/routes"
import { PageShell } from "@/components/site"

export function InvestWithUsPage() {
  return (
    <PageShell activePath="/invest-with-us">
      <section className="grid gap-10 pb-[120px] pt-[24px] lg:grid-cols-[685px_348px] lg:items-start lg:justify-between lg:gap-[133px] lg:pt-[24px]">
        <div className="pt-[96px]">
          <div className="font-gilroy-bold text-[20px] leading-6 tracking-[-0.01em] text-[#ffcba7]">{investPage.eyebrow}</div>
          <h1 className="mt-[9px] font-gilroy-bold text-[48px] leading-[1.2] tracking-[-0.03em] text-white">
            {investPage.titleStart} <span className="text-[#ffcba7]">{investPage.titleHighlight}</span>
          </h1>
          <p className="mt-[18px] max-w-[685px] font-gilroy-semibold text-[20px] leading-6 tracking-[-0.01em] text-[#cecece]">{investPage.description}</p>

          <div className="mt-[90px] flex flex-wrap items-center gap-[24px]">
            <Link
              href={investPage.primaryCta.href}
              className="inline-flex h-[60px] w-[289px] items-center justify-center rounded-[10px] bg-[#f5744c] font-gilroy-bold text-[18px] text-white transition hover:bg-[#f8845f]"
            >
              {investPage.primaryCta.label}
            </Link>
            <Link href={investPage.secondaryCta.href} className="font-gilroy-bold text-[18px] text-white hover:text-[#ffcba7]">
              {investPage.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="pt-[96px]">
          <Image src="/patentvc/invest-graphic.png" alt="Returns illustration" width={348} height={318} className="h-auto w-[348px]" />
        </div>
      </section>

      <section className="grid gap-12 pb-[120px] lg:grid-cols-[499px_593px] lg:items-center lg:gap-[105px]">
        <div className="flex items-center gap-[24px]">
          <StatCircle large value={investPage.statLeft.value} labelTop={investPage.statLeft.labelTop} labelBottom={investPage.statLeft.labelBottom} />
          <StatCircle value={investPage.statRight.value} labelTop={investPage.statRight.labelTop} labelBottom={investPage.statRight.labelBottom} />
        </div>

        <div className="max-w-[593px]">
          <h2 className="font-gilroy-bold text-[48px] leading-[1.2] tracking-[-0.03em] text-white">
            From IP to <span className="text-[#ffcba7]">IPO</span>
          </h2>
          <p className="mt-[10px] font-gilroy-semibold text-[24px] leading-[28.8px] tracking-[-0.01em] text-white">{investPage.insightDescription}</p>
          <p className="mt-[30px] font-gilroy-medium text-[16px] leading-[19.2px] tracking-[-0.01em] text-[#cecece]">{investPage.insightBody}</p>
        </div>
      </section>

      <section className="pb-[119px]">
        <div className="text-center">
          <h2 className="font-gilroy-bold text-[32px] leading-[42.56px] tracking-[-0.01em] text-white">
            {investPage.valueTitle} <span className="text-[#ffcba7]">{investPage.valueHighlight}</span>
          </h2>
          <p className="mt-[18px] font-gilroy-semibold text-[16px] leading-[21.28px] text-[#e8e8e8]">{investPage.valueSubtitle}</p>
        </div>

        <div className="mt-[58px] grid gap-y-[48px] lg:grid-cols-2 lg:gap-x-[41px]">
          {investPage.features.map((feature) => (
            <div key={feature.title} className="rounded-[20px] bg-[#1d1e20] px-[48px] py-[48px]">
              <h3 className="font-gilroy-bold text-[32px] leading-[38.4px] tracking-[-0.01em] text-white">{feature.title}</h3>
              <p className="mt-[14px] font-gilroy-semibold text-[16px] leading-6 text-[#e8e8e8]">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-[120px]">
        <div className="text-center">
          <h2 className="font-gilroy-bold text-[40px] leading-[48px] tracking-[-0.01em] text-white">
            {investPage.propositionTitle} <span className="text-[#ffcba7]">{investPage.propositionHighlight}</span>
          </h2>
        </div>

        <div className="mx-auto mt-[58px] max-w-[764px] space-y-[48px] pl-[36px]">
          {investPage.propositions.map((item) => (
            <div key={item.title} className="relative before:absolute before:left-[-36px] before:top-0 before:h-[109px] before:w-[9px] before:rounded-full before:bg-[#ffcba7]">
              <h3 className="font-gilroy-bold text-[24px] leading-[28.8px] tracking-[-0.01em] text-white">{item.title}</h3>
              <p className="mt-[14px] font-gilroy-bold text-[16px] leading-6 text-white">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-[120px] flex flex-wrap items-center justify-center gap-[35px]">
          <Link
            href={investPage.primaryCta.href}
            className="inline-flex h-[60px] w-[289px] items-center justify-center rounded-[10px] bg-[#f5744c] font-gilroy-bold text-[18px] text-white transition hover:bg-[#f8845f]"
          >
            {investPage.primaryCta.label}
          </Link>
          <Link href={investPage.secondaryCta.href} className="font-gilroy-bold text-[18px] text-white hover:text-[#ffcba7]">
            {investPage.secondaryCta.label}
          </Link>
        </div>
      </section>
    </PageShell>
  )
}

function StatCircle({
  value,
  labelTop,
  labelBottom,
  large = false,
}: {
  value: string
  labelTop: string
  labelBottom: string
  large?: boolean
}) {
  return (
    <div
      className={large ? "flex size-[188px] flex-col items-center justify-center rounded-full border-[4px] border-[#f5744c] bg-white text-center" : "flex size-[110px] flex-col items-center justify-center rounded-full bg-white text-center"}
    >
      <div className={large ? "font-gilroy-bold text-[54px] leading-none tracking-[-0.02em] text-[#f5744c]" : "font-gilroy-bold text-[38px] leading-none tracking-[-0.02em] text-[#212225]"}>{value}</div>
      <div className={large ? "mt-3 font-gilroy-medium text-[10px] leading-[14px] text-[#f5744c]" : "mt-2 font-gilroy-medium text-[8px] leading-[10px] text-[#4c4c4c]"}>
        <div>{labelTop}</div>
        <div>{labelBottom}</div>
      </div>
    </div>
  )
}
