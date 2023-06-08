import { useRef, useEffect, RefCallback } from 'react';
import { useLocation } from 'react-router-dom';

import { routes } from '../examples/routes';

const _links = routes.map(({ path }) => ({ title: `Example ${path}`, path: `/examples/${path}` }));
_links.unshift({ title: 'Home', path: '/' });

export const links = _links;

export const useCurrentLink = () => {
  const currentRef = useRef<HTMLAnchorElement | null>(null);
  const { pathname } = useLocation();
  const currentPath = links.find((x) => x.path === pathname)?.path;

  useEffect(() => {
    if (currentRef.current) {
      currentRef.current.scrollIntoView();
    }
  }, []);

  const set =
    (path: string): RefCallback<HTMLAnchorElement> =>
    (anchor) => {
      if (path === currentPath) {
        currentRef.current = anchor;
      }
    };

  return set;
};
