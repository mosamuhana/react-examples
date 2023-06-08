import { initialTasks } from './data';
import { AddTask } from './AddTask';
import { TaskList } from './TaskList';
import { useTasksReducer } from './reducers';

export function TaskApp() {
  const { tasks, actions } = useTasksReducer(initialTasks);

  return (
    <>
      <h1>Prague itinerary</h1>

      <AddTask onAddTask={actions.add} />

      <TaskList
        tasks={tasks}
        onChangeTask={actions.change}
        onDeleteTask={actions.delete}
      />
    </>
  );
}
