import { Filter } from './context';

export function SearchInput() {
  const [ value, setValue ] = Filter.useValue();

  return (
    <input
      type="text"
      className="border rounded-sm p-1"
      value={value}
      placeholder="Search..."
      onChange={e => setValue(e.target.value)}
    />
  );
}
