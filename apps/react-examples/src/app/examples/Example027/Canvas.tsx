import { usePointerPosition } from '../../hooks/usePointerPosition';
import { useDelayedValue } from '../../hooks/useDelayedValue';

type Position = {
  x: number;
  y: number;
};

export function Canvas() {
  const pos1 = usePointerPosition();
  const pos2 = useDelayedValue(pos1, 100);
  const pos3 = useDelayedValue(pos2, 200);
  const pos4 = useDelayedValue(pos3, 100);
  const pos5 = useDelayedValue(pos4, 50);

  return (
    <>
      <Dot position={pos1} opacity={1} />
      <Dot position={pos2} opacity={0.8} />
      <Dot position={pos3} opacity={0.6} />
      <Dot position={pos4} opacity={0.4} />
      <Dot position={pos5} opacity={0.2} />
    </>
  );
}

type DotProps = {
  position: Position;
  opacity: number;
};

function Dot({ position, opacity }: DotProps) {
  const { x, y } = position;

  return (
    <div
      className="absolute bg-pink-400 rounded-full pointer-events-none w-10 h-10 -left-5 -top-5"
      style={{
        opacity,
        transform: `translate(${x}px, ${y}px)`,
      }}
    />
  );
}
