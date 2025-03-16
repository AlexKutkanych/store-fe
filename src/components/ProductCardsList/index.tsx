import React, { FC } from 'react';
import useGetViewportWidth from '@/hooks/useGetViewportWidth';
import { ViewportWidth } from '@/utils/constants';
import styles from './index.module.scss';
import {
  ImageProps,
  ProductProps,
  GetProductsWithImagesProps,
} from '@/types/types';
import ProductCard from '../ProductCard';

interface ProductsGridShortProps {
  searchProducts?: GetProductsWithImagesProps;
  title: string;
  isSizeColorShown?: boolean;
}

const ProductCardsList: FC<ProductsGridShortProps> = ({
  searchProducts = {} as GetProductsWithImagesProps,
  title,
}) => {
  const isMobile = useGetViewportWidth(ViewportWidth.TABLET);

  console.log(searchProducts);

  return searchProducts?.products?.length > 0 ? (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <div
        className={isMobile ? styles.cardsWrapperMobile : styles.cardsWrapper}
      >
        {searchProducts?.products?.map(
          ({ id, title, price, size, quantity, vendorCode }: ProductProps) => {
            const images =
              searchProducts?.images?.find((item: ImageProps) => item.id === id)
                ?.images ?? [];

            return (
              <ProductCard
                key={id}
                productId={id}
                productName={title}
                price={price}
                image={images[0]}
                sizes={size}
                quantity={quantity}
                vendorCode={vendorCode}
              />
            );
          }
        )}
      </div>
    </div>
  ) : null;
};

export default ProductCardsList;
