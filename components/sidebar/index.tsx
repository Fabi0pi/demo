import { MainNav } from "@/components/main-nav";
import { ResetButton } from "@/components/reset-button";

export function Sidebar() {
  return (
    <aside className="hidden w-16 shrink-0 flex-col gap-6 border-r border-border bg-sidebar px-2.5 py-4 md:flex lg:w-56 lg:px-3">
      <p className="flex min-h-11 items-center justify-center gap-2 font-mono text-sm font-bold text-accent lg:justify-start lg:px-3">
        <span aria-hidden="true">RD</span>
        <span className="sr-only lg:not-sr-only lg:text-foreground">
          Release Desk
        </span>
      </p>
      <MainNav layout="rail" />
      <div className="mt-auto">
        <ResetButton layout="rail" />
      </div>
    </aside>
  );
}
