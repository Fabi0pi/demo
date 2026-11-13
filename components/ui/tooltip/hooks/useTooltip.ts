"use client";

import { useId, useState } from "react";
import type { KeyboardEvent } from "react";

/**
 * A tooltip that shows on hover and on keyboard focus, and that Escape hides
 * until the pointer or focus comes back (WCAG 1.4.13, dismissible content).
 */
export function useTooltip() {
  const id = useId();
  const [isDismissed, setIsDismissed] = useState(false);
  const show = () => setIsDismissed(false);

  return {
    id,
    isDismissed,
    handleKeyDown: (event: KeyboardEvent) => event.key === "Escape" && setIsDismissed(true),
    handlePointerEnter: show,
    handleFocus: show,
  };
}
