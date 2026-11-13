"use client";

import { useDesk } from "@/hooks/useDesk";
import { RESTORED_NOTICE } from "../constants";

/** Restores the sample tasks and confirms it; disabled until something has changed. */
export function useResetButton(onReset?: () => void) {
  const { hasChanges, restore, showNotice } = useDesk();

  function handleReset() {
    restore();
    showNotice(RESTORED_NOTICE);
    onReset?.();
  }

  return { isDisabled: !hasChanges, handleReset };
}
