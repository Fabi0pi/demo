import type { TaskFilter } from "@/lib/tasks/task";
import { SearchField } from "./components/search-field";
import { StatusFilter } from "./components/status-filter";

type TaskToolbarProps = {
  query: string;
  status: TaskFilter;
  onQueryChange: (query: string) => void;
  onStatusChange: (status: TaskFilter) => void;
};

export function TaskToolbar({ query, status, onQueryChange, onStatusChange }: TaskToolbarProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
      <SearchField query={query} onQueryChange={onQueryChange} />
      <StatusFilter status={status} onStatusChange={onStatusChange} />
    </div>
  );
}
