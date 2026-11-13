import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import { GLYPHS } from "./glyphs";
import type { GlyphName } from "./glyphs";

type IconProps = Omit<ComponentProps<"svg">, "children"> & { name: GlyphName };

export function Icon({ name, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={cn("size-5 shrink-0", className)}
      {...props}
    >
      <path d={GLYPHS[name]} />
    </svg>
  );
}
