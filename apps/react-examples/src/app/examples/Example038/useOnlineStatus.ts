import { useSyncExternalStore } from 'react';

export function useOnlineStatus() {
  return useSyncExternalStore<boolean>(
    subscribe,
    getSnapshot,
    () => true,
  );
}

function getSnapshot() {
  return navigator.onLine;
}

function subscribe(callback: () => void) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}
