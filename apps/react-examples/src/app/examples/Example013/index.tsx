import { sculptureList } from './data';
import { Gallery } from './Gallery';

export function Component() {
  return (<Gallery images={sculptureList} />);
}
