export type CreateUserBodyProps = {
  phone: string;
  email: string;
  password: string;
  acceptOffers?: boolean;
};

enum Size {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL"
}

export type Product = {
  id: string;
  vendorCode: string;
  category: string;
  subcategory: string;
  title: string;
  color: string;
  description: string;
  composition: string;
  size: (keyof Size)[];
  price: number;
  brand: string;
  collection: string | null;
  manufacturer: string;
  createdAt: string;
  updatedAt: string;
  files: string[];
  quantities: {
    [key in Size]: number;
  };
  quantity: number;
};
