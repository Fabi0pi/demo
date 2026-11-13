import type { ActivityItem as ActivityItemData } from "../../types";
import { ActivityItem } from "./components/activity-item";

export function ActivityList({ items }: { items: readonly ActivityItemData[] }) {
  return (
    <ol className="grid gap-2">
      {items.map(({ id, text }) => (
        <ActivityItem key={id} text={text} />
      ))}
    </ol>
  );
}
