import { useState } from 'react';

import {
  AuthDialog,
  ProviderAuthMode,
  ILoginData,
  ISignupData,
  IForgetPasswordData,
} from './AuthDialog';

export function Page() {
  const [open, setOpen] = useState(false);

  const handleProvider = async (provider: string, mode: ProviderAuthMode) => {
    if (provider === 'google') {
      // Do something
    }
    if (provider === 'github') {
      // Do something
    }
    if (provider === 'apple') {
      // Do something
    }
    if (provider === 'facebook') {
      // Do something
    }
  };

  const handleEmailLogin = (data: ILoginData) => {};
  const handleEmailSignUp = (data: ISignupData) => {};
  const handleForgetPassword = (data: IForgetPasswordData) => {};

  return (
    <>
      <br />

      <button className="blue-btn" onClick={() => setOpen(true)}>Login</button>

      <AuthDialog
        open={open}
        onBackdropClick={() => setOpen(false)}
        onEmailLogin={handleEmailLogin}
        onEmailSignup={handleEmailSignUp}
        onForgetPassword={handleForgetPassword}
        onProvider={handleProvider}
      />
    </>
  );
}
