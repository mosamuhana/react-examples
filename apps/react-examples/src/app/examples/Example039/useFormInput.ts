import { useState, ChangeEvent } from 'react';

export function useFormTextInput(initialValue: string = '') {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  return { type: 'text', value, onChange };
}

export function useFormCheckboxInput(initialValue: boolean = false) {
  const [checked, setChecked] = useState(initialValue);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.target.checked);
  return { type: 'checkbox', checked, onChange };
}
