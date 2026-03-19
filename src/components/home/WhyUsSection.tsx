import { homepageContent, reasons } from "@/_config/home"

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-[80px]">
      <div
        className="overflow-hidden rounded-[20px] border border-[#5a453d] px-[24px] py-[36px] sm:px-[34px] lg:px-[52px] lg:py-[82px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(33,34,37,0.9), rgba(33,34,37,0.9)), url('/patentvc/why-bg.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h2 className="font-gilroy-bold text-[36px] leading-[1.1] tracking-[-0.01em] text-white">{homepageContent.whyUs.title}</h2>

        <div className="mt-12 grid gap-y-14 lg:grid-cols-2 lg:gap-x-12">
          {reasons.map((reason) => (
            <div key={reason.title} className="grid grid-cols-[8px_1fr] gap-6">
              <div className="rounded-full bg-[#f5744c]" />
              <div>
                <h3 className="font-gilroy-bold text-[24px] leading-[1.2] tracking-[-0.01em] text-white">{reason.title}</h3>
                <p className="mt-3 max-w-[475px] font-gilroy-semibold text-[16px] leading-6 text-[#dedede]">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
