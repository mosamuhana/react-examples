import { Person } from "./types";
import { Item } from './Item';

interface ListSectionProps {
  title: string;
  people: Person[];
}

export function ListSection({ title, people }: ListSectionProps) {
  return (
    <section className="border border-gray-400 rounded-lg p-5 m-1">
      <h2 className="px-3">{title}</h2>
      <ul className="px-3 space-y-5">
        {people.map(person =><Item key={person.id} person={person} />)}
      </ul>
    </section>
  );
}
