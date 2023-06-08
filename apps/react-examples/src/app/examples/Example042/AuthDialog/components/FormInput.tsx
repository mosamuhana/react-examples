import { FC, ReactNode, InputHTMLAttributes, HTMLAttributes } from 'react';

type FormInputProps = {
  hasError?: boolean;
} & InputHTMLAttributes<HTMLInputElement> & Omit<HTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>;

export const FormInput: FC<FormInputProps> = (props) => {
  const { hasError, className = '', ...rest } = props ?? {};
  return (
    <input
      {...rest}
      className={`mt-0 block w-full rounded border-2 p-1 focus:ring-0 dark:bg-slate-700 disabled:cursor-not-allowed ${
        hasError
          ? 'border-red-300 hover:border-red-500 focus:border-red-500'
          : 'border-x-transparent border-t-transparent border-b-emerald-500 hover:border-emerald-500 focus:border-emerald-500'
      } ${className}`}
    />
  );
};

type FormFieldInputProps = { label: string; } & FormInputProps;

export const FormFieldInput: FC<FormFieldInputProps> = (props) => {
  const { label, ...inputProps } = props ?? {};
  let labelContent: ReactNode | null = null;
  if (label) {
    if (props.hasError) {
      labelContent = <span className="text-red-400">{ label }</span>;
    } else {
      labelContent = <span className="text-emerald-500">{ label }</span>;
    }
  }

  return (
    <label className="block">
      {labelContent}
      <FormInput {...inputProps} />
    </label>
  );
};
