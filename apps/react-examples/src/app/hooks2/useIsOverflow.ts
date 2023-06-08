// https://www.robinwieruch.de/react-custom-hook-check-if-overflow/

import { useState, useLayoutEffect, useCallback, MutableRefObject } from 'react';

const _useIsOverflow = <E extends HTMLElement>(
  ref: MutableRefObject<E | null>,
  callback?: (value: boolean) => void
) => {
  const [isOverflow, setIsOverflow] = useState<boolean>(false);

  const setValue = useCallback((newValue: boolean) => {
    if (newValue != isOverflow) {
      setIsOverflow(newValue);
      if (callback) callback(newValue);
    }
  }, [callback, isOverflow]);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const { current } = ref;

    const trigger = () => {
      setValue(current.scrollHeight > current.clientHeight);
    };

    const obs = new ResizeObserver(trigger);
    obs.observe(current);

    trigger();

    return () => obs.unobserve(current);
  }, [ref, setValue]);

  return isOverflow;
};

const _useIsOverflowMock: typeof _useIsOverflow = () => { return false; }

const isSupported = typeof window !== 'undefined' && 'ResizeObserver' in window;

export const useIsOverflow = isSupported ? _useIsOverflow : _useIsOverflowMock;
