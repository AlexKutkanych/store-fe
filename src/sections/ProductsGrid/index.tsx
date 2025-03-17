import React, { FC } from 'react';
import ProductCard from '@/components/ProductCard';
import styles from './index.module.scss';
import { ProductProps } from '../../types/types';

interface ProductsGridProps {
  products?: ProductProps[];
}

const ProductsGrid: FC<ProductsGridProps> = ({
  products = [] as ProductProps[],
}): JSX.Element => {
  return (
    <div className={styles.cardsWrapper}>
      {products?.length ? (
        products.map(
          ({ id, title, price, size, quantity, vendorCode, images = [] }) => {
            return (
              <ProductCard
                key={id}
                productId={id}
                productName={title}
                price={price}
                sizes={size}
                images={images}
                quantity={quantity}
                vendorCode={vendorCode}
              />
            );
          }
        )
      ) : (
        <p className={styles.noProducts}>No products found</p>
      )}
    </div>
  );
};

export default ProductsGrid;
