import styles from './SSRComponent.module.scss';

/* eslint-disable-next-line */
export interface SSRComponentProps {}

export async function SSRComponent(props: SSRComponentProps) {
  // you can fetch data from here
  return (
    <div className={styles['container']}>
      <h1>Welcome to Server side component !</h1>
    </div>
  );
}

export default SSRComponent;
