import React, { FC } from 'react';

import styles from './index.module.scss';

interface ProductPriceProps {
  price: number;
}

const ProductPrice: FC<ProductPriceProps> = ({ price }): JSX.Element => (
  <div className={styles.productPrice}>
    <p>${price}</p>
  </div>
);

export default ProductPrice;
