import { describe, expect, it } from "vitest";
import { getReadiness } from "../readiness";
import { makeTask } from "./fixtures";

describe("getReadiness", () => {
  it("counts ready and in-review tasks and rounds the percentage", () => {
    const tasks = [makeTask({ status: "ready" }), makeTask(), makeTask()];
    expect(getReadiness(tasks)).toEqual({ total: 3, ready: 1, review: 2, percentage: 33 });
  });

  it("is 0% with no tasks instead of dividing by zero", () => {
    expect(getReadiness([])).toEqual({ total: 0, ready: 0, review: 0, percentage: 0 });
  });
});
