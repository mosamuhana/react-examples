import { useState, useRef } from 'react';

import { sendMessage } from './utils';

export function Chat() {
  const [text, setText] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSending, setSending] = useState<boolean>(false);
  const acRef = useRef<AbortController>();
  const inputRef = useRef<HTMLInputElement>(null);

  const canSend = !isSending && text.trim().length > 0;

  const onSend = async () => {
    acRef.current = new AbortController();
    setSending(true);
    setMessage('');
    try {
      const ok = await sendMessage(text, { signal: acRef.current.signal });
      if (ok) {
        console.log('Send Success');
        setMessage('Send Success');
        setText('');
      }
    } catch (error: any) {
      setMessage(`${error}`);
      console.log(`${error}`);
    } finally {
      setTimeout(() => inputRef.current?.focus(), 0);
      setSending(false);
    }
  };

  const onCancel = () => {
    acRef.current?.abort('Canceled');
    setSending(false);
  };

  return (
    <>
      <div className="flex gap-2 items-center">
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={(e) => setText(e.target.value.trim())}
          disabled={isSending}
          className="px-2 py-1 flex-1 rounded border border-gray-400"
        />

        <button
          disabled={!canSend}
          onClick={onSend}
          className="flex-none rounded text-white disabled:bg-gray-400 bg-blue-600 hover:bg-blue-500 px-2 py-1"
        >
          {isSending ? 'Sending...' : 'Send'}
        </button>

        {isSending && (
          <button
            onClick={onCancel}
            className="flex-none rounded text-white bg-gray-600 hover:bg-gray-500 px-2 py-1"
          >
            Cancel
          </button>
        )}
      </div>

      <div>{message}</div>
    </>
  );
}
