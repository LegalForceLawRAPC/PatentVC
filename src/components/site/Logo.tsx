import Image from "next/image"
import Link from "next/link"

type LogoProps = {
  href?: string
  iconSize?: number
  nameClassName?: string
  subtitleClassName?: string
}

export function SiteLogo({
  href = "/",
  iconSize = 40,
  nameClassName = "font-gilroy-bold text-[19px] tracking-[-0.02em] text-white",
  subtitleClassName = "mt-[3px] block font-gilroy-medium text-[11px] text-[#d9d9d9]",
}: LogoProps) {
  return (
    <Link href={href} className="flex items-center gap-3 text-white">
      <Image src="/patentvc/favicon.png" alt="PatentVC" width={iconSize} height={iconSize} className="shrink-0" />
      <span className="block leading-none">
        <span className={nameClassName}>PatentVC</span>
        <span className={subtitleClassName}>Patent Venture Partners</span>
      </span>
    </Link>
  )
}
