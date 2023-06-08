// https://react.dev/learn/reusing-logic-with-custom-hooks

import { useState, useRef, useEffect } from 'react';

/*
type DomEl = Window | Document | Element | EventTarget;
type Handler = (...args: any[]) => any;
const on = (el: DomEl, eventName: string, handler: Handler) => el.addEventListener(eventName, handler);
const off = (el: DomEl, eventName: string, handler: Handler) => el.removeEventListener(eventName, handler);
*/

function _useOnlineStatus() {
  const nav = useRef(navigator);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handler = () => setIsOnline(nav.current.onLine);

    window.addEventListener('online', handler);
    window.addEventListener('offline', handler);

    return () => {
      window.removeEventListener('online', handler);
      window.removeEventListener('offline', handler);
    };
  }, []);

  return isOnline;
}

const isSupported = typeof window !== 'undefined'
  && typeof navigator !== 'undefined'
  && 'onLine' in navigator;

export const useOnlineStatus = isSupported ? _useOnlineStatus : () => true;
