// https://github.com/mweststrate/use-st8/blob/master/src/index.ts
import { useMemo, useState, SetStateAction } from 'react';

export type CustomState<T> = {
  (): T;
  (newValue: SetStateAction<T>): void;
};

export function useCustomState<T>(initialValue: (() => T) | T): CustomState<T> {
  const [state, setState] = useState(initialValue);

  return useMemo(() => {
    return ((input?: SetStateAction<T>) => {
      return input === undefined ? state : setState(input);
    }) as CustomState<T>;
  }, [state]);
}
