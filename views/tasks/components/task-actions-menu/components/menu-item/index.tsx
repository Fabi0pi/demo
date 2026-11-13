import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type MenuItemProps = {
  onSelect: () => void;
  isDestructive?: boolean;
  children: ReactNode;
};

export function MenuItem({ onSelect, isDestructive = false, children }: MenuItemProps) {
  return (
    <button
      type="button"
      role="menuitem"
      tabIndex={-1}
      onClick={onSelect}
      className={cn(
        "flex min-h-11 w-full items-center rounded-sm px-3 text-left text-sm hover:bg-surface-hover focus-visible:bg-surface-hover",
        isDestructive && "border-t border-border text-danger",
      )}
    >
      {children}
    </button>
  );
}
