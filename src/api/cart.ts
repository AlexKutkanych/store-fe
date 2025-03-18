import { CART_API_ROUTES } from '@/constants/apiRoutes';
import apiClient from './apiClient';
import { AddToCartBodyProps } from './types';

export const addToCart = async (body: AddToCartBodyProps) => {
  const response = await apiClient.post(CART_API_ROUTES.ADD_TO_CART, body);
  return response.data;
};
