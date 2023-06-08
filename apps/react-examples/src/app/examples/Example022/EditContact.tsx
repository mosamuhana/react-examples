import { useState } from 'react';

import { IContact, OnChange } from './types';

type Props = {
  initialData: IContact;
  onSave: OnChange<IContact>;
};

export function EditContact({ initialData, onSave }: Props) {
  const [name, setName] = useState(initialData.name);
  const [email, setEmail] = useState(initialData.email);

  const onSaveClick = () => {
    onSave({ id: initialData.id, name, email });
  };

  const onResetClick = () => {
    setName(initialData.name);
    setEmail(initialData.email);
  };

  return (
    <section className="flex flex-col border border-gray-400 rounded-md p-4 w-[500px] mx-auto mt-5">
      <label className="w-full mb-3 flex items-center">
        <span className="w-20">Name:</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded border border-gray-500 px-2 py-1 flex-1"
        />
      </label>

      <label className="w-full mb-3 flex items-center">
        <span className="w-20">Email:</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded border border-gray-500 px-2 py-1 flex-1"
        />
      </label>

      <div className="gap-1 mt-2 grid grid-cols-2">
        <button
          onClick={onSaveClick}
          className="rounded bg-green-700 text-white px-2 py-1"
        >Save</button>
        <button
          onClick={onResetClick}
          className="rounded bg-gray-700 text-white px-2 py-1"
        >Reset</button>
      </div>
    </section>
  );
}
