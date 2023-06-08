import { ITask, OnChange } from './types';
import { Task } from './Task';

type Props = {
  tasks: ITask[];
  onChangeTask: OnChange<ITask>;
  onDeleteTask: OnChange<number>;
};

export function TaskList({ tasks, onChangeTask, onDeleteTask }: Props) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}
