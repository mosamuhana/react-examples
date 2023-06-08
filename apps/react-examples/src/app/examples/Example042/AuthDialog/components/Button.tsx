import { ReactNode, FC, ButtonHTMLAttributes, HTMLAttributes } from 'react';

type Props = { children: ReactNode; }
  & ButtonHTMLAttributes<HTMLButtonElement>
  & HTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = (props) => {
  const { children, className = '', ...rest } = props;
  let cls = '';
  if (rest.disabled) {
    cls = '';
  } else {
    cls = 'duration-300';
  }

  return (
    <button
      {...rest}
      className={`
        flex w-full items-center cursor-pointer
        justify-center gap-2 rounded transition-colors px-4 py-2 text-lg font-semibold
        hover:text-white active:scale-90
        ${className}
        disabled:bg-opacity-30 disabled:cursor-not-allowed disabled:scale-100
        ${cls}
      `}
    >
      {children}
    </button>
  );
};

/*
// Common
flex w-full cursor-pointer items-center justify-center gap-2 rounded transition-colors
px-4 py-2 text-lg font-semibold duration-300 hover:text-white active:scale-90
disabled:scale-100 disabled:cursor-not-allowed

// Outlined
border border-emerald-500 hover:bg-emerald-500

// Filled
bg-red-500

*/
