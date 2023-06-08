import { useState, ReactNode } from 'react';
import clsx from 'clsx';
import { ChevronArrowUpCircle, ChevronArrowDownCircle } from './icons';

type Props = {
  children: ReactNode;
  title?: string;
}

export function Panel({ children, title }: Props) {
  const [open, setOpen] = useState(true);
  title = title ?? ' ';

  return (
    <section
      className="border border-gray-400 rounded-xl mt-5 w-full flex flex-col overflow-hidden shadow-md shadow-gray-300"
    >
      <div
        className={clsx(
          "bg-gray-100 flex items-start justify-between py-3 cursor-pointer select-none",
          open && "border border-b-gray-200"
        )}
        onClick={() => setOpen(!open)}
      >
        <span className="flex-1 px-3">{ title }</span>
        <div className="mx-2 text-red">
          {open ? <ChevronArrowUpCircle /> : <ChevronArrowDownCircle />}
        </div>
      </div>
      {open && children}
    </section>
  );
}
