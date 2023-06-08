import { Position } from './types';

type Props = {
  position: Position;
};

export function Background({ position }: Props) {
  const { x, y } = position;
  return (
    <div
      className="absolute w-[400px] h-[400px] bg-lime-100"
      style={{ transform: `translate(${x}px, ${y}px)` }}
    />
  );
}
