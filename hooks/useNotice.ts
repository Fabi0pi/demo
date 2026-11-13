"use client";

import { useEffect, useState } from "react";

export type Notice = { text: string; tone: "success" | "danger" };

const NOTICE_DURATION_MS = 4000;

/** A short confirmation that dismisses itself; a new notice restarts the timer. */
export function useNotice() {
  const [notice, setNotice] = useState<Notice | null>(null);

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(null), NOTICE_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, [notice]);

  return {
    notice,
    showNotice: (text: string, tone: Notice["tone"] = "success") => setNotice({ text, tone }),
    dismissNotice: () => setNotice(null),
  };
}
