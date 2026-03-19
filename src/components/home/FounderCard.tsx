import type { ReactNode } from "react"

type FounderCardProps = {
  children: ReactNode
}

export function FounderCard({ children }: FounderCardProps) {
  return (
    <div className="rounded-[18px] bg-white px-[41px] py-[21px] text-[15px] leading-8 text-[#212225] shadow-[0_8px_18px_rgba(0,0,0,0.08)]">
      {children}
    </div>
  )
}
