import { useState, ChangeEvent } from 'react';
//import clsx from 'clsx';

import { ITodo, OnChange } from './type';
import { Delete, Edit, Save } from '../../components';

type Props = {
  todo: ITodo;
  onChange: OnChange<ITodo>;
  onDelete: OnChange<number>;
};

export function Task({ todo, onChange, onDelete }: Props) {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...todo, done: e.target.checked });
  };

  return (
    <label className="flex items-center my-1 bg-gray-50">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={onChangeInput}
        className="flex-none mx-2"
      />

      {!isEditing ? (
        <span className="flex-1">{todo.title}</span>
      ) : (
        <input
          type="text"
          value={todo.title}
          onChange={e => onChange({ ...todo, title: e.target.value })}
          className="flex-1"
        />
      )}

      <div className="flex items-center flex-none mx-2 my-1">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="p-1 w-8 rounded"
          title={ isEditing ? 'Save' : 'Edit' }
        >
          {isEditing
            ? <Save className="stroke-green-500 fill-green-500" />
            : <Edit className="stroke-blue-500 fill-blue-500" />
          }
        </button>

        <button
          onClick={() => onDelete(todo.id)}
          className="p-1 w-8 rounded"
          title='Delete'
        >
          <Delete className="stroke-red-500 fill-red-500" />
        </button>
      </div>
    </label>
  );
}
