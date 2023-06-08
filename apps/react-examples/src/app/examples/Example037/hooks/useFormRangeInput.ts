import { useState, ChangeEvent } from "react";

export function useFormRangeInput(initialValue: number, min?: number, max?: number) {
  if (typeof min !== 'number') min = 0;
  if (typeof max !== 'number') max = 100;

  if (min >= max || initialValue < min || initialValue > max) throw new Error('Invalid range');

  const [value, setValue] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(Number(e.target.value));

  return { type: 'range', min, max, value, onChange };
}
