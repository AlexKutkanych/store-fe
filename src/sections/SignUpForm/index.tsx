import { useState } from 'react';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import Input from '../../components/Input';
import { createUser } from '../../api/auth';
import styles from './index.module.scss';
import { CreateUserBodyProps, CreateUserResponseProps } from '../../api/types';
import { useAuthErrorHandler } from '../../hooks/useAuthErrorHandler';

const SignUpForm = () => {
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
  const [acceptOffers, setAcceptOffers] = useState(false);

  const navigate = useNavigate();

  const { errorMessage, authErrorHandler } = useAuthErrorHandler();

  const handleSuccessSignUp = (navigate: NavigateFunction) => (data: CreateUserResponseProps) => {
    navigate('/');

    localStorage.setItem('user', JSON.stringify(data?.user));
  };

  const mutation = useMutation<CreateUserResponseProps, Error, CreateUserBodyProps>({
    mutationFn: createUser,
    onSuccess: handleSuccessSignUp(navigate),
    onError: authErrorHandler,
  });

  const validateInputs = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;
    const phone = document.getElementById('phone') as HTMLInputElement;

    let isValid = true;

    if (!email?.value || !/\S+@\S+\.\S+/.test(email?.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password?.value || password?.value?.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    if (!phone?.value || phone?.value?.length < 1) {
      setPhoneError(true);
      setPhoneErrorMessage('Please enter a phone number.');
      isValid = false;
    } else {
      setPhoneError(false);
      setPhoneErrorMessage('');
    }

    return isValid;
  };

  const handleSubmit = (event: { preventDefault: () => void; currentTarget?: HTMLFormElement; }) => {
    event.preventDefault();
    if (phoneError || emailError || passwordError) {
      return;
    }

    const data = new FormData(event.currentTarget);

    mutation.mutate({
      phone: data.get('phone') as string,
      email: data.get('email') as string,
      password: data.get('password') as string,
      acceptOffers,
    });
  };

  return (
    <div className={styles.wrapper} data-testid='sign-up-form'>
      <form className={styles.signUpForm} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Create your account</h2>
        {errorMessage ? (
          <p className={styles.errorMessage} id="sign-up-error">{errorMessage}</p>
        ) : null}
        <Input
          id='email'
          name='email'
          type='email'
          placeholder='Email'
          errorText={emailErrorMessage}
          testPrefix='sign-up'
        />
        <Input
          id='phone'
          name='phone'
          placeholder='Phone'
          errorText={phoneErrorMessage}
          testPrefix='sign-up'
        />
        <Input
          id='password'
          name='password'
          type='password'
          placeholder='Password'
          errorText={passwordErrorMessage}
          testPrefix='sign-up'
        />
        <div className={styles.helpOptions}>
          <label>
            <input
              className={styles.checkbox}
              type='checkbox'
              checked={acceptOffers}
              onChange={(e) => setAcceptOffers(e?.target.checked)}
              name="acceptOffers"
            />
            <span className={styles.checkboxText}>
              I would like personalised offers, news and the latest trends
            </span>
          </label>
        </div>
        <button className={styles.signUpBtn} onClick={validateInputs}>
          Create account
        </button>
      </form>
      <p className={styles.haveAccount}>
        Already have an account? <Link to='/sign-in'>Sign in</Link>
      </p>
    </div>
  );
};

export default SignUpForm;
