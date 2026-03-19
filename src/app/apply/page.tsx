import Image from "next/image"

import { applyPage } from "@/_config/routes"
import { ApplyLeadForm } from "@/components/forms/ApplyLeadForm"

export default function ApplyRoute() {
  return (
    <section className="grid min-h-[calc(100vh-120px)] gap-10 py-8 lg:grid-cols-[547px_562px] lg:items-center lg:justify-between lg:gap-[60px] lg:py-0">
      <div className="pt-[24px]">
        <h1 className="font-gilroy-bold text-[48px] leading-[57.6px] tracking-[-0.03em] text-white">
          {applyPage.titleStart} <span className="text-[#ffcba7]">{applyPage.titleHighlight}</span>
        </h1>
        <p className="mt-[14px] max-w-[547px] font-gilroy-medium text-[20px] leading-[26.6px] text-[#e8e8e8]">{applyPage.description}</p>

        <Image src="/patentvc/apply-graphic.png" alt="Apply illustration" width={491} height={248} className="mt-[59px] h-auto w-[491px]" />
      </div>

      <div className="rounded-[20px] bg-[#1d1e20] px-[56px] pb-[52px] pt-[55px]">
        <div className="font-gilroy-medium text-[12px] leading-8 text-[#868686]">{applyPage.formEyebrow}</div>
        <h2 className="max-w-[374px] font-gilroy-bold text-[24px] leading-8 tracking-[-0.01em] text-white">{applyPage.formTitle}</h2>

        <ApplyLeadForm />
      </div>
    </section>
  )
}
