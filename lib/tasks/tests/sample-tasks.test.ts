import { describe, expect, it, vi } from "vitest";

// `server-only` throws outside a React Server environment; the data itself is plain.
vi.mock("server-only", () => ({}));

const { getSampleTasks } = await import("../sample-tasks");

describe("getSampleTasks", () => {
  it("returns valid sample tasks with unique ids", async () => {
    const tasks = await getSampleTasks();
    expect(tasks.length).toBeGreaterThan(0);
    expect(new Set(tasks.map(({ id }) => id)).size).toBe(tasks.length);
  });
});
