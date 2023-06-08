import clsx from 'clsx';
import { forwardRef, ReactNode, ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { children?: ReactNode };

export const TwButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={clsx(
          `px-4 py-2 text-white
          bg-blue-600 hover:bg-blue-500 active:bg-blue-600
          border border-blue-700 rounded-md
          shadow-lg shadow-blue-100`,
          className
        )}
      >
        {children}
      </button>
    );
  }
);
