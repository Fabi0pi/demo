import type { Task } from "./task";

/** A minimal valid task; tests override only what they care about. */
export function makeTask(overrides: Partial<Task> = {}): Task {
  return { id: "task", title: "Task", area: "Area", summary: "Summary", detail: "Detail", checks: ["Check"], status: "review", ...overrides };
}
