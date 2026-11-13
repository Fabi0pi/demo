import { Icon } from "@/components/ui/icon";
import { FILTER_LABELS } from "@/lib/tasks/labels";
import type { TaskFilter } from "@/lib/tasks/task";
import { cn } from "@/lib/cn";

export const SEARCH_INPUT_ID = "task-search";

const FILTERS: readonly TaskFilter[] = ["all", "review", "ready"];

type TaskToolbarProps = {
  query: string;
  status: TaskFilter;
  onQueryChange: (query: string) => void;
  onStatusChange: (status: TaskFilter) => void;
};

export function TaskToolbar({
  query,
  status,
  onQueryChange,
  onStatusChange,
}: TaskToolbarProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
      <div className="grid gap-1.5">
        <label
          htmlFor={SEARCH_INPUT_ID}
          className="font-mono text-xs font-semibold text-muted-foreground"
        >
          Search tasks
        </label>
        <div className="flex min-h-11 items-center rounded-sm border border-border-strong bg-surface has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-ring">
          <Icon name="search" className="ml-3 text-muted-foreground" />
          <input
            id={SEARCH_INPUT_ID}
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search the release…"
            className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus-visible:outline-none"
          />
          {query && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => onQueryChange("")}
              className="grid size-11 place-items-center"
            >
              <Icon name="close" className="size-4" />
            </button>
          )}
        </div>
      </div>
      <div
        role="group"
        aria-label="Filter tasks by status"
        className="flex flex-wrap gap-1.5"
      >
        {FILTERS.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={status === filter}
            onClick={() => onStatusChange(filter)}
            className={cn(
              "min-h-11 rounded-sm border border-border px-3 text-sm font-semibold text-muted-foreground hover:border-border-strong hover:text-foreground",
              "aria-pressed:border-accent aria-pressed:bg-accent-subtle aria-pressed:text-foreground",
            )}
          >
            {FILTER_LABELS[filter]}
          </button>
        ))}
      </div>
    </div>
  );
}
