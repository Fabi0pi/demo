import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { TaskToolbar } from ".";

describe("TaskToolbar", () => {
  it("marks the active filter as pressed and reports a new one", async () => {
    const onStatusChange = vi.fn();
    render(<TaskToolbar query="" status="all" onQueryChange={vi.fn()} onStatusChange={onStatusChange} />);
    expect(screen.getByRole("button", { name: "All" })).toHaveAttribute("aria-pressed", "true");
    await userEvent.click(screen.getByRole("button", { name: "Ready" }));
    expect(onStatusChange).toHaveBeenCalledWith("ready");
  });

  it("offers a clear button only while there is a search", async () => {
    const onQueryChange = vi.fn();
    const { rerender } = render(<TaskToolbar query="" status="all" onQueryChange={onQueryChange} onStatusChange={vi.fn()} />);
    expect(screen.queryByRole("button", { name: "Clear search" })).not.toBeInTheDocument();
    rerender(<TaskToolbar query="docs" status="all" onQueryChange={onQueryChange} onStatusChange={vi.fn()} />);
    await userEvent.click(screen.getByRole("button", { name: "Clear search" }));
    expect(onQueryChange).toHaveBeenCalledWith("");
  });
});
