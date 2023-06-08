import { IPlanet, IPlace } from "./types";
import { useSelectOptions } from './useSelectOptions';

export function Page() {
  const [planetList, planetId, setPlanetId] = useSelectOptions<IPlanet>('/planets');

  const [placeList, placeId, setPlaceId] = useSelectOptions<IPlace>(
    planetId ? `/planets/${planetId}/places` : null
  );

  return (
    <>
      <label>
        Pick a planet:{' '}
        <select value={planetId} onChange={e => setPlanetId(e.target.value)}>
          {planetList.map((planet) =>
            <option key={planet.id} value={planet.id}>{planet.name}</option>
          )}
        </select>
      </label>

      <label>
        Pick a place:{' '}
        <select value={placeId} onChange={e => setPlaceId(e.target.value)}>
          {placeList?.map((place) =>
            <option key={place.id} value={place.id}>{place.name}</option>
          )}
        </select>
      </label>

      <hr />
      <p>
        You are going to: {placeId || '...'} on {planetId || '...'}{' '}
      </p>
    </>
  );
}
