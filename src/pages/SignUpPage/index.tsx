import React, { useEffect, useState, useCallback } from 'react';
// import { useFetchProductsWithImagesMutation } from 'redux/productsApi';
import MainLayout from '@/components/MainLayout';
import SignUpForm from '../../sections/SignUpForm';

const SignUpPage = (): JSX.Element => {
  // const [searchProducts, { isLoading, data }] =
  //   useFetchProductsWithImagesMutation();

  return (
    <MainLayout>
      <SignUpForm />
    </MainLayout>
  );
};

export default SignUpPage;
