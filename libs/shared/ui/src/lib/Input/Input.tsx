import { ComponentProps, LegacyRef, forwardRef } from 'react';
import styles from './input.module.scss';

export type InputProps = {
  isFull?: boolean;
  isWrapped?: boolean;
  withSuffix?: string;
  inputRef?: LegacyRef<HTMLInputElement>;
  type?: string;
  width?: number;
} & Partial<ComponentProps<'input'>>;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { inputRef, isFull, type, isWrapped, withSuffix, width, ...propsRest } = props;

  const wrapInput = isWrapped || withSuffix;
  if (wrapInput) {
    return (
      <div className={styles['form-wrap']} style={{
        width: `${width}%`
      }}>
        <input
          ref={ref}
          className={`${styles.input} ${styles[`input--${type}`]} ${
            isFull ? styles['input--full'] : ''
          }`}
          type={type}
          {...propsRest}
        />
        {withSuffix && (
          <div className={styles['form-wrap__suffix']}>{withSuffix}</div>
        )}
      </div>
    );
  }

  return (
    <input
      ref={ref}
      className={`${styles.input} ${styles[`input--${type}`]} ${
        isFull ? styles['input--full'] : ''
      }`}
      type={type}
      style={{
        width: `${width}%`,
      }}
      {...propsRest}
    />
  );
});
