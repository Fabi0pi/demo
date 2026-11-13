import type { Readiness } from "@/lib/tasks/readiness";
import { cn } from "@/lib/cn";
import { STATUS_LABELS } from "@/lib/tasks/labels";

const COUNT_DIGITS = 2;

export function KpiCards({ readiness }: { readiness: Readiness }) {
  const metrics = [
    { label: "Total tasks", value: readiness.total },
    { label: STATUS_LABELS.review, value: readiness.review },
    { label: STATUS_LABELS.ready, value: readiness.ready, isHighlighted: true },
  ];

  return (
    <dl className="grid grid-cols-3 gap-3">
      {metrics.map(({ label, value, isHighlighted }) => (
        <div
          key={label}
          className="flex flex-col-reverse gap-2 rounded-sm border border-border bg-surface p-4"
        >
          <dt className="text-sm text-muted-foreground">{label}</dt>
          <dd
            className={cn(
              "text-3xl font-semibold tabular-nums",
              isHighlighted && "text-highlight",
            )}
          >
            {String(value).padStart(COUNT_DIGITS, "0")}
          </dd>
        </div>
      ))}
    </dl>
  );
}
