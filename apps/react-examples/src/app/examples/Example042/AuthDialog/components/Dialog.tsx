import { Fragment, ReactNode, FC } from 'react';

type Props = {
  children: ReactNode;
  open: boolean;
  onBackdropClick: () => void;
};

export const Dialog: FC<Props> = ({ children, open, onBackdropClick }) => {
  if (!open) return null;

  return (
    <Fragment>
      <div
        onClick={onBackdropClick}
        className="fixed inset-0 z-[100] cursor-pointer bg-gray-700/90"
      ></div>

      <div className="fixed top-1/2 left-1/2 z-[110] flex translate-x-[-50%] translate-y-[-50%] items-center justify-center ">
        <div className="z-10 max-w-xs flex-col rounded-lg bg-white p-4 text-gray-800 shadow-lg dark:bg-gray-800 dark:text-white md:w-96 md:max-w-5xl">
          {children}
        </div>
      </div>
    </Fragment>
  );
};
