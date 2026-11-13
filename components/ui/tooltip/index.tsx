"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useTooltip } from "./hooks/useTooltip";

type TooltipProps = {
  label: string;
  className?: string;
  children: (labelledBy: string) => ReactNode;
};

export function Tooltip({ label, className, children }: TooltipProps) {
  const { id, isDismissed, handleKeyDown, handlePointerEnter, handleFocus } = useTooltip();

  return (
    <span
      className="group/tooltip relative flex"
      onKeyDown={handleKeyDown}
      onPointerEnter={handlePointerEnter}
      onFocus={handleFocus}
    >
      {children(id)}
      <span
        id={id}
        role="tooltip"
        data-dismissed={isDismissed}
        className={cn(
          "invisible absolute top-1/2 left-[calc(100%+0.5rem)] z-20 w-max max-w-52 -translate-y-1/2 rounded-sm border border-border-strong bg-foreground px-2 py-1 text-xs text-background group-hover/tooltip:visible group-focus-within/tooltip:visible data-[dismissed=true]:invisible!",
          className,
        )}
      >
        {label}
      </span>
    </span>
  );
}
