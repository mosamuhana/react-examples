import { useOnlineStatus } from './useOnlineStatus_v1';

export function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}
