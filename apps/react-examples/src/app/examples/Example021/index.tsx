import { foods } from './data';
import { FilterableList } from './FilterableList';

export function Component() {
  return (<FilterableList items={foods} />);
}
