"use client";

import type { RefObject } from "react";
import { ProfileMenu } from "@/components/profile-menu";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Breadcrumb } from "./components/breadcrumb";
import { MenuToggle } from "./components/menu-toggle";
import { useTopbar } from "./hooks/useTopbar";

type TopbarProps = {
  menuId: string;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onNewTask: () => void;
  menuButtonRef: RefObject<HTMLButtonElement | null>;
  newTaskRef: RefObject<HTMLButtonElement | null>;
};

export function Topbar({ menuId, isMenuOpen, onToggleMenu, onNewTask, menuButtonRef, newTaskRef }: TopbarProps) {
  const { currentPage } = useTopbar();

  return (
    <header className="flex min-h-16 items-center gap-3 border-b border-border px-4 md:px-6">
      <MenuToggle menuId={menuId} isOpen={isMenuOpen} onToggle={onToggleMenu} buttonRef={menuButtonRef} />
      <Breadcrumb currentPage={currentPage} />
      <Button ref={newTaskRef} variant="primary" onClick={onNewTask} className="ml-auto">
        <Icon name="plus" />
        <span>New task</span>
      </Button>
      <ProfileMenu />
    </header>
  );
}
