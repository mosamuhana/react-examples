import clsx from 'clsx';

import { IContact, OnChange } from './types';

type Props = {
  contacts: IContact[];
  selectedId: number;
  onSelect: OnChange<number>;
};

export function ContactTable({ contacts, selectedId, onSelect }: Props) {
  return (
    <table className="w-full">
      <tbody>
        {contacts.map(({ id, name, email }) => (
          <tr
            key={id}
            onClick={() => onSelect(id)}
            className={clsx(
              "cursor-pointer select-none",
              id === selectedId && "font-bold bg-slate-200",
            )}
          >
            <td className="p-2">{ name }</td>
            <td className="p-2">{ email }</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
