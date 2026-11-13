import { describe, expect, it } from "vitest";
import { findNavItem } from "./find-nav-item";

describe("findNavItem", () => {
  it("finds the page for a pathname", () => {
    expect(findNavItem("/tasks").label).toBe("Tasks");
  });

  it("falls back to the first page for an unknown path", () => {
    expect(findNavItem("/missing").label).toBe("Overview");
  });
});
