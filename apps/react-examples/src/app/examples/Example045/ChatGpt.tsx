import { useContext, createContext, ReactNode } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import { ChatGptService } from './ChatGptService';

// process.env.VITE_OPENAI_APIKEY
const OPENAI_APIKEY = import.meta.env.VITE_OPENAI_APIKEY;

const createClient = () => {
  const config = new Configuration({ apiKey: OPENAI_APIKEY });
  return new OpenAIApi(config);
};

const ChatGptContext = createContext<ChatGptService>(null as unknown as ChatGptService);

type Props = {
  children: ReactNode;
};

export const ChatGptProvider = ({ children }: Props) => {
  const service = new ChatGptService(createClient());

  return (
    <ChatGptContext.Provider value={service}>
      { children }
    </ChatGptContext.Provider>
  );
};

export const useChatGpt = () => useContext(ChatGptContext);
