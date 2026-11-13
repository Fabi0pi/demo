"use client";

import { useDesk } from "@/hooks/useDesk";
import type { Task } from "@/lib/tasks/task";
import type { TaskActions } from "../../../types";
import { focusAfterChange } from "../utils/focus-after-change";
import { useTaskFilters } from "./useTaskFilters";

/** The task list's behaviour: filters, the visible tasks and what each row's actions do. */
export function useTasksView() {
  const { tasks, toggleStatus, deleteTask, showNotice } = useDesk();
  const filters = useTaskFilters(tasks);
  const visibleTasks = filters.visibleTasks;

  /** The rows around a task, nearest first: where focus goes if it disappears. */
  const neighbours = (index: number) =>
    [visibleTasks[index + 1]?.id, visibleTasks[index - 1]?.id].filter(
      (id): id is string => Boolean(id),
    );

  function actionsFor(task: Task, index: number): TaskActions {
    return {
      onToggleStatus: () => {
        toggleStatus(task.id);
        showNotice("Status updated");
        focusAfterChange([task.id, ...neighbours(index)]);
      },
      onDelete: () => {
        deleteTask(task.id);
        showNotice(`Task deleted: ${task.title}`, "danger");
        focusAfterChange(neighbours(index));
      },
    };
  }

  return {
    ...filters,
    hasTasks: tasks.length > 0,
    resultLabel: `${visibleTasks.length} ${visibleTasks.length === 1 ? "result" : "results"}`,
    actionsFor,
  };
}
