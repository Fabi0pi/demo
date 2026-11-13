import type { Task } from "@/lib/tasks/task";
import type { TaskActions } from "../../types";
import { StatusBadge } from "../status-badge";
import { TaskActionsMenu } from "../task-actions-menu";

type TaskRowProps = TaskActions & { task: Task };

export function TaskRow({ task, onToggleStatus, onDelete }: TaskRowProps) {
  return (
    <li className="flex items-center gap-3 px-3 py-2 sm:px-4">
      <div className="grid min-w-0 flex-1 gap-0.5 py-1">
        <span className="font-medium break-words">{task.title}</span>
        <span className="text-sm text-muted-foreground">{task.area}</span>
      </div>
      <StatusBadge status={task.status} />
      <TaskActionsMenu task={task} onToggleStatus={onToggleStatus} onDelete={onDelete} />
    </li>
  );
}
