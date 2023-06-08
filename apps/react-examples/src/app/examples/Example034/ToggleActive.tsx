type Props = {
  value: boolean;
  onChange: (value: boolean) => void;
};

export function ToggleActive({ value, onChange }: Props) {
  return (
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={value}
        onChange={e => onChange(e.target.checked)}
      />
      <span className="select-none">Show only active todos</span>
    </label>
  );
}
