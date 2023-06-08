import { OnChange } from './types';

type Props = {
  query: string;
  onChange: OnChange<string>;
};

export function SearchBar({ query, onChange }: Props) {
  return (
    <label className="flex items-center gap-2">
      <span>Search:</span>
      <input
        value={query}
        onChange={e => onChange(e.target.value)}
        className="border border-gray-500 rounded px-2 py-1 m-1"
      />
    </label>
  );
}
