import { describe, expect, it } from "vitest";
import { filterTasks } from "../filter-tasks";
import { makeTask } from "./fixtures";

const tasks = [
  makeTask({ id: "checkout", title: "Checkout forms", area: "Commerce", status: "review" }),
  makeTask({ id: "navigation", title: "Site navigation", area: "Foundation", status: "ready" }),
];

describe("filterTasks", () => {
  it("returns every task with no query and the 'all' filter", () => {
    expect(filterTasks(tasks, { query: "", status: "all" })).toHaveLength(2);
  });

  it("filters by status", () => {
    expect(filterTasks(tasks, { query: "", status: "ready" }).map(({ id }) => id)).toEqual(["navigation"]);
  });

  it("searches title, area and summary, ignoring case and surrounding spaces", () => {
    expect(filterTasks(tasks, { query: "  COMMERCE ", status: "all" }).map(({ id }) => id)).toEqual(["checkout"]);
  });

  it("combines search and status", () => {
    expect(filterTasks(tasks, { query: "checkout", status: "ready" })).toEqual([]);
  });
});
