import { places } from './data';
import { IsLarge } from './context';
import { PlaceList } from './PlaceList';
import { UseLargeImage } from './UseLargeImage';

export function PlacesApp() {
  return (
    <IsLarge.Provider>
      <UseLargeImage />
      <hr className="bg-gray-300 my-2 mx-5 h-[2px]" />
      <PlaceList places={places} />
    </IsLarge.Provider>
  );
}
