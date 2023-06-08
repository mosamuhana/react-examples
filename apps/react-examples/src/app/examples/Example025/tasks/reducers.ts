import { useReducer, Dispatch, Reducer } from 'react';

import { State, Action, ITask } from './types';
import { createTask } from './data';

const tasksReducer: Reducer<State, Action> = (state: State, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case 'add': return [...state, createTask(payload)];
    case 'change': return state.map(task => task.id === payload.id ? payload : task);
    case 'remove': return state.filter(x => x.id !== payload);
    default: throw Error('Unknown action: ' + action);
  }
};

const getActions = (dispatch: Dispatch<Action>) => {
  return {
    add: (payload: string) => dispatch({ type: 'add', payload }),
    change: (payload: ITask) => dispatch({ type: 'change', payload }),
    remove: (payload: number) => dispatch({ type: 'remove', payload }),
  };
};

export const useTasksReducer = (initialTasks: State): [State, TaskActions] => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const actions: TaskActions = getActions(dispatch);
  return [ tasks, actions ];
};

export type TaskActions = ReturnType<typeof getActions>;
