type Keys = { previous: string; next: string };

/**
 * Where focus moves in a group navigated with arrow keys (WAI-ARIA menus,
 * tabs, toolbars): previous/next wrap, Home/End jump to the ends.
 * `null` means the key does not move focus.
 */
export function rovingIndex(key: string, current: number, count: number, keys: Keys): number | null {
  if (count === 0) return null;
  if (key === "Home") return 0;
  if (key === "End") return count - 1;
  if (key === keys.next) return (current + 1) % count;
  if (key === keys.previous) return (current - 1 + count) % count;
  return null;
}
