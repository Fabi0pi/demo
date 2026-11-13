"use client";

import { useRef, useState } from "react";
import { ResetButton } from "@/components/reset-button";
import { useDismiss } from "@/hooks/useDismiss";

export function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const close = () => setIsOpen(false);
  useDismiss(isOpen, close, [rootRef]);

  return (
    <div ref={rootRef} className="relative hidden md:block">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="profile-panel"
        aria-label="FA, demo profile"
        onClick={() => setIsOpen(!isOpen)}
        className="grid size-11 place-items-center rounded-full border border-accent/45 bg-accent-subtle font-mono text-xs font-bold text-accent"
      >
        <span aria-hidden="true">FA</span>
      </button>
      <div
        id="profile-panel"
        hidden={!isOpen}
        className="absolute top-full right-0 z-30 mt-2 w-60 rounded-sm border border-border-strong bg-surface p-4 shadow-overlay"
      >
        <p className="font-semibold">Fabio</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Frontend developer · Demo
        </p>
        <ResetButton
          className="mt-3 -ml-3"
          onReset={() => {
            close();
            buttonRef.current?.focus();
          }}
        />
      </div>
    </div>
  );
}
