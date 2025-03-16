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

export enum HeaderMenu {
  NewNow = 'New now',
  Clothing = 'Clothing',
  Suits = 'Suits',
  ShoesAndAccessories = 'Shoes and accessories',
  Promotion = 'Promotion',
  Collections = 'Collections',
}

export enum Language {
  English = 'en',
  Ukrainian = 'ua',
}

export enum Category {
  CLOTHING = 'CLOTHING',
}

export enum Subcategory {
  JACKETS = 'JACKETS',
  COATS = 'COATS',
  TRENCH = 'TRENCH',
  GILETS = 'GILETS',
  TSHIRT = 'T-SHIRT',
  SWEATERS = 'SWEATERS',
  CARDIGANS = 'CARDIGANS',
  QUILTED = 'QUILTED',
}

export enum PersonalDataItemId {
  Number = 'number',
  FirstName = 'firstName',
  LastName = 'lastName',
  Prefix = 'prefix',
  Email = 'email',
  Address = 'address',
  Information = 'information',
  ZipCode = 'zipCode',
  City = 'city',
  State = 'state',
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

export enum FilterItems {
  NewNow = 'New now',
  PriceAsc = 'Price low to high',
  PriceDesc = 'Price high to low',
  PriceAscRequest = 'asc',
  PriceDescRequest = 'desc',
}

export type Image = {
  link: string;
  alt: string;
};

export interface GetProductsWithImagesProps {
  products: ProductProps[];
  images: ImageProps[];
  pages?: number;
  error?: boolean;
}

export interface ImageItemProps {
  id: string;
  name: string;
  url: string;
}

export interface ImageProps {
  id: string;
  images: ImageItemProps[];
}

export interface ProductProps {
  id: string;
  title: string;
  price: string;
  size: Size[];
  category: string;
  subcategory: Subcategory;
  colour: string;
  description: string;
  composition: string;
  brand: string;
  collection: string;
  manufacturer: string;
  files: string[];
  quantity: number;
  vendorCode: number;
}

export type BodyFilterProducts = {
  colours: string[] | [];
  sizes: Size[] | [];
  priceRange: {
    min: number;
    max: number;
  };
};

export interface SearchProductsProps {
  page: number;
  size: number;
  isFilter?: boolean;
  isNewNow?: boolean;
  sortBy?: string;
  body?: BodySearchProducts | BodyFilterProducts;
}
