import { Category, Subcategory } from '../types/types';

export type CreateUserBodyProps = {
  phone: string;
  email: string;
  password: string;
  acceptOffers?: boolean;
};

export type SearchProductBodyProps = {
  category: Category;
  subcategory?: Subcategory;
};

type User = {
  phone: string;
  email: string;
  _id: string;
  __v: number;
};

export type CreateUserResponseProps = {
  status: string;
  message: string;
  user: User;
  hasToken: boolean;
};
