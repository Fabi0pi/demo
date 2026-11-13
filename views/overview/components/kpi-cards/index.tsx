import type { Metric } from "../../types";
import { KpiCard } from "./components/kpi-card";

export function KpiCards({ metrics }: { metrics: readonly Metric[] }) {
  return (
    <dl className="grid grid-cols-3 gap-3">
      {metrics.map((metric) => (
        <KpiCard key={metric.label} {...metric} />
      ))}
    </dl>
  );
}
