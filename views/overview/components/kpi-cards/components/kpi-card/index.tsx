import { cn } from "@/lib/cn";
import type { Metric } from "../../../../types";
import { COUNT_DIGITS } from "../../constants";

export function KpiCard({ label, value, isHighlighted }: Metric) {
  return (
    <div className="flex flex-col-reverse gap-2 rounded-sm border border-border bg-surface p-4">
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className={cn("text-3xl font-semibold tabular-nums", isHighlighted && "text-highlight")}>
        {String(value).padStart(COUNT_DIGITS, "0")}
      </dd>
    </div>
  );
}
