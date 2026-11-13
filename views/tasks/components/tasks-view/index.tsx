"use client";

import { ResetButton } from "@/components/reset-button";
import { Button } from "@/components/ui/button";
import { ViewHeading } from "@/components/view-heading";
import { useDesk } from "@/hooks/useDesk";
import type { Task } from "@/lib/tasks/task";
import { useTaskFilters } from "../../hooks/useTaskFilters";
import { EmptyState } from "../empty-state";
import { TaskRow } from "../task-row";
import { SEARCH_INPUT_ID, TaskToolbar } from "../task-toolbar";

/** After a row changes, keep focus near where the user was: same row, the next one, or the search. */
function focusAfterChange(ids: readonly string[]) {
  requestAnimationFrame(() => {
    const target = ids.map((id) => document.getElementById(`task-actions-${id}`)).find(Boolean);
    (target ?? document.getElementById(SEARCH_INPUT_ID))?.focus();
  });
}

export function TasksView() {
  const { tasks, toggleStatus, deleteTask, showNotice } = useDesk();
  const filters = useTaskFilters(tasks);
  const visible = filters.visibleTasks;
  const neighbours = (index: number) => [visible[index + 1]?.id, visible[index - 1]?.id].filter((id): id is string => Boolean(id));

  function handleToggleStatus(task: Task, index: number) {
    toggleStatus(task.id);
    showNotice("Status updated");
    focusAfterChange([task.id, ...neighbours(index)]);
  }

  function handleDelete(task: Task, index: number) {
    deleteTask(task.id);
    showNotice(`Task deleted: ${task.title}`, "danger");
    focusAfterChange(neighbours(index));
  }

  return (
    <>
      <ViewHeading title="Tasks" description="Small steps. Ready to ship." />
      <TaskToolbar query={filters.query} status={filters.status} onQueryChange={filters.setQuery} onStatusChange={filters.setStatus} />
      <p role="status" className="sr-only">{visible.length} {visible.length === 1 ? "result" : "results"}</p>
      {visible.length > 0 ? (
        <ul aria-label="Tasks in this release" className="mt-6 divide-y divide-border rounded-sm border border-border bg-surface">
          {visible.map((task, index) => (
            <TaskRow key={task.id} task={task} onToggleStatus={() => handleToggleStatus(task, index)} onDelete={() => handleDelete(task, index)} />
          ))}
        </ul>
      ) : tasks.length > 0 ? (
        <div className="mt-6"><EmptyState title="No matching tasks" description="Try another search or show all statuses." action={<Button onClick={filters.resetFilters}>Reset filters</Button>} /></div>
      ) : (
        <div className="mt-6"><EmptyState title="No tasks left" description="Restore the sample tasks to keep exploring." action={<ResetButton />} /></div>
      )}
    </>
  );
}
