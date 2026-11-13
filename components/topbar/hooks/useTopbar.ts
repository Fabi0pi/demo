"use client";

import { usePathname } from "next/navigation";
import { findNavItem } from "@/components/main-nav/utils/find-nav-item";

/** The page being shown, for the breadcrumb. */
export function useTopbar() {
  return { currentPage: findNavItem(usePathname()).label };
}
