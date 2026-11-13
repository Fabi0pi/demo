"use client";

import { useEffect } from "react";
import type { RefObject } from "react";

/**
 * Closes an open popover when the pointer goes down outside it, or on Escape.
 * `inside` lists every element that counts as "inside" (the popover and its trigger).
 */
export function useDismiss(isOpen: boolean, close: () => void, inside: readonly RefObject<HTMLElement | null>[]) {
  useEffect(() => {
    if (!isOpen) return;
    function handlePointerDown(event: PointerEvent) {
      const target = event.target as Node;
      if (!inside.some((ref) => ref.current?.contains(target))) close();
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && !event.defaultPrevented) close();
    }
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, close, inside]);
}
