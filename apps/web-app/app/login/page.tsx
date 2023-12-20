import { LoginForm } from '@nx-starter/users/ui';
import styles from './page.module.scss';
export default async function Login() {
  return (
    <div className={styles.container}>
      <h1>Backoffice</h1>
      <div className={styles.form}>
        <LoginForm />
      </div>
    </div>
  );
}
