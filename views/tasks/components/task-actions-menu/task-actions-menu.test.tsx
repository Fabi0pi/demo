import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { makeTask } from "@/lib/tasks/test-fixtures";
import { TaskActionsMenu } from ".";

function renderMenu() {
  const onToggleStatus = vi.fn();
  const onDelete = vi.fn();
  render(<TaskActionsMenu task={makeTask({ title: "Docs" })} onToggleStatus={onToggleStatus} onDelete={onDelete} />);
  return { onToggleStatus, onDelete, button: screen.getByRole("button", { name: "More actions: Docs" }) };
}

describe("TaskActionsMenu", () => {
  it("opens on the last item with ArrowUp and wraps with ArrowDown", async () => {
    const user = userEvent.setup();
    const { button } = renderMenu();
    button.focus();
    await user.keyboard("{ArrowUp}");
    expect(await screen.findByRole("menuitem", { name: "Delete task" })).toHaveFocus();
    await user.keyboard("{ArrowDown}");
    expect(screen.getByRole("menuitem", { name: "Mark ready" })).toHaveFocus();
  });

  it("runs the chosen action and closes", async () => {
    const user = userEvent.setup();
    const { button, onToggleStatus } = renderMenu();
    await user.click(button);
    await user.click(screen.getByRole("menuitem", { name: "Mark ready" }));
    expect(onToggleStatus).toHaveBeenCalledOnce();
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
  });

  it("closes with Escape and returns focus to the button", async () => {
    const user = userEvent.setup();
    const { button } = renderMenu();
    await user.click(button);
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    expect(button).toHaveFocus();
  });
});
