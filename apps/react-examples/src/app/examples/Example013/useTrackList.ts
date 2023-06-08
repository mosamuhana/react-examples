import { useState, useEffect, Dispatch, SetStateAction } from 'react';

export interface TrackList<T> {
  index: number;
  count: number;
  current: T;
  items: T[];
  hasPrev: boolean;
  hasNext: boolean;
  prev: () => void;
  next: () => void;
  setIndex: Dispatch<SetStateAction<number>>;
}

export function useTrackList<T>(items: T[], initialIndex: number = 0): TrackList<T> {
  const count = items.length;
  const [index, setIndex] = useState(initialIndex);
  const [hasNext, setHasNext] = useState(index < count - 1);
  const [hasPrev, setHasPrev] = useState(index > 0);
  const [current, setCurrent] = useState<T>(items[index]);

  useEffect(() => {
    setCurrent(items[index]);
    setHasNext(index < items.length - 1);
    setHasPrev(index > 0);
  }, [index, items]);

  return {
    index,
    setIndex,
    count,
    current,
    hasPrev,
    hasNext,
    get items() { return items; },
    prev() {
      if (hasPrev) {
        setIndex(index - 1);
      }
    },
    next() {
      if (hasNext) {
        setIndex(index + 1);
      }
    },
  };
}
