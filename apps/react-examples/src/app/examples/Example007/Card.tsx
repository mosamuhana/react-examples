import type { PropsWithChildren } from 'react';

export function Card({ children }: PropsWithChildren) {
  return (
    <div className="card w-fit m-5 p-5 border border-gray-400 rounded-xl bg-white">
      <div className="text-center">
        {children}
      </div>
    </div>
  );
}
