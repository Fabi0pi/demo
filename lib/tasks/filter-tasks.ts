import type { Task, TaskFilter } from "./task";

type TaskQuery = { query: string; status: TaskFilter };

const SEARCHABLE_FIELDS = ["title", "area", "summary"] as const satisfies readonly (keyof Task)[];

/** Tasks matching the status filter and, case-insensitively, the search text. */
export function filterTasks(tasks: readonly Task[], { query, status }: TaskQuery): Task[] {
  const search = query.trim().toLocaleLowerCase();
  return tasks.filter((task) => {
    if (status !== "all" && task.status !== status) return false;
    if (!search) return true;
    return SEARCHABLE_FIELDS.some((field) => task[field].toLocaleLowerCase().includes(search));
  });
}
