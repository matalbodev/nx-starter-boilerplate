import styles from './SSRComponent.module.scss';

/* eslint-disable-next-line */
export interface SSRComponentProps {}

export async function SSRComponent(props: SSRComponentProps) {
  return (
    <div className={styles['container']}>
      This is a server component
    </div>
  );
}

export default SSRComponent;
