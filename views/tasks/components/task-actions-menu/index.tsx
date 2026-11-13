"use client";

import { Icon } from "@/components/ui/icon";
import type { Task } from "@/lib/tasks/task";
import type { TaskActions } from "../../types";
import { MenuItem } from "./components/menu-item";
import { useTaskActionsMenu } from "./hooks/useTaskActionsMenu";

type TaskActionsMenuProps = TaskActions & { task: Task };

export function TaskActionsMenu({ task, onToggleStatus, onDelete }: TaskActionsMenuProps) {
  const {
    isOpen,
    rootRef,
    buttonRef,
    menuRef,
    menuId,
    buttonId,
    label,
    statusLabel,
    toggle,
    toggleStatus,
    deleteTask,
    handleButtonKeyDown,
    handleMenuKeyDown,
  } = useTaskActionsMenu(task, { onToggleStatus, onDelete });

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        id={buttonId}
        type="button"
        aria-label={label}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={isOpen ? menuId : undefined}
        onClick={toggle}
        onKeyDown={handleButtonKeyDown}
        className="grid size-11 place-items-center rounded-sm text-muted-foreground hover:bg-surface-hover hover:text-foreground aria-expanded:bg-surface-hover"
      >
        <Icon name="more" />
      </button>
      {isOpen && (
        <div
          ref={menuRef}
          id={menuId}
          role="menu"
          aria-label={label}
          onKeyDown={handleMenuKeyDown}
          className="absolute top-full right-0 z-20 mt-1 grid w-48 rounded-sm border border-border-strong bg-surface p-1 shadow-overlay"
        >
          <MenuItem onSelect={toggleStatus}>{statusLabel}</MenuItem>
          <MenuItem onSelect={deleteTask} isDestructive>
            Delete task
          </MenuItem>
        </div>
      )}
    </div>
  );
}
