"use client";

import type { ReactNode } from "react";
import { DeskContext } from "@/hooks/useDesk";
import { useDeskState } from "@/hooks/useDeskState";
import { useNotice } from "@/hooks/useNotice";
import type { Task } from "@/lib/tasks/task";

type DeskProviderProps = { initialTasks: readonly Task[]; children: ReactNode };

export function DeskProvider({ initialTasks, children }: DeskProviderProps) {
  const desk = useDeskState(initialTasks);
  const notice = useNotice();

  return <DeskContext value={{ ...desk, ...notice }}>{children}</DeskContext>;
}
