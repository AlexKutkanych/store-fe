import React, { useState, FC, JSX } from 'react';
import ProductInfoParameters from '../ProductInfoParameters';
import AddToCartButton from '../AddToCartButton';
import ProductPrice from '../ProductPrice';
import { Size, Color } from '@/types/types';
import styles from './index.module.scss';

interface ProductInfo {
  productId: string;
  productName: string;
  price?: number;
  sizes?: Size[];
  quantity: number;
  vendorCode?: number;
}

const ProductInfo: FC<ProductInfo> = ({
  productId,
  price,
  productName,
  sizes,
  quantity,
  vendorCode = 0,
}): JSX.Element => {
  const [selectedColor, setSelectedColor] = useState<Color>(Color.Black);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [error, setError] = useState<string | undefined>();
  // const existingProductQuantity =
  //   useAppSelector((state) => selectQuantityByProductId(state, productId)) ?? 0;

  const existingProductQuantity = 0;

  const changeParameters = (parameter: string, value: string): void => {
    switch (parameter) {
      case 'color':
        setSelectedColor(value as Color);
        setError('');
        break;
      case 'size':
        setSelectedSize(value as Size);
        setError('');
        break;
      default:
        break;
    }
  };

  const addToShoppingCart = (): void => {
    if (!selectedSize) {
      setError('Select size');
      return;
    }
    if (quantity - existingProductQuantity <= 0) {
      setError('No products left');
      return;
    }
    if (!price) {
      return;
    }

    setError('');

    // dispatch(
    //   shoppingCartActions.addItem({
    //     id: productId,
    //     price,
    //     title: productName,
    //     vendorCode,
    //     colour: selectedColor,
    //     size: selectedSize,
    //     count: quantity,
    //   })
    // );

    console.log('product:', {
      id: productId,
      price,
      title: productName,
      vendorCode,
      colour: selectedColor,
      size: selectedSize,
      count: quantity,
    });
  };

  return (
    <div className={styles.info}>
      <div className={styles.nameBox}>
        <span className={styles.productName}>{productName}</span>
        <div className={styles.shoppingCartWrapper}>
          <AddToCartButton onClick={addToShoppingCart} />
        </div>
      </div>
      {price ? <ProductPrice price={price} /> : null}
      <div className={styles.productInfoParametersWrapper}>
        <ProductInfoParameters
          changeParameters={changeParameters}
          error={error}
          sizes={sizes}
        />
      </div>
    </div>
  );
};

export default ProductInfo;
