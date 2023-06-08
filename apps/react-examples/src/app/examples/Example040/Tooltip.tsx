import { useRef, useLayoutEffect, useState, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { TooltipContainer } from './TooltipContainer';
import { Rect } from './types';

type Props = {
  children: ReactNode;
  targetRect?: Rect | null;
};

export function Tooltip({ children, targetRect }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [tooltipHeight, setTooltipHeight] = useState(0);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const { height } = ref.current.getBoundingClientRect();
    setTooltipHeight(height);
    console.log('Measured tooltip height: ' + height);
  }, []);

  let tooltipX = 0;
  let tooltipY = 0;
  if (targetRect != null) {
    tooltipX = targetRect.left;
    tooltipY = targetRect.top - tooltipHeight;
    if (tooltipY < 0) {
      // It doesn't fit above, so place below.
      tooltipY = targetRect.bottom;
    }
  }

  return createPortal(
    <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
      {children}
    </TooltipContainer>,
    document.body
  );
}
