import { ReactNode } from 'react';

type Props = {
  title: string;
  details: string;
  timestamp: string;
  actions: ReactNode;
};

export const Alert = ({ title, details, timestamp, actions }: Props) => {
  return (
    <div
      className={`
        overflow-auto w-fit
        max-w-sm max-h-32 h-24
        rounded-md shadow-lg
        text-gray-700 dark:text-gray-300
        border border-l-4 border-gray-700 dark:border-gray-300
        bg-white-300/25 dark:bg-gray-700/25
      `}
    >
      <div className="mx-2 h-full flex justify-between gap-4 text-sm">
        <div className="flex h-full items-center gap-2">
          <div>
            <div className="font-bold capitalize text-lg">{title}</div>
            <div>{details}</div>
          </div>
        </div>

        <div className="flex flex-col items-end justify-between py-2">
          <div className="pt-1 text-xs">{timestamp}</div>
          <div className="flex justify-end">
            {actions}
          </div>
        </div>
      </div>
    </div>
  );
};
