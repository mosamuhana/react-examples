import { useState, ChangeEventHandler } from 'react';

export function useFormInput<T>(initialValue: T) {
  const isBool = typeof initialValue === 'boolean';
  const [value, setValue] = useState<T>(initialValue);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (isBool) {
      setValue(e.target.checked as T);
    } else {
      setValue(e.target.value as T);
    }
  }

  return { value, onChange };
}

export function useFormTextInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  }

  return { value, onChange };
}

export function useFormBooleanInput(initialValue: boolean) {
  const [checked, setChecked] = useState<boolean>(initialValue);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setChecked(e.target.checked);
  }

  return { checked, onChange };
}
