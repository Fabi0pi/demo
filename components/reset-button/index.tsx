"use client";

import type { ReactNode } from "react";
import { Icon } from "@/components/ui/icon";
import { Tooltip } from "@/components/ui/tooltip";
import { useDesk } from "@/hooks/useDesk";
import { cn } from "@/lib/cn";

const LABEL = "Reset workspace";
const RESTORED = "Sample tasks restored";

type ResetButtonProps = {
  layout?: "rail" | "full";
  className?: string;
  onReset?: () => void;
};

export function ResetButton({
  layout = "full",
  className,
  onReset,
}: ResetButtonProps) {
  const { hasChanges, restore, showNotice } = useDesk();
  const isRail = layout === "rail";

  function handleReset() {
    restore();
    showNotice(RESTORED);
    onReset?.();
  }

  const button = (labelledBy?: string): ReactNode => (
    <button
      type="button"
      disabled={!hasChanges}
      aria-labelledby={labelledBy}
      onClick={handleReset}
      className={cn(
        "flex min-h-11 w-full items-center gap-3 rounded-sm px-3 text-sm text-muted-foreground hover:enabled:bg-surface-hover hover:enabled:text-foreground disabled:opacity-50",
        isRail && "justify-center px-0 lg:justify-start lg:px-3",
        className,
      )}
    >
      <Icon name="reset" />
      <span className={cn(isRail && "sr-only lg:not-sr-only")}>{LABEL}</span>
    </button>
  );

  return isRail ? (
    <Tooltip label={LABEL} className="lg:hidden">
      {button}
    </Tooltip>
  ) : (
    button()
  );
}
