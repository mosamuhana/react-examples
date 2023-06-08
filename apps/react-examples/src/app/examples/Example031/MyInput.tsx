import { forwardRef, InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string | null;
};

export const MyInput = forwardRef<HTMLInputElement, Props>(({ label, ...props}, ref) => {
  return (
    <label className="flex items-center gap-2">
      {label && <span>{ label }</span>}
      <input className="custom-input" {...props} ref={ref} />
    </label>
  );
});
