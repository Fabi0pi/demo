import { SEARCH_INPUT_ID } from "../../task-toolbar/constants";

/**
 * After a row changes, keep focus near where the user was: the first of the
 * given rows that still exists, otherwise the search field.
 */
export function focusAfterChange(taskIds: readonly string[]): void {
  requestAnimationFrame(() => {
    const row = taskIds
      .map((id) => document.getElementById(`task-actions-${id}`))
      .find(Boolean);
    (row ?? document.getElementById(SEARCH_INPUT_ID))?.focus();
  });
}
