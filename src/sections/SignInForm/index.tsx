import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import Input from '../../components/Input';
import { loginUser } from '../../api/auth';
import styles from './index.module.scss';
import { CreateUserResponseProps, SignInUserBodyProps } from '../../api/types';
import { useAuthErrorHandler } from '../../hooks/useAuthErrorHandler';
import { useAppContext } from '../../context/AppContext';

const SignInForm = () => {
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const navigate = useNavigate();

  const { handleSuccessLogin } = useAppContext();
  const { errorMessage, authErrorHandler } = useAuthErrorHandler();

  const mutation = useMutation<
    CreateUserResponseProps,
    Error,
    SignInUserBodyProps
  >({
    mutationFn: loginUser,
    onSuccess: handleSuccessLogin(navigate),
    onError: authErrorHandler,
  });

  const validateInputs = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

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

    return isValid;
  };

  const handleSubmit = (event: {
    preventDefault: () => void;
    currentTarget?: HTMLFormElement;
  }) => {
    event.preventDefault();
    if (emailError || passwordError) {
      return;
    }

    const data = new FormData(event.currentTarget);

    mutation.mutate({
      email: data.get('email') as string,
      password: data.get('password') as string,
    });
  };

  return (
    <div className={styles.wrapper} data-testid='sign-up-form'>
      <form className={styles.signUpForm} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Enter your account</h2>
        {errorMessage ? (
          <p className={styles.errorMessage} id='sign-in-error'>
            {errorMessage}
          </p>
        ) : null}
        <Input
          id='email'
          name='email'
          type='email'
          placeholder='Email'
          errorText={emailErrorMessage}
          testPrefix='sign-in'
        />
        <Input
          id='password'
          name='password'
          type='password'
          placeholder='Password'
          errorText={passwordErrorMessage}
          testPrefix='sign-in'
        />
        <button className={styles.signUpBtn} onClick={validateInputs}>
          Sign in
        </button>
      </form>
      <p className={styles.haveAccount}>
        Don't have an account? <Link to='/sign-up' data-testid="sign-in-redirect">Sign up</Link>
      </p>
    </div>
  );
};

export default SignInForm;
