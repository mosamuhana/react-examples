/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { scrollbarWidth } from './scrollbarWidth';

export function useScrollbarWidth(): number | undefined {
  const [width, setWidth] = useState(scrollbarWidth());

  useEffect(() => {
    if (typeof width !== 'undefined') return;
    const raf = requestAnimationFrame(() => setWidth(scrollbarWidth()));
    return () => cancelAnimationFrame(raf);
  }, []);

  return width;
}
