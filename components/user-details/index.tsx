import { DEMO_USER } from "@/lib/demo-user";

export function UserDetails() {
  return (
    <p>
      <span className="block font-semibold">{DEMO_USER.name}</span>
      <span className="text-sm text-muted-foreground">{DEMO_USER.role}</span>
    </p>
  );
}
