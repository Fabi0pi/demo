import { describe, expect, it } from "vitest";
import { describeEntry } from "./describe-entry";

describe("describeEntry", () => {
  it("words every kind of entry", () => {
    expect(describeEntry({ id: "1", kind: "created", title: "Docs" })).toBe("Task created: Docs");
    expect(describeEntry({ id: "2", kind: "deleted", title: "Docs" })).toBe("Task deleted: Docs");
    expect(describeEntry({ id: "3", kind: "status", title: "Docs", status: "ready" })).toBe("Docs · Ready");
  });
});
