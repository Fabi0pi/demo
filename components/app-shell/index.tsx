"use client";

import type { ReactNode } from "react";
import { MobileMenu } from "@/components/mobile-menu";
import { NoticeBanner } from "@/components/notice-banner";
import { Sidebar } from "@/components/sidebar";
import { Topbar } from "@/components/topbar";
import { NewTaskDialog } from "@/views/tasks";
import { useAppShell } from "./hooks/useAppShell";

const MOBILE_MENU_ID = "mobile-navigation";

export function AppShell({ children }: { children: ReactNode }) {
  const {
    isMenuOpen,
    headerRef,
    menuButtonRef,
    newTaskRef,
    dialogRef,
    closeMenu,
    toggleMenu,
    openNewTask,
    returnFocusToNewTask,
    handleCreate,
  } = useAppShell();

  return (
    <div className="flex min-h-dvh">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <div ref={headerRef} className="relative">
          <Topbar
            menuId={MOBILE_MENU_ID}
            isMenuOpen={isMenuOpen}
            onToggleMenu={toggleMenu}
            onNewTask={openNewTask}
            menuButtonRef={menuButtonRef}
            newTaskRef={newTaskRef}
          />
          <MobileMenu
            id={MOBILE_MENU_ID}
            isOpen={isMenuOpen}
            onClose={closeMenu}
          />
        </div>
        <main
          inert={isMenuOpen}
          className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 md:px-8"
        >
          {children}
        </main>
      </div>
      <NoticeBanner />
      <NewTaskDialog
        dialogRef={dialogRef}
        onCreate={handleCreate}
        onClose={returnFocusToNewTask}
      />
    </div>
  );
}
