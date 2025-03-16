import { MenuItem } from '@/types/types';

export const mainMenu: MenuItem[] = [
  { id: 0, href: '/', label: 'Home' },
  { id: 1, href: '/men/products-grid', label: 'Men' },
  { id: 2, href: '/men/products-grid', label: 'Women' },
];

export const category: Record<string, MenuItem[]> = {
  Women: [],
  Men: [
    { id: 0, href: '/men/products-grid', label: 'New now' },
    { id: 1, href: '#', label: 'Clothing' },
    { id: 2, href: '#', label: 'Suits' },
    { id: 3, href: '#', label: 'Shoes and accessories' },
    { id: 4, href: '#', label: 'Promotion' },
    { id: 5, href: '#', label: 'Collections' },
  ],
  Kids: [],
};

export const subcategory: Record<string, MenuItem[]> = {
  Women: [],
  Men: [
    { id: 0, href: '/men/products-grid', label: 'See all' },
    { id: 1, href: '#', label: 'Coats' },
    { id: 2, href: '#', label: 'Cardigans and sweaters' },
    { id: 3, href: '#', label: 'Jackets and overshirts' },

    { id: 4, href: '#', label: 'Trousers' },
    { id: 5, href: '#', label: 'Shirts' },
    { id: 6, href: '#', label: 'Jeans' },
  ],
  Kids: [],
};
