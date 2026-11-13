import { describe, expect, it } from "vitest";
import { validateNewTask } from "./validate-new-task";

describe("validateNewTask", () => {
  it("accepts complete values and trims them", () => {
    expect(validateNewTask({ title: " Docs ", area: "Content", description: "Write the guide" })).toEqual({
      isValid: true,
      task: { title: "Docs", area: "Content", description: "Write the guide" },
    });
  });

  it("returns one readable error per empty field", () => {
    expect(validateNewTask({ title: "", area: "   ", description: "Ok" })).toEqual({
      isValid: false,
      errors: { title: "Enter a task name.", area: "Enter a category." },
    });
  });
});
