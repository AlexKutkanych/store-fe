import { Size } from '../src/types/types';

export const products = [
  {
    _id: '1',
    title: 'Product 1',
    price: 100,
    quantity: 10,
    images: [
      { id: '0', url: 'https://via.placeholder.com/150', alt: 'Product 1' },
    ],
    vendorCode: '100003bl',
    category: 'CLOTHING',
    subcategory: 'JACKETS',
    color: 'BLACK',
    description:
      'Online Exclusive. 100% cotton fabric. Denim style cotton fabric. Faux shearling collar. Two patch pockets with flaps on the chest. Two welt pockets on the front. Long sleeve with buttoned cuffs. Faux shearling interior. Inner pocket. Straight hem. Adjustable waistband with straps and buttons on both sides of the hips. The model is 190 cm tall and is wearing a size M.',
    composition:
      '100% cotton. Sleeve lining: 100% polyester. Front lining: 100% polyester. Sleeve padding: 100% polyester',
    size: ['XS', 'S', 'M', 'L', 'XL'] as Size[],
    brand: 'Mango',
    manufacturer: 'Bangladesh',
    distribution: { M: 63, XS: 88, XL: 51, S: 99, L: 32 },
    createdAt: '',
    updatedAt: '',
  },
  {
    _id: '2',
    title: 'Product 2',
    price: 200,
    quantity: 5,
    images: [
      { id: '0', url: 'https://via.placeholder.com/150', alt: 'Product 2' },
    ],
    vendorCode: '100004be',
    category: 'CLOTHING',
    subcategory: 'JACKETS',
    color: 'BEIGE',
    description:
      'Made to last. 100% cotton fabric. Bomber design. Cotton fabric. Short design. Funnel neck. Long sleeve. Front zip closure. Long sleeve with buttoned cuffs. Zip fastening. Two side pockets. Inner pocket. Inner lining. Hem with elastic band. The model is 187 cm tall and is wearing a size M.\n\nWe have strengthened our quality requirements by adding new resistance tests to our garments. Designed paying careful attention to their manufacture, they are now even more durable, versatile, and timeless.',
    composition: '100% cotton. Lining: 100% polyester',
    size: ['XS', 'S', 'M', 'L', 'XL'] as Size[],
    brand: 'Mango',
    manufacturer: 'Bangladesh',
    distribution: { M: 63, XS: 88, XL: 51, S: 99, L: 32 },
    createdAt: '',
    updatedAt: '',
  },
];
