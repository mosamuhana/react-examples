import { IPlanet, IPlace } from './types';

export const planets: IPlanet[] = [
  {
    id: 'earth',
    name: 'Earth',
  },
  {
    id: 'venus',
    name: 'Venus',
  },
  {
    id: 'mars',
    name: 'Mars',
  },
];

export const placeMap: Record<string, IPlace[]> = {
  earth: [
    {
      id: 'laos',
      name: 'Laos',
    },
    {
      id: 'spain',
      name: 'Spain',
    },
    {
      id: 'vietnam',
      name: 'Vietnam',
    },
  ],
  venus: [
    {
      id: 'aurelia',
      name: 'Aurelia',
    },
    {
      id: 'diana-chasma',
      name: 'Diana Chasma',
    },
    {
      id: 'kumsong-vallis',
      name: 'Kŭmsŏng Vallis',
    },
  ],
  mars: [
    {
      id: 'aluminum-city',
      name: 'Aluminum City',
    },
    {
      id: 'new-new-york',
      name: 'New New York',
    },
    {
      id: 'vishniac',
      name: 'Vishniac',
    },
  ],
};
