import { ComponentProps } from 'react';
import styles from './button.module.scss';
import React from 'react';
import ClassProvider from '../../provider/ClassProvider';

/* eslint-disable-next-line */
export type ButtonProps = {
  markup: 'button' | 'a';
  children: React.ReactNode;
  size?: 'sm' | 'lg';
  color?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  isCenter?: boolean;
  isFull?: boolean;
  className?: string;
} & ComponentProps<'button'> &
  ComponentProps<'a'>;

export function Button({
  markup = 'button',
  children,
  color,
  size,
  isFull,
  isCenter,
  className,
  ...otherProps
}: ButtonProps) {
  const classList = [
    { key: size, value: size },
    { key: 'full', value: isFull },
    { key: 'center', value: isCenter },
    { key: color, value: color },
  ].map(({ key, value }) => value && key && styles[`button--${key}`]);

  const classOptions = Array.from(new Set([...classList])).join(' ');

  return (
    <ClassProvider className={className}>
      {React.createElement(
        markup,
        {
          ...otherProps,
          className: `${styles.button} ${classOptions}`,
        },
        children
      )}
    </ClassProvider>
  );
}

export default Button;
