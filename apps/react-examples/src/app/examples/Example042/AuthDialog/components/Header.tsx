import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const Header: FC<Props> = ({ children }) => {
  return (
    <h1 className="pb-4 text-center text-3xl font-bold text-emerald-500">
      { children }
    </h1>
  );
}
