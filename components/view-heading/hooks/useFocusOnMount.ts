"use client";

import { useEffect, useRef } from "react";

/**
 * Focuses the element when the page mounts, unless focus is already inside
 * the main content. After a client-side navigation, keyboard and screen-reader
 * users land on the new page instead of a link that may no longer be visible.
 */
export function useFocusOnMount<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (document.activeElement?.closest("main")) return;
    ref.current?.focus({ preventScroll: true });
  }, []);

  return ref;
}
