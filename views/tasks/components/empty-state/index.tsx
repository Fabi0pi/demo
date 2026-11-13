import type { ReactNode } from "react";

type EmptyStateProps = {
  title: string;
  description: string;
  action: ReactNode;
};

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="grid justify-items-start gap-2 rounded-sm border border-dashed border-border-strong p-6">
      <h2 className="font-semibold">{title}</h2>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="mt-2">{action}</div>
    </div>
  );
}
