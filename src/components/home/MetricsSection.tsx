import { metrics } from "@/_config/home"

export function MetricsSection() {
  return (
    <section className="rounded-[18px] bg-[#151619] px-5 py-8 sm:px-8 lg:px-[52px]">
      <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4 lg:gap-[52px]">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <div className="font-gilroy-semibold text-[32px] leading-none text-white">{metric.value}</div>
            <div className="mt-2 text-[13px] text-[#d9d9d9]">{metric.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
