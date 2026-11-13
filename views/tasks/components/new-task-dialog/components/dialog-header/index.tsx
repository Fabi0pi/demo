import { Icon } from "@/components/ui/icon";

type DialogHeaderProps = {
  headingId: string;
  introId: string;
  onClose: () => void;
};

export function DialogHeader({ headingId, introId, onClose }: DialogHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h2 id={headingId} className="text-lg font-bold">
          Create a task
        </h2>
        <p id={introId} className="mt-1 text-sm text-muted-foreground">
          Add one small piece of work to this release.
        </p>
      </div>
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="grid size-11 shrink-0 place-items-center rounded-sm border border-border"
      >
        <Icon name="close" className="size-4" />
      </button>
    </div>
  );
}
