import { Icon } from "@/components/ui/icon";
import type { ActivityEntry } from "@/lib/tasks/desk-state";
import { describeEntry } from "../../utils/describe-entry";

/** Newest first: an ordered list, because the order is the information. */
export function ActivityList({ entries }: { entries: readonly ActivityEntry[] }) {
  return (
    <ol className="grid gap-2">
      {entries.map((entry) => (
        <li key={entry.id} className="flex gap-3 rounded-sm border border-border bg-surface p-3 text-sm break-words">
          <Icon name="check" className="mt-0.5 size-4 text-highlight" />
          <span>{describeEntry(entry)}</span>
        </li>
      ))}
    </ol>
  );
}
