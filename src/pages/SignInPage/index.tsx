import { JSX } from 'react';
import MainLayout from '../../components/MainLayout';
import SignInForm from '../../sections/SignInForm';

const SignInPage = (): JSX.Element => {
  return (
    <MainLayout>
      <SignInForm />
    </MainLayout>
  );
};

export default SignInPage;
