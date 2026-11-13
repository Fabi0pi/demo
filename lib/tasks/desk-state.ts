import type { NewTask, Task, TaskStatus } from "./task";

/** Activity is stored as data, not sentences: the UI decides how to word it. */
export type ActivityEntry =
  | { id: string; kind: "created" | "deleted"; title: string }
  | { id: string; kind: "status"; title: string; status: TaskStatus };

export type DeskState = { tasks: Task[]; activity: ActivityEntry[] };

export type DeskAction =
  | { type: "toggle-status"; id: string; entryId: string }
  | { type: "create"; task: Task; entryId: string }
  | { type: "delete"; id: string; entryId: string }
  | { type: "restore"; tasks: readonly Task[] };

const MAX_ACTIVITY = 30;
const NEW_TASK_CHECKS = ["Clear purpose", "Ready for review"];

const otherStatus = (status: TaskStatus): TaskStatus => (status === "ready" ? "review" : "ready");

function withEntry(activity: readonly ActivityEntry[], entry: ActivityEntry): ActivityEntry[] {
  return [entry, ...activity].slice(0, MAX_ACTIVITY);
}

/** The starting point, with a short sample history that matches the sample tasks. */
export function createDeskState(tasks: readonly Task[]): DeskState {
  const ready = tasks.find((task) => task.status === "ready");
  const first = tasks[0];
  const activity: ActivityEntry[] = [
    ...(ready ? [{ id: "sample-status", kind: "status" as const, title: ready.title, status: ready.status }] : []),
    ...(first ? [{ id: "sample-created", kind: "created" as const, title: first.title }] : []),
  ];
  return { tasks: [...tasks], activity };
}

/** A new task from the form: it starts in review, with the default checks. */
export function buildTask(input: NewTask, id: string): Task {
  return { id, title: input.title, area: input.area, summary: input.description, detail: input.description, checks: NEW_TASK_CHECKS, status: "review" };
}

export function deskReducer(state: DeskState, action: DeskAction): DeskState {
  switch (action.type) {
    case "toggle-status": {
      const task = state.tasks.find(({ id }) => id === action.id);
      if (!task) return state;
      const status = otherStatus(task.status);
      return {
        tasks: state.tasks.map((item) => (item.id === task.id ? { ...item, status } : item)),
        activity: withEntry(state.activity, { id: action.entryId, kind: "status", title: task.title, status }),
      };
    }
    case "create":
      return {
        tasks: [action.task, ...state.tasks],
        activity: withEntry(state.activity, { id: action.entryId, kind: "created", title: action.task.title }),
      };
    case "delete": {
      const task = state.tasks.find(({ id }) => id === action.id);
      if (!task) return state;
      return {
        tasks: state.tasks.filter(({ id }) => id !== task.id),
        activity: withEntry(state.activity, { id: action.entryId, kind: "deleted", title: task.title }),
      };
    }
    case "restore":
      return createDeskState(action.tasks);
  }
}

/** True once the tasks differ from the sample: order, membership or status. */
export function hasChanges(tasks: readonly Task[], initial: readonly Task[]): boolean {
  if (tasks.length !== initial.length) return true;
  return tasks.some((task, index) => task.id !== initial[index]?.id || task.status !== initial[index]?.status);
}
