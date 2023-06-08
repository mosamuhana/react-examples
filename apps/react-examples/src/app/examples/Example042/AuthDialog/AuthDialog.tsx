import { useState } from 'react';

import { LoginForm, SignupForm, ForgetPasswordForm, Dialog } from './components';
import { ILoginData, ISignupData, IForgetPasswordData, ProviderAuthCallback } from './types';

type Props = {
  open: boolean;
  onBackdropClick: () => void;
  onEmailLogin: (data: ILoginData) => void;
  onEmailSignup: (data: ISignupData) => void;
  onForgetPassword: (data: IForgetPasswordData) => void;
  onProvider: ProviderAuthCallback,
};

export function AuthDialog({ open, onBackdropClick, onProvider, onEmailLogin, onEmailSignup, onForgetPassword }: Props) {
  const [login, setLogin] = useState(true);
  const [forgotten, setForgotten] = useState(false);

  const getContent = () => {
    if (forgotten) {
      return (
        <ForgetPasswordForm
          onSubmit={onForgetPassword}
          onCancel={() => setForgotten(false)}
        />
      );
    }

    if (login) {
      return (
        <LoginForm
          onShowForgetClick={() => setForgotten(true)}
          onShowSignupClick={() => setLogin(false)}
          onSubmit={onEmailLogin}
          onProviderClick={onProvider}
        />
      );
    }

    return (
      <SignupForm
        onShowLoginClick={() => setLogin(true)}
        onSubmit={onEmailSignup}
        onProviderClick={onProvider}
      />
    );
  }

  return (
    <Dialog onBackdropClick={onBackdropClick} open={open}>
      {getContent()}
    </Dialog>
  );
}
