import type { Metadata } from "next"
import Image from "next/image"

import { teamPage } from "@/_config/routes"

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the PatentVC team and learn about the founders and operators behind the firm.",
  alternates: {
    canonical: "/team",
  },
}

export default function TeamRoute() {
  return (
    <>
      <section className="relative left-1/2 w-screen max-w-[1400px] -translate-x-1/2 overflow-hidden bg-[#212225]">
        <div className="relative h-[258px] overflow-hidden bg-[#212225]">
          <div className="absolute inset-x-[-24px] bottom-[-188px] h-[420px] rounded-[50%] border border-[#2a2b2e] bg-transparent" />
          <div className="absolute inset-x-[-24px] bottom-[-208px] h-[430px] rounded-[50%] border border-[#2b2c30] bg-transparent opacity-70" />
          <Image src="/patentvc/footer-logo-mark.png" alt="" width={118} height={176} className="absolute left-[74px] top-[-6px] opacity-[0.12]" />
          <Image src="/patentvc/footer-logo-mark.png" alt="" width={118} height={176} className="absolute right-[88px] top-[6px] opacity-[0.12]" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center pt-[6px]">
            <h1 className="font-gilroy-bold text-[32px] leading-[38.4px] tracking-[-0.01em] text-white">{teamPage.title}</h1>
            <div className="mt-[9px] h-[8px] w-[141px] rotate-[1deg] bg-[#f5744c]" />
          </div>
        </div>
      </section>

      <section className="space-y-[60px] pb-16 pt-[20px]">
        {teamPage.members.map((member) => (
          <div key={member.name} className="rounded-[20px] bg-[#1d1e20] px-[60px] py-[40px]">
            <div className="grid gap-8 lg:grid-cols-[236px_1fr] lg:gap-[72px]">
              <div>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={236}
                  height={296}
                  className={`h-[296px] w-[236px] rounded-[10px] object-cover ${member.name === "Amien Gassiep" ? "object-top" : "object-center"}`}
                />
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
    </>
  )
}
