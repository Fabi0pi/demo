import { Icon } from "@/components/ui/icon";
import type { ActivityItem as ActivityItemData } from "../../../../types";

export function ActivityItem({ text }: Pick<ActivityItemData, "text">) {
  return (
    <li className="flex gap-3 rounded-sm border border-border bg-surface p-3 text-sm break-words">
      <Icon name="check" className="mt-0.5 size-4 text-highlight" />
      <span>{text}</span>
    </li>
  );
}
