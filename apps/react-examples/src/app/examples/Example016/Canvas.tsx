import { useImmer } from 'use-immer';

import { Background } from './Background';
import { Box } from './Box';
import { Position } from './types';
import { ColorSelector } from './ColorSelector';

type Props = {
  initialPosition?: Position;
};

type State = {
  color: string;
  position: Position;
};

export function Canvas({ initialPosition: _initialPosition }: Props) {
  const initialPosition = _initialPosition ?? { x: 0, y: 0 };

  const [shape, updateShape] = useImmer<State>({
    color: 'orange',
    position: initialPosition,
  });

  const handleMove = ({ x, y }: Position) => {
    updateShape((state) => {
      state.position.x += x;
      state.position.y += y;
    });
  };

  const onColorChange = (color: string) => updateShape((state) => { state.color = color; });

  return (
    <div>
      <ColorSelector color={shape.color} onChange={onColorChange} />
      <Background position={initialPosition} />
      <Box color={shape.color} position={shape.position} onMove={handleMove}>Drag me!</Box>
    </div>
  );
}
