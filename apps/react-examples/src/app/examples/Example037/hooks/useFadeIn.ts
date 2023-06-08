import { useRef, useEffect, RefObject } from 'react';

import { FadeInAnimation } from '../FadeInAnimation.js';

export function useFadeIn<T extends HTMLElement>(duration: number, useDurationEvent = false) {
  const animRef = useRef<FadeInAnimation>();
  const ref: RefObject<T> = useRef<T>(null);
  const durationRef = useRef(duration);

  useEffect(() => {
    if (!ref.current) return;

    if (!animRef.current) {
      animRef.current = new FadeInAnimation(ref.current);
    }

    if (animRef.current?.started) return;

    animRef.current?.start(durationRef.current);

    return () => animRef.current?.stop();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, useDurationEvent ? [duration] : []);

  return ref;
}
