import { useState, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

export function useDelayedValue(value: Position, delay: number) {
  const [delayedValue, setDelayedValue] = useState(value);

  useEffect(() => {
    setTimeout(() => setDelayedValue(value), delay);
  }, [value, delay]);

  return delayedValue;
}
