import { useState, useEffect } from 'react';

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((err) => {
        setData(null);
        setError(err);
      });
  }, [url]);

  return [data, error];
}

// https://www.freecodecamp.org/news/how-to-create-react-hooks/
export function usePageBottom() {
  const [bottom, setBottom] = useState(false);
  const isBottom = () => window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;

  useEffect(() => {
    const handleScroll = () => setBottom(isBottom());
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return bottom;
}

type Size = {
  width: number;
  height: number;
}

export function _useWindowSize() {
  const [windowSize, setWindowSize] = useState<Size>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const onResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return windowSize;
}

const _useWindowSizeMock = (): Size => ({ width: 1200, height: 800 });

export const useWindowSize = typeof window !== "undefined" ? _useWindowSize : _useWindowSizeMock;
