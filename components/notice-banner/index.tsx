"use client";

import { Icon } from "@/components/ui/icon";
import { useDesk } from "@/hooks/useDesk";
import { cn } from "@/lib/cn";
import { NOTICE_TONES } from "./constants";

export function NoticeBanner() {
  const { notice, dismissNotice } = useDesk();
  const tone = notice ? NOTICE_TONES[notice.tone] : null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="pointer-events-none fixed inset-x-4 top-20 z-40 flex justify-center"
    >
      {notice && tone && (
        <p
          className={cn(
            "pointer-events-auto flex max-w-sm items-center gap-3 rounded-sm border bg-surface py-2 pr-1 pl-3 text-sm shadow-overlay",
            tone.border,
          )}
        >
          <Icon name={tone.icon} className={tone.text} />
          <span className="flex-1">{notice.text}</span>
          <button
            type="button"
            aria-label="Dismiss notice"
            onClick={dismissNotice}
            className="grid size-11 place-items-center rounded-sm hover:bg-surface-hover"
          >
            <Icon name="close" className="size-4" />
          </button>
        </p>
      )}
    </div>
  );
}
