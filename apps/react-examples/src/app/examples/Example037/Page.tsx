import { useState } from 'react';

import { Welcome } from './Welcome';
import { useFormRangeInput } from './hooks';

export function Page() {
  const [show, setShow] = useState(false);
  const durationInput = useFormRangeInput(1000, 100, 3000);

  return (
    <>
      <label className="flex items-center gap-2">
        <input {...durationInput} />
        Fade in duration: {durationInput.value} ms
      </label>

      <button className="blue-btn my-3" onClick={() => setShow(!show)}>{show ? 'Remove' : 'Show'}</button>

      <hr className="my-6" />

      {show && <Welcome duration={durationInput.value} />}
    </>
  );
}
