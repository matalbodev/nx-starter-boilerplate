'use client';
import Link from 'next/link';
import styles from './login-form.module.scss';
import { Button, Input, Title } from '@nx-starter/shared/ui';
import { useLogin } from '@nx-starter/users/hooks';
import { useSearchParams } from 'next/navigation';
/* eslint-disable-next-line */
export interface LoginFormProps {}

export function LoginForm(props: LoginFormProps) {
  const mainClass = 'login-form';
  const { handleSubmit, errors } = useLogin();
  const searchParams = useSearchParams();
  return (
    <form className={styles[mainClass]} onSubmit={handleSubmit}>
      <Title size={"md"}>Sign in</Title>
      <div className={styles[`${mainClass}__container`]}>
        <Input
          placeholder="username"
          type="text"
          name="username"
          autoComplete="username"
          isFull
          isWrapped
        />
        <Input
          placeholder="password"
          name="password"
          type="password"
          autoComplete="current-password"
          isFull
          isWrapped
        />
        <div>
          {searchParams?.get('error') !== null && (
            <p className={styles.error}>{errors[searchParams.get('error') as string]}</p>
          )}
        </div>
        <div className={styles[`${mainClass}__submit`]}>
          <Link className={styles['forgot-password']} href="/forgot-password">
            Forgot your password ?
          </Link>
          <Button markup="button" type="submit" color="primary">
            Log in
          </Button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
