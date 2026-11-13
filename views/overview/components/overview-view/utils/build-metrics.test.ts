import { describe, expect, it } from "vitest";
import { buildMetrics } from "./build-metrics";

describe("buildMetrics", () => {
  it("lists total, in review and ready, highlighting ready", () => {
    expect(buildMetrics({ total: 4, review: 3, ready: 1, percentage: 25 })).toEqual([
      { label: "Total tasks", value: 4 },
      { label: "In review", value: 3 },
      { label: "Ready", value: 1, isHighlighted: true },
    ]);
  });
});
