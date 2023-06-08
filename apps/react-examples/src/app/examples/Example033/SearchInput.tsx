import { forwardRef, InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

export const SearchInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <input {...props} ref={ref} />
  );
});
