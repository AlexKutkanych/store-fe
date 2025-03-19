import { useState, FC, JSX } from 'react';
import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import ProductInfoParameters from '../ProductInfoParameters';
import AddToCartButton from '../AddToCartButton';
import ProductPrice from '../ProductPrice';
import { useAppContext } from '../../context/AppContext';
import { Size, Color } from '../../types/types';
import { AddToCartBodyProps, AddToCartResponseProps } from '../../api/types';
import { addToCart } from '../../api/cart';
import { invokeCustomToast } from '../../utils/customToast';
import styles from './index.module.scss';

interface ProductInfo {
  productId: string;
  productName: string;
  price?: number;
  sizes?: Size[];
  quantity: number;
}

const ProductInfo: FC<ProductInfo> = ({
  productId,
  price,
  productName,
  sizes,
  quantity,
}): JSX.Element => {
  const [selectedColor, setSelectedColor] = useState<Color>(Color.Black);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [error, setError] = useState<string | undefined>();

  const { updateCart } = useAppContext();
  const handleSuccessAddToCart = (data: AddToCartResponseProps) => {
    invokeCustomToast(data?.message);

    updateCart(data?.cart);
  };

  const handleErrorAddToCart = (error: Error) => {
    if ((error as AxiosError).isAxiosError) {
      invokeCustomToast('Error adding to cart');
    }
  };

  const addToCartMutation = useMutation<
    AddToCartResponseProps,
    Error,
    AddToCartBodyProps
  >({
    mutationFn: addToCart,
    onSuccess: handleSuccessAddToCart,
    onError: handleErrorAddToCart,
  });

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

    addToCartMutation.mutate({
      productId,
      color: selectedColor,
      size: selectedSize,
      quantity: 1,
    });
  };

  return (
    <div className={styles.info}>
      <div className={styles.nameBox}>
        <span className={styles.productName}>{productName}</span>
        <div className={styles.shoppingCartWrapper}>
          <AddToCartButton id='product-card' onClick={addToShoppingCart} />
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
