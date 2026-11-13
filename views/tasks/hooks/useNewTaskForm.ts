"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { flushSync } from "react-dom";
import type { NewTask } from "@/lib/tasks/task";
import { NEW_TASK_FIELDS, validateNewTask } from "../utils/validate-new-task";
import type { FieldErrors, NewTaskField } from "../utils/validate-new-task";

/** Validates on submit; on errors, focus goes to the first invalid field. */
export function useNewTaskForm(onValid: (task: NewTask) => void) {
  const [errors, setErrors] = useState<FieldErrors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const result = validateNewTask({ title: data.get("title"), area: data.get("area"), description: data.get("description") });
    if (!result.isValid) {
      // Render the messages first, so the focused field is already described by its error.
      flushSync(() => setErrors(result.errors));
      const firstInvalid = NEW_TASK_FIELDS.find((field) => result.errors[field]);
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    onValid(result.task);
    form.reset();
    setErrors({});
  }

  return {
    errors,
    handleSubmit,
    clearError: (field: NewTaskField) => setErrors((current) => ({ ...current, [field]: undefined })),
    clearErrors: () => setErrors({}),
  };
}
