import { useTimer } from './useTimer';

export function Timer() {
  const count = useTimer();

  return <h1>Counter: {count}</h1>;
}
