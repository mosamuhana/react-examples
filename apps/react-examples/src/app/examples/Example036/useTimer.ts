import { useState, useEffect } from 'react';

export function useTimer(delay: number = 1000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('✅ Creating an interval');

    const intervalId = setInterval(() => {
      console.log('⏰ Interval tick');
      setCount((c) => c + 1);
    }, delay);

    return () => {
      console.log('❌ Clearing an interval');
      clearInterval(intervalId);
    };
  }, [delay]);

  return count;
}
