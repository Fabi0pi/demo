import { ResetButton } from "@/components/reset-button";
import { Button } from "@/components/ui/button";
import { EmptyState } from "../../../empty-state";

type TaskListEmptyProps = {
  hasTasks: boolean;
  onResetFilters: () => void;
};

export function TaskListEmpty({ hasTasks, onResetFilters }: TaskListEmptyProps) {
  if (hasTasks) {
    return (
      <EmptyState
        title="No matching tasks"
        description="Try another search or show all statuses."
        action={<Button onClick={onResetFilters}>Reset filters</Button>}
      />
    );
  }

  return (
    <EmptyState
      title="No tasks left"
      description="Restore the sample tasks to keep exploring."
      action={<ResetButton />}
    />
  );
}
