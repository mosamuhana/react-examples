interface Props {
  name: string;
  isPacked: boolean;
}

export function Item({ name, isPacked }: Props) {
  return (
    <li className="font-black">
      {name} { isPacked ? '✔' : '❌' }
    </li>
  );
}
