import Image from "next/image"

import { teamPage } from "@/_config/routes"
import { PageShell } from "@/components/site"

import { RouteBanner } from "./RouteBanner"

export function TeamRoutePage() {
  return (
    <PageShell activePath="/team">
      <RouteBanner title={teamPage.title} />

      <section className="space-y-[60px] pb-16 pt-[20px]">
        {teamPage.members.map((member) => (
          <div key={member.name} className="rounded-[20px] bg-[#1d1e20] px-[60px] py-[40px]">
            <div className="grid gap-8 lg:grid-cols-[236px_1fr] lg:gap-[72px]">
              <div>
                <Image src={member.image} alt={member.name} width={236} height={296} className="h-[296px] w-[236px] rounded-[10px] object-cover" />
              </div>

              <div>
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <h2 className="font-gilroy-bold text-[32px] leading-[38.4px] tracking-[-0.02em] text-white">{member.name}</h2>
                    <div className="mt-[6px] font-light text-[16px] text-white">{member.role}</div>
                  </div>

                  {member.email ? (
                    <div className="min-w-[168px] text-[16px] leading-6 text-white">
                      <div className="font-gilroy-bold text-[20px] leading-6">{member.email}</div>
                      {member.phone ? <div className="mt-2 font-gilroy-bold text-[16px] leading-6">{member.phone}</div> : null}
                    </div>
                  ) : null}
                </div>

                <div className="mt-[45px] space-y-6 font-gilroy-medium text-[16px] leading-6 text-white">
                  {member.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </PageShell>
  )
}
