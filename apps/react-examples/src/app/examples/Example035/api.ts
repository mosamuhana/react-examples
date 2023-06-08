import { IPlanet, IPlace } from "./types";
import { planets, placeMap } from "./data";

export function fetchData(url: string) {
  if (url === '/planets') {
    return fetchPlanets();
  } else if (url.startsWith('/planets/')) {
    const match = url.match(/^\/planets\/([\w-]+)\/places(\/)?$/);
    if (!match || !match[1] || !match[1].length) {
      throw Error(`Expected URL like "/planets/earth/places". Received: "${url}".`);
    }
    return fetchPlaces(match[1]);
  } else {
    throw Error(`Expected URL like "/planets" or "/planets/earth/places". Received: "${url}".`);
  }
}

async function fetchPlanets() {
  return new Promise<IPlanet[]>((resolve) => {
    setTimeout(() => resolve(planets), 1000);
  });
}

async function fetchPlaces(planetId: string) {
  if (typeof planetId !== 'string') {
    throw Error(`fetchPlaces(planetId) expects a string argument. Instead received: ${planetId}.`);
  }

  return new Promise<IPlace[]>((resolve) => {
    const places = placeMap[planetId];
    setTimeout(() => {
      if (places) {
        resolve(places);
      } else {
        throw Error('Unknown planet ID: ' + planetId);
      }
    }, 1000);
  });
}
