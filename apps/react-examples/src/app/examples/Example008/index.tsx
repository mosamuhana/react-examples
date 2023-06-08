import { Item } from './Item'

export function Component() {
  return (
    <section className="border border-gray-400 rounded-lg py-3 px-5">
      <h1>Sally Ride's Packing List</h1>
      <ul className="pl-5">
        <Item name="Space suit" isPacked={true} />
        <Item name="Helmet with a golden leaf" isPacked={true} />
        <Item name="Photo of Tam" isPacked={false} />
      </ul>
    </section>
  );
}
