import { ITodo } from './types';

type Props = {
  todos: ITodo[];
}

export function TodoHint({ todos }: Props) {
  const active = todos.filter(x => !x.completed).length;

  return (
    <footer>{active} todos left</footer>
  );
}
