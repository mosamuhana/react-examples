import { useState } from 'react';

import { letters } from './data';
import { Letter } from './Letter';

export function MailClient() {
  const [selection, setSelection] = useState(new Set<number>());

  function toggle(id: number) {
    const nextIds = new Set(selection);
    if (nextIds.has(id)) {
      nextIds.delete(id);
    } else {
      nextIds.add(id);
    }
    setSelection(nextIds);
  }

  return (
    <>
      <h2 className="text-2xl py-2">Inbox</h2>

      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={selection.has(letter.id)}
            onToggle={toggle}
          />
        ))}
      </ul>

      <hr />

      <p>
        <b>You selected {selection.size} letters</b>
      </p>
    </>
  );
}
