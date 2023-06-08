import { useTime } from './useTime';
import clsx from 'clsx';

export function Clock() {
  const time = useTime();
  const hours = time.getHours();
  const isNight = 0 <= hours && hours <= 6;

  return (
    <h1 className={clsx(
      "border border-gray-200 rounded-3xl p-3 w-52 text-center shadow-md",
      isNight ? "bg-slate-800 text-white" : "bg-white text-slate-800"
    )}>
      {time.toLocaleTimeString()}
    </h1>
  );
}
