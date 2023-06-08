import { useState } from 'react';
import clsx from 'clsx';

type Props = {
  src: string;
  alt: string;
};

export function Picture({ src, alt }: Props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onClick={() => setIsActive(false)}
      className="w-[500px] h-[400px] flex items-center justify-center bg-slate-100 m-5"
    >
      <img
        onClick={(e) => {
          e.stopPropagation();
          setIsActive(true);
        }}
        className={clsx(
          "w-[200px] h-[200px] border-4 rounded-xl",
          isActive ? 'border-blue-400' : 'border-transparent',
        )}
        alt={alt}
        src={src}
      />
    </div>
  );
}
