"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useDesk } from "@/hooks/useDesk";
import { useDismiss } from "@/hooks/useDismiss";
import type { NewTask } from "@/lib/tasks/task";

/** The shell's behaviour: the phone menu, the new-task dialog and what happens after a task is created. */
export function useAppShell() {
  const router = useRouter();
  const { createTask, showNotice } = useDesk();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const newTaskRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const closeMenu = () => setIsMenuOpen(false);
  useDismiss(isMenuOpen, closeMenu, [headerRef]);

  function handleCreate(task: NewTask) {
    createTask(task);
    showNotice("Task created");
    router.push("/tasks");
  }

  return {
    isMenuOpen,
    headerRef,
    menuButtonRef,
    newTaskRef,
    dialogRef,
    closeMenu,
    toggleMenu: () => setIsMenuOpen(!isMenuOpen),
    openNewTask: () => dialogRef.current?.showModal(),
    returnFocusToNewTask: () => newTaskRef.current?.focus(),
    handleCreate,
  };
}
