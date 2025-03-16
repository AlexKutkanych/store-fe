import React, { FC, InputHTMLAttributes } from 'react';
import styles from './index.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: string;
  errorText?: string;
  wrapperClass?: string;
  labelCheckbox?: string;
}

const Input: FC<InputProps> = ({
  placeholder,
  Icon,
  errorText,
  onChange,
  ...rest
}) => {
  const errorKey = !!errorText;

  return (
    <div
      className={`${styles.inputWrapper} ${
        errorKey ? styles.inputWrapperError : ''
      }`}
    >
      {Icon ? <span className={styles.icon}>{Icon}</span> : null}
      <input
        placeholder={placeholder}
        className={styles.input}
        onChange={onChange}
        {...rest}
      />
      {errorText ? (
        <label className={styles.inputError}>{errorText}</label>
      ) : null}
    </div>
  );
};

export default Input;
