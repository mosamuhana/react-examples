import { Fragment } from 'react';

import { Filter, InStockOnly } from './context';
import { Product } from './types';

type Props = {
  products: Product[];
};

export function Table({ products }: Props) {
  const [inStockOnly] = InStockOnly.useValue();
  let [filter] = Filter.useValue();
  filter = filter.toLowerCase();

  const byCategory = products
    .filter(
      (product) =>
        product.name.toLowerCase().indexOf(filter) !== -1 &&
        (!inStockOnly || product.stocked)
    )
    .reduce((map, p) => {
      map[p.category] = [...(map[p.category] ?? []), p];
      return map;
    }, {} as Record<string, Product[]>);

  const categories = Object.keys(byCategory);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => (
          <Fragment key={category}>
            <CategoryRow category={category} key={category} />
            {byCategory[category].map((product) => (
              <Row product={product} key={category + '-' + product.name} />
            ))}
          </Fragment>
        ))}
      </tbody>
    </table>
  );
}

function Row({ product }: { product: Product }) {
  return (
    <tr>
      <td>
        {product.stocked ? (
          product.name
        ) : (
          <span style={{ color: 'red' }}>{product.name}</span>
        )}
      </td>
      <td>{product.price}</td>
    </tr>
  );
}

function CategoryRow({ category }: { category: string }) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}
