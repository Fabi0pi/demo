export function Breadcrumb({ currentPage }: { currentPage: string }) {
  return (
    <p className="flex min-w-0 items-center gap-2 text-sm text-muted-foreground">
      <span className="hidden sm:inline">Release Desk</span>
      <span aria-hidden="true" className="hidden sm:inline">
        /
      </span>
      <span className="font-medium text-foreground">{currentPage}</span>
    </p>
  );
}
