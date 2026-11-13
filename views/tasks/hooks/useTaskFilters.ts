"use client";

import { useState } from "react";
import { filterTasks } from "@/lib/tasks/filter-tasks";
import type { Task, TaskFilter } from "@/lib/tasks/task";

/** Search text and status filter for the task list; the visible tasks are derived, never stored. */
export function useTaskFilters(tasks: readonly Task[]) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<TaskFilter>("all");

  return {
    query,
    status,
    setQuery,
    setStatus,
    visibleTasks: filterTasks(tasks, { query, status }),
    resetFilters: () => {
      setQuery("");
      setStatus("all");
    },
  };
}
