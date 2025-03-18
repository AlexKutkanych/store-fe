import { Category, Color, Size, Subcategory } from '../types/types';

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

export type AddToCartBodyProps = {
  productId: string;
  color: Color;
  size: Size;
  quantity: number;
};

type CartItem = {
  productId: string;
  quantity: number;
  color: string;
  size: string;
  _id: string;
};

type Cart = {
  _id: string;
  userId: string;
  products: CartItem[];
  totalPrice: number;
  __v: number;
};

export type AddToCartResponseProps = {
  cart: Cart;
  message: string;
}
