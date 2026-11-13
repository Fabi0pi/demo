import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ComponentProps<"button"> & { variant?: ButtonVariant };

const BASE =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-4 text-sm font-medium " +
  "transition-colors duration-(--duration-fast) disabled:opacity-50";

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-accent text-accent-foreground hover:enabled:opacity-90",
  secondary: "border border-border-strong text-foreground hover:enabled:bg-surface-hover",
  ghost: "text-muted-foreground hover:enabled:bg-surface-hover hover:enabled:text-foreground",
};

export function Button({ variant = "secondary", type = "button", className, ...props }: ButtonProps) {
  return <button type={type} className={cn(BASE, VARIANTS[variant], className)} {...props} />;
}
