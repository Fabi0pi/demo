"use client";

import { useId } from "react";
import { Icon } from "@/components/ui/icon";
import type { Task } from "@/lib/tasks/task";
import { useMenu } from "../../hooks/useMenu";

type TaskActionsMenuProps = { task: Task; onToggleStatus: () => void; onDelete: () => void };

const ITEM = "flex min-h-11 w-full items-center px-3 text-left text-sm rounded-sm hover:bg-surface-hover focus-visible:bg-surface-hover";

export function TaskActionsMenu({ task, onToggleStatus, onDelete }: TaskActionsMenuProps) {
  const { isOpen, rootRef, buttonRef, menuRef, toggle, close, handleButtonKeyDown, handleMenuKeyDown } = useMenu();
  const menuId = useId();
  const label = `More actions: ${task.title}`;

  function run(action: () => void) {
    close();
    action();
  }

  return (
    <div ref={rootRef} className="relative">
      <button ref={buttonRef} id={`task-actions-${task.id}`} type="button" aria-label={label} aria-haspopup="menu" aria-expanded={isOpen} aria-controls={isOpen ? menuId : undefined} onClick={toggle} onKeyDown={handleButtonKeyDown} className="grid size-11 place-items-center rounded-sm text-muted-foreground hover:bg-surface-hover hover:text-foreground aria-expanded:bg-surface-hover">
        <Icon name="more" />
      </button>
      {isOpen && (
        <div ref={menuRef} id={menuId} role="menu" aria-label={label} onKeyDown={handleMenuKeyDown} className="absolute top-full right-0 z-20 mt-1 grid w-48 rounded-sm border border-border-strong bg-surface p-1 shadow-overlay">
          <button type="button" role="menuitem" tabIndex={-1} onClick={() => run(onToggleStatus)} className={ITEM}>
            {task.status === "review" ? "Mark ready" : "Move to review"}
          </button>
          <button type="button" role="menuitem" tabIndex={-1} onClick={() => run(onDelete)} className={`${ITEM} border-t border-border text-danger`}>
            Delete task
          </button>
        </div>
      )}
    </div>
  );
}
