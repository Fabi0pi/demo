import type { NewTask } from "@/lib/tasks/task";

export type NewTaskField = keyof NewTask;

export type FieldErrors = Partial<Record<NewTaskField, string>>;

export type NewTaskValidation =
  | { isValid: true; task: NewTask }
  | { isValid: false; errors: FieldErrors };

export type NewTaskFieldConfig = {
  name: NewTaskField;
  label: string;
  isMultiline?: boolean;
};

export type TaskActions = {
  onToggleStatus: () => void;
  onDelete: () => void;
};
