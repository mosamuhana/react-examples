import { useState } from 'react';

import { useChatGpt } from './ChatGpt';

export function Page2() {
  const openai = useChatGpt();
  const [busy, setBusy] = useState(false);

  async function handleListModels() {
    if (busy) return;
    setBusy(true);

    try {
      const models = await openai.listModels();
      console.log(models);
    } catch (ex) {
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <button
        className="blue-btn"
        onClick={handleListModels}
        disabled={busy}
      >
        List Models
      </button>
    </div>
  );
}
