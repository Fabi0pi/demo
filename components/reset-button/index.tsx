"use client";

import type { ReactNode } from "react";
import { Icon } from "@/components/ui/icon";
import { Tooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/cn";
import { RESET_LABEL } from "./constants";
import { useResetButton } from "./hooks/useResetButton";

type ResetButtonProps = {
  layout?: "rail" | "full";
  className?: string;
  onReset?: () => void;
};

export function ResetButton({ layout = "full", className, onReset }: ResetButtonProps) {
  const { isDisabled, handleReset } = useResetButton(onReset);
  const isRail = layout === "rail";

  const button = (labelledBy?: string): ReactNode => (
    <button
      type="button"
      disabled={isDisabled}
      aria-labelledby={labelledBy}
      onClick={handleReset}
      className={cn(
        "flex min-h-11 w-full items-center gap-3 rounded-sm px-3 text-sm text-muted-foreground hover:enabled:bg-surface-hover hover:enabled:text-foreground disabled:opacity-50",
        isRail && "justify-center px-0 lg:justify-start lg:px-3",
        className,
      )}
    >
      <Icon name="reset" />
      <span className={cn(isRail && "sr-only lg:not-sr-only")}>{RESET_LABEL}</span>
    </button>
  );

  return isRail ? (
    <Tooltip label={RESET_LABEL} className="lg:hidden">
      {button}
    </Tooltip>
  ) : (
    button()
  );
}
