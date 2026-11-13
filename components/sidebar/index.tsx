import { MainNav } from "@/components/main-nav";
import { ResetButton } from "@/components/reset-button";
import { Brand } from "./components/brand";

export function Sidebar() {
  return (
    <aside className="hidden w-16 shrink-0 flex-col gap-6 border-r border-border bg-sidebar px-2.5 py-4 md:flex lg:w-56 lg:px-3">
      <Brand />
      <MainNav layout="rail" />
      <div className="mt-auto">
        <ResetButton layout="rail" />
      </div>
    </aside>
  );
}
