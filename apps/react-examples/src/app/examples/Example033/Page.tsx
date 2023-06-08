import { useRef } from 'react';

import { SearchButton } from './SearchButton';
import { SearchInput } from './SearchInput';

export function Page() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col gap-2">
      <nav>
        <SearchButton onClick={() => inputRef.current?.focus()}>Search</SearchButton>
      </nav>

      <SearchInput ref={inputRef} placeholder="Looking for something?" className="custom-input" />
    </div>
  );
}
