import { ITodo } from './types';

let _nextId = 0;

export function createTodo(text: string, completed = false) {
  return {
    id: ++_nextId,
    text,
    completed,
  };
}

export const initialTodos: ITodo[] = [
  createTodo('Get apples', true),
  createTodo('Get oranges', true),
  createTodo('Get carrots'),
];
