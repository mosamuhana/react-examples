import { Person } from './types';
import { getImageUrl } from '../utils';

type Props = {
  person: Person;
  size: number;
};

export function Avatar({ person, size }: Props) {
  const thumbnailSize = size > 90 ? 'b' : 's';
  return (
    <img
      className="m-5 rounded-full"
      src={getImageUrl(person.imageId, thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
