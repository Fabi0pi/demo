import { newTaskSchema } from "@/lib/tasks/task";
import type { NewTask } from "@/lib/tasks/task";

export type NewTaskField = keyof NewTask;
export type FieldErrors = Partial<Record<NewTaskField, string>>;

/** Fields in form order: the first invalid one receives focus. */
export const NEW_TASK_FIELDS: readonly NewTaskField[] = ["title", "area", "description"];

const ERROR_MESSAGES: Readonly<Record<NewTaskField, string>> = {
  title: "Enter a task name.",
  area: "Enter a category.",
  description: "Enter a description.",
};

type Validation = { isValid: true; task: NewTask } | { isValid: false; errors: FieldErrors };

/** Validates the form's values with the shared schema and words each error for its field. */
export function validateNewTask(values: Record<NewTaskField, unknown>): Validation {
  const result = newTaskSchema.safeParse(values);
  if (result.success) return { isValid: true, task: result.data };
  const errors: FieldErrors = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0] as NewTaskField;
    errors[field] = ERROR_MESSAGES[field];
  }
  return { isValid: false, errors };
}
