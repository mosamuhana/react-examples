import { AddTask } from './AddTask';
import { TaskList } from './TaskList';
import { TasksProvider } from './context';

export function TaskApp() {
  return (
    <TasksProvider>
      <h1>Task List</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
