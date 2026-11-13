"use client";

import { NavLink } from "./components/nav-link";
import { useMainNav } from "./hooks/useMainNav";
import { NAV_ITEMS } from "./nav-items";

type MainNavProps = {
  layout: "rail" | "list";
  onNavigate?: () => void;
};

export function MainNav({ layout, onNavigate }: MainNavProps) {
  const { isCurrent } = useMainNav();

  return (
    <nav aria-label="Workspace">
      <ul className="grid gap-1.5">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <NavLink item={item} isCurrent={isCurrent(item.href)} isRail={layout === "rail"} onNavigate={onNavigate} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
