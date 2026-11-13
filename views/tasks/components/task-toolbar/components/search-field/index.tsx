import { Icon } from "@/components/ui/icon";
import { SEARCH_INPUT_ID } from "../../constants";

type SearchFieldProps = {
  query: string;
  onQueryChange: (query: string) => void;
};

export function SearchField({ query, onQueryChange }: SearchFieldProps) {
  return (
    <div className="grid gap-1.5">
      <label
        htmlFor={SEARCH_INPUT_ID}
        className="font-mono text-xs font-semibold text-muted-foreground"
      >
        Search tasks
      </label>
      <div className="flex min-h-11 items-center rounded-sm border border-border-strong bg-surface has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-ring">
        <Icon name="search" className="ml-3 text-muted-foreground" />
        <input
          id={SEARCH_INPUT_ID}
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search the release…"
          className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus-visible:outline-none [&::-webkit-search-cancel-button]:appearance-none"
        />
        {query && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => onQueryChange("")}
            className="grid size-11 place-items-center"
          >
            <Icon name="close" className="size-4" />
          </button>
        )}
      </div>
    </div>
  );
}
