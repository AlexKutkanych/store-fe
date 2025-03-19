import { PRODUCT_API_ROUTES } from '../constants/apiRoutes';
import apiClient from './apiClient';
import { SearchProductBodyProps } from './types';

export const searchProducts = async (body: SearchProductBodyProps) => {
  const response = await apiClient.post(PRODUCT_API_ROUTES.SEARCH, body);
  return response.data;
};

export const getNewProducts = async () => {
  const response = await apiClient.get(
    PRODUCT_API_ROUTES.GET_NEW
  );
  return response.data;
};
