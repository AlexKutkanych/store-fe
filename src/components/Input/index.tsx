import { FC, InputHTMLAttributes, JSX } from 'react';
import styles from './index.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: JSX.Element;
  errorText?: string;
  label?: string;
  labelCheckbox?: string;
}

const Input: FC<InputProps> = ({
  placeholder,
  Icon,
  errorText,
  label,
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
      <div className={styles.inputBox}>
        <input
          placeholder={placeholder}
          className={styles.input}
          onChange={onChange}
          {...rest}
        />
        {label ? <label className={styles.inputLabel}>{label}</label> : null}
      </div>
      {errorText ? (
        <label className={styles.inputError}>{errorText}</label>
      ) : null}
    </div>
  );
};

export default Input;
