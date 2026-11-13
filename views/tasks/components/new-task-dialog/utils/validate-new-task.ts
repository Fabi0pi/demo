import { newTaskSchema } from "@/lib/tasks/task";
import type {
  FieldErrors,
  NewTaskField,
  NewTaskValidation,
} from "../../../types";
import { ERROR_MESSAGES } from "../constants";

/** Validates the form's values with the shared schema and words each error for its field. */
export function validateNewTask(
  values: Record<NewTaskField, unknown>,
): NewTaskValidation {
  const result = newTaskSchema.safeParse(values);
  if (result.success) return { isValid: true, task: result.data };

  const errors: FieldErrors = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0] as NewTaskField;
    errors[field] = ERROR_MESSAGES[field];
  }
  return { isValid: false, errors };
}
