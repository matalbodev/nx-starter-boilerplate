"use client";
import styles from './Component.module.scss';

/* eslint-disable-next-line */
export interface ComponentProps {}

export function Component(props: ComponentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Component!</h1>
    </div>
  );
}

export default Component;
