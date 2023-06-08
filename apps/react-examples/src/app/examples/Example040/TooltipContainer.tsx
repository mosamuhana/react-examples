import { CSSProperties, ReactNode, Ref, FC } from 'react';

type Props = {
  children: ReactNode;
  x: number;
  y: number;
  contentRef: Ref<HTMLDivElement>;
};

export const TooltipContainer: FC<Props> = ({ children, x, y, contentRef }) => {
  const style: CSSProperties = {
    position: 'absolute',
    pointerEvents: 'none',
    left: 0,
    top: 0,
    transform: `translate3d(${x}px, ${y}px, 0)`
  };

  return (
    <div style={style}>
      <div ref={contentRef} className="text-white bg-gray-700 rounded py-1 px-2">
        {children}
      </div>
    </div>
  );
}
