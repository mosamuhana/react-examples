import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  const onIncrement = () => setCount(count + 1);

  return (
    <button onClick={onIncrement} className="blue-btn">
      Clicked { count } times
    </button>
  );
}
