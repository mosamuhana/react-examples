import { people } from './data';
import { ListSection } from './ListSection';

export function Component() {
  const chemists = people.filter(x => x.profession === 'chemist');
  const everyoneElse = people.filter(x => x.profession !== 'chemist');

  return (
    <div className="container flex justify-center">
      <article className="p-5 w-[600px]">
        <h1 className="text-xl">Scientists</h1>
        <ListSection title="Chemists" people={chemists} />
        <ListSection title="Everyone Else" people={everyoneElse} />
      </article>
    </div>
  );
}
