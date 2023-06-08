import { ITodo } from "./type";

export const initialTodos: ITodo[] = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

let _nextId = 3;

export const nextId = () => ++_nextId;

export const createTodo = (title: string): ITodo => ({
  id: nextId(),
  title,
  done: false
});
