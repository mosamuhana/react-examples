import { FC, Fragment, useEffect, useState } from 'react';

import { Header } from './Header';
import { Button } from './Button';
import { isValidEmail } from '../utils';
import { IForgetPasswordData } from '../types';

type Props = {
  onSubmit: (data: IForgetPasswordData) => void;
  onCancel: () => void;
};

export const ForgetPasswordForm: FC<Props> = ({ onSubmit, onCancel }) => {
  const [email, setEmail] = useState('');
  const [emailOk, setEmailOk] = useState(false);

  const handleSubmit = () => onSubmit({ email });

  useEffect(() => {
    setEmailOk(isValidEmail(email))
  }, [email]);

  return (
    <Fragment>
      <Header>Forgotten Password</Header>

      <form>
        <div className="grid grid-cols-1 gap-6">
          <label className="block">
            <span className="text-emerald-500">Email address</span>
            <input
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-0  block w-full rounded border-2 p-1 focus:ring-0 dark:bg-slate-700 ${
                emailOk
                  ? 'border-x-transparent border-t-transparent border-b-red-300 hover:border-red-500 focus:border-red-500'
                  : 'border-x-transparent border-t-transparent border-b-emerald-500 hover:border-emerald-500 focus:border-emerald-500'
              }`}
            />
          </label>
        </div>

        <div className="flex justify-center py-4">
          <Button
            disabled={!emailOk}
            onClick={() => handleSubmit()}
            className="border border-emerald-500 hover:bg-emerald-500"
          >Reset Password</Button>
        </div>

        <div className="flex justify-center pb-4">
          <Button onClick={onCancel} className="bg-red-500">Cancel</Button>
        </div>
      </form>
    </Fragment>
  );
}
