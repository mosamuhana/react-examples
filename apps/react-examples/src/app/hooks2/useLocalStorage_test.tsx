// https://www.robinwieruch.de/react-uselocalstorage-hook/

import { useLocalStorage } from "./useLocalStorage";

export function LocalStorageExample() {
  const [isOpen, setOpen] = useLocalStorage('is-open', false);

  const handleToggle = () => setOpen(!isOpen);

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      {isOpen && <div>Content</div>}
    </div>
  );
}
