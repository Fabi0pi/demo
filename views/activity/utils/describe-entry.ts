import type { ActivityEntry } from "@/lib/tasks/desk-state";
import { STATUS_LABELS } from "@/lib/tasks/labels";

/** One history entry as a sentence. */
export function describeEntry(entry: ActivityEntry): string {
  switch (entry.kind) {
    case "created":
      return `Task created: ${entry.title}`;
    case "deleted":
      return `Task deleted: ${entry.title}`;
    case "status":
      return `${entry.title} · ${STATUS_LABELS[entry.status]}`;
  }
}
