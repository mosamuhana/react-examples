import { useState, useRef, ReactNode, FC, DOMAttributes } from 'react';

import { Tooltip } from './Tooltip';
import { Rect } from './types';

type Props = {
  tooltipContent: ReactNode;
} & DOMAttributes<HTMLButtonElement>;

export const ButtonWithTooltip: FC<Props> = ({ tooltipContent, ...rest }) => {
  const [targetRect, setTargetRect] = useState<Rect | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onPointerEnter = () => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setTargetRect(rect);
  };
  const onPointerLeave = () => setTargetRect(null);

  return (
    <>
      <button
        {...rest}
        ref={buttonRef}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        className="blue-btn"
      />

      {targetRect !== null && (
        <Tooltip targetRect={targetRect}>{tooltipContent}</Tooltip>
      )}
    </>
  );
}
