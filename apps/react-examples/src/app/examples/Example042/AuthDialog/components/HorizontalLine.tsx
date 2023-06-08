import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const HorizontalLine: FC<Props> = ({ children }) => {
  return (
    <div className="relative flex items-center py-5">
      <div className="grow border-t border-emerald-400"></div>
      <span className="mx-4 shrink text-emerald-400">{ children }</span>
      <div className="grow border-t border-emerald-400"></div>
    </div>
  );
};
