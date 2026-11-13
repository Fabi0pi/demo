"use client";

import { MainNav } from "@/components/main-nav";
import { ResetButton } from "@/components/reset-button";
import { UserAvatar } from "@/components/user-avatar";
import { UserDetails } from "@/components/user-details";

type MobileMenuProps = { id: string; isOpen: boolean; onClose: () => void };

export function MobileMenu({ id, isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      id={id}
      hidden={!isOpen}
      className="absolute inset-x-0 top-full z-30 border-b border-border-strong bg-surface p-3 shadow-overlay md:hidden"
    >
      <div className="flex items-center gap-3 border-b border-border px-3 pb-4">
        <UserAvatar />
        <UserDetails />
      </div>
      <div className="grid gap-3 pt-3">
        <MainNav layout="list" onNavigate={onClose} />
        <ResetButton className="border-t border-border pt-3" onReset={onClose} />
      </div>
    </div>
  );
}
