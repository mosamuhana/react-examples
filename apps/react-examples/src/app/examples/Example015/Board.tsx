import { useState, useRef, type PointerEvent } from 'react';

import { clamp } from '../../utils';
import { Position } from './types';
import { Dot } from './Dot';
import { useRect } from './useRect';

export function Board() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const rect = useRect(ref);

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const { left, top, width, height } = rect;
    const x = clamp(e.clientX - left, 10, width - 10);
    const y = clamp(e.clientY - top, 10, height - 10);
    setPosition({ x, y });
  }

  return (
    <div
      ref={ref}
      className="relative w-full h-[500px] bg-gray-100"
      onPointerMove={onPointerMove}
    >
      <Dot position={position} />
    </div>
  );
}
