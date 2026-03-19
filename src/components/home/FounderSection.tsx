import Image from "next/image"
import { Linkedin } from "lucide-react"

import { firstCompanyLogos, homepageContent, secondCompanyLogos } from "@/_config/home"

import { FounderCard } from "./FounderCard"

export function FounderSection() {
  return (
    <section id="our-team" className="grid gap-8 py-[10px] lg:grid-cols-[302px_725px] lg:items-start lg:justify-between">
      <div className="pt-[48px]">
        <div className="relative h-[213px] w-[213px] overflow-hidden rounded-full">
          <Image src="/patentvc/founder.png" alt={homepageContent.founder.name} fill className="object-cover" />
        </div>

        <div className="mt-5 text-[14px] text-[#d9d9d9]">{homepageContent.founder.foundedBy}</div>
        <div className="mt-1 font-gilroy-bold text-[36px] leading-[1.1] tracking-[-0.01em] text-white">{homepageContent.founder.name}</div>
        <div className="mt-2 max-w-[302px] text-[18px] leading-7 text-[#d9d9d9]">{homepageContent.founder.role}</div>

        <a
          href={homepageContent.founder.linkedinHref}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex h-[60px] w-[267px] items-center justify-center gap-2 rounded-[10px] bg-[#3d73ff] text-[15px] font-gilroy-semibold text-white transition hover:bg-[#4f82ff]"
        >
          <Linkedin className="h-4 w-4" />
          {homepageContent.founder.linkedinLabel}
        </a>
      </div>

      <div className="space-y-4">
        <FounderCard>{homepageContent.founder.intro}</FounderCard>

        <FounderCard>
          <div>{homepageContent.founder.experience}</div>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            {firstCompanyLogos.map((logo) => (
              <Image key={logo.alt} src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="h-auto w-auto" />
            ))}
          </div>
        </FounderCard>

        <FounderCard>
          <div>
            <div>{homepageContent.founder.backgroundLead}</div>
            <div className="mt-2">{homepageContent.founder.backgroundTail}</div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:justify-start">
            {secondCompanyLogos.map((logo) => (
              <Image key={logo.alt} src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="h-auto w-auto" />
            ))}
          </div>
        </FounderCard>
      </div>
    </section>
  )
}
