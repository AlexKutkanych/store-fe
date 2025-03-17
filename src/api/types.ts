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
