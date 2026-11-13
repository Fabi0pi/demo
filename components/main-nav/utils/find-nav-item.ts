import { NAV_ITEMS } from "../nav-items";
import type { NavItem } from "../nav-items";

/** The page a pathname belongs to; unknown paths fall back to the first page. */
export function findNavItem(pathname: string): NavItem {
  return NAV_ITEMS.find(({ href }) => href === pathname) ?? NAV_ITEMS[0]!;
}
