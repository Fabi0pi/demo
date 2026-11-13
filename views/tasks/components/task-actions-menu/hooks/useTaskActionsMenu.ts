"use client";

import { useId } from "react";
import type { Task } from "@/lib/tasks/task";
import type { TaskActions } from "../../../types";
import { useMenu } from "./useMenu";

/** The menu for one task: its name, its id and actions that close the menu before running. */
export function useTaskActionsMenu(task: Task, { onToggleStatus, onDelete }: TaskActions) {
  const { close, ...menu } = useMenu();
  const menuId = useId();

  function runAndClose(action: () => void) {
    close();
    action();
  }

  return {
    ...menu,
    menuId,
    buttonId: `task-actions-${task.id}`,
    label: `More actions: ${task.title}`,
    statusLabel: task.status === "review" ? "Mark ready" : "Move to review",
    toggleStatus: () => runAndClose(onToggleStatus),
    deleteTask: () => runAndClose(onDelete),
  };
}
