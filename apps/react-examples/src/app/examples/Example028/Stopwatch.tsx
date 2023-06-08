import { useState, useRef } from 'react';

import { Play, Pause } from '../../components';

type TimerType = ReturnType<typeof setInterval>;

export function Stopwatch() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const timerRef = useRef<TimerType | undefined>(undefined);

  const clearTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = undefined;
    setIsPlaying(false);
  }

  const onStart = () => {
    clearTimer();
    timerRef.current = setInterval(() => setNow(Date.now()), 10);

    setStartTime(Date.now());
    setNow(Date.now());
    setIsPlaying(true);
  }

  const toggle = () => {
    if (timerRef.current != null) {
      clearTimer();
    } else {
      onStart();
    }
  };

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>

      <button
        onClick={toggle}
        className="w-10 h-10 p-1 rounded-full bg-slate-400"
      >
        {isPlaying ? <Pause /> : <Play />}
      </button>
    </>
  );
}
