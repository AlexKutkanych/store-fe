import { useState } from 'react';

export const useAuthErrorHandler = () => {
  const [errorMessage, setErrorMessage] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const authErrorHandler = (error: any) => {
    const errorsObj = error?.response?.data?.errors || {};
    const errorsArr = Object.values(errorsObj)
      .filter((item) => !!item)
      .join(' ');

    if (errorsArr.length) setErrorMessage(errorsArr);
  };

  return { errorMessage, authErrorHandler };
};
