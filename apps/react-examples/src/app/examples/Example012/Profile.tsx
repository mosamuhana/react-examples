import { Person } from './types';
import { getImageUrl } from '../utils';
import { Panel } from '../../components';

interface Props {
  person: Person;
}

export function Profile({ person }: Props) {
  return (
    <Panel title={person.name}>
      <div className="px-4 py-3 flex items-center space-x-2">
        <img
          className="m-1 rounded-full"
          src={getImageUrl(person.imageId)}
          alt={person.name}
          width={100}
          height={100}
        />
        <h1 className="m-1 text-lg">{person.name}</h1>
      </div>
    </Panel>
  );
}
