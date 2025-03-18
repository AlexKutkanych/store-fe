import { FC, JSX } from 'react';
import ProductCard from '../../components/ProductCard';
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
          ({ _id, title, price, size, quantity, images = [] }) => {
            return (
              <ProductCard
                key={_id}
                productId={_id}
                productName={title}
                price={price}
                sizes={size}
                images={images}
                quantity={quantity}
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
