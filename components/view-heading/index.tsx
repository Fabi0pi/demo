"use client";

import { useFocusOnMount } from "./hooks/useFocusOnMount";

type ViewHeadingProps = { title: string; description: string };

export function ViewHeading({ title, description }: ViewHeadingProps) {
  const headingRef = useFocusOnMount<HTMLHeadingElement>();

  return (
    <header className="mb-6">
      <h1 ref={headingRef} tabIndex={-1} data-focus-target className="text-2xl font-bold tracking-tight">
        {title}
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </header>
  );
}
