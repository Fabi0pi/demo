"use client";

import { Icon } from "@/components/ui/icon";
import { useDesk } from "@/hooks/useDesk";
import { cn } from "@/lib/cn";

/** A polite live region: always in the page, so screen readers hear each new notice. */
export function NoticeBanner() {
  const { notice, dismissNotice } = useDesk();

  return (
    <div role="status" aria-live="polite" aria-atomic="true" className="pointer-events-none fixed inset-x-4 top-20 z-40 flex justify-center">
      {notice && (
        <p className={cn("pointer-events-auto flex max-w-sm items-center gap-3 rounded-sm border bg-surface py-2 pr-1 pl-3 text-sm shadow-overlay", notice.tone === "danger" ? "border-danger" : "border-status-ready")}>
          <Icon name={notice.tone === "danger" ? "trash" : "check"} className={notice.tone === "danger" ? "text-danger" : "text-status-ready"} />
          <span className="flex-1">{notice.text}</span>
          <button type="button" aria-label="Dismiss notice" onClick={dismissNotice} className="grid size-11 place-items-center rounded-sm hover:bg-surface-hover">
            <Icon name="close" className="size-4" />
          </button>
        </p>
      )}
    </div>
  );
}
