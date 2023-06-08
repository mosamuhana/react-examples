import { ProductTable } from './ProductTable';
import { PRODUCTS } from './data';

export function Component() {
  return <ProductTable products={PRODUCTS} />;
}
