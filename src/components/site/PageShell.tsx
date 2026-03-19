import type { ReactNode } from "react";

import { SiteHeader } from "./Header";

type PageShellProps = {
  activePath?: string;
  children: ReactNode;
  showFooter?: boolean;
};

export function PageShell({ activePath, children }: PageShellProps) {
  return (
    <main className="page-flat min-h-screen text-white">
      <SiteHeader activePath={activePath} />
      <div className="page-flat mx-auto max-w-[1400px] px-4 pb-8 pt-[96px] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1184px]">{children}</div>
      </div>
    </main>
  );
}
