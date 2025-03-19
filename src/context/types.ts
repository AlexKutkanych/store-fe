import { NavigateFunction } from 'react-router-dom';
import { Cart, CreateUserResponseProps, User } from '../api/types';

export interface AuthProps {
  user: User;
  hasToken: boolean;
}

export type AuthContextProps = {
  auth: AuthProps;
  cart: Cart;
  resetAuth: () => void;
  saveUser: (user: User) => void;
  handleSuccessLogin: (
    navigate: NavigateFunction
  ) => (data: CreateUserResponseProps) => void;
  updateCart: (cart: Cart) => void;
};
