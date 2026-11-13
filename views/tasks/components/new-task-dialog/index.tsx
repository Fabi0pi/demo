"use client";

import type { RefObject } from "react";
import { Button } from "@/components/ui/button";
import type { NewTask } from "@/lib/tasks/task";
import { DialogHeader } from "./components/dialog-header";
import { FormField } from "./components/form-field";
import { NEW_TASK_FIELDS } from "./constants";
import { useNewTaskDialog } from "./hooks/useNewTaskDialog";

type NewTaskDialogProps = {
  dialogRef: RefObject<HTMLDialogElement | null>;
  onCreate: (task: NewTask) => void;
  onClose: () => void;
};

export function NewTaskDialog({
  dialogRef,
  onCreate,
  onClose,
}: NewTaskDialogProps) {
  const {
    headingId,
    introId,
    fieldIdPrefix,
    errors,
    handleSubmit,
    clearError,
    handleClose,
    close,
  } = useNewTaskDialog({ dialogRef, onCreate, onClose });

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={headingId}
      aria-describedby={introId}
      onClose={handleClose}
      className="m-auto w-[min(100%-2rem,28rem)] rounded-md border border-border-strong bg-surface p-6 text-foreground shadow-overlay backdrop:bg-background/70"
    >
      <form noValidate onSubmit={handleSubmit} className="grid gap-5">
        <DialogHeader headingId={headingId} introId={introId} onClose={close} />
        {NEW_TASK_FIELDS.map((field) => (
          <FormField
            key={field.name}
            {...field}
            id={`${fieldIdPrefix}-${field.name}`}
            error={errors[field.name]}
            onChange={() => clearError(field.name)}
          />
        ))}
        <Button type="submit" variant="primary">
          Create task
        </Button>
      </form>
    </dialog>
  );
}
