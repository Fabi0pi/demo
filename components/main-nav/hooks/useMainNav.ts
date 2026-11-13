"use client";

import { usePathname } from "next/navigation";

/** Which navigation link points at the page being shown. */
export function useMainNav() {
  const pathname = usePathname();

  return { isCurrent: (href: string) => pathname === href };
}
