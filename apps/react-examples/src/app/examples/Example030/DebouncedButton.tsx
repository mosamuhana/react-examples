import { useRef, ReactNode } from 'react';

type Props = {
  onClick: () => void;
  interval?: number;
  children: ReactNode;
}

type TimerId = ReturnType<typeof setTimeout>;

export function DebouncedButton({ onClick, children, interval = 2000 }: Props) {
  const timerRef = useRef<TimerId>();

  const handleClick = () => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => onClick(), interval);
  };

  return (
    <button className="blue-btn" onClick={handleClick}>
      { children }
    </button>
  );
}
