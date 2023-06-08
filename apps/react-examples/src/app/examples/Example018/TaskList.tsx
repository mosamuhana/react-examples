import { useImmer } from 'use-immer';

import { AddTodo } from './AddTodo';
import { Task } from './Task';
import { initialTodos, createTodo } from './data';
import { ITodo } from './type';

export function TaskList() {
  const [todos, updateTodos] = useImmer<ITodo[]>(initialTodos);

  function onAddTodo(title: string) {
    updateTodos((draft) => {
      draft.push(createTodo(title));
    });
  }

  function onChangeTodo(nextTodo: ITodo) {
    updateTodos((draft) => {
      const todo = draft.find((t) => t.id === nextTodo.id);
      if (todo) {
        todo.title = nextTodo.title;
        todo.done = nextTodo.done;
      }
    });
  }

  function onDeleteTodo(todoId: number) {
    updateTodos((draft) => {
      const index = draft.findIndex((t) => t.id === todoId);
      if (index >= 0) {
        draft.splice(index, 1);
      }
    });
  }

  return (
    <>
      <AddTodo onSave={onAddTodo} />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
          </li>
        ))}
      </ul>
    </>
  );
}
