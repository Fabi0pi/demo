"use client";

import { ViewHeading } from "@/components/view-heading";
import { KpiCards } from "../kpi-cards";
import { ReadinessProgress } from "../readiness-progress";
import { useOverviewView } from "./hooks/useOverviewView";

export function OverviewView() {
  const { metrics, readiness } = useOverviewView();

  return (
    <>
      <ViewHeading title="Overview" description="Your release, at a glance." />
      <KpiCards metrics={metrics} />
      <ReadinessProgress readiness={readiness} />
    </>
  );
}
