import type { Readiness } from "@/lib/tasks/readiness";
import { MIN_PROGRESS_MAX, READINESS_LABEL_ID } from "./constants";

export function ReadinessProgress({ readiness }: { readiness: Readiness }) {
  return (
    <section
      aria-labelledby={READINESS_LABEL_ID}
      className="mt-4 rounded-sm border border-border bg-surface p-4"
    >
      <div className="flex items-center justify-between">
        <h2 id={READINESS_LABEL_ID} className="font-semibold">
          Release readiness
        </h2>
        <strong className="font-mono text-highlight">{readiness.percentage}%</strong>
      </div>
      <progress
        aria-labelledby={READINESS_LABEL_ID}
        value={readiness.ready}
        max={Math.max(MIN_PROGRESS_MAX, readiness.total)}
        className="mt-3 block h-2 w-full overflow-hidden rounded-full accent-highlight [&::-moz-progress-bar]:bg-highlight [&::-webkit-progress-bar]:bg-border [&::-webkit-progress-value]:bg-highlight"
      />
      <p className="mt-2 flex justify-between gap-2 text-sm text-muted-foreground">
        <span>
          {readiness.ready}/{readiness.total} ready
        </span>
        <span className="hidden sm:inline">One clear view of what is ready to ship.</span>
      </p>
    </section>
  );
}
