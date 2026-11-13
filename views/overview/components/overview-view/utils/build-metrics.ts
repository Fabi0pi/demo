import { STATUS_LABELS } from "@/lib/tasks/labels";
import type { Readiness } from "@/lib/tasks/readiness";
import type { Metric } from "../../../types";

/** The overview's headline numbers, in display order. */
export function buildMetrics(readiness: Readiness): Metric[] {
  return [
    { label: "Total tasks", value: readiness.total },
    { label: STATUS_LABELS.review, value: readiness.review },
    { label: STATUS_LABELS.ready, value: readiness.ready, isHighlighted: true },
  ];
}
