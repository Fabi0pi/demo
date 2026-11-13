import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import { BUTTON_BASE, BUTTON_VARIANTS } from "./constants";
import type { ButtonVariant } from "./constants";

type ButtonProps = ComponentProps<"button"> & { variant?: ButtonVariant };

export function Button({ variant = "secondary", type = "button", className, ...props }: ButtonProps) {
  return <button type={type} className={cn(BUTTON_BASE, BUTTON_VARIANTS[variant], className)} {...props} />;
}
