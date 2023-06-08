type Props = {
  color: string;
  onChange: (color: string) => void;
};

export function ColorSelector({ color, onChange }: Props) {
  return (
    <select
      className="w-[400px] px-2 py-1 mb-2 bg-white rounded border border-gray-500"
      value={color}
      onChange={e => onChange(e.target.value)}
    >
      <option value="orange">orange</option>
      <option value="lightpink">lightpink</option>
      <option value="aliceblue">aliceblue</option>
    </select>
  );
}
