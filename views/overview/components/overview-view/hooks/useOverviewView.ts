"use client";

import { useDesk } from "@/hooks/useDesk";
import { buildMetrics } from "../utils/build-metrics";

/** What the overview shows: the headline numbers and the release readiness. */
export function useOverviewView() {
  const { readiness } = useDesk();

  return {
    readiness,
    metrics: buildMetrics(readiness),
  };
}
