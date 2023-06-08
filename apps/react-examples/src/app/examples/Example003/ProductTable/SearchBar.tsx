import { SearchInput } from './SearchInput';
import { InStockOnlyInput } from './InStockOnlyInput';

export function SearchBar() {
  return (
    <form className="my-3 flex items-center gap-2">
      <SearchInput />
      <InStockOnlyInput />
    </form>
  );
}
