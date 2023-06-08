type Options = {
  signal: AbortSignal;
};

// demo implementation for sending message
export function sendMessage(text: string, { signal }: Options) {
  return new Promise<boolean>((resolve, reject) => {
    const abort = () => reject(new AbortError(signal.reason ?? 'Aborted by user'));

    if (signal.aborted) {
      return abort();
    }

    const timeout = setTimeout(() => {
      console.log(`Message "${text}" sent.`)
      resolve(true);
    }, 3000);

    signal.addEventListener('abort', () => {
      clearTimeout(timeout);
      abort();
    });
  });
}

class AbortError extends Error {}
