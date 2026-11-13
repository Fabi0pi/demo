import type { TaskFilter } from "@/lib/tasks/task";

export const SEARCH_INPUT_ID = "task-search";
export const STATUS_FILTERS: readonly TaskFilter[] = ["all", "review", "ready"];
