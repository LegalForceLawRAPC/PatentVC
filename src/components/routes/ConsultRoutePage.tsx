import Image from "next/image"

import { consultPage } from "@/_config/routes"
import { PageShell } from "@/components/site"

export function ConsultRoutePage() {
  return (
    <PageShell showFooter={false}>
      <section className="flex min-h-[calc(100vh-120px)] items-center justify-center py-10">
        <div className="w-full max-w-[600px] pt-[40px]">
          <h1 className="font-gilroy-bold text-[40px] leading-[53.2px] tracking-[-0.02em] text-white">
            {consultPage.titleStart} <span className="text-[#f5744c]">{consultPage.titleHighlight}</span>
            <br />
            {consultPage.titleEnd}
          </h1>

          <div className="mt-[39px] flex items-center gap-[21px]">
            <Image src={consultPage.advisor.image} alt={consultPage.advisor.name} width={159} height={192} className="h-[192px] w-[159px] object-cover" />

            <div>
              <div className="font-gilroy-bold text-[24px] leading-[28.8px] text-white">{consultPage.advisor.name}</div>
              <div className="mt-[3px] text-[16px] text-white">{consultPage.advisor.role}</div>
              <div className="mt-[30px] font-gilroy-bold text-[16px] leading-6 text-white">{consultPage.advisor.email}</div>
              <div className="mt-[4px] font-gilroy-medium text-[16px] leading-6 text-[#bdbdbd]">{consultPage.advisor.phone}</div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
