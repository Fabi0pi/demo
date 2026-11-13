import "server-only";
import { z } from "zod";
import { taskSchema } from "./task";
import type { Task } from "./task";

/**
 * Fictional sample data. It stands in for a backend: read on the server,
 * validated at the boundary, and sent to the client as plain props.
 */
const SAMPLE_TASKS: unknown = [
  { id: "checkout", title: "Checkout forms", area: "Commerce", summary: "A calmer path through payment details.", detail: "Review field labels, inline errors, and the route from payment to confirmation.", checks: ["Errors explain the next step", "Keyboard order follows the form"], status: "review" },
  { id: "navigation", title: "Site navigation", area: "Foundation", summary: "A menu that stays predictable.", detail: "Check that primary routes remain easy to find across desktop and narrow layouts.", checks: ["Current location is named", "Touch targets have room"], status: "ready" },
  { id: "search", title: "Search results", area: "Discovery", summary: "Useful feedback at every query.", detail: "Make filtering feel immediate without leaving anyone guessing when the results change.", checks: ["Result count is announced", "Empty state offers a next move"], status: "review" },
  { id: "account", title: "Account settings", area: "Profile", summary: "Preferences without friction.", detail: "Keep each setting understandable, with confirmation close to the control that changed.", checks: ["Controls have clear names", "Saved state is visible"], status: "review" },
];

export async function getSampleTasks(): Promise<Task[]> {
  return z.array(taskSchema).parse(SAMPLE_TASKS);
}
