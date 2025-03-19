import { FC, InputHTMLAttributes, JSX } from 'react';
import styles from './index.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: JSX.Element;
  errorText?: string;
  label?: string;
  labelCheckbox?: string;
  testPrefix?: string
}

const Input: FC<InputProps> = ({
  placeholder,
  Icon,
  errorText,
  label,
  onChange,
  id,
  testPrefix,
  ...rest
}) => {
  const errorKey = !!errorText;

  return (
    <div
      className={`${styles.inputWrapper} ${
        errorKey ? styles.inputWrapperError : ''
      }`}
      data-testid={`${testPrefix ? `${testPrefix}-` : ''}${id}`}
    >
      {Icon ? <span className={styles.icon}>{Icon}</span> : null}
      <div className={styles.inputBox}>
        <input
          placeholder={placeholder}
          className={styles.input}
          onChange={onChange}
          id={id}
          {...rest}
        />
        {label ? <label className={styles.inputLabel}>{label}</label> : null}
      </div>
      {errorText ? (
        <span className={styles.inputError}>{errorText}</span>
      ) : null}
    </div>
  );
};

export default Input;
