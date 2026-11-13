import type { Metadata } from "next";
import { ActivityView } from "@/views/activity";

export const metadata: Metadata = { title: "Activity" };

export default function ActivityPage() {
  return <ActivityView />;
}
