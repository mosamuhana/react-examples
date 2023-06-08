import { useState } from 'react';

type Props = {
  count: number;
  onClick: () => void;
};

function CounterButton({ count, onClick }: Props) {
  return (
    <button onClick={onClick} className="blue-btn">
      Clicked { count } times
    </button>
  );
}

export function CounterList() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);

  return (
    <div className="flex flex-col items-start gap-2">
      <h1>Counters that update together</h1>
      <CounterButton count={count} onClick={handleClick} />
      <CounterButton count={count} onClick={handleClick} />
    </div>
  );
}
