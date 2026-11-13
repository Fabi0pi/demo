export const BUTTON_BASE =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-4 text-sm font-medium " +
  "transition-colors duration-(--duration-fast) disabled:opacity-50";

export const BUTTON_VARIANTS = {
  primary: "bg-accent text-accent-foreground hover:enabled:opacity-90",
  secondary: "border border-border-strong text-foreground hover:enabled:bg-surface-hover",
  ghost: "text-muted-foreground hover:enabled:bg-surface-hover hover:enabled:text-foreground",
} as const;

export type ButtonVariant = keyof typeof BUTTON_VARIANTS;
