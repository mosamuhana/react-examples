import { useState, useRef, useEffect } from 'react';

import { Play, Pause } from '../../components';

type TimerType = ReturnType<typeof setInterval>;

export function Stopwatch() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const timerRef = useRef<TimerType | undefined>(undefined);

  useEffect(() => {
    setIsPlaying(timerRef.current != null);
  }, [timerRef.current]);

  const clearTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = undefined;
  }

  const onStart = () => {
    clearTimer();
    timerRef.current = setInterval(() => setNow(Date.now()), 10);

    setStartTime(Date.now());
    setNow(Date.now());
  }

  const toggle = () => {
    const playing = timerRef.current != null;
    setIsPlaying(playing);
    if (playing) {
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

      <button
        onClick={onStart}
        className="w-10 h-10 p-1 rounded-full bg-slate-400"
      >
        <Play />
      </button>

      <button
        onClick={clearTimer}
        className="w-10 h-10 p-1 rounded-full bg-slate-400"
      >
        <Pause />
      </button>
    </>
  );
}
