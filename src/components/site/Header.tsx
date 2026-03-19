"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { headerCta, siteNavItems } from "@/_config/site";
import { cn } from "@/lib/utils";

import { SiteLogo } from "./Logo";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[rgba(33,34,37,0.74)] backdrop-blur-[18px] supports-[backdrop-filter]:bg-[rgba(33,34,37,0.66)]">
      <div className="mx-auto flex h-[79px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-[120px]">
        <SiteLogo />

        <nav className="hidden h-[41px] items-center gap-3 text-[#d9d9d9] lg:flex">
          {siteNavItems.map((item) => {
            const isActive =
              item.match !== undefined && pathname === item.match;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "rounded-[8px] px-[15px] py-[10px] font-gilroy-semibold text-[16px] leading-[1.33] transition hover:text-white",
                  isActive && "bg-[#342d2c] text-[#ffcba7]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href={headerCta.href}
          className="inline-flex h-[50px] min-w-[221px] items-center justify-center rounded-[10px] bg-[#ffcba7] px-8 font-gilroy-semibold text-[18px] text-[#212225] transition hover:bg-[#ffd5b5]"
        >
          {headerCta.label}
        </Link>
      </div>
    </header>
  );
}
