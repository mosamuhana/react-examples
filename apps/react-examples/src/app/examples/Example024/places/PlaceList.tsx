import { IPlace } from './types';
import { Place } from './Place';

type Props = {
  places: IPlace[];
};

export function PlaceList({ places }: Props) {
  return (
    <ul>
      {places.map(place => (
        <li key={place.id}>
          <Place place={place} />
        </li>
      ))}
    </ul>
  );
}
