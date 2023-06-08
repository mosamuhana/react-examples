import { useScrollbarWidth } from './useScrollbarWidth';

export function Component() {
  const width = useScrollbarWidth();

  return (
    <div>Scrollbar Width: {width}</div>
  );
}
