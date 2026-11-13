"use client";

import { useId } from "react";
import type { RefObject } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import type { NewTask } from "@/lib/tasks/task";
import { useNewTaskForm } from "../../hooks/useNewTaskForm";
import type { NewTaskField } from "../../utils/validate-new-task";

type NewTaskDialogProps = {
  dialogRef: RefObject<HTMLDialogElement | null>;
  onCreate: (task: NewTask) => void;
  onClose: () => void;
};

const FIELDS: readonly { name: NewTaskField; label: string; multiline?: boolean }[] = [
  { name: "title", label: "Task name" },
  { name: "area", label: "Category" },
  { name: "description", label: "Description", multiline: true },
];

const CONTROL = "w-full rounded-sm border border-border-strong bg-background px-3 py-2 text-sm aria-invalid:border-danger";

/** A native modal dialog: it traps focus, closes with Escape and makes the page behind it inert. */
export function NewTaskDialog({ dialogRef, onCreate, onClose }: NewTaskDialogProps) {
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

  return (
    <dialog ref={dialogRef} aria-labelledby={`${id}-heading`} aria-describedby={`${id}-intro`} onClose={handleClose} className="m-auto w-[min(100%-2rem,28rem)] rounded-md border border-border-strong bg-surface p-6 text-foreground shadow-overlay backdrop:bg-background/70">
      <form noValidate onSubmit={form.handleSubmit} className="grid gap-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id={`${id}-heading`} className="text-lg font-bold">Create a task</h2>
            <p id={`${id}-intro`} className="mt-1 text-sm text-muted-foreground">Add one small piece of work to this release.</p>
          </div>
          <button type="button" aria-label="Close dialog" onClick={() => dialogRef.current?.close()} className="grid size-11 shrink-0 place-items-center rounded-sm border border-border">
            <Icon name="close" className="size-4" />
          </button>
        </div>
        {FIELDS.map(({ name, label, multiline }) => {
          const error = form.errors[name];
          const fieldProps = { id: `${id}-field-${name}`, name, "aria-invalid": Boolean(error), "aria-describedby": error ? `${id}-field-${name}-error` : undefined, onChange: () => form.clearError(name) };
          return (
            <div key={name} className="grid gap-1.5">
              <label htmlFor={fieldProps.id} className="text-sm font-semibold">{label}</label>
              {multiline ? <textarea {...fieldProps} rows={3} className={CONTROL} /> : <input {...fieldProps} className={`${CONTROL} min-h-11`} />}
              {error && <p id={`${id}-field-${name}-error`} className="text-sm text-danger">{error}</p>}
            </div>
          );
        })}
        <Button type="submit" variant="primary">Create task</Button>
      </form>
    </dialog>
  );
}
