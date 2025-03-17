import { FC } from 'react';
import useGetViewportWidth from '@/hooks/useGetViewportWidth';
import { ViewportWidth } from '@/utils/constants';
import styles from './index.module.scss';
import { ProductProps } from '@/types/types';
import ProductCard from '../ProductCard';

interface ProductsGridShortProps {
  searchProducts?: ProductProps[];
  title: string;
}

const ProductCardsList: FC<ProductsGridShortProps> = ({
  searchProducts = [] as ProductProps,
  title,
}) => {
  const isMobile = useGetViewportWidth(ViewportWidth.TABLET);

  console.log(searchProducts);

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
            vendorCode,
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
