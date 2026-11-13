"use client";

import { useEffect, useRef } from "react";

type ViewHeadingProps = { title: string; description: string };

export function ViewHeading({ title, description }: ViewHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (document.activeElement?.closest("main")) return;
    headingRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <header className="mb-6">
      <h1
        ref={headingRef}
        tabIndex={-1}
        data-focus-target
        className="text-2xl font-bold tracking-tight"
      >
        {title}
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </header>
  );
}
