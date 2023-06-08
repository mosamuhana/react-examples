import { Fragment, useState, FC } from 'react';
//import { useForm } from "react-hook-form";

import { Header } from './Header';
import { HorizontalLine } from './HorizontalLine';
import { Button } from './Button';
import { ProviderButtonBar } from './ProviderButtonBar';
import { FormFieldInput } from './FormInput';
import { InlineButton } from './InlineButton';
import { isValidEmail } from '../utils';
import { ILoginData, ProviderAuthCallback } from '../types';

type Props = {
  onShowForgetClick: () => void;
  onShowSignupClick: () => void;
  onSubmit: (data: ILoginData) => void;
  onProviderClick: ProviderAuthCallback;
};

export const LoginForm: FC<Props> = ({ onShowForgetClick: onForgetClick, onShowSignupClick: onSignupClick, onSubmit, onProviderClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    onSubmit({ email, password })
  };

  const emailValid = isValidEmail(email);
  const passwordValid = password.length >= 8;
  const canSubmit = emailValid && passwordValid;

  return (
    <Fragment>
      <Header>Log in</Header>

      <ProviderButtonBar mode="login" onClick={onProviderClick} />

      <HorizontalLine>or with Email</HorizontalLine>

      <form>
        <div className="grid grid-cols-1 gap-6">
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
        </div>

        <p className="text-right">
          <InlineButton onClick={onForgetClick}>Forgot Password.</InlineButton>
        </p>

        <div className="flex justify-center py-4">
          <Button
            disabled={!canSubmit}
            onClick={handleSubmit}
            className="border border-emerald-500 hover:bg-emerald-500 disabled:bg-gray-300 disabled:border-gray-300 hover:disabled:bg-gray-300"
          >Sign In</Button>
        </div>
      </form>

      <p className="text-center">
        <InlineButton onClick={onSignupClick}>Don&apos;t have an account? Sign up</InlineButton>
      </p>
    </Fragment>
  );
}
