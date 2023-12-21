import React from 'react';
import styles from './Grid.module.scss';

/* eslint-disable-next-line */
export interface GridProps {
  children: React.ReactNode;
  itemsCenter?: boolean;
  justifyCenter?: boolean;
  width?: number;
  gutterXl?: boolean
}



export function Grid(props: GridProps) {
  const { children, width, gutterXl } = props;
  const classList = [styles.grid]
  gutterXl && classList.push(styles['grid--gutterXl'])
  return (
    <div className={styles.grid} style={{
      width: width && `${width}%`
    }}>
      {children}
    </div>
  );
}

export default Grid;
