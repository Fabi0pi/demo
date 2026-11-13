"use client";

import { createContext, useContext } from "react";
import type { useDeskState } from "./useDeskState";
import type { useNotice } from "./useNotice";

export type DeskContextValue = ReturnType<typeof useDeskState> & ReturnType<typeof useNotice>;

export const DeskContext = createContext<DeskContextValue | null>(null);

/** The desk shared by every view: tasks, history, actions and the notice. */
export function useDesk(): DeskContextValue {
  const desk = useContext(DeskContext);
  if (!desk) throw new Error("useDesk must be used inside <DeskProvider>.");
  return desk;
}
