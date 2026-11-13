import type { GlyphName } from "@/components/ui/icon/glyphs";
import type { Notice } from "@/hooks/useNotice";

/** Each tone pairs a colour with an icon, so the meaning never rests on colour alone. */
export const NOTICE_TONES: Readonly<Record<Notice["tone"], { icon: GlyphName; border: string; text: string }>> = {
  success: { icon: "check", border: "border-status-ready", text: "text-status-ready" },
  danger: { icon: "trash", border: "border-danger", text: "text-danger" },
};
