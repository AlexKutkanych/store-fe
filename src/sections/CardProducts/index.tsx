import React, { JSX } from 'react';

import ProductCardsList from '@/components/ProductCardsList';

const CardProducts = (): JSX.Element => {
  // const { data } = useGetNewNowProductsQuery();

  return <ProductCardsList title='New now' searchProducts={[]} />;
};

export default CardProducts;
