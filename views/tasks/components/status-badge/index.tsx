import { STATUS_LABELS } from "@/lib/tasks/labels";
import type { TaskStatus } from "@/lib/tasks/task";
import { cn } from "@/lib/cn";

const TONES: Readonly<Record<TaskStatus, string>> = {
  review: "bg-status-review text-status-review-foreground",
  ready: "bg-status-ready text-status-ready-foreground",
};

/** The status as text in a coloured pill: the colour repeats the word, never replaces it. */
export function StatusBadge({ status }: { status: TaskStatus }) {
  return <span className={cn("rounded-full px-2.5 py-1 font-mono text-xs font-bold whitespace-nowrap", TONES[status])}>{STATUS_LABELS[status]}</span>;
}
