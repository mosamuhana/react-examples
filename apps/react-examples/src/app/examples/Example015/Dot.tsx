import { CSSProperties } from 'react';

import { Position } from './types';

type Props = { position: Position };

export function Dot({ position }: Props) {
  const { x, y } = position;
  const style: CSSProperties = {
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: '50%',
    transform: `translate(${x}px, ${y}px)`,
    left: -10,
    top: -10,
    width: 20,
    height: 20,
  };

  return <div style={style} />;
}
