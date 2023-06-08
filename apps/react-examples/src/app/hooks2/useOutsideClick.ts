// https://www.robinwieruch.de/react-hook-detect-click-outside-component/

import { useRef, useEffect } from "react";

type VoidFn = () => void;

export const useOutsideClick = (callback: VoidFn) => {
  const ref = useRef<Element>();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as any)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return ref;
};
