import { FILTER_LABELS } from "@/lib/tasks/labels";
import type { TaskFilter } from "@/lib/tasks/task";
import { STATUS_FILTERS } from "../../constants";

type StatusFilterProps = {
  status: TaskFilter;
  onStatusChange: (status: TaskFilter) => void;
};

export function StatusFilter({ status, onStatusChange }: StatusFilterProps) {
  return (
    <div role="group" aria-label="Filter tasks by status" className="flex flex-wrap gap-1.5">
      {STATUS_FILTERS.map((filter) => (
        <button
          key={filter}
          type="button"
          aria-pressed={status === filter}
          onClick={() => onStatusChange(filter)}
          className="min-h-11 rounded-sm border border-border px-3 text-sm font-semibold text-muted-foreground hover:border-border-strong hover:text-foreground aria-pressed:border-accent aria-pressed:bg-accent-subtle aria-pressed:text-foreground"
        >
          {FILTER_LABELS[filter]}
        </button>
      ))}
    </div>
  );
}
