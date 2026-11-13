import type { TaskFilter, TaskStatus } from "./task";

/** How each status reads in the interface. */
export const STATUS_LABELS: Readonly<Record<TaskStatus, string>> = {
  review: "In review",
  ready: "Ready",
};

export const FILTER_LABELS: Readonly<Record<TaskFilter, string>> = {
  all: "All",
  ...STATUS_LABELS,
};
