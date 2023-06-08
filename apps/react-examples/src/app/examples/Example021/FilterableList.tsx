import { useState } from 'react';

import { SearchBar } from './SearchBar';
import { IFood } from './types';

function filterItems(items: IFood[], query: string) {
  query = query.toLowerCase();
  return items
    .filter(({ name }) => name.toLowerCase().includes(query))
    .map(x => ({ ...x } as IFood));
}

type Props = {
  items: IFood[];
};

export function FilterableList({ items }: Props) {
  const [query, setQuery] = useState('');
  const filtered = filterItems(items, query);

  return (
    <>
      <SearchBar query={query} onChange={setQuery} />

      <hr className="bg-gray-300 my-2 mx-5 h-[2px]" />

      <table>
        <tbody>
          {filtered.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
