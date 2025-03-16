import React, { FC, InputHTMLAttributes, ReactElement, useMemo } from 'react';
import { FieldErrors, UseFormRegister, Validate } from 'react-hook-form';
import clsx from 'clsx';
import { PersonalDataForm } from '@/modules/order/components/PersonalData';
import styles from './index.module.scss';

type PersonalDataNames = keyof PersonalDataForm;

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: string;
  text?: string;
  wrapperClass?: string;
  labelCheckbox?: string;
  isAnimated?: boolean;
  register?: UseFormRegister<PersonalDataForm>;
  required?: boolean;
  validate?: Validate<string | number, PersonalDataForm>;
  errors?: FieldErrors<PersonalDataForm>;
  id?: string;
  type?: string;
}

const Input: FC<InputProps> = ({
  id,
  type,
  className,
  placeholder,
  Icon,
  text,
  wrapperClass,
  onChange,
  isAnimated,
  register,
  required,
  validate,
  errors,
}) => {
  const errorKey = id && errors ? Object.keys(errors).includes(id) : null;

  const errorTextClassName = useMemo(
    () =>
      clsx({
        [styles.wrong]: errorKey,
        [styles.warning]: !errorKey,
      }),
    [errorKey]
  );

  return (
    <div
      className={`${
        isAnimated ? styles.animatedInputWrapper : styles.inputWrapper
      } ${wrapperClass}`}
    >
      {Icon ? <span className={styles.icon}>{Icon}</span> : null}
      <input
        id={id}
        type={type}
        placeholder={isAnimated ? '' : placeholder}
        className={errorKey ? styles.inputError : className}
        {...(register
          ? register(id as PersonalDataNames, { required, validate })
          : { onChange })}
      />
      {isAnimated ? (
        <label className={styles.placeholder} htmlFor={id}>
          {placeholder}
        </label>
      ) : null}
      {text ? (
        <label className={isAnimated ? errorTextClassName : styles.text}>
          {text}
        </label>
      ) : null}
    </div>
  );
};

export default Input;
