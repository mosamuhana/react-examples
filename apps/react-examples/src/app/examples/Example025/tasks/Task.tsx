import { useState } from 'react';

import { ITask } from './types';
import { useTaskActions } from './context';
import { Delete, Edit, Save } from '../../../components';

type Props = {
  task: ITask;
};

export function Task({ task }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const { change, remove } = useTaskActions();

  const update = (payload: ITask) => change(payload);

  return (
    <label className="flex items-center my-1 bg-gray-50">
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => update({ ...task, done: e.target.checked })}
        className="flex-none mx-2"
      />

      {!isEditing ? (
        <span className="flex-1">{task.text}</span>
      ) : (
        <input
          type="text"
          value={task.text}
          onChange={(e) => update({ ...task, text: e.target.value })}
          className="flex-1"
        />
      )}

      <div className="flex items-center flex-none mx-2 my-1">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="p-1 w-8 rounded"
          title={isEditing ? 'Save' : 'Edit'}
        >
          {isEditing ? (
            <Save className="stroke-green-500 fill-green-500" />
          ) : (
            <Edit className="stroke-blue-500 fill-blue-500" />
          )}
        </button>

        <button
          onClick={() => remove(task.id)}
          className="p-1 w-8 rounded"
          title="Delete"
        >
          <Delete className="stroke-red-500 fill-red-500" />
        </button>
      </div>
    </label>
  );
}
