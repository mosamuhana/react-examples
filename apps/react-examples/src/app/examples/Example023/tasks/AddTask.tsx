import { useState, useRef } from 'react';

import { OnChange } from './types';

type Props = {
  onAddTask: OnChange<string>;
};

export function AddTask({ onAddTask }: Props) {
  const [text, setText] = useState('');
  const ref = useRef<HTMLInputElement>(null);
  const canAdd = text.trim().length > 0;

  const onClick = () => {
    if (!canAdd) return;
    onAddTask(text);
    setText('');
    ref.current?.focus();
  };

  return (
    <div className="flex gap-2">
      <input
        ref={ref}
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && onClick()}
        className="border border-gray-400 rounded px-2 py-1"
      />

      <button
        onClick={onClick}
        className="bg-blue-500 text-white px-3 py-1 rounded disabled:bg-gray-600"
        disabled={!canAdd}
      >Add</button>
    </div>
  );
}
