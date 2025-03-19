import BlackColor from '/images/black.png';
import WhiteColor from '/images/white.png';

export enum Size {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
}

export enum Color {
  Black = 'Black',
  Beige = 'Beige',
}

export enum Category {
  CLOTHING = 'CLOTHING',
}

export enum Subcategory {
  JACKETS = 'JACKETS',
  COATS = 'COATS',
  OVERSHIRTS = 'OVERSHIRTS',
  SWEATERS = 'SWEATERS',
}

export const clothesColors: Record<Color, string> = {
  [Color.Black]: BlackColor,
  [Color.Beige]: WhiteColor,
};

export type MenuItem = {
  id: number;
  href: string;
  label: string;
};

export type MenuContent = {
  [key: string]: MenuItem[];
};

export type MenuList = {
  id: number;
  listNumber: number;
  contentName: string;
  label: string;
};

export enum Price {
  min = 0,
  max = 1000,
}

export type Image = {
  link: string;
  alt: string;
};

export interface ImageItemProps {
  id: string;
  url: string;
  alt: string;
}

export type ProductProps = {
  _id: string;
  category: string;
  subcategory: string;
  title: string;
  color: string;
  description: string;
  composition: string;
  size: Size[];
  price: number;
  brand: string;
  manufacturer: string;
  createdAt: string;
  updatedAt: string;
  images: ImageItemProps[];
  distribution: {
    [key in Size]: number;
  };
  quantity: number;
};
