import { ITodo } from './types';

type Props = {
  todo: ITodo;
  onChange?: (value: boolean) => void;
};

export function Todo({ todo, onChange }: Props) {
  const id = 'todo-' + todo.id;

  return (
    <li key={todo.id} className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={e => { onChange?.(e.target.checked) }}
        id={id}
      />
      <label htmlFor={id} className="select-none">
        {todo.completed ? <s>{todo.text}</s> : todo.text}
      </label>
    </li>
  );
}
