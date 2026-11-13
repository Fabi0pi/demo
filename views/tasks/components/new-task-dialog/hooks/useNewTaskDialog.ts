"use client";

import { useId } from "react";
import type { RefObject } from "react";
import type { NewTask } from "@/lib/tasks/task";
import { useNewTaskForm } from "./useNewTaskForm";

type Options = {
  dialogRef: RefObject<HTMLDialogElement | null>;
  onCreate: (task: NewTask) => void;
  onClose: () => void;
};

/** The dialog's behaviour: ids for its labels, the form, and a clean reset on close. */
export function useNewTaskDialog({ dialogRef, onCreate, onClose }: Options) {
  const id = useId();
  const form = useNewTaskForm((task) => {
    onCreate(task);
    dialogRef.current?.close();
  });

  function handleClose() {
    form.clearErrors();
    dialogRef.current?.querySelector("form")?.reset();
    onClose();
  }

  return {
    headingId: `${id}-heading`,
    introId: `${id}-intro`,
    fieldIdPrefix: `${id}-field`,
    errors: form.errors,
    handleSubmit: form.handleSubmit,
    clearError: form.clearError,
    handleClose,
    close: () => dialogRef.current?.close(),
  };
}
