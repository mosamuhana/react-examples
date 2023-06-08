import { useState } from 'react';

import { ITodo } from './types';
import { createTodo } from './data';

type Props = {
  onAdd: (todo: ITodo) => void;
};

export function NewTodo({ onAdd }: Props) {
  const [text, setText] = useState('');

  const onClick = () => {
    onAdd(createTodo(text));
    setText('');
  }

  return (
    <div className="flex items-center gap-2">
      <input className="custom-input" value={text} onChange={e => setText(e.target.value)} />

      <button className="blue-btn px-5" onClick={onClick}>Add</button>
    </div>
  );
}
