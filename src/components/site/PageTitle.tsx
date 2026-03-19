import { cn } from "@/lib/utils"

type PageTitleProps = {
  title: string
  className?: string
}

export function PageTitle({ title, className }: PageTitleProps) {
  return (
    <div className={cn("text-center", className)}>
      <h1 className="font-gilroy-bold text-[48px] tracking-[-0.02em] text-white">{title}</h1>
      <div className="mx-auto mt-4 h-[5px] w-[126px] rounded-full bg-[#f5744c]" />
    </div>
  )
}
