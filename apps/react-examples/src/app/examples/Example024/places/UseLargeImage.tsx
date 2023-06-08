import { IsLarge } from './context';

export function UseLargeImage() {
  const [value, setValue] = IsLarge.useValue();

  return (
    <label className="flex gap-2 select-none">
      <input
        type="checkbox"
        checked={value}
        onChange={e => setValue(e.target.checked)}
      />
      Use large images
    </label>
  );
}
