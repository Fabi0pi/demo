"use client";

import { MainNav } from "@/components/main-nav";
import { ResetButton } from "@/components/reset-button";

type MobileMenuProps = { id: string; isOpen: boolean; onClose: () => void };

export function MobileMenu({ id, isOpen, onClose }: MobileMenuProps) {
  return (
    <div id={id} hidden={!isOpen} className="absolute inset-x-0 top-full z-30 border-b border-border-strong bg-surface p-3 shadow-overlay md:hidden">
      <div className="flex items-center gap-3 border-b border-border px-3 pb-4">
        <span aria-hidden="true" className="grid size-10 place-items-center rounded-full border border-accent/45 bg-accent-subtle font-mono text-xs font-bold text-accent">FA</span>
        <p><span className="block font-semibold">Fabio</span><span className="text-sm text-muted-foreground">Frontend developer · Demo</span></p>
      </div>
      <div className="grid gap-3 pt-3">
        <MainNav layout="list" onNavigate={onClose} />
        <ResetButton className="border-t border-border pt-3" onReset={onClose} />
      </div>
    </div>
  );
}
