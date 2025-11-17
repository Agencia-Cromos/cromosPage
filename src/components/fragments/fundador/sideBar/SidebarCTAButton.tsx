"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useNavigationLoader } from "@/components/common/NavigationLoader";

type SidebarCTAButtonProps = {
  href: string;
  label: string;
  icon: ReactNode;
  showLabel: boolean;
  external?: boolean;
};

export function SidebarCTAButton({
  href,
  label,
  icon,
  showLabel,
  external,
}: SidebarCTAButtonProps) {
  const navigation = useNavigationLoader();
  const baseClasses =
    "inline-flex items-center rounded-full border border-white/15 bg-white/[0.08] text-sm font-semibold text-white shadow-[0_16px_40px_rgba(4,8,20,0.45)] transition duration-200 hover:border-white/35 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
  const layoutClasses = showLabel ? "justify-between gap-3 px-4 py-3" : "justify-center gap-0 px-3 py-2";

  const content = (
    <>
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/12 text-white">{icon}</span>
      {showLabel ? <span className="ml-2 flex-1 text-left">{label}</span> : <span className="sr-only">{label}</span>}
    </>
  );

  if (external) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${layoutClasses}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`${baseClasses} ${layoutClasses}`}
      onClick={() => {
        if (navigation && href.startsWith("/") && !href.startsWith("#")) {
          navigation.startNavigation();
        }
      }}
    >
      {content}
    </Link>
  );
}
