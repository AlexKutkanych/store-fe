import { Category, Subcategory } from '../../types/types';

export type ButtonProps = {
  name: string;
  value: Category | Subcategory;
};

export const filterButtons: ButtonProps[] = [
  {
    name: 'All',
    value: Category.CLOTHING,
  },
  {
    name: 'Jackets',
    value: Subcategory.JACKETS,
  },
  {
    name: 'Coats',
    value: Subcategory.COATS,
  },
  {
    name: 'Overshirts',
    value: Subcategory.OVERSHIRTS,
  },
  {
    name: 'Sweaters',
    value: Subcategory.SWEATERS,
  },
];
