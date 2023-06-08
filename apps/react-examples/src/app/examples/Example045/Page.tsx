import { useState, FormEvent } from 'react';

import { useChatGpt } from './ChatGpt';

interface ChatResponse {
  message: string;
  author: 'user' | 'bot';
}

export function Page() {
  const openai = useChatGpt();
  const [messages, setMessages] = useState<ChatResponse[]>([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const canSend = !busy && input.trim().length > 0;

  const addUserMessage = (message: string) =>
    setMessages([...messages, { message, author: 'user' }]);

  const addBotMessage = (message: string) =>
    setMessages([...messages, { message, author: 'bot' }]);

  const getMessage = async (prompt: string) => {
    try {
      setBusy(true);
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt,
        max_tokens: 50,
      });
      return response.choices[0].text;
    } catch (ex: any) {
      return 'Error: ' + (ex.message ?? ex ?? '').toString();
    } finally {
      setBusy(false);
    }
  };

  if (!openai) {
    return <p>Must use OpenApiProvider</p>;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    addUserMessage(input);

    try {
      const message = await getMessage(input);
      if (message) {
        addBotMessage(message);
      }
    } catch (error) {
      console.error(error);
    }

    setInput('');
  }

  return (
    <div className="flex flex-col items-stretch">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-2"
      >
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onBlur={(e) => setInput(e.target.value.trim())}
          className="custom-input w-full"
        ></textarea>

        <button type="submit" className="blue-btn self-end" disabled={!canSend}>
          Send
        </button>
      </form>

      <hr className="my-5" />

      {messages.map((message, index) => (
        <div key={index} className={message.author}>
          <p>{message.message}</p>
        </div>
      ))}
    </div>
  );
}
