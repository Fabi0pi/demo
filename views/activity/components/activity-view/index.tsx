"use client";

import { ViewHeading } from "@/components/view-heading";
import { ActivityEmpty } from "../activity-empty";
import { ActivityList } from "../activity-list";
import { useActivityView } from "./hooks/useActivityView";

export function ActivityView() {
  const { items, hasActivity } = useActivityView();

  return (
    <>
      <ViewHeading title="Activity" description="Every change, in one place." />
      {hasActivity ? <ActivityList items={items} /> : <ActivityEmpty />}
    </>
  );
}
