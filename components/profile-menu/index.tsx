"use client";

import { ResetButton } from "@/components/reset-button";
import { UserAvatar } from "@/components/user-avatar";
import { UserDetails } from "@/components/user-details";
import { PROFILE_BUTTON_LABEL, PROFILE_PANEL_ID } from "./constants";
import { useProfileMenu } from "./hooks/useProfileMenu";

export function ProfileMenu() {
  const { isOpen, rootRef, buttonRef, toggle, handleReset } = useProfileMenu();

  return (
    <div ref={rootRef} className="relative hidden md:block">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={PROFILE_PANEL_ID}
        aria-label={PROFILE_BUTTON_LABEL}
        onClick={toggle}
        className="rounded-full"
      >
        <UserAvatar className="size-11" />
      </button>
      <div
        id={PROFILE_PANEL_ID}
        hidden={!isOpen}
        className="absolute top-full right-0 z-30 mt-2 grid w-60 gap-3 rounded-sm border border-border-strong bg-surface p-4 shadow-overlay"
      >
        <UserDetails />
        <ResetButton className="-ml-3" onReset={handleReset} />
      </div>
    </div>
  );
}
