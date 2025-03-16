import React, { JSX } from 'react';
import { useQuery } from '@tanstack/react-query';
import ProductCardsList from '@/components/ProductCardsList';
import { getNewProducts } from '../../api/product';

const CardProducts = (): JSX.Element => {
  const { data } = useQuery({
    queryKey: ['newProducts'],
    queryFn: getNewProducts,
  });

  return <ProductCardsList title='New now' searchProducts={data} />;
};

export default CardProducts;
