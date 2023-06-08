import { useState, useEffect, type RefObject } from 'react';

interface Rect {
  left: number;
  top: number;
  width: number;
  height: number;
}

export function useRect(ref: RefObject<HTMLDivElement>) {
  const [rect, setRect] = useState<Rect>({ left: 0, top: 0, width: 0, height: 0 });
  useEffect(() => {
    if (ref.current) {
      const { left, top, width, height } = ref.current.getBoundingClientRect();
      setRect({ left, top, width, height });
    }
  }, [ref]);
  return rect;
}
