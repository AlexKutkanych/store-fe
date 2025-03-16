import { Category, Subcategory, FilterItems } from '@/types/types';

export type ButtonProps = {
  name: string;
  value: Category | Subcategory | FilterItems;
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
];
