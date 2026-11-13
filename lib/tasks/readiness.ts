import type { Task } from "./task";

export type Readiness = { total: number; ready: number; review: number; percentage: number };

const PERCENT = 100;

/** How close the release is to shipping. */
export function getReadiness(tasks: readonly Task[]): Readiness {
  const ready = tasks.filter((task) => task.status === "ready").length;
  const total = tasks.length;
  return { total, ready, review: total - ready, percentage: total ? Math.round((ready / total) * PERCENT) : 0 };
}
