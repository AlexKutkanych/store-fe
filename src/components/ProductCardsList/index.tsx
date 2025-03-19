import { FC } from 'react';
import useGetViewportWidth from '../../hooks/useGetViewportWidth';
import { ViewportWidth } from '../../constants/constants';
import styles from './index.module.scss';
import { ProductProps } from '../../types/types';
import ProductCard from '../ProductCard';

interface ProductsGridShortProps {
  searchProducts?: ProductProps[];
  title: string;
}

const ProductCardsList: FC<ProductsGridShortProps> = ({
  searchProducts = [],
  title,
}) => {
  const isMobile = useGetViewportWidth(ViewportWidth.TABLET);

  return searchProducts?.length > 0 ? (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <div
        className={isMobile ? styles.cardsWrapperMobile : styles.cardsWrapper}
      >
        {searchProducts?.map(
          ({
            _id,
            title,
            price,
            size,
            quantity,
            images = [],
          }: ProductProps) => {
            return (
              <ProductCard
                key={_id}
                productId={_id}
                productName={title}
                price={price}
                images={images}
                sizes={size}
                quantity={quantity}
              />
            );
          }
        )}
      </div>
    </div>
  ) : null;
};

export default ProductCardsList;
