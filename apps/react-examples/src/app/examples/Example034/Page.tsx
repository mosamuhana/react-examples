import { useState } from 'react';

import { ITodo } from './types';
import { initialTodos } from './data';
import { NewTodo } from './NewTodo';
import { ToggleActive } from './ToggleActive';
import { TodoList } from './TodoList';
import { TodoHint } from './TodoHint';

export function Page() {
  const [todos, setTodos] = useState<ITodo[]>(initialTodos);
  const [showActive, setShowActive] = useState<boolean>(false);

  const activeTodos = todos.filter(x => !x.completed);
  const filteredTodos = showActive ? activeTodos : todos;

  const onToggle = (todo: ITodo) => {
    setTodos(todos.map(t => {
      if (t.id === todo.id) {
        return todo;
      }
      return t;
    }))
  };

  return (
    <div className="flex flex-col p-4 rounded-md border border-gray-500 shadow-md">
      <ToggleActive value={showActive} onChange={setShowActive} />

      <NewTodo onAdd={(newTodo) => setTodos([...todos, newTodo])} />

      <TodoList todos={filteredTodos} onToggle={onToggle} />

      <TodoHint todos={todos} />
    </div>
  );
}
