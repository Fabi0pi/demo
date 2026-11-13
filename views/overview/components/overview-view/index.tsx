"use client";

import { ViewHeading } from "@/components/view-heading";
import { useDesk } from "@/hooks/useDesk";
import { KpiCards } from "../kpi-cards";
import { ReadinessProgress } from "../readiness-progress";

export function OverviewView() {
  const { readiness } = useDesk();

  return (
    <>
      <ViewHeading title="Overview" description="Your release, at a glance." />
      <KpiCards readiness={readiness} />
      <ReadinessProgress readiness={readiness} />
    </>
  );
}
