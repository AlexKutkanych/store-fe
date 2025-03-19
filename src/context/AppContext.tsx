import { ReactNode } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { createContext, useContext, useEffect, useState } from 'react';
import getFromLocalStorage from '../helpers/getFromLocalStorage';
import { getUserToken } from '../api/auth';
import { CreateUserResponseProps, User, Cart } from '../api/types';
import { AuthContextProps } from './types';

const initialAuth = { hasToken: false, user: {} as User };
const initialContext = {
  auth: initialAuth,
  resetAuth: () => {},
  saveUser: () => {},
  handleSuccessLogin: () => () => {},
  cart: {} as Cart,
  updateCart: () => {},
};

const AppContext = createContext<AuthContextProps>(initialContext);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState(initialAuth);
  const [cart, setCart] = useState<Cart>({} as Cart);

  const getUserTokenQuery = useQuery({
    queryKey: ['getUserToken'],
    queryFn: getUserToken,
  });

  const getUserFromLocalStorage = () => {
    const user = getFromLocalStorage('user') || {};

    setUser(user);
  };

  useEffect(() => {
    getUserFromLocalStorage();
  }, []);

  useEffect(() => {
    const data = getUserTokenQuery?.data;
    if (data?.status === 'ok') {
      getUserFromLocalStorage();

      setAuth((state) => ({
        ...state,
        hasToken: data?.hasToken,
      }));
    }
  }, [getUserTokenQuery?.data]);

  const saveUser = (user: User) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const setUser = (user: User) => {
    setAuth((state) => ({
      ...state,
      user,
    }));
  };

  const handleSuccessLogin =
    (navigate: NavigateFunction) => (data: CreateUserResponseProps) => {
      if (data?.status === 'ok') {
        setAuth((state) => ({
          ...state,
          user: data?.user,
          hasToken: data?.hasToken,
        }));
        localStorage.setItem('user', JSON.stringify(data?.user));
        navigate('/');
      }
    };

  const resetAuth = () => setAuth(initialAuth);

  const updateCart = (cart: Cart) => setCart(cart);

  return (
    <AppContext.Provider
      value={{
        auth,
        cart,
        resetAuth,
        saveUser,
        handleSuccessLogin,
        updateCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
