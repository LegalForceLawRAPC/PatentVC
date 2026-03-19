import { Mail } from "lucide-react"

import { homepageContent } from "@/_config/home"
import { ContactLeadForm } from "@/components/forms/ContactLeadForm"

export function ContactSection() {
  return (
    <section
      id="contact"
      className="grid gap-10 py-[20px] lg:grid-cols-[345px_535px] lg:items-center lg:justify-between"
    >
      <div className="lg:pl-[22px]">
        <h2 className="font-gilroy-bold text-[36px] leading-[1.18] tracking-[-0.01em] text-white">
          {homepageContent.contact.title}
          <br />
          {homepageContent.contact.subtitle}
        </h2>

        <a href={`mailto:${homepageContent.contact.email}`} className="mt-8 inline-flex items-center gap-4 text-[15px] text-[#d9d9d9]">
          <span className="flex h-[37px] w-[37px] items-center justify-center rounded-full text-[#f5744c]">
            <Mail className="h-6 w-6" strokeWidth={1.8} />
          </span>
          {homepageContent.contact.email}
        </a>
      </div>

      <div className="rounded-[18px] bg-white px-[48px] py-[32px] text-[#212225] shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
        <ContactLeadForm />

        <p className="mt-6 text-center text-[12px] leading-5 text-[#7f7f7f]">{homepageContent.contact.disclaimer}</p>
      </div>
    </section>
  )
}
