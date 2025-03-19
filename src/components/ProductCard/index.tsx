import { FC, JSX } from 'react';
import { Link } from 'react-router-dom';
import ProductInfo from '../ProductInfo';
import { Size, ImageItemProps } from '../../types/types';
import styles from './index.module.scss';

export interface ProductCardProps {
  productId: string;
  productName: string;
  price?: number;
  sizes?: Size[];
  images: ImageItemProps[];
  quantity: number;
}

const ProductCard: FC<ProductCardProps> = ({
  productId,
  price,
  productName,
  sizes,
  images,
  quantity,
}): JSX.Element => {
  const productPrice = price ? Number.parseFloat(String(price)) : undefined;
  return (
    <div className={styles.productCard} data-testid={`product-card-${productId}`}>
      <Link to={`/product/${productId}`}>
        <img
          src={images[0]?.url}
          alt={productName}
          className={styles.image}
        />
      </Link>
      <ProductInfo
        productId={productId}
        productName={productName}
        price={productPrice}
        sizes={sizes}
        quantity={Number(quantity)}
      />
    </div>
  );
};

export default ProductCard;
