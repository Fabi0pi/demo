"use client";

import { ViewHeading } from "@/components/view-heading";
import { TaskToolbar } from "../task-toolbar";
import { TaskList } from "./components/task-list";
import { TaskListEmpty } from "./components/task-list-empty";
import { useTasksView } from "./hooks/useTasksView";

export function TasksView() {
  const {
    query,
    status,
    setQuery,
    setStatus,
    resetFilters,
    visibleTasks,
    hasTasks,
    resultLabel,
    actionsFor,
  } = useTasksView();

  return (
    <>
      <ViewHeading title="Tasks" description="Small steps. Ready to ship." />
      <TaskToolbar
        query={query}
        status={status}
        onQueryChange={setQuery}
        onStatusChange={setStatus}
      />
      <p role="status" className="sr-only">
        {resultLabel}
      </p>
      <div className="mt-6">
        {visibleTasks.length > 0 ? (
          <TaskList tasks={visibleTasks} actionsFor={actionsFor} />
        ) : (
          <TaskListEmpty hasTasks={hasTasks} onResetFilters={resetFilters} />
        )}
      </div>
    </>
  );
}
