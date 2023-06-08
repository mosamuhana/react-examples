import { useState, useEffect } from 'react';

import { fetchData } from './api';

export function useSelectOptions<T>(url: string | null) {
  const [list, setList] = useState<T[]>([]);
  const [selectedId, setSelectedId] = useState('');

  useEffect(() => {
    if (url === null) {
      return;
    }

    let ignore = false;
    fetchData(url).then((result) => {
      if (!ignore) {
        setList(result as T[]);
        setSelectedId(result[0].id);
      }
    });

    return () => {
      ignore = true;
    };
  }, [url]);

  return [list, selectedId, setSelectedId] as const;
}
