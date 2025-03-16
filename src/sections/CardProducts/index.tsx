import React, { JSX } from 'react';

import { useGetNewNowProductsQuery } from '@/redux/productsApi';
import ProductCardsList from '@/components/ProductCardsList';

const CardProducts = (): JSX.Element => {
  const { data } = useGetNewNowProductsQuery();

  return <ProductCardsList title='New now' searchProducts={data} />;
};

export default CardProducts;
