import { Person } from './types';
import { getImageUrl } from '../utils';

interface ItemProps {
  person: Person;
}

export function Item({ person }: ItemProps) {
  // drop-shadow-md
  // shadow-md shadow-gray-500/20
  return (
    <li className="mb-2 p-3 flex gap-5 rounded-lg bg-white drop-shadow-md">
      <img
        className="rounded-full flex-none"
        width={100}
        height={100}
        src={getImageUrl(person.imageId)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
}
