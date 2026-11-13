"use client";

import { useReducer } from "react";
import { buildTask, createDeskState, deskReducer, hasChanges } from "@/lib/tasks/desk-state";
import { getReadiness } from "@/lib/tasks/readiness";
import type { NewTask, Task } from "@/lib/tasks/task";

const newId = () => crypto.randomUUID();

/** The desk's data and actions. All rules live in lib/tasks; this only supplies ids. */
export function useDeskState(initialTasks: readonly Task[]) {
  const [state, dispatch] = useReducer(deskReducer, initialTasks, createDeskState);

  return {
    tasks: state.tasks,
    activity: state.activity,
    readiness: getReadiness(state.tasks),
    hasChanges: hasChanges(state.tasks, initialTasks),
    toggleStatus: (id: string) => dispatch({ type: "toggle-status", id, entryId: newId() }),
    deleteTask: (id: string) => dispatch({ type: "delete", id, entryId: newId() }),
    createTask: (input: NewTask) => dispatch({ type: "create", task: buildTask(input, newId()), entryId: newId() }),
    restore: () => dispatch({ type: "restore", tasks: initialTasks }),
  };
}
