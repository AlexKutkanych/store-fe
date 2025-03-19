import { AUTH_API_ROUTES } from '../constants/apiRoutes';
import apiClient from './apiClient';
import { CreateUserBodyProps, SignInUserBodyProps } from './types';

export const createUser = async (body: CreateUserBodyProps) => {
  const response = await apiClient.post(AUTH_API_ROUTES.SIGN_UP, body);
  return response.data;
};

export const loginUser = async (body: SignInUserBodyProps) => {
  const response = await apiClient.post(AUTH_API_ROUTES.SIGN_IN, body);
  return response.data;
};
