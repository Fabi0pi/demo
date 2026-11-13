import { describe, expect, it } from "vitest";
import { rovingIndex } from "./roving-index";

const VERTICAL = { previous: "ArrowUp", next: "ArrowDown" };

describe("rovingIndex", () => {
  it("moves and wraps with the arrow keys", () => {
    expect(rovingIndex("ArrowDown", 0, 3, VERTICAL)).toBe(1);
    expect(rovingIndex("ArrowDown", 2, 3, VERTICAL)).toBe(0);
    expect(rovingIndex("ArrowUp", 0, 3, VERTICAL)).toBe(2);
  });

  it("jumps to the ends with Home and End", () => {
    expect(rovingIndex("Home", 2, 3, VERTICAL)).toBe(0);
    expect(rovingIndex("End", 0, 3, VERTICAL)).toBe(2);
  });

  it("ignores other keys and empty groups", () => {
    expect(rovingIndex("ArrowRight", 0, 3, VERTICAL)).toBeNull();
    expect(rovingIndex("ArrowDown", 0, 0, VERTICAL)).toBeNull();
  });
});
