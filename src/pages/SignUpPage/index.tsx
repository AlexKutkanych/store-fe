import { JSX } from 'react';
import MainLayout from '../../components/MainLayout';
import SignUpForm from '../../sections/SignUpForm';

const SignUpPage = (): JSX.Element => {
  return (
    <MainLayout>
      <SignUpForm />
    </MainLayout>
  );
};

export default SignUpPage;
