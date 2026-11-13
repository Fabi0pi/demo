import type { NewTaskField, NewTaskFieldConfig } from "../../types";

export const NEW_TASK_FIELDS: readonly NewTaskFieldConfig[] = [
  { name: "title", label: "Task name" },
  { name: "area", label: "Category" },
  { name: "description", label: "Description", isMultiline: true },
];

export const ERROR_MESSAGES: Readonly<Record<NewTaskField, string>> = {
  title: "Enter a task name.",
  area: "Enter a category.",
  description: "Enter a description.",
};
