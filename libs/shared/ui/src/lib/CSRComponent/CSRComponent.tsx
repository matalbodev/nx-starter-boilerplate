'use client';
import styles from './CSRComponent.module.scss';

/* eslint-disable-next-line */
export interface CSRComponentProps {}

export function CSRComponent(props: CSRComponentProps) {
  return (
    <div className={styles['container']}>
      This is a client component
    </div>
  );
}

export default CSRComponent;
