import { cn } from "@/lib/cn";
import type { NewTaskFieldConfig } from "../../../../types";

type FormFieldProps = NewTaskFieldConfig & {
  id: string;
  error?: string;
  onChange: () => void;
};

const CONTROL =
  "w-full rounded-sm border border-border-strong bg-background px-3 py-2 text-sm aria-invalid:border-danger";

export function FormField({ id, name, label, isMultiline, error, onChange }: FormFieldProps) {
  const errorId = `${id}-error`;
  const controlProps = {
    id,
    name,
    onChange,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? errorId : undefined,
  };

  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
      {isMultiline ? (
        <textarea {...controlProps} rows={3} className={CONTROL} />
      ) : (
        <input {...controlProps} className={cn(CONTROL, "min-h-11")} />
      )}
      {error && (
        <p id={errorId} className="text-sm text-danger">
          {error}
        </p>
      )}
    </div>
  );
}
