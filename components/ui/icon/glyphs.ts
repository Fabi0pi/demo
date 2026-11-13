/** SVG path data for every icon, on a 24×24 grid with round 2px strokes. */
export const GLYPHS = {
  overview: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z",
  tasks: "m3 6 2 2 3-4M11 6h10M3 13h4M11 13h10M3 20h4M11 20h10",
  activity: "M3 12h4l3-8 4 16 3-8h4",
  menu: "M4 6h16M4 12h16M4 18h16",
  close: "m6 6 12 12M6 18 18 6",
  plus: "M12 5v14M5 12h14",
  reset: "M3 10a9 9 0 1 1 2 8M3 4v6h6",
  search: "m21 21-4.3-4.3M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z",
  more: "M5 12h.01M12 12h.01M19 12h.01",
  check: "m5 12 4 4L19 6",
  trash: "M4 7h16M10 11v6M14 11v6M6 7l1 14h10l1-14M9 7V4h6v3",
} as const;

export type GlyphName = keyof typeof GLYPHS;
