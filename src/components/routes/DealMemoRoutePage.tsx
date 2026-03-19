import Link from "next/link";

import { dealMemoPage } from "@/_config/routes";
import { PageShell } from "@/components/site";

export function DealMemoRoutePage() {
  const [introSection, ...restSections] = dealMemoPage.sections;

  return (
    <PageShell>
      <section className="grid gap-12 pb-[96px] pt-[56px] lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:items-start lg:gap-[78px]">
        <div className="lg:sticky lg:top-[118px] lg:self-start">
          <div className="relative overflow-hidden rounded-[18px] border-[6px] border-[#6e5c54] bg-[#1f2024] px-[40px] py-[44px] lg:min-h-[430px] lg:px-[58px] lg:py-[64px]">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% -14px, transparent 20px, rgba(12,12,14,0.34) 21px, rgba(12,12,14,0.34) 24px, transparent 25px)",
                backgroundSize: "96px 28px",
                backgroundPosition: "0 0",
              }}
            />
            <div
              className="absolute inset-0 opacity-18"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 42px, transparent 20px, rgba(12,12,14,0.34) 21px, rgba(12,12,14,0.34) 24px, transparent 25px)",
                backgroundSize: "96px 28px",
                backgroundPosition: "48px 14px",
              }}
            />

            <div className="relative z-10 max-w-[420px]">
              <div className="font-gilroy-bold text-[16px] leading-6 text-white/95">
                {dealMemoPage.cardLabel}
              </div>

              <h2 className="mt-[26px] font-gilroy-bold text-[38px] leading-[1.08] tracking-[-0.03em] text-white lg:text-[44px]">
                {dealMemoPage.cardTitleStart}
                <br />
                <span className="text-[#ffcba7]">
                  {dealMemoPage.cardTitleHighlight}
                </span>
              </h2>

              <Link
                href={dealMemoPage.cardCta.href}
                className="mt-[54px] inline-flex h-[72px] items-center justify-center rounded-[16px] bg-[#f5744c] px-[34px] font-gilroy-bold text-[18px] text-white transition hover:bg-[#f8845f]"
              >
                {dealMemoPage.cardCta.label}
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-[6px] lg:max-w-[548px]">
          <div>
            <h1 className="font-gilroy-bold text-[34px] leading-[1.18] tracking-[-0.02em] text-white">
              {introSection.title}
            </h1>

            <div className="mt-[28px] space-y-[30px] text-[15px] leading-[1.65] text-[#e8e8e8] lg:text-[14px] lg:leading-[1.6]">
              {introSection.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-[42px] grid gap-8 sm:grid-cols-2 sm:gap-12">
              {introSection.metrics?.map((metric) => (
                <div key={metric.label}>
                  <div className="text-[18px] leading-7 text-white">
                    {metric.label}
                  </div>
                  <div className="mt-[4px] font-gilroy-bold text-[22px] leading-[1.35] text-white">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-[64px] space-y-[64px]">
            {restSections.map((section) => (
              <article key={section.title}>
                <h2 className="font-gilroy-bold text-[30px] leading-[1.24] tracking-[-0.02em] text-white">
                  {section.title}
                </h2>

                {"paragraphs" in section ? (
                  <div className="mt-[28px] space-y-[24px] text-[15px] leading-[1.65] text-[#e8e8e8] lg:text-[14px] lg:leading-[1.6]">
                    {section.paragraphs.map((paragraph, index) => {
                      const isEmailLine =
                        paragraph.includes("abhi@patentvc.com");
                      const isSignature =
                        section.title === "Contact Information:" && index >= 2;

                      if (isEmailLine) {
                        return (
                          <p key={paragraph}>
                            For inquiries or to express your interest in this
                            exceptional investment opportunity, please contact:{" "}
                            <a
                              href="mailto:abhi@patentvc.com"
                              className="text-[#ffcba7] underline underline-offset-4"
                            >
                              abhi@patentvc.com
                            </a>
                          </p>
                        );
                      }

                      return (
                        <p
                          key={paragraph}
                          className={
                            isSignature
                              ? "font-gilroy-semibold text-white"
                              : undefined
                          }
                        >
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                ) : null}

                {"bullets" in section ? (
                  <ul className="mt-[24px] space-y-[18px] text-[15px] leading-[1.65] text-[#e8e8e8] lg:text-[14px] lg:leading-[1.6]">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-[11px] block size-[6px] shrink-0 rounded-full bg-[#ffcba7]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
