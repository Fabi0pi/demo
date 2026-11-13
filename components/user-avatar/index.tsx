import { cn } from "@/lib/cn";
import { DEMO_USER } from "@/lib/demo-user";

type UserAvatarProps = { className?: string };

export function UserAvatar({ className }: UserAvatarProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "grid size-10 place-items-center rounded-full border border-accent/45 bg-accent-subtle font-mono text-xs font-bold text-accent",
        className,
      )}
    >
      {DEMO_USER.initials}
    </span>
  );
}
