import { Fragment, useEffect, useState } from 'react';
//import { useForm } from 'react-hook-form';

import { Header } from './Header';
import { HorizontalLine } from './HorizontalLine';
import { Button } from './Button';
import { FormFieldInput } from './FormInput';
import { InlineButton } from './InlineButton';
import { isValidEmail } from '../utils';
import { ProviderButtonBar } from './ProviderButtonBar';
import { ISignupData, ProviderAuthCallback } from '../types';

type Props = {
  onShowLoginClick: () => void;
  onSubmit: (data: ISignupData) => void;
  onProviderClick: ProviderAuthCallback;
};

export function SignupForm({ onShowLoginClick, onSubmit, onProviderClick }: Props) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordsMatched, setPasswordsMatched] = useState(false);

  const emailValid = isValidEmail(email);
  const passwordValid = password.length >= 8;
  const firstNameValid = firstName.length >= 3;
  const lastNameValid = lastName.length >= 3;
  const passwordConfirmValid = password.length >= 8;
  const canSubmit = emailValid
    && passwordValid
    && firstNameValid
    && lastNameValid
    && passwordConfirmValid
    && passwordsMatched;

  const handleSubmit = async () => {
    onSubmit({ email, password, firstName, lastName })
  };

  useEffect(() => {
    setPasswordsMatched(password == passwordConfirm);
  }, [password, passwordConfirm]);

  return (
    <Fragment>
      <Header>Sign up</Header>

      <ProviderButtonBar mode="signup" onClick={onProviderClick} />

      <HorizontalLine>or with Email</HorizontalLine>

      <form>
        <div className="grid grid-cols-1 gap-6">

          <FormFieldInput
            label="First Name"
            type="text"
            placeholder="john"
            value={firstName}
            minLength={3}
            onChange={(e) => setFirstName(e.target.value)}
            hasError={!firstNameValid}
          />

          <FormFieldInput
            label="Last Name"
            type="text"
            placeholder="doe"
            value={lastName}
            minLength={3}
            onChange={(e) => setLastName(e.target.value)}
            hasError={!lastNameValid}
          />

          <FormFieldInput
            label="Email Address"
            type="email"
            placeholder="john@example.com"
            value={email}
            minLength={3}
            onChange={(e) => setEmail(e.target.value)}
            hasError={!emailValid}
          />

          <FormFieldInput
            label="Password"
            type="password"
            placeholder=""
            value={password}
            minLength={8}
            onChange={(e) => setPassword(e.target.value)}
            hasError={!passwordValid}
          />

          <FormFieldInput
            label="Confirm Password"
            type="password"
            placeholder=""
            value={passwordConfirm}
            minLength={8}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            hasError={!passwordConfirmValid || !passwordsMatched}
          />
        </div>

        <div className="flex justify-center py-4">
          <Button
            disabled={!canSubmit}
            onClick={() => handleSubmit()}
            className="border border-emerald-500 hover:bg-emerald-500"
          >SIGN UP</Button>
        </div>
      </form>

      <p>
        <InlineButton onClick={onShowLoginClick}>Already have an account? Login in</InlineButton>
      </p>
    </Fragment>
  );
}
