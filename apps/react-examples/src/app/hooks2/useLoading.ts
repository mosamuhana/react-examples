// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks

import { useState } from 'react';

export function useLoading<T = any>() {
  const [isLoading, setState] = useState(false);

  const load = (aPromise: Promise<T>) => {
    setState(true);
    return aPromise.finally(() => setState(false));
  };

  return [isLoading, load] as const;
}

// can implement try hook with error
