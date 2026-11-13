import type { GlyphName } from "@/components/ui/icon/glyphs";

export type NavItem = { href: string; label: string; description: string; icon: GlyphName };

export const NAV_ITEMS: readonly NavItem[] = [
  { href: "/", label: "Overview", description: "Your release, at a glance.", icon: "overview" },
  { href: "/tasks", label: "Tasks", description: "Small steps. Ready to ship.", icon: "tasks" },
  { href: "/activity", label: "Activity", description: "Every change, in one place.", icon: "activity" },
];
