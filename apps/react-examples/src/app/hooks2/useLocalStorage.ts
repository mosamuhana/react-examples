// https://www.robinwieruch.de/react-uselocalstorage-hook/

import { useState, useEffect } from "react";

const _read = <T>(key: string, fallbackState?: T) => {
  const value = localStorage.getItem(key);
  return !value ? (fallbackState ?? undefined) : JSON.parse(value);
};

const _write = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export function useLocalStorage<T>(storageKey: string, fallbackState: T) {
  const [value, setValue] = useState(_read(storageKey) ?? fallbackState);

  useEffect(() => {
    _write(storageKey, value);
  }, [value, storageKey]);

  return [value, setValue] as const;
}
