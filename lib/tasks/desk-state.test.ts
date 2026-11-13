import { describe, expect, it } from "vitest";
import { buildTask, createDeskState, deskReducer, hasChanges } from "./desk-state";
import { makeTask } from "./test-fixtures";

const initial = [makeTask({ id: "a", title: "Alpha" }), makeTask({ id: "b", title: "Beta", status: "ready" })];

describe("createDeskState", () => {
  it("starts with a sample history that matches the tasks", () => {
    expect(createDeskState(initial).activity).toEqual([
      { id: "sample-status", kind: "status", title: "Beta", status: "ready" },
      { id: "sample-created", kind: "created", title: "Alpha" },
    ]);
  });
});

describe("deskReducer", () => {
  it("toggles a status and records it", () => {
    const state = deskReducer(createDeskState(initial), { type: "toggle-status", id: "a", entryId: "1" });
    expect(state.tasks[0]?.status).toBe("ready");
    expect(state.activity[0]).toEqual({ id: "1", kind: "status", title: "Alpha", status: "ready" });
  });

  it("adds a created task first, in review", () => {
    const task = buildTask({ title: "Gamma", area: "Docs", description: "Write it" }, "c");
    const state = deskReducer(createDeskState(initial), { type: "create", task, entryId: "2" });
    expect(state.tasks.map(({ id }) => id)).toEqual(["c", "a", "b"]);
    expect(state.tasks[0]).toMatchObject({ status: "review", summary: "Write it", detail: "Write it" });
  });

  it("deletes a task and records its title", () => {
    const state = deskReducer(createDeskState(initial), { type: "delete", id: "b", entryId: "3" });
    expect(state.tasks.map(({ id }) => id)).toEqual(["a"]);
    expect(state.activity[0]).toEqual({ id: "3", kind: "deleted", title: "Beta" });
  });

  it("ignores actions on a task that no longer exists", () => {
    const state = createDeskState(initial);
    expect(deskReducer(state, { type: "delete", id: "missing", entryId: "4" })).toBe(state);
  });

  it("restores the sample tasks and history", () => {
    const changed = deskReducer(createDeskState(initial), { type: "delete", id: "a", entryId: "5" });
    expect(deskReducer(changed, { type: "restore", tasks: initial })).toEqual(createDeskState(initial));
  });

  it("keeps the history bounded", () => {
    let state = createDeskState(initial);
    for (let step = 0; step < 40; step += 1) state = deskReducer(state, { type: "toggle-status", id: "a", entryId: String(step) });
    expect(state.activity).toHaveLength(30);
  });
});

describe("hasChanges", () => {
  it("is false for the sample and true after any change", () => {
    expect(hasChanges(initial, initial)).toBe(false);
    expect(hasChanges([initial[0]!], initial)).toBe(true);
    expect(hasChanges([{ ...initial[0]!, status: "ready" }, initial[1]!], initial)).toBe(true);
  });
});
