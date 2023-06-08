import { ITodo } from './types';
import { Todo } from './Todo';

type Props = {
  todos: ITodo[];
  onToggle?: (todo: ITodo) => void;
}

export function TodoList({ todos, onToggle }: Props) {
  return (
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          todo={todo}
          onChange={completed => onToggle?.({ ...todo, completed })}
        />
      )}
    </ul>
  );
}
