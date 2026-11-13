import type { Task } from "@/lib/tasks/task";
import type { TaskActions } from "../../../../types";
import { TaskRow } from "../../../task-row";

type TaskListProps = {
  tasks: readonly Task[];
  actionsFor: (task: Task, index: number) => TaskActions;
};

export function TaskList({ tasks, actionsFor }: TaskListProps) {
  return (
    <ul
      aria-label="Tasks in this release"
      className="divide-y divide-border rounded-sm border border-border bg-surface"
    >
      {tasks.map((task, index) => (
        <TaskRow key={task.id} task={task} {...actionsFor(task, index)} />
      ))}
    </ul>
  );
}
