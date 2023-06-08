import { IPlace } from './types';
import { getImageUrl } from '../../utils/imageUrl';
import { IsLarge } from './context';

type Props = {
  place: IPlace;
};

export function Place({ place }: Props) {
  const [isLarge] = IsLarge.useValue();
  const imageSize = isLarge ? 150 : 100;

  return (
    <div className="flex gap-2 items-center">
      <img
        src={getImageUrl(place.imageId, 'l')}
        alt={place.name}
        width={imageSize}
        height={imageSize}
      />

      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </div>
  );
}
