"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/icon";
import { Tooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/cn";
import { NAV_ITEMS } from "./nav-items";

type MainNavProps = {
  layout: "rail" | "list";
  onNavigate?: () => void;
};

const LINK = "flex min-h-11 w-full items-center gap-3 rounded-sm border border-transparent px-3 text-sm text-muted-foreground hover:bg-surface-hover hover:text-foreground aria-[current=page]:border-accent/30 aria-[current=page]:bg-accent-subtle aria-[current=page]:text-accent";

export function MainNav({ layout, onNavigate }: MainNavProps) {
  const pathname = usePathname();
  const isRail = layout === "rail";

  return (
    <nav aria-label="Workspace">
      <ul className="grid gap-1.5">
        {NAV_ITEMS.map((item) => {
          const link = (labelledBy?: string) => (
            <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined} aria-labelledby={labelledBy} onClick={onNavigate} className={cn(LINK, isRail && "justify-center px-0 lg:justify-start lg:px-3")}>
              <Icon name={item.icon} />
              <span className={cn(isRail && "sr-only lg:not-sr-only")}>{item.label}</span>
            </Link>
          );
          return <li key={item.href}>{isRail ? <Tooltip label={item.label} className="lg:hidden">{link}</Tooltip> : link()}</li>;
        })}
      </ul>
    </nav>
  );
}
