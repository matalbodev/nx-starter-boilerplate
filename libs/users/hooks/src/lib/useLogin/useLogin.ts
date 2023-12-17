import { signIn } from 'next-auth/react';
import { SyntheticEvent } from 'react';
import { useSearchParams } from 'next/navigation';

export interface UseLogin {
  handleSubmit: (e: SyntheticEvent<Element, Event>) => Promise<void>;
  errors: {
    [key: string]: string;
  };
}

export function useLogin(): UseLogin {
  const searchParams = useSearchParams();

  const errors: {
    [key: string]: string;
  } = {
    CredentialsSignin:
      'Wrong username or password provided please try again',
  };
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };

    const {
      email: { value: email },
      password: { value: password },
    } = target;

    await signIn('credentials', {
      callbackUrl: searchParams.get('callbackUrl') || '/dashboard',
      redirect: true,
      email,
      password,
    });
  };

  return { handleSubmit, errors };
}

export default useLogin;
