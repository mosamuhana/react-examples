import { ReactNode, FC, DOMAttributes, HTMLAttributes } from 'react';

type Props = {
  children?: ReactNode;
} & DOMAttributes<HTMLSpanElement> &
  HTMLAttributes<HTMLSpanElement>;

export const InlineButton: FC<Props> = (props) => {
  const { children, className = '', ...rest } = props;
  return (
    <span
      {...rest}
      className={`pt-4 text-emerald-500 hover:cursor-pointer hover:underline ${className}`}
    >
      {children}
    </span>
  );
};
