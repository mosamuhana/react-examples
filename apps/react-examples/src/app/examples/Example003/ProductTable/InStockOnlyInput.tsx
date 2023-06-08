import { InStockOnly } from './context';

export function InStockOnlyInput() {
  const [ value, setValue ] = InStockOnly.useValue();

  return (
    <label className="select-none">
      <input
        type="checkbox"
        checked={value}
        onChange={e => setValue(e.target.checked)}
      />{' '}
      Only show products in stock
    </label>
  );
}
