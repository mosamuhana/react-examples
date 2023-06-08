import { Product } from './types';
import { Table } from './Table';
import { SearchBar } from './SearchBar';
import { Filter, InStockOnly } from './context';

type Props = {
  products: Product[];
};

// ProductTable
export function ProductTable({ products }: Props) {
  return (
    <InStockOnly.Provider>
      <Filter.Provider>
        <SearchBar />
        <Table products={products} />
      </Filter.Provider>
    </InStockOnly.Provider>
  );
}
