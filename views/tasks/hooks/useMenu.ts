"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { useDismiss } from "@/hooks/useDismiss";
import { rovingIndex } from "@/lib/roving-index";

const VERTICAL = { previous: "ArrowUp", next: "ArrowDown" };
const FIRST = 0;
const LAST = -1;

/**
 * A WAI-ARIA menu button: Enter/Space or ArrowDown open on the first item,
 * ArrowUp on the last; arrows move between items; Escape and Tab close.
 */
export function useMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const items = () => Array.from(menuRef.current?.querySelectorAll<HTMLElement>('[role="menuitem"]') ?? []);
  const focusItem = (index: number) => items().at(index)?.focus();

  function open(index: number) {
    setIsOpen(true);
    requestAnimationFrame(() => focusItem(index));
  }

  function close({ returnFocus }: { returnFocus: boolean }) {
    setIsOpen(false);
    if (returnFocus) buttonRef.current?.focus();
  }

  useDismiss(isOpen, () => close({ returnFocus: false }), [rootRef]);

  function handleButtonKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    open(event.key === "ArrowDown" ? FIRST : LAST);
  }

  function handleMenuKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      close({ returnFocus: true });
      return;
    }
    if (event.key === "Tab") return close({ returnFocus: false });
    const current = items().indexOf(document.activeElement as HTMLElement);
    const next = rovingIndex(event.key, current, items().length, VERTICAL);
    if (next === null) return;
    event.preventDefault();
    focusItem(next);
  }

  return {
    isOpen, rootRef, buttonRef, menuRef,
    toggle: () => (isOpen ? close({ returnFocus: false }) : open(FIRST)),
    close: () => close({ returnFocus: true }),
    handleButtonKeyDown,
    handleMenuKeyDown,
  };
}
