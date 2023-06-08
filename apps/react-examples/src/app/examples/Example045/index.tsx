import { ChatGptProvider } from "./ChatGpt";
import { Page2 } from "./Page2";

export function Component() {
  return (
    <ChatGptProvider>
      <Page2 />
    </ChatGptProvider>
  );
}
