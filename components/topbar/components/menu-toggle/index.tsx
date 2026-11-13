import type { RefObject } from "react";
import { Icon } from "@/components/ui/icon";

type MenuToggleProps = {
  menuId: string;
  isOpen: boolean;
  onToggle: () => void;
  buttonRef: RefObject<HTMLButtonElement | null>;
};

export function MenuToggle({ menuId, isOpen, onToggle, buttonRef }: MenuToggleProps) {
  return (
    <button
      ref={buttonRef}
      type="button"
      aria-label={isOpen ? "Close navigation" : "Open navigation"}
      aria-expanded={isOpen}
      aria-controls={menuId}
      onClick={onToggle}
      className="grid size-11 place-items-center rounded-sm border border-border md:hidden"
    >
      <Icon name={isOpen ? "close" : "menu"} />
    </button>
  );
}
