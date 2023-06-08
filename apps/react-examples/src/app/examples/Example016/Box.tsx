import { useState, ReactNode, PointerEvent } from 'react';

import { Position, Change } from './types';

type Props = {
  color: string;
  position: Position;
  onMove: Change<Position>;
  children: ReactNode;
};

export function Box({ children, color, position, onMove }: Props) {
  const [last, setLast] = useState<Position | null>(null);
  const { x, y } = position;

  const onPointerDown = ({ target, pointerId, clientX, clientY }: PointerEvent<HTMLDivElement>) => {
    (target as HTMLDivElement).setPointerCapture(pointerId);
    setLast({ x: clientX, y: clientY });
  }

  const onPointerMove = ({ clientX: x, clientY: y }: PointerEvent<HTMLDivElement>) => {
    if (last) {
      setLast({ x, y });
      onMove({
        x: x - last.x,
        y: y - last.y,
      });
    }
  }

  const onPointerUp = () => setLast(null);

  return (
    <div
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      className="absolute w-[100px] h-[100px] cursor-grab border border-black flex items-center justify-center select-none"
      style={{
        backgroundColor: color,
        transform: `translate(${x}px, ${y}px)`
      }}
    >
      {children}
    </div>
  );
}
