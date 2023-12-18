'use client';
import Link from 'next/link';
import styles from './LoginForm.module.scss';
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
      <div className={styles[`${mainClass}__container`]}>
        <input
          placeholder="email"
          type="email"
          name="email"
          autoComplete="email"
        />
        <input
          placeholder="password"
          name="password"
          type="password"
          autoComplete="current-password"
        />
        <div>
          {searchParams?.get('error') !== null && (
            <p className={styles.error}>
              {errors[searchParams?.get('error') as string]}
            </p>
          )}
        </div>
        <div className={styles[`${mainClass}__submit`]}>
          <Link className={styles['forgot-password']} href="/forgot-password">
            Forgot your password ?
          </Link>
          <button type="submit">
            Log in
          </button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
