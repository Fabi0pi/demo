"use client";

import Link from "next/link";
import { ViewHeading } from "@/components/view-heading";
import { useDesk } from "@/hooks/useDesk";
import { ActivityList } from "../activity-list";

export function ActivityView() {
  const { activity } = useDesk();

  return (
    <>
      <ViewHeading title="Activity" description="Every change, in one place." />
      {activity.length > 0 ? (
        <ActivityList entries={activity} />
      ) : (
        <div className="grid justify-items-start gap-3 rounded-sm border border-dashed border-border-strong p-6 text-sm text-muted-foreground">
          <p>Your changes will appear here. Try completing a task.</p>
          <Link href="/tasks" className="font-medium text-highlight underline underline-offset-4">View all tasks</Link>
        </div>
      )}
    </>
  );
}
