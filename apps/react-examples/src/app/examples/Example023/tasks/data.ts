import { ITask } from "./types";

export const initialTasks: ITask[] = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];

let _nextId = 3;

export const createTask = (text: string): ITask => ({ id: ++_nextId, text, done: false });
