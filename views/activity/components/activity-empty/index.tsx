import Link from "next/link";

export function ActivityEmpty() {
  return (
    <div className="grid justify-items-start gap-3 rounded-sm border border-dashed border-border-strong p-6 text-sm text-muted-foreground">
      <p>Your changes will appear here. Try completing a task.</p>
      <Link href="/tasks" className="font-medium text-highlight underline underline-offset-4">
        View all tasks
      </Link>
    </div>
  );
}
