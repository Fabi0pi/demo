"use client";

import { useDesk } from "@/hooks/useDesk";
import type { ActivityItem } from "../../../types";
import { describeEntry } from "../utils/describe-entry";

/** The history as sentences, newest first. */
export function useActivityView() {
  const { activity } = useDesk();
  const items: ActivityItem[] = activity.map((entry) => ({ id: entry.id, text: describeEntry(entry) }));

  return { items, hasActivity: items.length > 0 };
}
