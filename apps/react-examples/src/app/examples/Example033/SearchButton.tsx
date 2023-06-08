import { ReactNode, ButtonHTMLAttributes } from 'react';

type Props = { children: ReactNode; } & ButtonHTMLAttributes<HTMLButtonElement>;

export function SearchButton({ children, ...props }: Props) {
  return (
    <button type='button' className="blue-btn" {...props}>
      { children }
    </button>
  );
}
