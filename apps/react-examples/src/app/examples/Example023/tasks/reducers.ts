import { Reducer, useReducer } from 'react';

import { ITask } from './types';
import { createTask } from './data';

type State = ITask[];

type Action =
  | { type: 'added'; payload: string }
  | { type: 'changed'; payload: ITask }
  | { type: 'deleted'; payload: number };

type TasksReducer = Reducer<State, Action>;

const tasksReducer: TasksReducer = (state, action): State => {
  const { type, payload } = action;
  switch (type) {
    case 'added': return [...state, createTask(payload)];
    case 'changed': return state.map(task => task.id === payload.id ? payload : task);
    case 'deleted': return state.filter(x => x.id !== payload);
    default: throw Error('Unknown action: ' + action);
  }
};

export const useTasksReducer = (initialTasks: State) => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  const actions = {
    add: (text: string) => dispatch({ type: 'added', payload: text }),
    change: (task: ITask) => dispatch({ type: 'changed', payload: task }),
    delete: (taskId: number) => dispatch({ type: 'deleted', payload: taskId }),
  };

  return { tasks, actions };
};
