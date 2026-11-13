"use client";

import type { RefObject } from "react";
import { usePathname } from "next/navigation";
import { findNavItem } from "@/components/main-nav/utils/find-nav-item";
import { ProfileMenu } from "@/components/profile-menu";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

type TopbarProps = {
  menuId: string;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onNewTask: () => void;
  menuButtonRef: RefObject<HTMLButtonElement | null>;
  newTaskRef: RefObject<HTMLButtonElement | null>;
};

export function Topbar({ menuId, isMenuOpen, onToggleMenu, onNewTask, menuButtonRef, newTaskRef }: TopbarProps) {
  const current = findNavItem(usePathname());

  return (
    <header className="flex min-h-16 items-center gap-3 border-b border-border px-4 md:px-6">
      <button ref={menuButtonRef} type="button" aria-label={isMenuOpen ? "Close navigation" : "Open navigation"} aria-expanded={isMenuOpen} aria-controls={menuId} onClick={onToggleMenu} className="grid size-11 place-items-center rounded-sm border border-border md:hidden">
        <Icon name={isMenuOpen ? "close" : "menu"} />
      </button>
      <p className="flex min-w-0 items-center gap-2 text-sm text-muted-foreground">
        <span className="hidden sm:inline">Release Desk</span>
        <span aria-hidden="true" className="hidden sm:inline">/</span>
        <span className="font-medium text-foreground">{current.label}</span>
      </p>
      <Button ref={newTaskRef} variant="primary" onClick={onNewTask} className="ml-auto">
        <Icon name="plus" />
        <span>New task</span>
      </Button>
      <ProfileMenu />
    </header>
  );
}
