import { useState, useRef } from 'react';

import { OnChange } from './type';

type Props = {
  onSave: OnChange<string>;
}

export function AddTodo({ onSave: onAddTodo }: Props) {
  const [value, setValue] = useState<string>('');
  const ref = useRef<HTMLInputElement>(null);
  const canAdd = value.trim().length > 0;

  const onClick = () => {
    if (!canAdd) return;
    onAddTodo(value);
    setValue('');
    ref.current?.focus();
  };

  return (
    <div className="flex items-center my-2">
      <input
        ref={ref}
        placeholder="Add todo"
        value={value}
        onChange={e => setValue(e.target.value)}
        onBlur={e => setValue(e.target.value.trim())}
        onKeyUp={e => e.key === 'Enter' && onClick()}
        className="p-2 border border-gray-500 rounded"
      />

      <button
        className="rounded bg-blue-700 text-white px-4 py-1 mx-2 disabled:bg-gray-500"
        onClick={onClick}
        disabled={!canAdd}
      >Add</button>
    </div>
  );
}
