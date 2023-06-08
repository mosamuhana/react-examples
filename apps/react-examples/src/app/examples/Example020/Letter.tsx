import clsx from "clsx";

import { ILetter, OnChange } from "./types";

type Props = {
  letter: ILetter;
  onToggle: OnChange<number>;
  isSelected: boolean;
};

export function Letter({ letter, onToggle, isSelected }: Props) {
  return (
    <li className={clsx(
      "p-2 mb-1",
      isSelected && 'bg-indigo-100',
    )}>
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onToggle(letter.id)}
          className="mr-2"
        />

        {letter.subject}
      </label>
    </li>
  );
}
