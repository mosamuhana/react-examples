interface Props {
  items: string[];
}

export function Ingredients({ items }: Props) {
  return (
    <ul className="pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
