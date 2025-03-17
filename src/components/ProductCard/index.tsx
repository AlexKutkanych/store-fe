import { FC } from 'react';
import { Link } from 'react-router-dom';
import ProductInfo from '../ProductInfo';
import { Size, ImageItemProps } from '@/types/types';
import styles from './index.module.scss';

export interface ProductCardProps {
  productId: string;
  productName: string;
  price?: string;
  sizes?: Size[];
  images: ImageItemProps[];
  quantity: number;
  vendorCode?: number;
}

const ProductCard: FC<ProductCardProps> = ({
  productId,
  price,
  productName,
  sizes,
  images,
  quantity,
  vendorCode,
}): JSX.Element => {
  const productPrice = price ? Number.parseFloat(price) : undefined;
  return (
    <div className={styles.productCard}>
      <Link to={`/product/${productId}`}>
        <img
          src={`${import.meta.env.VITE_APP_API_PATH}/${images[0]?.url}`}
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
        vendorCode={vendorCode}
      />
    </div>
  );
};

export default ProductCard;
