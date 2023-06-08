import { createContext } from 'react';

import { createContextFor } from '../../utils/createContextFor';

export const ImageSizeContext = createContext(500);

export const ImageSize = createContextFor(500);

export const IsLarge = createContextFor(false);
