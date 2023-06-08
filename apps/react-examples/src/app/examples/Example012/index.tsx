import { Person } from './types';
import { Profile } from './Profile';

const persons: Person[] = [
  {
    imageId: 'lrWQx8l',
    name: 'Subrahmanyan Chandrasekhar'
  },
  {
    imageId: 'MK3eW3A',
    name: 'Creola Katherine Johnson'
  }
];

export function Component() {
  return (
    <div className="w-[500px]">
      <Profile person={persons[0]} />
      <Profile person={persons[1]} />
    </div>
  );
}
