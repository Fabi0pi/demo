import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { Tooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/cn";
import type { NavItem } from "../../nav-items";

type NavLinkProps = {
  item: NavItem;
  isCurrent: boolean;
  isRail: boolean;
  onNavigate?: () => void;
};

const LINK =
  "flex min-h-11 w-full items-center gap-3 rounded-sm border border-transparent px-3 text-sm text-muted-foreground hover:bg-surface-hover hover:text-foreground aria-[current=page]:border-accent/30 aria-[current=page]:bg-accent-subtle aria-[current=page]:text-accent";

export function NavLink({ item, isCurrent, isRail, onNavigate }: NavLinkProps) {
  const link = (labelledBy?: string) => (
    <Link
      href={item.href}
      aria-current={isCurrent ? "page" : undefined}
      aria-labelledby={labelledBy}
      onClick={onNavigate}
      className={cn(LINK, isRail && "justify-center px-0 lg:justify-start lg:px-3")}
    >
      <Icon name={item.icon} />
      <span className={cn(isRail && "sr-only lg:not-sr-only")}>{item.label}</span>
    </Link>
  );

  if (!isRail) return link();

  return (
    <Tooltip label={item.label} className="lg:hidden">
      {link}
    </Tooltip>
  );
}
