import { FC } from 'react';

import { ProviderIcon } from './ProviderIcon';
import { ProviderAuthMode, ProviderAuthCallback, ProviderType } from '../types';

type Props = {
  mode: ProviderAuthMode;
  onClick: ProviderAuthCallback;
};

const providers: ProviderType[] = ['google', 'github', 'apple', 'facebook'];

export const ProviderButtonBar: FC<Props> = ({ onClick, mode = 'login' }) => {
  return (
    <div className="flex justify-between gap-2">
      {providers.map(provider =>
        <ProviderButton key={provider} provider={provider} onClick={() => onClick(provider, mode)} />
      )}
    </div>
  );
};

type ProviderButtonProps = {
  provider: ProviderType;
  onClick: () => void;
};

const ProviderButton: FC<ProviderButtonProps> = ({ provider, onClick }) => {
  return (
    <button
      className="flex w-full items-center justify-center gap-2 rounded border border-emerald-500 p-2 text-lg font-semibold transition-colors duration-300 hover:bg-emerald-500 hover:text-white active:scale-110"
      onClick={onClick}
    >
      <ProviderIcon provider={provider} />
    </button>
  );
};
