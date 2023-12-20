'use client';
import { ComponentProps } from 'react';
import { createElement } from 'react';
import styles from './Button.module.scss';
import { constructClassName } from '../../utils/className';

type DefaultComponentProps = ComponentProps<'button'> & ComponentProps<'a'>;

export interface ButtonProps extends DefaultComponentProps {
  skin: 'primary' | 'secondary' | 'tertiary';
  size?: 'md' | 'lg';
  children: string;
}

export function Button(props: ButtonProps) {
  const { skin, size, ...restProps } = props;
  const classObject = {
    base: 'button',
    modifiers: [skin, size],
  };

  return createElement('button', {
    ...restProps,
    className: constructClassName({ classObject, styles }),
  });
}

export default Button;
