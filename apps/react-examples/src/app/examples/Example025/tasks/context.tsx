import { ReactNode, createContext, useContext } from 'react';

import type { TaskActions } from './reducers';
import { State } from './types';
import { initialTasks } from './data';
import { useTasksReducer } from './reducers';

export const TasksContext = createContext<State>(null as unknown as State);

export const TaskActionsContext = createContext<TaskActions>(null as unknown as TaskActions);

export const useTasks = () => useContext(TasksContext);

export const useTaskActions = () => useContext(TaskActionsContext);

export function TasksProvider({ children }: { children: ReactNode; }) {
  const [ tasks, actions ] = useTasksReducer(initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TaskActionsContext.Provider value={actions}>
        {children}
      </TaskActionsContext.Provider>
    </TasksContext.Provider>
  );
}
