import { useState } from 'react';
import { PasswordInput } from '@/components';

export const PasswordInputExample: React.FunctionComponent = () => {
  const [passwordInput, setPasswordInput] = useState<string>('');
  return (
    <>
      <PasswordInput
        passwordInput={passwordInput}
        setPasswordInput={setPasswordInput}
      />
    </>
  );
};

export const PasswordInputWithStrengthCheckExample: React.FunctionComponent =
  () => {
    const [passwordInput, setPasswordInput] = useState<string>('');
    return (
      <>
        <PasswordInput
          passwordInput={passwordInput}
          setPasswordInput={setPasswordInput}
          withStrengthCheck
        />
      </>
    );
  };
