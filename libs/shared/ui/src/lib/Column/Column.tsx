import { ReactNode } from 'react';
import styles from './column.module.scss';
import ClassProvider from '../../provider/ClassProvider';

/* eslint-disable-next-line */
export interface ColumnProps {
  children: ReactNode;
  size: number;
  className?: string;
}

export function Column(props: ColumnProps) {
  const { children, size, className } = props;
  return (
    <ClassProvider className={className}>
      <div
        style={{
          '--size': `${(100 / 12) * size}%`,
        }}
        className={styles['col']}
      >
        {children}
      </div>
    </ClassProvider>
  );
}

export default Column;
