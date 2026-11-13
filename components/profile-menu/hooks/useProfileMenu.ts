"use client";

import { useRef, useState } from "react";
import { useDismiss } from "@/hooks/useDismiss";

/** A disclosure that closes on outside click or Escape, and hands focus back to its button after a reset. */
export function useProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const close = () => setIsOpen(false);
  useDismiss(isOpen, close, [rootRef]);

  return {
    isOpen,
    rootRef,
    buttonRef,
    toggle: () => setIsOpen(!isOpen),
    handleReset: () => {
      close();
      buttonRef.current?.focus();
    },
  };
}
