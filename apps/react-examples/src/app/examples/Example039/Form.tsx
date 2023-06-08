import { useFormTextInput, useFormCheckboxInput } from './useFormInput';

export function Form() {
  const firstNameProps = useFormTextInput('Mary');
  const lastNameProps = useFormTextInput('Poppins');
  const isAdminProps = useFormCheckboxInput();

  const fullName = `${firstNameProps.value} ${lastNameProps.value}`;

  return (
    <>
      <div className="flex flex-col gap-3">
        <label className="flex items-center gap-2 select-none">
          First name:
          <input className="custom-input" {...firstNameProps} />
        </label>
        <label className="flex items-center gap-2 select-none">
          Last name:
          <input className="custom-input" {...lastNameProps} />
        </label>
        <label className="flex items-center gap-2 select-none">
          <input {...isAdminProps} />
          Is admin:
        </label>
      </div>

      <hr className="my-5" />

      <div>
        <p>
          <span>Full name:</span> <b>{fullName}</b>
        </p>

        <p>
          <span>Is Admin:</span> <i>{isAdminProps.checked ? 'Yes' : 'No'}</i>
        </p>
      </div>
    </>
  );
}
